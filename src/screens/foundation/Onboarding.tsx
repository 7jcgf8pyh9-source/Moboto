import React from "react";
import { Link } from "react-router-dom";
import { WCard, IconPlaceholder, AnnotationLabel } from "../../components/ui/primitives";

export default function Onboarding() {
  return (
    <div className="flex h-full flex-col justify-between bg-white px-6 py-8">
      <div className="flex flex-col items-center pt-6 text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-lg font-bold text-white">
          M
        </span>
        <h1 className="text-2xl font-bold text-ink-900">Welcome to Moboto</h1>
        <p className="mt-2 text-sm text-ink-500">
          A car marketplace built around trust and a clean deal.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link to="/buyer/home">
          <WCard className="flex items-center gap-4 transition-shadow active:shadow-inner">
            <IconPlaceholder size={44} className="shrink-0 rounded-full" />
            <div className="flex-1">
              <p className="text-base font-semibold text-ink-900">I'm buying</p>
              <p className="mt-0.5 text-xs text-ink-500">Browse verified listings near you</p>
            </div>
            <AnnotationLabel className="text-ink-400">→</AnnotationLabel>
          </WCard>
        </Link>
        <Link to="/signup">
          <WCard className="flex items-center gap-4 transition-shadow active:shadow-inner">
            <IconPlaceholder size={44} className="shrink-0 rounded-full" />
            <div className="flex-1">
              <p className="text-base font-semibold text-ink-900">I'm selling</p>
              <p className="mt-0.5 text-xs text-ink-500">List your car in minutes</p>
            </div>
            <AnnotationLabel className="text-ink-400">→</AnnotationLabel>
          </WCard>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3 pb-2">
        <Link to="/login" className="text-xs text-ink-500">
          Already have an account? <span className="font-semibold text-ink-900">Log in</span>
        </Link>
        <Link to="/buyer/home" className="text-xs text-ink-400 underline underline-offset-2">
          Skip — continue browsing as guest
        </Link>
      </div>
    </div>
  );
}
