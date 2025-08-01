"use client";

import { P } from "@/components/ui/typography";
import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { MousePointerClickIcon } from "lucide-react";
import { stagger, useAnimate } from "motion/react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const description = "Your Cold Email Co-pilot";

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("heroAnimated");

    function intro() {
      animate(
        ".hyperreal-hero-bg",
        { opacity: [0, 1] },
        { duration: 1, delay: 1 }
      );
      animate(
        ".InboxQualify-hero",
        { opacity: [0, 1] },
        { duration: 1, ease: [0, 0, 0.2, 1], delay: 1.5 }
      );
      animate(
        ".InboxQualify-hero-title",
        { y: [15, 0], opacity: [0, 1] },
        { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: stagger(0.05) }
      );
      sessionStorage.setItem("heroAnimated", "true");
    }

    setTimeout(
      () => {
        if (hasAnimated === null) {
          intro();
        } else {
          // Immediately show elements without animation
          animate(".hyperreal-hero-bg", { opacity: 1 }, { duration: 1 });
          animate(".InboxQualify-hero", { opacity: 1 }, { duration: 1 });
          animate(
            ".InboxQualify-hero-title",
            { y: 0, opacity: 1 },
            { duration: 1 }
          );
        }
      },
      hasAnimated ? 0 : 2000
    );
  }, []);

  useEffect(() => {
    const element = dashboardRef.current;
    if (!element) return;

    // Set initial skew
    element.style.transform = "perspective(1000px) translateZ(0) skewY(3deg)";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const padding = 100;

      const x = Math.min(
        Math.max(e.clientX - (rect.left - padding), 0),
        rect.width + padding * 2
      );
      const y = Math.min(
        Math.max(e.clientY - (rect.top - padding), 0),
        rect.height + padding * 2
      );

      const xPercent = (x / (rect.width + padding * 2) - 0.5) * 2;
      const yPercent = (y / (rect.height + padding * 2) - 0.5) * 2;

      element.style.transform = `perspective(1000px) translateZ(0) rotateX(${
        yPercent * -3
      }deg) rotateY(${xPercent * 3}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "perspective(1000px) translateZ(0) skewY(3deg)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={scope}
      className="relative grid w-full place-items-center pb-8 md:pb-12 lg:pb-16"
    >
      <div className="mt-24 flex flex-col gap-8 text-center md:mt-32">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-8">
          <h1 className="font-display text-3xl font-light tracking-tighter text-foreground md:text-5xl xl:text-7xl">
            {description.split(" ").map((char, index) => (
              <span
                key={index}
                className="InboxQualify-hero-title inline-block whitespace-pre opacity-0"
              >
                {char + " "}
              </span>
            ))}
          </h1>
          <P className="InboxQualify-hero mx-auto max-w-screen-sm text-sm text-muted-foreground opacity-0 md:text-base">
            Optimize your cold emails for tone, sender health, and
            deliverability. Get more replies, guaranteed, with AI-powered
            insights before you hit send.
          </P>
        </div>

        <div className="InboxQualify-hero group flex flex-col items-center gap-8 opacity-0 md:mt-8">
          <Link
            href="/join"
            className="group flex items-center pb-4 md:overflow-hidden md:pb-10"
          >
            <RainbowButton className="w-auto overflow-x-clip text-sm font-semibold md:text-base">
              <MousePointerClickIcon className="mr-3 size-6 scale-x-[-1] transition-transform duration-200 group-hover:translate-x-1" />
              Join Waitlist
            </RainbowButton>
          </Link>
        </div>
      </div>

      <img
        className="hyperreal-hero-bg absolute top-0 -z-50 -translate-y-1/2 opacity-0 blur-3xl"
        src="/bg-gradient.png"
        width={1024}
        height={1024}
        alt="Gradient background"
        aria-hidden
      />

      <GridPattern
        squares={[
          [6, 3],
          [8, 8],
          [12, 10],
          [15, 3],
          [25, 10],
          [20, 5],
        ]}
        width={48}
        height={48}
        x={-1}
        y={-1}
        className={cn(
          "-z-50 hyperreal-hero-bg [mask-image:radial-gradient(circle_at_50%_0,white_0,transparent_50%)] skew-y-12 opacity-0"
        )}
      />
    </section>
  );
}
