import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Shadcn Card Example</title>
        <meta
          name="description"
          content="A page showcasing a shadcn/ui Card component"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-background ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Hello from Shadcn!</CardTitle>
            <CardDescription>This is a card component.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You can put any content you like in here.</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
