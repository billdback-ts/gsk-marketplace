"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function TopNavBar() {
  return (
    <Navbar fluid rounded className="bg-orange">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="GSK Marketplace Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GSK Marketplace
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/search">Search</Navbar.Link>
        <Navbar.Link href="/liveboards">Liveboards</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
