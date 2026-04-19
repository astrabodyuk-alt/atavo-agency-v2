"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchStore } from "@/lib/searchStore";

export default function AuditForm() {
  const { businessType, timeline, budget, submitTrigger, cartMessage, setCartMessage } =
    useSearchStore();

  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (submitTrigger === 0) return;

    // Cart-based prefill takes precedence over pill-based prefill
    if (cartMessage) {
      setMessage(cartMessage);
      setCartMessage(null);
    } else {
      if (businessType) setBusiness(businessType);

      const lines = [
        businessType && `Business type: ${businessType}`,
        timeline && `Timeline: ${timeline}`,
        budget && `Budget: ${budget}`,
      ]
        .filter(Boolean)
        .join("\n");

      const prefilled = lines ? lines + "\n\nWhat I'd love to fix or build: " : "";
      if (prefilled) setMessage(prefilled);
    }

    // Focus textarea with cursor at end after scroll settles
    setTimeout(() => {
      const ta = messageRef.current;
      if (!ta) return;
      ta.focus();
      const len = ta.value.length;
      ta.setSelectionRange(len, len);
      ta.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 800);
  }, [submitTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/audit-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ business, website, message, timeline, budget }),
    });
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
          Tell us about your project
        </label>
        <textarea
          ref={messageRef}
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you want to improve, build or fix. The more specific the better."
          className="w-full border border-[#E4DACC] rounded-sm px-4 py-3 text-sm text-[#1F1A16] bg-[#F5F0E8] placeholder:text-[#8A7B6C]/50 focus:outline-none focus:border-[#C9A875] transition-colors resize-none min-h-[120px] md:min-h-[140px]"
        />
      </div>

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
