import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ChildProps } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const creteRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creteRound",
});

const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammadislom.uz/"),
  title: "Muhammadislom — articles about programming",
  description:
    "Muhammadislom offers a variety of insightful articles covering programming topics, ranging from fundamental concepts to advanced techniques. Explore practical tutorials, insightful discussions, and expert tips to enhance your programming skills.",
  authors: [
    { name: "Muhammadislom Hojimuhammedov", url: "https://www.muhammadislom.uz/" },
  ],
  icons: { icon: "/logo.jpg" },
  keywords:
    "Muhammadislom, programming articles, programming language hacks, programming language tricks, python hacks and tricks, javaScript hacks and tricks, java hacks and tricks, c++ hacks and tricks, web development tips, software engineering insights, coding tutorials and guides, frontend development techniques, backend development strategies, algorithm optimization tricks, data structure hacks, framework comparisons, debugging secrets, version control mastery, agile development methodologies, Tech industry insights, articles about programming, Muhammadislom articles",
  openGraph: {
    title: "Muhammadislom — articles about programming",
    description:
      "Muhammadislom offers a variety of insightful articles covering programming topics, ranging from fundamental concepts to advanced techniques. Explore practical tutorials, insightful discussions, and expert tips to enhance your programming skills",
    type: "website",
    url: "https://www.muhammadislom.uz/",
    locale: "en_EN",
    images: "/logo.jpg",
    countryName: "America",
    siteName: "Muhammadislom",
  },
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="blog-theme">
          <NextTopLoader
            color="#2299DD"
            crawlSpeed={200}
            showSpinner={false}
            height={3}
            easing="ease-in-out"
            speed={100}
            shadow="0"
            zIndex={1600}
          />
          <Analytics mode={"production"} />
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
        {/* <script
            defer
            data-domain="otabekdev-blog.vercel.app"
            src="https://plausible.io/js/script.js"></script> */}
      </body>
    </html>
  );
}

export default RootLayout;
