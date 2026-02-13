import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  InferUITools,
  UIDataTypes,
  stepCountIs,
} from "ai";
import { google } from "@ai-sdk/google";
import { searchDocuments } from "@/lib/search";
import z from "zod";

const tools = {
  searchKnowledgeBase: tool({
    description: "Search the knowledge base for relevant information",
    inputSchema: z.object({
      query: z.string().describe("The search query to find relevant documents"),
    }),
    execute: async ({ query }) => {
      try {
        // Search the vector database
        const results = await searchDocuments(query, 3, 0.5);

        if (results.length === 0) {
          return "No relevant information found in the knowledge base.";
        }

        // Format results for the AI
        const formattedResults = results
          .map((r, i) => `[${i + 1}] ${r.content}`)
          .join("\n\n");

        return formattedResults;
      } catch (error) {
        console.error("Search error:", error);
        return "Error searching the knowledge base.";
      }
    },
  }),
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  try {
    const result = await streamText({
      model: google("gemini-2.5-flash"),
      messages: await convertToModelMessages(messages),
      tools,
      system:'You are a compassionate Cancer Advisor AI with access to a cancer information knowledge base. Always search the knowledge base before answering cancer-related questions and base your response strictly on the retrieved information. Provide clear, simple, and concise explanations without overwhelming the user. If relevant information is not found, say, “I don’t have enough information in the knowledge base to answer that.” Do not provide medical diagnoses or personalized treatment plans, and encourage users to consult a qualified healthcare professional for medical decisions. Maintain a calm, supportive tone at all times.',
      stopWhen: stepCountIs(2),  
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Failed to stream response", { status: 500 });
  }
}
