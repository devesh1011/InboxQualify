"use client";

import { Section } from "@/components/ui/layout";
import { H2, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  CloudUploadIcon,
  SaveAllIcon,
  ChartNoAxesCombinedIcon,
  EarthIcon,
  ScrollTextIcon,
  BrainCircuitIcon,
  CheckCircleIcon,
  ZapIcon,
  SmileIcon,
  BarChartIcon,
  WorkflowIcon,
  BellIcon,
} from "lucide-react";

export default function Features() {
  const Feature = ({ title, description, icon, index }) => {
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

  const features = [
    {
      title: "AI-Powered Tone Analysis",
      description:
        "Craft the perfect message. Our AI analyzes your email's tone, ensuring it's professional and persuasive to drive higher engagement.",
      icon: <SmileIcon />,
    },
    {
      title: "Spam Trigger Detection",
      description:
        "Bypass junk folders and land in the inbox. Instantly identify and eliminate words, phrases, or formatting that flag spam filters.",
      icon: <ZapIcon />,
    },
    {
      title: "Real-time Sender Health Check",
      description:
        "Protect your email reputation before you send. Get a predictive score on how your email impacts deliverability and sender health.",
      icon: <BarChartIcon />,
    },
    {
      title: "Personalization Level Scoring",
      description:
        "Make every email count. Our AI scores your personalization depth and provides suggestions to make your outreach more relevant and impactful.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Seamless Workflow Integration",
      description:
        "A Chrome Extension that lives in your inbox. Our tool integrates directly into your email compose window for instant feedback.",
      icon: <WorkflowIcon />,
    },
    {
      title: "Proactive Improvement Suggestions",
      description:
        "Go beyond basic checks. Get actionable, AI-driven recommendations to refine your message and optimize your cold outreach strategy.",
      icon: <BrainCircuitIcon />,
    },
  ];

  return (
    <Section>
      <div
        className="flex scroll-my-16 flex-col items-center gap-4 py-8 text-center lg:py-16"
        id="features"
      >
        {/* Updated H2 content */}
        <H2>Master your cold outreach, effortlessly.</H2>
        {/* Updated P content */}
        <P className="max-w-2xl text-muted-foreground">
          Refine your emails with AI-powered tone, spam, and personalization
          checks. Ensure deliverability and boost replies with intelligent
          insights.
        </P>
      </div>
      <div className="relative z-10 mx-auto grid grid-cols-1 py-4 md:grid-cols-2 md:py-8 lg:grid-cols-3 lg:py-16">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
}
