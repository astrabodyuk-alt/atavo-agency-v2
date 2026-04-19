"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchStore } from "@/lib/searchStore";

export default function AuditForm() {
  const { businessType, timeline, budget, submitTrigger } = useSearchStore();

  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const businessRef = useRef<HTMLInputElement>(null);

  // When the header's Submit button fires, pre-fill fields from store values
  useEffect(() => {
    if (submitTrigger === 0) return;

    if (businessType) setBusiness(businessType);

    const parts = [
      businessType && `Business type: ${businessType}`,
      timeline && `Timeline: ${timeline}`,
      budget && `Budget: ${budget}`,
    ]
      .filter(Boolean)
      .join(" · ");

    if (parts) setMessage(parts + "\n\n");

    // Focus after scroll animation completes
    setTimeout(() => businessRef.current?.focus(), 800);
  }, [submitTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/audit-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ business, website, message, timeline, budget }),
    });
    // Reset
    setBusiness("");
    setWebsite("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-medium text-[#1F1A16] mb-2">
          What&apos;s your business?
        </label>
        <input
          ref={businessRef}
          type="text"
          name="business"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder="e.g. Maison Claire, beauty studio"
          className="w-full border border-[#E4DACC] rounded-sm px-4 py-3 text-sm text-[#1F1A16] bg-[#F5F0E8] placeholder:text-[#8A7B6C]/50 focus:outline-none focus:border-[#C9A875] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1F1A16] mb-2">
          Your website (if any)
        </label>
        <input
          type="url"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://..."
          className="w-full border border-[#E4DACC] rounded-sm px-4 py-3 text-sm text-[#1F1A16] bg-[#F5F0E8] placeholder:text-[#8A7B6C]/50 focus:outline-none focus:border-[#C9A875] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1F1A16] mb-2">
          What&apos;s the one thing you&apos;d fix if you could?
        </label>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-[#E4DACC] rounded-sm px-4 py-3 text-sm text-[#1F1A16] bg-[#F5F0E8] placeholder:text-[#8A7B6C]/50 focus:outline-none focus:border-[#C9A875] transition-colors resize-none"
        />
      </div>

      {/* Hidden fields so timeline + budget reach the backend */}
      <input type="hidden" name="timeline" value={timeline ?? ""} />
      <input type="hidden" name="budget" value={budget ?? ""} />

      <button
        type="submit"
        className="w-full bg-[#1F1A16] text-[#F5F0E8] rounded-sm py-3 text-sm font-medium hover:bg-[#1F1A16]/90 transition-colors"
      >
        Send my request
      </button>
      <p className="text-[#8A7B6C] text-xs text-center">
        We reply within 24h. Your details stay with us.
      </p>
    </form>
  );
}
