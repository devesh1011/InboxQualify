"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/layout";
import { H2, P } from "@/components/ui/typography";
import { CheckCircleIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function JoinWaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }])
        .select();

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation
          setError("This email is already on the waitlist!");
        } else {
          setError("Something went wrong. Please try again.");
        }
        console.error("Error:", error);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section>
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md text-center space-y-6">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <H2>Thanks for joining!</H2>
            <P className="text-muted-foreground">
              You&apos;re now on the waitlist for InboxQualify.
            </P>
            <P className="text-muted-foreground">
              We&apos;ll notify you at <strong>{email}</strong> when we launch.
            </P>
            <Link href="/" className="inline-block">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MailIcon className="h-8 w-8 text-primary" />
          </div>
          <H2>Join the Waitlist</H2>
          <P className="text-muted-foreground">
            Be the first to know when InboxQualify launches and get early access
            to optimize your cold emails.
          </P>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              {error && (
                <P className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </P>
              )}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!email || isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
