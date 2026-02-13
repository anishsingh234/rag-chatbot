"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <main className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-10">
              {/* Status Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-md border border-gray-100">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-gray-700">AI Assistant Active</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-5 text-center lg:text-left">
                <h1 className="text-6xl font-bold leading-tight tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
                  HopeBridge
                </h1>
                <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              {/* Tagline */}
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold text-indigo-600 text-center lg:text-left sm:text-4xl leading-snug">
                  Your compassionate AI cancer information advisor.
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 text-center lg:text-left max-w-2xl">
                  Clear, reliable guidance based on trusted medical information. Ask questions, get answers, find support—anytime you need it.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-2">
                <button
                  onClick={() => router.push("/chat")}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
                >
                  <span>Start Conversation</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                    <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Verified Sources</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Preview Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">HopeBridge Assistant</div>
                      <div className="text-blue-100 text-sm">Always here to help</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-8 space-y-5 bg-gray-50/50">
                    {/* AI Message 1 */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="rounded-2xl rounded-tl-md bg-white px-5 py-4 shadow-sm border border-gray-100">
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">
                            Hello! I'm here to help answer your questions about cancer treatment, symptoms, and support resources.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="rounded-2xl rounded-tr-md bg-gray-100 px-5 py-4 max-w-[85%] border border-gray-200">
                          <p className="text-sm text-gray-800 font-medium">
                            What are the common side effects of chemotherapy?
                          </p>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 shadow-sm">
                        <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* AI Message 2 */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="rounded-2xl rounded-tl-md bg-white px-5 py-4 shadow-sm border border-gray-100">
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">
                            Common side effects include fatigue, nausea, hair loss, and increased infection risk...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Footer */}
                  <div className="px-8 pb-8">
                    <div className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 border border-blue-100">
                      <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-semibold text-indigo-700">
                        Powered by verified cancer information resources
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="mt-20 text-center">
            <div className="inline-block rounded-2xl bg-white/80 backdrop-blur-sm px-8 py-5 shadow-lg border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                This tool provides information for educational purposes only. Always consult with qualified healthcare professionals for medical advice.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}