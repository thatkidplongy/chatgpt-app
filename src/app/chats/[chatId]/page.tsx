import { auth as getServerSession } from "@/auth";
import { notFound, redirect } from "next/navigation";

import Chat from "@/app/components/Chat";

import { getChat } from "@/db";

export const dynamic = "force-dynamic";

export default async function ChatDetail({
  params: { chatId },
}: {
  params: { chatId: string };
}) {
  const chat = await getChat(+chatId);
  if (!chat) {
    return notFound();
  }

  const session = await getServerSession();
  if (chat?.name !== session?.user?.name) {
    return redirect("/");
  }

  return (
    <main className="pt-5">
      <Chat id={+chatId} messages={chat?.messages || []} key={chatId} />
    </main>
  );
}
