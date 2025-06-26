"use client";

import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between ">
        <Link
          href="/"
          className="text-xl font-bold text-primary tracking-tight"
        >
          Scrum<span className="text-indigo-500">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignUpButton mode="modal">
              <Button variant="outline" size="sm">
                🚀 Get Started
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;