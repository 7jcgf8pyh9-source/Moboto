import type { ComponentType } from "react";
import type { Release } from "../context/ReleaseContext";

import Onboarding from "../screens/foundation/Onboarding";
import Login from "../screens/foundation/Login";
import Signup from "../screens/foundation/Signup";
import ProfileSettings from "../screens/foundation/ProfileSettings";

import BuyerHome from "../screens/buyer/BuyerHome";
import SearchResults from "../screens/buyer/SearchResults";
import ListingDetail from "../screens/buyer/ListingDetail";
import ContactSeller from "../screens/buyer/ContactSeller";
import Favorites from "../screens/buyer/Favorites";
import BuyerDashboard from "../screens/buyer/BuyerDashboard";
import MakeOffer from "../screens/buyer/MakeOffer";
import SavedSearchAlerts from "../screens/buyer/SavedSearchAlerts";
import ScheduleTestDrive from "../screens/buyer/ScheduleTestDrive";
import Financing from "../screens/buyer/Financing";
import Checkout from "../screens/buyer/Checkout";

import CreateListingDetails from "../screens/seller/CreateListingDetails";
import CreateListingPhotos from "../screens/seller/CreateListingPhotos";
import CreateListingPricing from "../screens/seller/CreateListingPricing";
import ReviewPublish from "../screens/seller/ReviewPublish";
import SellerDashboard from "../screens/seller/SellerDashboard";
import ManageOffers from "../screens/seller/ManageOffers";
import ListingInsights from "../screens/seller/ListingInsights";

import Messaging from "../screens/shared/Messaging";
import Notifications from "../screens/shared/Notifications";
import AdminModeration from "../screens/shared/AdminModeration";

export type ScreenGroup = "foundation" | "buyer" | "seller" | "shared";

export interface ScreenDefinition {
  id: string;
  title: string;
  path: string;
  release: Release;
  group: ScreenGroup;
  flowLabel: string;
  purpose: string;
  keyDecisions: string[];
  flowNote?: string;
  component: ComponentType;
}

export const GROUP_LABELS: Record<ScreenGroup, string> = {
  foundation: "Foundation",
  buyer: "Buyer journey",
  seller: "Seller journey",
  shared: "Shared / cross-cutting",
};

export const SCREENS: ScreenDefinition[] = [
  // ---------- Foundation (MVP) ----------
  {
    id: "onboarding",
    title: "Role Selection",
    path: "/",
    release: "mvp",
    group: "foundation",
    flowLabel: "Foundation · Entry point",
    purpose:
      "First screen anyone sees. Asks a single question — are you here to buy or to sell — so every screen that follows can be tailored instead of generic.",
    keyDecisions: [
      "Two large, equal-weight choices instead of a generic landing page: reduces decision fatigue and gets users to value in one tap.",
      "No forced signup before browsing — buyers can explore listings as guests; sellers are prompted to sign up only once they commit to listing a car.",
    ],
    flowNote: "Leads to Buyer Home or Seller Dashboard (via Signup if not authenticated).",
    component: Onboarding,
  },
  {
    id: "login",
    title: "Log In",
    path: "/login",
    release: "mvp",
    group: "foundation",
    flowLabel: "Foundation · Auth",
    purpose:
      "Lightweight re-entry for returning users. Kept to a single card, single decision, to avoid friction on a step that carries zero product value on its own.",
    keyDecisions: [
      "Email + password only for the prototype; social auth shown as secondary options to reflect the real product's reduced-friction intent.",
      "Persistent 'Continue browsing as guest' link — never trap a buyer who just wants to look at cars.",
    ],
    component: Login,
  },
  {
    id: "signup",
    title: "Sign Up",
    path: "/signup",
    release: "mvp",
    group: "foundation",
    flowLabel: "Foundation · Auth",
    purpose:
      "Converts an anonymous browser or seller-intent visitor into an account. Split by role so the fields asked stay minimal and relevant.",
    keyDecisions: [
      "Role is pre-filled from the onboarding choice, not asked again — no redundant questions.",
      "Seller signup mentions verification up front, setting expectations that trust checks come later without blocking the signup itself.",
    ],
    component: Signup,
  },
  {
    id: "profile-settings",
    title: "Profile & Settings",
    path: "/profile",
    release: "mvp",
    group: "foundation",
    flowLabel: "Foundation · Account",
    purpose:
      "Single place to manage identity, verification status and notification preferences — shared shell for both buyer and seller accounts.",
    keyDecisions: [
      "Verification status is surfaced prominently since trust is the core value proposition of the marketplace.",
      "Buyer and seller settings live in one screen with tabs rather than two disconnected pages — most users will do both eventually.",
    ],
    component: ProfileSettings,
  },

  // ---------- Buyer journey ----------
  {
    id: "buyer-home",
    title: "Home / Browse",
    path: "/buyer/home",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Discover",
    purpose:
      "Primary discovery surface. Leads with a strong search bar and curated rows (recommended, near you, recently added) so buyers find relevant cars fast without needing to know exactly what to search for.",
    keyDecisions: [
      "Search bar is the visual anchor above the fold — this is a search-first marketplace, not a content feed.",
      "Every listing card shows price, key specs and a trust signal (verified badge) at a glance, so comparing cars doesn't require opening each one.",
    ],
    flowNote: "Search bar → Search Results. Listing card → Listing Detail.",
    component: BuyerHome,
  },
  {
    id: "search-results",
    title: "Search Results",
    path: "/buyer/search",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Discover",
    purpose:
      "Lets buyers narrow a large inventory down to a shortlist using filters that match how people actually shop for cars (budget, body type, mileage, distance) rather than generic e-commerce filters.",
    keyDecisions: [
      "Filters open in a bottom sheet triggered by a filter button, not a separate screen — keeps results visible underneath and refining feels reversible.",
      "Result count updates contextually in the header so users always know how narrow/broad their search is before opening a listing.",
    ],
    flowNote: "Listing card → Listing Detail. Save search icon → Saved Search Alerts (R2).",
    component: SearchResults,
  },
  {
    id: "listing-detail",
    title: "Listing Detail",
    path: "/buyer/listing/demo",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Evaluate",
    purpose:
      "The moment of truth: everything a buyer needs to decide whether to engage with a seller lives here — photos, specs, history, price context and seller trust signals.",
    keyDecisions: [
      "Contact/inquiry action is pinned as a full-width bar at the bottom of the screen — the thumb zone — so the highest-value action is always one tap away, never buried by scrolling.",
      "Seller trust block (verified, rating, response time) sits next to the price, not buried below — trust and price are the two things buyers weigh together.",
    ],
    flowNote: "Contact Seller CTA → Contact Seller. Save icon → Favorites.",
    component: ListingDetail,
  },
  {
    id: "contact-seller",
    title: "Contact Seller",
    path: "/buyer/contact",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Engage",
    purpose:
      "Low-friction first contact. A short structured form beats an open chat for a first message — it prompts buyers with the questions sellers actually need answered (financing, trade-in, timing).",
    keyDecisions: [
      "Pre-filled quick-question chips ('Still available?', 'Would you consider trade-ins?') reduce the blank-page problem and speed up first contact.",
      "Sets expectation on response time upfront, borrowed from the seller's real profile stats, reinforcing trust at the point of commitment.",
    ],
    flowNote: "Submit → Buyer Dashboard (inquiry created) or Messaging thread in R2.",
    component: ContactSeller,
  },
  {
    id: "favorites",
    title: "Favorites",
    path: "/buyer/favorites",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Track",
    purpose:
      "Lets buyers build a shortlist over multiple sessions — car buying is rarely a single-visit decision, so persistence and easy comparison matter.",
    keyDecisions: [
      "A two-column grid packs more cars into one screen than a single-column list, without shrinking photos so small they stop being useful for comparison.",
      "Price-drop and status-change indicators are built into the card, turning a static list into something worth revisiting.",
    ],
    component: Favorites,
  },
  {
    id: "buyer-dashboard",
    title: "Buyer Dashboard",
    path: "/buyer/dashboard",
    release: "mvp",
    group: "buyer",
    flowLabel: "Buyer · Manage",
    purpose:
      "Home base for an active buyer: tracks every inquiry sent and its status, so nothing gets lost across multiple parallel conversations with sellers.",
    keyDecisions: [
      "Inquiries are shown as a status pipeline (sent → responded → scheduled) rather than a flat list — buyers think in terms of progress toward a purchase.",
    ],
    component: BuyerDashboard,
  },
  {
    id: "make-offer",
    title: "Make an Offer",
    path: "/buyer/offer",
    release: "r2",
    group: "buyer",
    flowLabel: "Buyer · Negotiate",
    purpose:
      "Structured counter-offer flow so price negotiation happens in-platform instead of falling back to phone calls, keeping the trust and record-keeping benefits of the marketplace.",
    keyDecisions: [
      "Shows the asking price alongside the offer input at all times, anchoring the negotiation instead of hiding context.",
    ],
    component: MakeOffer,
  },
  {
    id: "saved-search-alerts",
    title: "Saved Search Alerts",
    path: "/buyer/alerts",
    release: "r2",
    group: "buyer",
    flowLabel: "Buyer · Retention",
    purpose:
      "Turns a one-time search into a standing request — buyers get notified the moment a matching car appears, reducing the need to keep manually re-searching.",
    keyDecisions: [
      "Each alert restates its filter criteria in plain language so it's obvious what will (and won't) trigger a notification.",
    ],
    component: SavedSearchAlerts,
  },
  {
    id: "schedule-test-drive",
    title: "Schedule Test Drive",
    path: "/buyer/test-drive",
    release: "r3",
    group: "buyer",
    flowLabel: "Buyer · Convert",
    purpose:
      "Removes the back-and-forth of coordinating a viewing by letting buyers pick from a seller's actual availability.",
    keyDecisions: [
      "Calendar-first layout since the entire task is 'find a mutually free slot' — no need for a long form around it.",
    ],
    component: ScheduleTestDrive,
  },
  {
    id: "financing",
    title: "Financing Calculator",
    path: "/buyer/financing",
    release: "r3",
    group: "buyer",
    flowLabel: "Buyer · Convert",
    purpose:
      "Surfaces realistic monthly payment estimates against the specific listing, so affordability stops being a guessing game and a blocker to moving forward.",
    keyDecisions: [
      "Inputs (down payment, term, credit tier) update the estimate live — financing exploration should feel reversible and low-commitment.",
    ],
    component: Financing,
  },
  {
    id: "checkout",
    title: "Secure Checkout",
    path: "/buyer/checkout",
    release: "r3",
    group: "buyer",
    flowLabel: "Buyer · Convert",
    purpose:
      "Formalizes commitment with a refundable deposit held in escrow, giving both sides confidence the deal is serious before paperwork happens off-platform.",
    keyDecisions: [
      "Deposit is clearly framed as refundable and itemized against the total price, reducing anxiety around an otherwise high-stakes payment step.",
    ],
    component: Checkout,
  },

  // ---------- Seller journey ----------
  {
    id: "create-listing-1",
    title: "New Listing · Vehicle Details",
    path: "/seller/new/details",
    release: "mvp",
    group: "seller",
    flowLabel: "Seller · Create · Step 1 of 4",
    purpose:
      "Captures the objective facts about the car first — make, model, year, mileage, condition — before anything subjective like price or photos, so later steps can reference this data.",
    keyDecisions: [
      "VIN lookup pre-fills known specs to cut a long form down to just what the seller actually needs to confirm — respects sellers' time.",
    ],
    flowNote: "Step 1 of 4 in Create Listing. Next → Photos.",
    component: CreateListingDetails,
  },
  {
    id: "create-listing-2",
    title: "New Listing · Photos",
    path: "/seller/new/photos",
    release: "mvp",
    group: "seller",
    flowLabel: "Seller · Create · Step 2 of 4",
    purpose:
      "Photos are the single biggest driver of buyer interest in a listing, so this step gets a dedicated screen with explicit shot-list guidance rather than a generic file uploader.",
    keyDecisions: [
      "A required shot checklist (front 3/4, interior, odometer, damage if any) nudges toward listing quality that builds buyer trust before a human ever reviews it.",
    ],
    flowNote: "Step 2 of 4. Back → Vehicle Details. Next → Price & Description.",
    component: CreateListingPhotos,
  },
  {
    id: "create-listing-3",
    title: "New Listing · Price & Description",
    path: "/seller/new/pricing",
    release: "mvp",
    group: "seller",
    flowLabel: "Seller · Create · Step 3 of 4",
    purpose:
      "Helps sellers price competitively with a live market comparison, then prompts a description that answers the questions buyers ask most.",
    keyDecisions: [
      "Market price range shown directly beside the price input, turning a blind guess into an informed decision.",
    ],
    flowNote: "Step 3 of 4. Next → Review & Publish.",
    component: CreateListingPricing,
  },
  {
    id: "review-publish",
    title: "Review & Publish",
    path: "/seller/new/review",
    release: "mvp",
    group: "seller",
    flowLabel: "Seller · Create · Step 4 of 4",
    purpose:
      "Final checkpoint showing the listing exactly as buyers will see it, so sellers catch mistakes before going live rather than after.",
    keyDecisions: [
      "Renders using the same Listing Detail component buyers see — what you review is pixel-for-pixel what gets published, no surprises.",
    ],
    flowNote: "Step 4 of 4. Publish → Seller Dashboard.",
    component: ReviewPublish,
  },
  {
    id: "seller-dashboard",
    title: "Seller Dashboard",
    path: "/seller/dashboard",
    release: "mvp",
    group: "seller",
    flowLabel: "Seller · Manage",
    purpose:
      "Command center for everything a seller has listed — status, views, and incoming interest — so managing multiple listings doesn't require hunting through email.",
    keyDecisions: [
      "Each listing row surfaces the metric that matters most at a glance (inquiries) instead of vanity metrics like raw views.",
    ],
    component: SellerDashboard,
  },
  {
    id: "manage-offers",
    title: "Manage Offers & Inquiries",
    path: "/seller/offers",
    release: "r2",
    group: "seller",
    flowLabel: "Seller · Negotiate",
    purpose:
      "Consolidates every buyer inquiry and offer across all listings into one triage view, so sellers can respond quickly wherever demand is strongest.",
    keyDecisions: [
      "Offers are sorted by recency and highlighted by how close they are to asking price — the two factors sellers actually decide on.",
    ],
    component: ManageOffers,
  },
  {
    id: "listing-insights",
    title: "Listing Performance",
    path: "/seller/insights",
    release: "r3",
    group: "seller",
    flowLabel: "Seller · Optimize",
    purpose:
      "Gives sellers the data to improve underperforming listings — views vs. inquiries vs. comparable market listings — rather than leaving pricing and quality as guesswork.",
    keyDecisions: [
      "Benchmarks every metric against similar local listings, so a number is never shown without context for whether it's good or bad.",
    ],
    component: ListingInsights,
  },

  // ---------- Shared / cross-cutting ----------
  {
    id: "messaging",
    title: "Messages",
    path: "/buyer/messages",
    release: "r2",
    group: "shared",
    flowLabel: "Shared · Communicate",
    purpose:
      "Replaces scattered phone/email exchanges with an in-platform thread per listing conversation, keeping a record both sides can trust.",
    keyDecisions: [
      "Each thread header keeps the listing card pinned at the top — context (which car, what price) is never lost mid-conversation.",
    ],
    component: Messaging,
  },
  {
    id: "notifications",
    title: "Notifications",
    path: "/notifications",
    release: "r2",
    group: "shared",
    flowLabel: "Shared · Stay informed",
    purpose:
      "Central feed for everything time-sensitive — new messages, offer responses, saved-search matches, price drops — so nothing important requires a specific app visit to catch.",
    keyDecisions: [
      "Grouped by type rather than pure reverse-chronological, so a buyer with many saved searches doesn't drown out an actual seller reply.",
    ],
    component: Notifications,
  },
  {
    id: "admin-moderation",
    title: "Admin Moderation",
    path: "/admin/moderation",
    release: "r3",
    group: "shared",
    flowLabel: "Shared · Trust & Safety",
    purpose:
      "Internal tool for the marketplace operator to review flagged listings and verify seller identity — the operational backbone that makes the buyer-facing trust badges credible.",
    keyDecisions: [
      "Queue is prioritized by report severity, not submission time — safety-critical flags should never wait behind routine verification checks.",
    ],
    component: AdminModeration,
  },
];

export function getScreenByPath(path: string): ScreenDefinition | undefined {
  return SCREENS.find((s) => s.path === path);
}

export const GROUP_ORDER: ScreenGroup[] = ["foundation", "buyer", "seller", "shared"];
