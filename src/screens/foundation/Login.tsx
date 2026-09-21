import React from "react";
import { Link } from "react-router-dom";
import {
  WButton,
  WCard,
  WField,
  WInput,
  WDivider,
  AnnotationLabel,
} from "../../components/ui/primitives";

export default function Login() {
  return (
    <div className="flex h-full items-center justify-center bg-ink-50 px-10">
      <WCard className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink-900 text-sm font-bold text-white">
            M
          </span>
          <h1 className="text-lg font-bold text-ink-900">Log in to Moboto</h1>
          <p className="mt-1 text-xs text-ink-500">Pick up where you left off.</p>
        </div>

        <div className="flex flex-col gap-3">
          <WField label="Email">
            <WInput type="email" placeholder="you@example.com" />
          </WField>
          <WField label="Password">
            <WInput type="password" placeholder="••••••••" />
          </WField>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-1.5 text-ink-500">
              <input type="checkbox" className="h-3.5 w-3.5 rounded-sm border-ink-400" />
              Remember me
            </label>
            <span className="text-ink-500 hover:text-ink-800">Forgot password?</span>
          </div>
          <WButton full className="mt-1">
            Log in
          </WButton>
        </div>

        <div className="my-5 flex items-center gap-3">
          <WDivider />
          <AnnotationLabel>or</AnnotationLabel>
          <WDivider />
        </div>

        <div className="flex flex-col gap-2">
          <WButton variant="outline" full>
            Continue with Google
          </WButton>
          <WButton variant="outline" full>
            Continue with Apple
          </WButton>
        </div>

        <p className="mt-6 text-center text-xs text-ink-500">
          New to Moboto?{" "}
          <Link to="/signup" className="font-medium text-ink-900 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="mt-2 text-center text-xs">
          <Link to="/buyer/home" className="text-ink-400 hover:text-ink-700 hover:underline">
            Continue browsing as guest
          </Link>
        </p>
      </WCard>
    </div>
  );
}
