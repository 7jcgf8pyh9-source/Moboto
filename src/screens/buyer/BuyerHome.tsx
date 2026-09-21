import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppTopNav } from "../../components/app-chrome/AppTopNav";
import {
  WButton,
  WCard,
  WImagePlaceholder,
  WInput,
  WSelect,
  WBadge,
  WStars,
  AnnotationLabel,
  SectionTitle,
} from "../../components/ui/primitives";

const LISTINGS = [
  { title: "2021 Honda Civic EX", price: "$19,400", miles: "28,300 mi", loc: "Austin, TX", verified: true },
  { title: "2019 Toyota RAV4 XLE", price: "$22,900", miles: "41,120 mi", loc: "San Marcos, TX", verified: true },
  { title: "2022 Mazda CX-5", price: "$26,750", miles: "15,900 mi", loc: "Round Rock, TX", verified: false },
  { title: "2018 Subaru Outback", price: "$17,200", miles: "63,400 mi", loc: "Austin, TX", verified: true },
];

export default function BuyerHome() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <AppTopNav active="buy" />

      <div className="border-b border-ink-200 bg-ink-900 px-10 py-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-300">
          Find your next car
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/buyer/search");
          }}
          className="flex gap-2 rounded-sm bg-white p-2"
        >
          <WInput placeholder="Search make, model, or keyword…" className="flex-1 border-none" />
          <WSelect className="w-40 border-none">
            <option>Any price</option>
            <option>Under $15,000</option>
            <option>$15,000–$25,000</option>
            <option>$25,000+</option>
          </WSelect>
          <WSelect className="w-40 border-none">
            <option>Within 50 mi</option>
            <option>Within 100 mi</option>
            <option>Nationwide</option>
          </WSelect>
          <WButton type="submit">Search</WButton>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto bg-ink-50 px-10 py-8">
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <SectionTitle>Recommended for you</SectionTitle>
            <Link to="/buyer/search" className="text-xs font-medium text-ink-500 hover:text-ink-900">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {LISTINGS.map((listing) => (
              <Link key={listing.title} to="/buyer/listing/demo">
                <WCard padded={false} className="overflow-hidden transition-shadow hover:shadow-md">
                  <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="rounded-none border-0 border-b" />
                  <div className="p-3">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold leading-snug text-ink-900">{listing.title}</p>
                      {listing.verified && <WBadge tone="success">Verified</WBadge>}
                    </div>
                    <p className="mb-1 text-base font-bold text-ink-900">{listing.price}</p>
                    <p className="text-xs text-ink-500">
                      {listing.miles} · {listing.loc}
                    </p>
                  </div>
                </WCard>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <SectionTitle>Recently added near Austin, TX</SectionTitle>
            <AnnotationLabel>Updated hourly</AnnotationLabel>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {LISTINGS.slice()
              .reverse()
              .map((listing) => (
                <Link key={listing.title + "-r"} to="/buyer/listing/demo">
                  <WCard padded={false} className="overflow-hidden transition-shadow hover:shadow-md">
                    <WImagePlaceholder label="CAR PHOTO" ratio="4/3" className="rounded-none border-0 border-b" />
                    <div className="p-3">
                      <p className="mb-1 text-sm font-semibold leading-snug text-ink-900">{listing.title}</p>
                      <p className="mb-1 text-base font-bold text-ink-900">{listing.price}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-ink-500">{listing.miles}</p>
                        <WStars rating={4} />
                      </div>
                    </div>
                  </WCard>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
