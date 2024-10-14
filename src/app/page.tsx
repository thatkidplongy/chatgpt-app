import { auth as getServerSession } from "@/auth";
import { Suspense } from "react";

import Chat from "@/app/components/Chat";
import PreviousChats from "@/app/components/PreviousChats";
import { Separator } from "@/components/ui/separator";
import Loading from "./components/Loading";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">AI Chat by Ran</h1>
      {!session?.user?.email && <div>You need to log in to use this chat.</div>}
      {session?.user?.email && (
        <>
          <Suspense fallback={<Loading />}>
            <PreviousChats />
          </Suspense>
          <h4 className="mt-5 text-2xl font-bold">New Chat Session</h4>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}
