"use client";

import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { A } from "./ui/typography";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const hasAnimated = sessionStorage.getItem("navAnimated");

  const handleAnimationComplete = () => {
    sessionStorage.setItem("navAnimated", "true");
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-foreground/10 px-4 py-2 opacity-0 backdrop-blur-md md:px-8 md:py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: hasAnimated ? 0.5 : 1,
        ease: [0.215, 0.61, 0.355, 1],
        delay: hasAnimated ? 0 : 2,
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4">
        <span>
          <A href="/" className="flex items-center gap-2">
            <img
              src="/logo-512.png"
              className="size-5"
              alt="InboxQualify Logo"
            />
            InboxQualify
          </A>
        </span>

        <span className="hidden space-x-12 md:inline">
          <A href="/#features">Features</A>
        </span>

        <span className="hidden items-center gap-4 md:flex">
          <ModeToggle />
        </span>

        <span className="inline md:hidden">
          <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col items-center justify-around"
            >
              <SheetHeader>
                <SheetTitle className="flex flex-col items-center gap-2">
                  <Badge variant="secondary" className="w-fit">
                    Early Access
                  </Badge>
                  InboxQualify.
                </SheetTitle>
                <SheetDescription asChild></SheetDescription>
              </SheetHeader>

              <div className="flex flex-col items-center gap-8">
                <A href="/#features" onClick={handleClose}>
                  Features
                </A>
                <A href="/#pricing" onClick={handleClose}>
                  Pricing
                </A>
              </div>

              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </span>
      </nav>
    </motion.header>
  );
}
