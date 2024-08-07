"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2 } from "lucide-react";
import { useState } from "react";

function Footer() {
  const [active, setActive] = useState(false);
  return (
    <footer className="flex flex-col items-center py-24 container max-w-2xl space-y-12">
      <h1 className="text-5xl max-md:text-3xl font-creteRound text-center">
        Get lates post deliveried right to your inbox!
      </h1>
      <div className="grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full">
        <Input
          className="w-full col-span-2"
          placeholder="Enter your email address"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Button
          size={"lg"}
          variant={active ? "default" : "outline"}
          className="max-md:mt-2">
          <User2 />
          <span>Join today</span>
        </Button>
      </div>
      <h2 className="text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors">
        <a href="tel:+998990027391">+998 99 002 73 91</a>
      </h2>
    </footer>
  );
}

export default Footer;
