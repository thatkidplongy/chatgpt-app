"use client"; // This ensures the component is treated as a Client Component

import { useSession } from "next-auth/react";

export default function SessionHandler() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading session...</p>; // You can handle a loading state here
  }

  if (!session) {
    return <p>You are not authenticated.</p>;
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}!</p>
      {/* Render your session-specific logic here */}
    </div>
  );
}
