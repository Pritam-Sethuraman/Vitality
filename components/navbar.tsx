"use client";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import User from "./user";

function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Vitality
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/sensors"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sensors
            </Link>
          </nav>

          <div className="ml-auto flex items-center space-x-4">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
