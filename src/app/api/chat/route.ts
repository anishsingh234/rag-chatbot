import { streamText,UIMessage,convertToModelMessages } from "ai";

import { google } from '@ai-sdk/google';

export async function POST(req:Request){
    const {messages}:{messages:UIMessage[]}=await req.json();
    try{
        const result=await streamText({
            model:google('gemini-2.5-flash'),
            messages:await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse();
    }
    catch(error){
        console.error(error);
        return new Response('Failed to stream response',{status:500});
    }
}