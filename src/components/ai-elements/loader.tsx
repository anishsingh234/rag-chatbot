// src/components/ai-elements/loader.tsx
export function Loader() {
  return (
    <div className="flex items-start gap-3 mb-6">
      {/* Avatar */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Animated Message Bubble */}
      <div className="flex-1">
        <div className="inline-flex items-center gap-3 rounded-2xl rounded-tl-none bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 px-5 py-3 shadow-sm">
          {/* Animated Dots */}
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-bounce [animation-delay:-0.3s] shadow-sm"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-bounce [animation-delay:-0.15s] shadow-sm"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-bounce shadow-sm"></div>
          </div>
          
          {/* Text */}
          <span className="text-sm font-medium text-indigo-700">
            Thinking...
          </span>
        </div>
      </div>
    </div>
  );
}