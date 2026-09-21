import React from "react";
import { Link } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WCard,
  WImagePlaceholder,
  WBadge,
  SectionTitle,
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
    <div className="flex h-full flex-col">
      <AppTopNav active="favorites" />
      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <SectionTitle>Your favorites</SectionTitle>
            <p className="mt-1 text-xs text-ink-500">4 saved cars · we'll flag price changes automatically</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {SAVED.map((item) => (
            <Link key={item.title} to="/buyer/listing/demo">
              <WCard padded={false} className="overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative">
                  <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="rounded-none border-0 border-b" />
                  <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow">
                    <IconPlaceholder size={14} className="rounded-full bg-ink-800 border-ink-800" />
                  </span>
                </div>
                <div className="p-3">
                  <p className="mb-1 text-sm font-semibold text-ink-900">{item.title}</p>
                  <p className="mb-1 text-base font-bold text-ink-900">{item.price}</p>
                  {item.note && <WBadge tone={item.tone ?? "outline"}>{item.note}</WBadge>}
                </div>
              </WCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
