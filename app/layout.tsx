import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ViewModeProvider } from "@/lib/view-mode";

export const metadata: Metadata = {
  title: "superadmission",
  description:
    "The unified digital public infrastructure for Indian academic admissions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full bg-white text-[#111]"
        style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        <Suspense fallback={null}>
          <ViewModeProvider>
            {/* Outer Wrapper: Centers the entire two-column site horizontally on the screen */}
            <div className="min-h-screen bg-white flex justify-center w-full">
              <div className="w-full max-w-[960px] flex min-h-screen relative">
                {/* Left Sidebar: Sticky within the centered container */}
                <Sidebar />
                {/* Right Content Area: Adjacent to the sidebar within the centered container */}
                <main className="flex-1 min-h-screen border-l border-gray-200/80 px-8 sm:px-12 py-10 bg-white max-w-[700px]">
                  {children}
                </main>
              </div>
            </div>
          </ViewModeProvider>
        </Suspense>
      </body>
    </html>
  );
}
