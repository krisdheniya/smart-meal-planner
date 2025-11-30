// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Meal Planner - Personalized Healthy Meal Plans",
  description:
    "Get affordable, nutritious meals tailored to your goals, schedule, and budget.",
  generator: "v0.app",
  // you can add icons etc. here later
};

// 👇 This MUST be the default export and MUST return JSX
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
