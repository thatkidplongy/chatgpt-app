"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLinks = () => {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Chat",
      link: "/chats",
    },
  ];

  function checkIfMenuActive(route: string) {
    const isActive =
      pathname === route || (route === "/chats" && pathname.includes("/chats"));

    const activeClass =
      "before:content-[''] before:h-[3px] before:w-full before:bg-blue-900 before:absolute before:bottom-[8px] before:left-0 before:transition-all before:duration-300";

    return isActive
      ? `relative font-light hover:text-gray-400 ${activeClass}`
      : "relative font-light hover:text-gray-400";
  }

  return (
    <div className="flex flex-grow space-x-4 gap-x-4">
      {tabs.map((link) => (
        <span key={link.link} className={`${checkIfMenuActive(link.link)} p-4`}>
          <Link href={link.link} className="">
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default NavigationLinks;
