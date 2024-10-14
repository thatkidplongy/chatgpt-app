import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

import { auth } from "@/auth";

import Header from "./components/Header";
import ProgressBarProvider from "./components/ProgressBarProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS ChatGPT App",
  description: "ChatGPT brought to you by NextJS",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
  chats,
}: Readonly<{
  children: React.ReactNode;
  chats: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider basePath="/api/auth" session={session}>
      <html lang="en">
        <body className={`${inter.className} p-2 md:p-5`}>
          <ProgressBarProvider>
            <Header />
            <div className="flex flex-col md:flex-row">
              {chats}
              <div className="flex-grow">{children}</div>
            </div>
          </ProgressBarProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
