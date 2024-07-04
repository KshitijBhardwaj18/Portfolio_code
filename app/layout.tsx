import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


const poppins = Poppins({ weight: "400",  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kshitij Bhardwaj",
  description: "Jay Shree Ram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className,)}><ThemeProvider attribute="class"
            defaultTheme="dark"
           
            disableTransitionOnChange >{children}</ThemeProvider></body>
    </html>
  );
}
