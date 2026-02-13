import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Upload } from "lucide-react";

export const Navigation = async () => {
  const user = await currentUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30">
              <svg
                className="h-7 w-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V12M12 12V20M12 12H20M12 12H4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                HopeBridge
              </span>
              <span className="text-xs text-gray-500 hidden sm:block font-medium">
                AI Cancer Information Advisor
              </span>
            </div>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {isAdmin && (
            <Link href="/upload">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all mr-2"
                size="lg"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload PDF
              </Button>
            </Link>
          )}

          <SignedOut>
            <SignInButton mode="modal">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all"
                size="lg"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 font-medium transition-all hover:shadow-xl hover:shadow-blue-500/40"
                size="lg"
              >
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          
          <SignedIn>
            <SignOutButton>
              <Button 
                variant="outline" 
                className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium transition-all"
                size="lg"
              >
                Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};