"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Clients", href: "/clients" },
];

const upcomingPages = ["Projects", "Tasks", "Settings"];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full bg-slate-900 p-6 text-white md:w-64 md:shrink-0">
      <h2 className="text-2xl font-bold">
        ClientFlow
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Your freelance workspace
      </p>

      <nav aria-label="Main navigation" className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-lg px-4 py-3 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          {upcomingPages.map((name) => (
            <li
              key={name}
              className="rounded-lg px-4 py-3 text-slate-400"
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}