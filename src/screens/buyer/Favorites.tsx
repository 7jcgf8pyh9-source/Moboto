import React from "react";
import { Link } from "react-router-dom";
import { TabScreen } from "../../components/app-chrome/ScreenShell";
import {
  WCard,
  WImagePlaceholder,
  WBadge,
  IconPlaceholder,
} from "../../components/ui/primitives";

interface SavedListing {
  title: string;
  price: string;
  note: string | null;
  tone?: "success" | "warning";
}

const SAVED: SavedListing[] = [
  { title: "2021 Honda Civic EX", price: "$19,400", note: "Price dropped $600", tone: "success" },
  { title: "2019 Toyota RAV4 XLE", price: "$22,900", note: null },
  { title: "2022 Mazda CX-5", price: "$26,750", note: "Seller lowered price", tone: "success" },
  { title: "2018 Subaru Outback", price: "$17,200", note: "No longer available", tone: "warning" },
];

export default function Favorites() {
  return (
    <TabScreen title="Favorites" active="favorites">
      <p className="mb-3 text-xs text-ink-500">4 saved cars · price changes flagged automatically</p>
      <div className="grid grid-cols-2 gap-3">
        {SAVED.map((item) => (
          <Link key={item.title} to="/buyer/listing/demo">
            <WCard padded={false} className="overflow-hidden">
              <div className="relative">
                <WImagePlaceholder label="CAR" ratio="4/3" className="rounded-none border-0 border-b" />
                <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                  <IconPlaceholder size={12} className="rounded-full bg-ink-800 border-ink-800" />
                </span>
              </div>
              <div className="p-2">
                <p className="mb-0.5 truncate text-xs font-semibold text-ink-900">{item.title}</p>
                <p className="mb-1 text-sm font-bold text-ink-900">{item.price}</p>
                {item.note && (
                  <WBadge tone={item.tone ?? "outline"} className="text-[9px]">
                    {item.note}
                  </WBadge>
                )}
              </div>
            </WCard>
          </Link>
        ))}
      </div>
    </TabScreen>
  );
}
