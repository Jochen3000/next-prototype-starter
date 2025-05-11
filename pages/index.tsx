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
import { Box, Palette, Component, Smile, Frown, Lightbulb } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cardData = [
  {
    id: "nextjs",
    title: "Next.js",
    subtitle: "The React Framework",
    icon: Box,
    iconBgColor: "bg-orange-500 dark:bg-orange-600",
    points: [
      "Server-side rendering and static site generation for optimal performance.",
      "Built-in routing, image optimization, and internationalization.",
      "Excellent developer experience with fast refresh and intuitive file-system routing.",
      "Seamless integration with Vercel for easy deployment.",
    ],
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    subtitle: "Utility-First CSS",
    icon: Palette,
    iconBgColor: "bg-orange-500 dark:bg-orange-600",
    points: [
      "Rapidly build custom designs without writing custom CSS.",
      "Responsive design utilities for easy adaptation to all screen sizes.",
      "Highly customizable through a `tailwind.config.js` file.",
      "Optimized for performance by purging unused styles in production.",
    ],
  },
  {
    id: "shadcn",
    title: "Shadcn/UI",
    subtitle: "Accessible Components",
    icon: Component,
    iconBgColor: "bg-orange-500 dark:bg-orange-600",
    points: [
      "Beautifully designed components that you can copy and paste into your apps.",
      "Built using Radix UI primitives and Tailwind CSS for maximum flexibility.",
      "Full accessibility (ARIA) support out of the box.",
      "Easy to customize and integrate into your existing design system.",
    ],
  },
];

export default function Home() {
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
        className={`min-h-screen flex flex-col items-center justify-center bg-background text-foreground ${geistSans.variable} ${geistMono.variable} font-sans p-8`}
      >
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-orange-600 dark:text-orange-300">
            PoDojo Prototyping Starter Pack
          </h1>
          <p className="text-xl mb-8 text-stone-700 dark:text-stone-100">
            Discover amazing things and join our community. We are excited to
            have you here.
          </p>
        </section>

        {/* Customer Profile Section */}
        <section className="w-full max-w-5xl mt-8 mb-4">
          <h2 className="text-3xl font-semibold mb-4 text-stone-800 dark:text-stone-100 text-left">
            Starter Pack Features
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-100 text-left">
            This starter pack comes fully equipped with Next.js for powerful
            React applications, Tailwind CSS for utility-first styling, and
            Shadcn/UI for beautifully designed, accessible components.
          </p>
        </section>

        {/* Grid of Cards - Updated */}
        <section className="w-full max-w-5xl grid md:grid-cols-3 gap-8 mb-8">
          {cardData.map((item) => (
            <Card
              key={item.id}
              className="bg-stone-50 dark:bg-stone-700 shadow-lg rounded-lg flex flex-col"
            >
              <CardHeader className="flex flex-row items-start space-x-4 p-6">
                <div
                  className={`p-3 rounded-full text-white ${item.iconBgColor} mt-1`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold text-stone-800 dark:text-stone-100">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-stone-600 dark:text-stone-200 mt-1">
                    {item.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                {item.points.map((point, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-sm text-stone-700 dark:text-stone-100 ${
                      pIndex < item.points.length - 1
                        ? "pb-3 mb-3 border-b border-stone-200 dark:border-stone-600"
                        : ""
                    }`}
                  >
                    {point}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="w-full max-w-4xl text-center mt-8 mb-4">
          <p className="text-xl font-semibold text-orange-600 dark:text-orange-400 flex items-center justify-center">
            <Lightbulb className="h-6 w-6 mr-3" />
            Get started by editing this page!
          </p>
        </section>

        {/* Existing Card (optional, you might want to remove or integrate it) */}
        {/* <Card className="w-[350px] mt-16">
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
        </Card> */}
      </div>
    </>
  );
}
