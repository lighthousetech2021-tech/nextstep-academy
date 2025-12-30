import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextStep Learning Academy | Chinese Classes & Translation (Butwal, Nepal)",
  description:
    "NextStep Learning Academy offers online & offline Chinese classes in Butwal, Nepal. Live classes via Zoom and Google Meet. Chinese to English, Hindi, and Nepali translation services available. Enroll via WhatsApp +9779848961392.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ NAVBAR START (Added in layout so it shows everywhere) */}
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">NextStep</div>
                <div className="text-xs text-slate-500">Learning Academy</div>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
              <a href="#courses" className="hover:text-slate-900">Courses</a>
              <a href="#teachers" className="hover:text-slate-900">Teachers</a>
              <a href="#translation" className="hover:text-slate-900">Translation</a>
              <a href="#payments" className="hover:text-slate-900">Payments</a>

              {/* ✅ THIS IS WHERE "BOOK CLASS" LINK IS ADDED */}
              <a href="#book" className="hover:text-slate-900 font-semibold">
                Book Class
              </a>

              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>

            {/* Right button (optional) */}
            <a
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              href="#book"
            >
              Book Now
            </a>
          </div>
        </header>
        {/* ✅ NAVBAR END */}

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
