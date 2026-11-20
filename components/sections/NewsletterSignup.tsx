"use client";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });
    if (res.ok) {
      setStatus("done");
    } else {
      const d = await res.json();
      setError(d.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-5">
        <CheckCircle2 size={24} className="text-brand-pink shrink-0" />
        <p className="text-white font-semibold">
          You're in! Welcome to the Dream Clean Shine family. 🎉
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your first name"
        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-pink"
      />
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-pink"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-12 h-12 rounded-xl bg-brand-pink flex items-center justify-center shrink-0 hover:bg-[#d4206f] transition-colors disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === "loading"
            ? <Loader2 size={16} className="animate-spin text-white" />
            : <Send size={16} className="text-white" />}
        </button>
      </div>
      {status === "error" && <p className="text-xs text-red-400">{error}</p>}
      <p className="text-xs text-white/30">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
