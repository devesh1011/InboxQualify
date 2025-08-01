"use client";

import { Loader2Icon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Splash() {
  const [isLoading, setIsLoading] = useState(true);
  const heroAnimated = sessionStorage.getItem("heroAnimated");

  useEffect(() => {
    if (heroAnimated) {
      setIsLoading(false);
      return;
    }

    const splashTimeout = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    splashTimeout();
  }, []);

  if (!isLoading) return null;

  return (
    <div className="absolute z-50 mx-auto flex h-screen w-full items-center justify-center gap-2 bg-background">
      <div className="flex items-center gap-4 text-foreground/80">
        <span className="relative block">
          <img
            src="/logo-192.png"
            width={18}
            height={18}
            alt="InboxQualify Logo"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader2Icon strokeWidth={2} className="size-10 animate-spin" />
          </span>
        </span>
        <h1 className="text-4xl font-medium tracking-tighter">InboxQualify</h1>
      </div>
    </div>
  );
}
