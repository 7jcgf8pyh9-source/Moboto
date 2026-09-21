import React from "react";
import { Link } from "react-router-dom";
import { WCard, IconPlaceholder, AnnotationLabel } from "../../components/ui/primitives";

export default function Onboarding() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-ink-50 px-10">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-ink-900 text-lg font-bold text-white">
          M
        </span>
        <h1 className="text-2xl font-bold text-ink-900">Welcome to Moboto</h1>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          A car marketplace built around trust and a clean deal — for people buying, and people
          selling.
        </p>
      </div>

      <div className="grid w-full max-w-2xl grid-cols-2 gap-5">
        <Link to="/buyer/home">
          <WCard className="flex h-56 flex-col items-center justify-center gap-3 text-center transition-shadow hover:shadow-md hover:border-ink-500">
            <IconPlaceholder size={40} className="rounded-full" />
            <div>
              <p className="text-base font-semibold text-ink-900">I'm buying</p>
              <p className="mt-1 text-xs text-ink-500">Browse verified listings near you</p>
            </div>
            <AnnotationLabel>Continue as buyer →</AnnotationLabel>
          </WCard>
        </Link>
        <Link to="/signup">
          <WCard className="flex h-56 flex-col items-center justify-center gap-3 text-center transition-shadow hover:shadow-md hover:border-ink-500">
            <IconPlaceholder size={40} className="rounded-full" />
            <div>
              <p className="text-base font-semibold text-ink-900">I'm selling</p>
              <p className="mt-1 text-xs text-ink-500">List your car in minutes</p>
            </div>
            <AnnotationLabel>Continue as seller →</AnnotationLabel>
          </WCard>
        </Link>
      </div>

      <div className="mt-8 flex gap-4 text-xs text-ink-400">
        <Link to="/login" className="hover:text-ink-700 hover:underline">
          Already have an account? Log in
        </Link>
      </div>

      <div className="mt-4">
        <Link
          to="/buyer/home"
          className="rounded-sm border border-transparent px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
        >
          Skip — continue browsing as guest
        </Link>
      </div>
    </div>
  );
}
