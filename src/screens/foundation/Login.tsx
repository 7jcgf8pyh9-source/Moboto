import React from "react";
import { Link } from "react-router-dom";
import { PushScreen } from "../../components/app-chrome/ScreenShell";
import {
  WButton,
  WField,
  WInput,
  WDivider,
  AnnotationLabel,
} from "../../components/ui/primitives";

export default function Login() {
  return (
    <PushScreen title="Log in">
      <div className="mb-6 mt-2 text-center">
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-sm font-bold text-white">
          M
        </span>
        <p className="text-xs text-ink-500">Pick up where you left off.</p>
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
          <span className="text-ink-500">Forgot password?</span>
        </div>
        <WButton full size="lg" className="mt-1">
          Log in
        </WButton>
      </div>

      <div className="my-5 flex items-center gap-3">
        <WDivider />
        <AnnotationLabel>or</AnnotationLabel>
        <WDivider />
      </div>

      <div className="flex flex-col gap-2">
        <WButton variant="outline" full size="lg">
          Continue with Google
        </WButton>
        <WButton variant="outline" full size="lg">
          Continue with Apple
        </WButton>
      </div>

      <p className="mt-6 text-center text-xs text-ink-500">
        New to Moboto?{" "}
        <Link to="/signup" className="font-semibold text-ink-900">
          Sign up
        </Link>
      </p>
      <p className="mt-2 text-center text-xs">
        <Link to="/buyer/home" className="text-ink-400 underline underline-offset-2">
          Continue browsing as guest
        </Link>
      </p>
    </PushScreen>
  );
}
