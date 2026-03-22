'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="text-2xl text-accent"
        aria-label="Toggle mobile menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 min-w-44 rounded-lg border border-white/20 bg-primary p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={pathname === link.path ? "text-accent" : "text-white"}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;