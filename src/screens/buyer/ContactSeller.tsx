import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WField,
  WTextarea,
  WImagePlaceholder,
  WAvatar,
  AnnotationLabel,
  cx,
} from "../../components/ui/primitives";

const QUICK_QUESTIONS = [
  "Is this still available?",
  "Would you consider a trade-in?",
  "Any mechanical issues to know about?",
  "Can I see the vehicle history report?",
];

export default function ContactSeller() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    "Hi, I'm interested in your 2021 Honda Civic EX. Is it still available?",
  );
  const [selected, setSelected] = useState<string[]>([]);

  function toggleChip(q: string) {
    setSelected((prev) => (prev.includes(q) ? prev.filter((x) => x !== q) : [...prev, q]));
  }

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-10">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          <WCard className="col-span-1 h-fit">
            <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="mb-3" />
            <p className="text-sm font-semibold text-ink-900">2021 Honda Civic EX</p>
            <p className="text-lg font-bold text-ink-900">$19,400</p>
            <p className="text-xs text-ink-500">Austin, TX</p>
          </WCard>

          <WCard className="col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <WAvatar initials="MJ" size={40} />
              <div>
                <p className="text-sm font-semibold text-ink-900">Message Morgan J.</p>
                <p className="text-xs text-ink-500">Typically responds within ~2 hours</p>
              </div>
            </div>

            <AnnotationLabel className="mb-2 block">Quick questions</AnnotationLabel>
            <div className="mb-4 flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => toggleChip(q)}
                  className={cx(
                    "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    selected.includes(q)
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-300 text-ink-600 hover:border-ink-500",
                  )}
                >
                  {q}
                </button>
              ))}
            </div>

            <WField label="Your message">
              <WTextarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
            </WField>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[11px] text-ink-400">
                Your contact info is shared only after the seller replies.
              </p>
              <WButton onClick={() => navigate("/buyer/dashboard")}>Send message</WButton>
            </div>
          </WCard>
        </div>
      </div>
    </div>
  );
}
