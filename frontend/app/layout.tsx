import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { RetroGridBackground } from "@/components/ui/retro-grid-background";

export const metadata = {
  title: "Sakshya | Integrated Digital Forensics & Sanitization Platform",
  description: "Legally compliant digital forensics and media sanitization workspace under BSA 2023 Sec 63(4) and NIST SP 800-88 Rev. 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sakshya_theme");if(t==="light"){document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="relative bg-obsidian-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased">
        <RetroGridBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
