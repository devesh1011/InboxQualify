"use client";

import { Section } from "@/components/ui/layout";
import { H2, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  XCircle,
  MailWarning,
  ThumbsDown,
  Clock,
  MessageSquareOff,
  UserX,
} from "lucide-react"; // Icons for pain points

export default function PainPoints() {
  const PainPoint = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-4 md:py-8 lg:py-16 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
          index < 3 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 3 && (
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-200/50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800/30" />
        )}
        {index >= 3 && (
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-200/50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800/30" />
        )}
        <div className="relative z-10 mb-3 px-8 text-muted-foreground md:mb-4">
          {icon}
        </div>
        <div className="relative z-10 mb-3 px-8 text-lg font-medium text-foreground md:mb-4">
          <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-violet-500 dark:bg-neutral-700" />
          <h3 className="font-display inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
            {title}
          </h3>
        </div>
        <p className="relative z-10 px-8 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    );
  };

  const painPoints = [
    {
      title: "Emails land in spam or promotions.",
      description:
        "Your carefully crafted messages are getting filtered out before they even reach the primary inbox.",
      icon: <MailWarning size={28} className="text-red-400" />,
    },
    {
      title: "Low open and reply rates.",
      description:
        "Despite your efforts, prospects aren't engaging with your cold emails, leading to missed opportunities.",
      icon: <ThumbsDown size={28} className="text-orange-400" />,
    },
    {
      title: "Unsure about email quality.",
      description:
        "You're guessing whether your email tone, personalization, or content is actually effective.",
      icon: <XCircle size={28} className="text-yellow-400" />,
    },
    {
      title: "Wasting time on ineffective outreach.",
      description:
        "Hours spent writing emails that yield no results. Your time is valuable, and so is your outreach.",
      icon: <Clock size={28} className="text-blue-400" />,
    },
    {
      title: "Fear of damaging sender reputation.",
      description:
        "Worried that a few bad emails could hurt your domain's ability to deliver future messages.",
      icon: <UserX size={28} className="text-purple-400" />,
    },
    {
      title: "Struggling with personalization.",
      description:
        "It's hard to make every cold email feel unique and relevant at scale, leading to generic messages.",
      icon: <MessageSquareOff size={28} className="text-green-400" />,
    },
  ];

  return (
    <Section>
      <div
        className="flex scroll-my-16 flex-col items-center gap-4 py-8 text-center lg:py-16"
        id="features"
      >
        <H2>Are Your Cold Emails Falling Flat?</H2>
        <P className="max-w-2xl text-muted-foreground">
          We understand the frustration. Ineffective cold outreach wastes time
          and misses opportunities.
        </P>
      </div>
      <div className="relative z-10 mx-auto grid grid-cols-1 py-4 md:grid-cols-2 md:py-8 lg:grid-cols-3 lg:py-16">
        {painPoints.map((feature, index) => (
          <PainPoint key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
}
