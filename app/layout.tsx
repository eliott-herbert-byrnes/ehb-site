import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/features/sidebar/sidebar";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EHB",
  description: "Welcome to the EHB website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${albertSans.variable} antialiased p-4`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-row gap-4">
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
