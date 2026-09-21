import React, { useMemo, useState } from "react";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WCard,
  WBadge,
  WField,
  WSelect,
  AnnotationLabel,
  WDivider,
} from "../../components/ui/primitives";

export default function Financing() {
  const price = 19400;
  const [down, setDown] = useState(3000);
  const [term, setTerm] = useState(60);
  const [credit, setCredit] = useState("good");

  const rate = credit === "excellent" ? 0.049 : credit === "good" ? 0.069 : 0.099;
  const monthly = useMemo(() => {
    const principal = price - down;
    const monthlyRate = rate / 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return Math.round(payment);
  }, [down, term, rate]);

  return (
    <PushScreen
      title="Financing calculator"
      footer={
        <>
          <WButton full size="lg">Apply for pre-qualification</WButton>
          <p className="mt-1.5 text-center text-[10px] text-ink-400">Soft check — won't affect your credit score</p>
        </>
      }
    >
      <div className="mb-1">
        <WBadge tone="r3">Release 3</WBadge>
      </div>
      <p className="mb-4 mt-2 text-xs text-ink-500">
        2021 Honda Civic EX · $19,400 — estimate only, not a loan offer.
      </p>

      <WCard className="mb-4 flex flex-col items-center py-6 text-center">
        <AnnotationLabel>Estimated monthly payment</AnnotationLabel>
        <p className="my-2 text-4xl font-bold text-ink-900">${monthly}</p>
        <p className="text-xs text-ink-500">at ~{(rate * 100).toFixed(1)}% APR</p>
      </WCard>

      <WCard>
        <WField label={`Down payment — $${down.toLocaleString()}`}>
          <input
            type="range"
            min={0}
            max={10000}
            step={500}
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            className="w-full accent-ink-900"
          />
        </WField>

        <WDivider className="my-4" />

        <WField label="Loan term">
          <WSelect value={term} onChange={(e) => setTerm(Number(e.target.value))}>
            <option value={36}>36 months</option>
            <option value={48}>48 months</option>
            <option value={60}>60 months</option>
            <option value={72}>72 months</option>
          </WSelect>
        </WField>

        <div className="mt-4">
          <WField label="Estimated credit tier">
            <WSelect value={credit} onChange={(e) => setCredit(e.target.value)}>
              <option value="excellent">Excellent (720+)</option>
              <option value="good">Good (660–719)</option>
              <option value="fair">Fair (600–659)</option>
            </WSelect>
          </WField>
        </div>
      </WCard>
    </PushScreen>
  );
}
