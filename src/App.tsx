import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { SCREENS } from "./data/screens";

export default function App() {
  return (
    <AppShell>
      <Routes>
        {SCREENS.map((screen) => {
          const Component = screen.component;
          return <Route key={screen.id} path={screen.path} element={<Component />} />;
        })}
      </Routes>
    </AppShell>
  );
}
