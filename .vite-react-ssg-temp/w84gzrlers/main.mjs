import { Head, ViteReactSSG } from "vite-react-ssg";
import * as React from "react";
import { createContext, useState, useEffect, useContext, useRef } from "react";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";
import { Link, useLocation, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Menu, ArrowRight, CheckCircle2, Calendar, Phone, Zap, MailX, Clock, Target, UserX, AlertCircle, Database, Send, CalendarCheck, Cpu, Banknote, Briefcase, TrendingUp, Handshake, ArrowUpRight, Settings2, Rocket, Compass, MoveRight, Check, Mail, Linkedin, Home, MapPin, Globe } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
const _jsxDEV = ReactJSXDevRuntime.jsxDEV;
const Fragment = ReactJSXDevRuntime.Fragment;
const SOURCE_KEY = Symbol.for("__jsxSource__");
const cleanFileName = (fileName) => {
  if (!fileName) return "";
  if (fileName.includes("dev_server")) {
    fileName = fileName.split("dev_server")[1].slice(1);
  }
  if (fileName.includes("sandbox-scheduler/sandbox")) {
    const sandboxPart = fileName.split("sandbox-scheduler/")[1];
    fileName = sandboxPart.split("/").slice(1).join("/");
  }
  return fileName.replace(/^\/dev-server\//, "");
};
const sourceElementMap = /* @__PURE__ */ new Map();
window.sourceElementMap = sourceElementMap;
function getSourceKey(sourceInfo) {
  return `${cleanFileName(sourceInfo.fileName)}:${sourceInfo.lineNumber}:${sourceInfo.columnNumber}`;
}
function unregisterElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  const refs = sourceElementMap.get(key);
  if (refs) {
    for (const ref of refs) {
      if (ref.deref() === node) {
        refs.delete(ref);
        break;
      }
    }
    if (refs.size === 0) {
      sourceElementMap.delete(key);
    }
  }
}
function registerElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  if (!sourceElementMap.has(key)) {
    sourceElementMap.set(key, /* @__PURE__ */ new Set());
  }
  sourceElementMap.get(key).add(new WeakRef(node));
}
function getTypeName(type) {
  var _a, _b;
  if (typeof type === "string") return type;
  if (typeof type === "function") return type.displayName || type.name || "Unknown";
  if (typeof type === "object" && type !== null) {
    return type.displayName || ((_a = type.render) == null ? void 0 : _a.displayName) || ((_b = type.render) == null ? void 0 : _b.name) || "Unknown";
  }
  return "Unknown";
}
function jsxDEV(type, props, key, isStatic, source, self) {
  if ((source == null ? void 0 : source.fileName) && typeof type !== "string" && type !== Fragment) {
    const typeName = getTypeName(type);
    const jsxSourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: typeName
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          if (!node[SOURCE_KEY]) {
            node[SOURCE_KEY] = jsxSourceInfo;
            registerElement(node, jsxSourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  if ((source == null ? void 0 : source.fileName) && typeof type === "string") {
    const sourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: type
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          const existingSource = node[SOURCE_KEY];
          if (existingSource) {
            if (getSourceKey(existingSource) !== getSourceKey(sourceInfo)) {
              unregisterElement(node, existingSource);
              node[SOURCE_KEY] = sourceInfo;
              registerElement(node, sourceInfo);
            }
          } else {
            node[SOURCE_KEY] = sourceInfo;
            registerElement(node, sourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  return _jsxDEV(type, props, key, isStatic, source, self);
}
const Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/sonner.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    void 0
  );
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  void 0
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0);
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  void 0
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/dev-server/src/components/ui/toast.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  void 0
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 85,
  columnNumber: 3
}, void 0));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 93,
  columnNumber: 3
}, void 0));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 13,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 14,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/dev-server/src/components/ui/toaster.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/dev-server/src/components/ui/toaster.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ui/toaster.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const en = {
  nav: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "For whom", href: "#for-whom" },
      { label: "Services", href: "#services" },
      { label: "The System", href: "#system" },
      { label: "Why REDFOXX", href: "#why" },
      { label: "Contact", href: "#contact" }
    ],
    jobs: "Jobs",
    bookCall: "Book a call",
    menuLabel: "Menu"
  },
  hero: {
    badge: "Outbound Sales · Technical B2B",
    title1: "We book qualified",
    title2: "meetings for",
    titleAccent: "technical B2B",
    title3: "companies.",
    desc: "REDFOXX is the extension of your sales team. We design a multichannel outbound strategy tailored to your ICP, market, and sales cycle: cold email, cold calling, LinkedIn, or a mix. The result: qualified meetings, straight into your calendar.",
    ctaPrimary: "Book a Strategy Call",
    ctaSecondary: "See How It Works",
    trust: ["Multichannel SDR team", "AI-powered personalization", "Weekly Notion reports"],
    cards: {
      meetingBooked: "Meeting booked",
      new: "NEW",
      meetingDetail: "Operations Director · Spuntini — Thu",
      meetingRotation: [
        { detail: "Operations Director · Spuntini — Thu", isNew: true },
        { detail: "Supply Chain Director · Poppies Bakeries — Wed", isNew: true },
        { detail: "Operations Director · La William — Fri", isNew: false },
        { detail: "General Manager · De Keyser Vleeswaren — Wed", isNew: true },
        { detail: "COO · Westvlees — Tue", isNew: false },
        { detail: "Operations Director · BekaertDeslee — Tue", isNew: true },
        { detail: "ICT Manager · P&V Panels", isNew: true },
        { detail: "Application Manager · Farys", isNew: false },
        { detail: "General Manager · Vanhonsebrouck — Mon", isNew: true },
        { detail: "Operations Manager · Meco — Thu", isNew: false }
      ],
      replyRate: "Reply rate",
      dialing: "Dialing",
      dialingDetail: "+32 · Tier 1 prospect"
    }
  },
  marquee: {
    label: "Built on the modern outbound stack"
  },
  clients: {
    label: "Trusted by ambitious B2B teams"
  },
  problem: {
    eyebrow: "The Problem",
    title: "Sound familiar?",
    desc: "If any of these hit home, you're not alone. Most technical B2B companies we talk to are stuck on at least three.",
    items: [
      { title: "No systematic outbound", desc: "Growth depends on word-of-mouth and inbound luck." },
      { title: "Cold email flopped", desc: "You tried it once, got zero replies, gave up." },
      { title: "No time to prospect", desc: "Can't close deals AND hunt new ones at the same time." },
      { title: "Wrong person, wrong message", desc: "Spray-and-pray that burns your domain reputation." },
      { title: "Hired a 'sales rep' who doesn't sell", desc: "Now they're doing admin instead of prospecting." },
      { title: "No pipeline visibility", desc: "You can't tell what works, what doesn't, what's next." }
    ]
  },
  how: {
    eyebrow: "Our Process",
    title1: "Three moves. One qualified",
    titleAccent: "pipeline",
    title2: ".",
    desc: "A simple loop that compounds. Every week we sharpen targeting, messaging, and timing.",
    steps: [
      {
        title: "Build",
        desc: "We build your prospect list from zero based on your ICP. Verified emails and phone numbers, ready to contact. Your existing leads become Tier 1.",
        tags: ["ICP research", "Account list", "Waterfall enrichment"]
      },
      {
        title: "Reach",
        desc: "Multichannel outreach: cold email, cold calling, LinkedIn, or a combination. Every contact gets multiple touches across channels until we have a clear answer.",
        tags: ["Cold calls", "Email sequences", "LinkedIn"]
      },
      {
        title: "Book",
        desc: "Qualified meetings land directly in your calendar. Every booking ships with context and qualification notes so you walk in fully prepped.",
        tags: ["Qualified", "Context-rich", "In your calendar"]
      }
    ]
  },
  forWhom: {
    eyebrow: "Ideal Client",
    title: "REDFOXX works best for you if...",
    items: [
      { title: "You sell a technical B2B product or service", desc: "SaaS, IT, automation, machinery, intralogistics, or engineering services." },
      { title: "Average deal ≥ €5k", desc: "Every missed meeting is a missed opportunity." },
      { title: "Clear ICP, no time to prospect", desc: "You know who to reach, you just don't have the bandwidth." },
      { title: "Meetings, not leads", desc: "No names. No emails. Qualified conversations with decision-makers." },
      { title: "Ready to scale outbound", desc: "You need the team, tools, and strategy. We become the extension." },
      { title: "Prefer closing over cold calling", desc: "Do what you do best. We fill the top of your funnel." }
    ]
  },
  services: {
    eyebrow: "Services",
    title: "What we do for you.",
    desc: "Every engagement is custom. No fixed packages. We build a proposal around your ICP, market, and goals.",
    cta: "Request a proposal",
    footer1: "All tools covered by REDFOXX.",
    footer2: "Zero extra tool costs for clients.",
    items: [
      {
        tag: "Foundation",
        title: "List Building & ICP Research",
        desc: "We map your total addressable market, define your ICP, and build a verified prospect list with emails and phone numbers.",
        items: ["ICP definition & market research", "Account list build", "Contact enrichment", "Tier-based prioritization"]
      },
      {
        tag: "Infrastructure",
        title: "Outbound System Setup",
        desc: "We build your outbound engine from zero. Email infrastructure, sequences, scripts, LinkedIn workflows, and signal-based routing.",
        items: ["Email domain & inbox setup", "Cold email sequences & copy", "Call scripts & objection handling", "Buying-signal prioritization"]
      },
      {
        tag: "Done For You",
        title: "Full Outbound Execution",
        desc: "We run the entire outbound motion. Cold calling as primary, email follow-up, LinkedIn. Weekly Notion reports + recordings.",
        items: ["Cold calling campaigns", "Personalized email follow-up", "LinkedIn outreach", "Weekly KPI dashboard"]
      },
      {
        tag: "Advisory",
        title: "Outbound Coaching & Audit",
        desc: "Already have a sales team? We audit your outbound, identify what isn't working, and coach your reps on calling, copy, and sequencing.",
        items: ["Full outbound audit", "ICP & messaging review", "Cold call live coaching", "1-on-1 sessions with SDRs"]
      }
    ]
  },
  system: {
    eyebrow: "The System",
    title1: "How we build your outbound",
    titleAccent: "machine",
    title2: ".",
    desc: "Step by step. Tool by tool. The full stack we assemble under the hood.",
    steps: [
      { step: "STEP 01", title: "ICP & Account List", desc: "Define your Ideal Client Profile by sector, size, and deal value. Build targeted account lists with data." },
      { step: "STEP 02", title: "Waterfall Enrichment", desc: "Emails and phone numbers enriched via waterfall. If one source misses, the next fills the gap automatically." },
      { step: "STEP 03", title: "Signals & Personalization", desc: "Detect buying signals: hiring, news, funding, tech-stack changes. Generate personalized openers per contact." },
      { step: "STEP 04", title: "CRM & Data Management", desc: "Pipeline organized, activity tracked, integrated with your stack. Start simple, scale later." },
      { step: "STEP 05", title: "Multichannel Outreach", desc: "Cold emails, LinkedIn messages, and calls from one platform. Email + LinkedIn + phone = higher response." },
      { step: "STEP 06", title: "Scheduling & Recordings", desc: "Meetings planned, recorded, transcribed. Every call becomes documented info that flows back to your CRM." },
      { step: "STEP 07", title: "Automation", desc: "Data sync, automatic follow-ups, repetitive tasks eliminated. Layered on once the core stack runs." }
    ]
  },
  stats: {
    items: [
      { label: "Qualified meetings booked" },
      { label: "Average reply rate" },
      { label: "Show-up-to-close rate" },
      { label: "Pipeline multiplier" }
    ]
  },
  comparison: {
    eyebrow: "Why REDFOXX",
    title: "Not every outbound approach is the same",
    desc: "You can pick a call center, a lead gen agency, or hire your own SDR. Here's what you actually get in practice.",
    headers: ["", "REDFOXX", "Call center", "Lead gen agency", "In-house SDR"],
    rows: [
      { criterion: "Technical B2B expertise", cells: ["check", "cross", "cross", "Depends"] },
      { criterion: "List building from scratch (ICP + verified data)", cells: ["check", "cross", "Generic lists", "Depends"] },
      { criterion: "Integrated multichannel (call + email + LinkedIn)", cells: ["check", "Call only", "Email only", "Depends"] },
      { criterion: "Founder-led prospecting", cells: ["check", "cross", "cross", "Depends"] },
      { criterion: "Calls recorded, open reporting", cells: ["check", "cross", "cross", "Depends"] },
      { criterion: "Guaranteed 5:1 minimum ROI", cells: ["check", "cross", "cross", "cross"] },
      { criterion: "Operational within 1 to 2 weeks", cells: ["check", "check", "Variable", "3 to 6 month ramp-up"] },
      { criterion: "Pay-per-demo pricing model", cells: ["check", "cross", "cross", "Fixed salary"] }
    ],
    scrollHint: "Scroll",
    tagline: "We win. You win bigger.",
    cta: "Book a discovery call"
  },
  cta: {
    eyebrow: "Let's Talk",
    title1: "Ready to grow",
    titleAccent: "together?",
    desc: "Book a free 45-minute intro call. No strings. We'll see if there's a fit and what we can do for you.",
    button: "Book a meeting",
    email: "Email",
    phone: "Phone",
    connect: "Let's connect",
    connectCompany: "REDFOXX",
    connectSoroush: "Soroush Qanawizian",
    connectHelena: "Helena Michaux"
  },
  footer: {
    rights: "REDFOXX — Outbound sales for technical B2B."
  }
};
const nl = {
  nav: {
    links: [
      { label: "Hoe het werkt", href: "#how" },
      { label: "Voor wie", href: "#for-whom" },
      { label: "Diensten", href: "#services" },
      { label: "Het Systeem", href: "#system" },
      { label: "Waarom REDFOXX", href: "#why" },
      { label: "Contact", href: "#contact" }
    ],
    jobs: "Jobs",
    bookCall: "Plan een gesprek",
    menuLabel: "Menu"
  },
  hero: {
    badge: "Outbound Sales · Technische B2B",
    title1: "We boeken gekwalificeerde",
    title2: "meetings voor",
    titleAccent: "technische B2B",
    title3: "bedrijven.",
    desc: "REDFOXX is onderdeel van jullie salesteam. We bouwen een multichannel outbound-aanpak op maat van jullie ICP en deal-cyclus: cold mail, cold calling, LinkedIn of een mix van alles. Het resultaat? Gekwalificeerde meetings, rechtstreeks in jullie agenda.",
    ctaPrimary: "Plan een strategiegesprek",
    ctaSecondary: "Bekijk hoe het werkt",
    trust: ["Multichannel SDR-team", "Slimme personalisatie met AI", "Wekelijkse rapporten in Notion"],
    cards: {
      meetingBooked: "Meeting geboekt",
      new: "NIEUW",
      meetingDetail: "Operations Director · Spuntini — Do",
      meetingRotation: [
        { detail: "Operations Director · Spuntini — Do", isNew: true },
        { detail: "Supply Chain Director · Poppies Bakeries — Woe", isNew: true },
        { detail: "Operations Director · La William — Vr", isNew: false },
        { detail: "General Manager · De Keyser Vleeswaren — Woe", isNew: true },
        { detail: "COO · Westvlees — Di", isNew: false },
        { detail: "Operations Director · BekaertDeslee — Di", isNew: true },
        { detail: "ICT-manager · P&V Panels", isNew: true },
        { detail: "Application Manager · Farys", isNew: false },
        { detail: "General Manager · Vanhonsebrouck — Ma", isNew: true },
        { detail: "Operations Manager · Meco — Do", isNew: false }
      ],
      replyRate: "Antwoordratio",
      dialing: "Aan het bellen",
      dialingDetail: "+32 · Tier 1 prospect"
    }
  },
  marquee: {
    label: "Gebouwd op de moderne outbound-stack"
  },
  clients: {
    label: "Vertrouwd door ambitieuze B2B-teams"
  },
  problem: {
    eyebrow: "Het probleem",
    title: "Komt dit bekend voor?",
    desc: "De meeste technische B2B-bedrijven waar wij mee praten lopen tegen minstens drie van deze dingen aan.",
    items: [
      { title: "Geen vaste outbound-aanpak", desc: "Groei hangt af van mond-tot-mond en wat er toevallig binnenkomt." },
      { title: "Cold mail leverde niets op", desc: "Eén keer geprobeerd, geen reactie, en daarna laten liggen." },
      { title: "Geen tijd om te prospecteren", desc: "Deals sluiten én nieuwe klanten zoeken lukt niet allebei." },
      { title: "Verkeerde persoon, verkeerde boodschap", desc: "Lukraak mailen waar jullie domeinreputatie onder lijdt." },
      { title: "Een sales rep aangenomen die niet verkoopt", desc: "Die zit nu vooral admin te doen in plaats van te bellen." },
      { title: "Geen zicht op jullie pipeline", desc: "Je weet niet wat werkt, wat niet, en wat er nog aan zit te komen." }
    ]
  },
  how: {
    eyebrow: "Onze aanpak",
    title1: "Drie stappen. Eén gekwalificeerde",
    titleAccent: "pipeline",
    title2: ".",
    desc: "Een simpele cyclus die zichzelf versterkt. Elke week scherpen we targeting, boodschap en timing verder aan.",
    steps: [
      {
        title: "Build",
        desc: "We zetten jullie prospectlijst vanaf nul op, op basis van jouw ICP. Geverifieerde mailadressen en telefoonnummers, klaar om te bellen of mailen. Bestaande leads krijgen Tier 1.",
        tags: ["ICP-onderzoek", "Accountlijst", "Waterfall enrichment"]
      },
      {
        title: "Reach",
        desc: "Multichannel: cold mail, telefoon, LinkedIn, of een combinatie. Elk contact krijgt meerdere touches over verschillende kanalen tot we een duidelijk antwoord hebben.",
        tags: ["Cold calls", "Mailsequenties", "LinkedIn"]
      },
      {
        title: "Book",
        desc: "Gekwalificeerde meetings komen rechtstreeks in jullie agenda. Bij elke afspraak krijg je context en notities mee, zodat je goed voorbereid het gesprek ingaat.",
        tags: ["Gekwalificeerd", "Met context", "In jullie agenda"]
      }
    ]
  },
  forWhom: {
    eyebrow: "Ideale klant",
    title: "REDFOXX past bij jou als...",
    items: [
      { title: "Je verkoopt een technisch B2B-product of -dienst", desc: "SaaS, IT, automatisatie, machinebouw, intralogistiek of engineering." },
      { title: "Gemiddelde deal ≥ €5k", desc: "Elke meeting die je misloopt, is een kans die je laat liggen." },
      { title: "ICP is duidelijk, tijd om te prospecteren niet", desc: "Je weet wie je wil bereiken, je hebt er gewoon de uren niet voor." },
      { title: "Meetings, geen leads", desc: "Geen lijstjes met namen of mailadressen. Wel echte gesprekken met beslissers." },
      { title: "Klaar om outbound op te schalen", desc: "Jullie hebben het team, de tools en de strategie nodig. Wij worden deel van jullie team." },
      { title: "Liever closen dan cold callen", desc: "Doe waar je goed in bent. Wij zorgen voor de bovenkant van je funnel." }
    ]
  },
  services: {
    eyebrow: "Diensten",
    title: "Wat we voor jullie doen.",
    desc: "Elk traject is op maat. Geen vaste pakketten. We stellen een voorstel samen op basis van je ICP, markt en doelen.",
    cta: "Vraag een voorstel aan",
    footer1: "Alle tools zitten bij REDFOXX inbegrepen.",
    footer2: "Geen extra toolkosten voor klanten.",
    items: [
      {
        tag: "Fundament",
        title: "Listbuilding & ICP-onderzoek",
        desc: "We brengen jullie hele doelmarkt in kaart, leggen jullie ICP vast en bouwen een geverifieerde prospectlijst met mailadressen en telefoonnummers.",
        items: ["ICP-bepaling & marktonderzoek", "Accountlijst opbouwen", "Contactgegevens verrijken", "Prioriteren in tiers"]
      },
      {
        tag: "Infrastructuur",
        title: "Outbound-systeem opzetten",
        desc: "We bouwen jullie outbound-motor vanaf nul: mailinfrastructuur, sequenties, scripts, LinkedIn-flows en routing op basis van signalen.",
        items: ["Maildomein & inbox-setup", "Cold mail-sequenties & copy", "Belscripts & bezwaren ondervangen", "Prioriteren op buying signals"]
      },
      {
        tag: "Done For You",
        title: "Volledige outbound-uitvoering",
        desc: "Wij draaien de hele outbound. Bellen als hoofdkanaal, mail-opvolging en LinkedIn ernaast. Wekelijks rapport in Notion + opnames van de gesprekken.",
        items: ["Cold calling-campagnes", "Persoonlijke mailopvolging", "LinkedIn-outreach", "Wekelijks KPI-dashboard"]
      },
      {
        tag: "Advies",
        title: "Outbound-coaching & audit",
        desc: "Heb je al een salesteam? We doen een audit van jullie outbound, leggen bloot wat niet werkt en coachen jullie mensen op bellen, copy en sequencing.",
        items: ["Volledige outbound-audit", "ICP & boodschap doornemen", "Live coaching tijdens cold calls", "1-op-1 sessies met SDR's"]
      }
    ]
  },
  system: {
    eyebrow: "Het systeem",
    title1: "Hoe we je outbound",
    titleAccent: "machine",
    title2: " bouwen.",
    desc: "Stap voor stap. Tool per tool. De volledige stack die we onder de motorkap monteren.",
    steps: [
      { step: "STAP 01", title: "ICP & account-lijst", desc: "Definieer je Ideal Client Profile per sector, grootte en dealwaarde. Bouw gerichte account-lijsten met data." },
      { step: "STAP 02", title: "Waterfall enrichment", desc: "E-mails en telefoonnummers verrijkt via waterfall. Mist één bron, de volgende vult automatisch aan." },
      { step: "STAP 03", title: "Signalen & personalisatie", desc: "Detecteer buying signals: hiring, nieuws, funding, tech-stack veranderingen. Genereer per contact gepersonaliseerde openers." },
      { step: "STAP 04", title: "CRM & databeheer", desc: "Pipeline georganiseerd, activiteit getrackt, geïntegreerd met je stack. Start simpel, schaal later." },
      { step: "STAP 05", title: "Multichannel outreach", desc: "Cold mails, LinkedIn-berichten en calls vanuit één platform. E-mail + LinkedIn + telefoon = hogere respons." },
      { step: "STAP 06", title: "Planning & opnames", desc: "Meetings gepland, opgenomen, getranscribeerd. Elke call wordt gedocumenteerde info die terugvloeit naar je CRM." },
      { step: "STAP 07", title: "Automatisatie", desc: "Datasync, automatische follow-ups, repetitieve taken weg. Bovenop gelegd zodra de kernstack draait." }
    ]
  },
  stats: {
    items: [
      { label: "Gekwalificeerde meetings geboekt" },
      { label: "Gemiddelde antwoordratio" },
      { label: "Show-up-to-close ratio" },
      { label: "Pipeline-multiplier" }
    ]
  },
  comparison: {
    eyebrow: "Waarom REDFOXX",
    title: "Niet elke outbound-aanpak is hetzelfde",
    desc: "Je kan kiezen voor een callcenter, een leadgen-bureau, of zelf een SDR aannemen. Dit is wat je er in de praktijk van mag verwachten.",
    headers: ["", "REDFOXX", "Callcenter", "Leadgen-bureau", "Eigen SDR"],
    rows: [
      { criterion: "Technische B2B-expertise", cells: ["check", "cross", "cross", "Afhankelijk"] },
      { criterion: "Lijsten opbouwen vanaf nul (ICP + geverifieerde data)", cells: ["check", "cross", "Generieke lijsten", "Afhankelijk"] },
      { criterion: "Multichannel geïntegreerd (bellen + mail + LinkedIn)", cells: ["check", "Enkel bellen", "Enkel mail", "Afhankelijk"] },
      { criterion: "Prospectie aangestuurd door de oprichters", cells: ["check", "cross", "cross", "Afhankelijk"] },
      { criterion: "Gesprekken opgenomen, open rapportage", cells: ["check", "cross", "cross", "Afhankelijk"] },
      { criterion: "Minimaal 5:1 ROI gegarandeerd", cells: ["check", "cross", "cross", "cross"] },
      { criterion: "Operationeel binnen 1 à 2 weken", cells: ["check", "check", "Variabel", "3 à 6 maanden inwerktijd"] },
      { criterion: "Pay-per-demo: je betaalt per afspraak", cells: ["check", "cross", "cross", "Vast loon"] }
    ],
    scrollHint: "Scroll",
    tagline: "We win. You win bigger.",
    cta: "Plan een kennismakingsgesprek"
  },
  cta: {
    eyebrow: "Laten we praten",
    title1: "Klaar om samen",
    titleAccent: "te groeien?",
    desc: "Plan een vrijblijvend kennismakingsgesprek van 45 minuten. We kijken samen of het klikt en wat we voor jullie kunnen betekenen.",
    button: "Plan een gesprek",
    email: "E-mail",
    phone: "Telefoon",
    connect: "Let's connect",
    connectCompany: "REDFOXX",
    connectSoroush: "Soroush Qanawizian",
    connectHelena: "Helena Michaux"
  },
  footer: {
    rights: "REDFOXX — Outbound sales voor technische B2B."
  }
};
const translations = { en, nl };
const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("redfoxx-lang");
    return saved === "nl" || saved === "en" ? saved : "en";
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("redfoxx-lang", lang);
  }, [lang]);
  const setLang = (l) => setLangState(l);
  return /* @__PURE__ */ jsxDEV(LanguageContext.Provider, { value: { lang, setLang, t: translations[lang] }, children }, void 0, false, {
    fileName: "/dev-server/src/i18n/LanguageContext.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
const logoLockup = "/assets/redfoxx-lockup-CD6yhgDG.png";
const LangToggle = ({
  lang,
  setLang,
  className = ""
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    role: "group",
    "aria-label": "Language",
    className: `inline-flex items-center rounded-full border border-border bg-card/40 backdrop-blur p-0.5 ${className}`,
    children: ["en", "nl"].map((l) => /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => setLang(l),
        className: `px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-colors ${lang === l ? "bg-gradient-primary text-primary-foreground shadow-ember" : "text-muted-foreground hover:text-foreground"}`,
        "aria-pressed": lang === l,
        children: l
      },
      l,
      false,
      {
        fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      void 0
    ))
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  void 0
);
const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border" : "py-5 bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "flex items-center group", children: /* @__PURE__ */ jsxDEV("img", { src: logoLockup, alt: "REDFOXX Sales Solutions", className: "h-10 md:h-11 w-auto object-contain" }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden lg:flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur px-1.5 py-1.5", children: [
            t.nav.links.map((l) => /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: l.href,
                className: "px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors",
                children: l.label
              },
              l.href,
              false,
              {
                fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                lineNumber: 66,
                columnNumber: 13
              },
              void 0
            )),
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/jobs",
                className: "px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors",
                children: t.nav.jobs
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 md:gap-3", children: [
            /* @__PURE__ */ jsxDEV(LangToggle, { lang, setLang, className: "hidden sm:inline-flex" }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#contact",
                className: "hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-ember hover:scale-[1.03] transition-transform",
                children: t.nav.bookCall
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                lineNumber: 84,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                "aria-label": t.nav.menuLabel,
                className: "lg:hidden rounded-lg border border-border p-2",
                onClick: () => setOpen(!open),
                children: open ? /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                }, void 0) : /* @__PURE__ */ jsxDEV(Menu, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                  lineNumber: 95,
                  columnNumber: 49
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
                lineNumber: 90,
                columnNumber: 11
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, void 0),
        open && /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden container mt-3 card-glass rounded-2xl p-3 flex flex-col", children: [
          t.nav.links.map((l) => /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "px-4 py-3 text-sm hover:bg-secondary rounded-lg",
              children: l.label
            },
            l.href,
            false,
            {
              fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
              lineNumber: 103,
              columnNumber: 13
            },
            void 0
          )),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/jobs",
              onClick: () => setOpen(false),
              className: "px-4 py-3 text-sm hover:bg-secondary rounded-lg",
              children: t.nav.jobs
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
              lineNumber: 112,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-muted-foreground font-mono uppercase tracking-wider", children: "Language" }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
              lineNumber: 120,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(LangToggle, { lang, setLang }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/components/redfoxx/Navbar.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    void 0
  );
};
const foxEmblem = "/assets/redfoxx-3d-CrOthMyz.png";
const HeroGrid = ({ sectionRef }) => {
  const canvasRef = useRef(null);
  const intensityRef = useRef(0);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const CELL = 84;
    const TAB = CELL * 0.22;
    let pieces = [];
    let dpr = 1;
    let width = 0;
    let height = 0;
    const edgeSign = (a, b) => {
      let h = a * 73856093 ^ b * 19349663;
      h = (h ^ h >>> 13) >>> 0;
      return (h & 1) === 0 ? 1 : -1;
    };
    const buildPath = (x, y, top, right, bottom, left) => {
      const p = new Path2D();
      p.moveTo(x, y);
      drawEdge(p, x, y, x + CELL, y, 0, -1, top);
      drawEdge(p, x + CELL, y, x + CELL, y + CELL, 1, 0, right);
      drawEdge(p, x + CELL, y + CELL, x, y + CELL, 0, 1, bottom);
      drawEdge(p, x, y + CELL, x, y, -1, 0, left);
      p.closePath();
      return p;
    };
    const drawEdge = (p, x1, y1, x2, y2, nx, ny, d) => {
      if (d === 0) {
        p.lineTo(x2, y2);
        return;
      }
      const dx = x2 - x1;
      const dy = y2 - y1;
      const tNeckA = 0.38;
      const tNeckB = 0.62;
      const ax = x1 + dx * tNeckA;
      const ay = y1 + dy * tNeckA;
      const bx = x1 + dx * tNeckB;
      const by = y1 + dy * tNeckB;
      const mx = x1 + dx * 0.5 + nx * TAB * d;
      const my = y1 + dy * 0.5 + ny * TAB * d;
      const along = TAB * 0.55;
      const out = TAB * 0.85 * d;
      p.lineTo(ax, ay);
      p.bezierCurveTo(
        ax + nx * out,
        ay + ny * out,
        mx - dx / CELL * along,
        my - dy / CELL * along,
        mx,
        my
      );
      p.bezierCurveTo(
        mx + dx / CELL * along,
        my + dy / CELL * along,
        bx + nx * out,
        by + ny * out,
        bx,
        by
      );
      p.lineTo(x2, y2);
    };
    const build = () => {
      const rect = section.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;
      const cxCenter = width / 2;
      const cyCenter = height / 2;
      const maxDist = Math.hypot(cxCenter, cyCenter) || 1;
      pieces = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const top = r === 0 ? 0 : -edgeSign(c, r);
          const left = c === 0 ? 0 : -edgeSign(c + 1e3, r);
          const right = c === cols - 1 ? 0 : edgeSign(c + 1 + 1e3, r);
          const bottom = r === rows - 1 ? 0 : edgeSign(c, r + 1);
          const x = c * CELL;
          const y = r * CELL;
          const cx = x + CELL / 2;
          const cy = y + CELL / 2;
          const ddx = cxCenter - cx;
          const ddy = cyCenter - cy;
          const d = Math.hypot(ddx, ddy);
          const dist = Math.min(1, d / maxDist);
          pieces.push({
            col: c,
            row: r,
            x,
            y,
            cx,
            cy,
            distFromCenter: dist,
            ux: d > 1e-4 ? ddx / d : 0,
            uy: d > 1e-4 ? ddy / d : 0,
            phase: (c * 13.37 + r * 7.91) % (Math.PI * 2),
            phase2: (c * 5.13 + r * 11.27) % (Math.PI * 2),
            top,
            right,
            bottom,
            left,
            path: buildPath(0, 0, top, right, bottom, left)
            // local coords; we translate when drawing
          });
        }
      }
    };
    const updateIntensity = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const denom = Math.max(1, rect.height);
      const progress = Math.min(1, scrolled / denom);
      intensityRef.current = Math.min(0.6, progress + 0.15);
    };
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.6;
      for (const piece of pieces) {
        const edgeWeight = Math.pow(piece.distFromCenter, 1.4);
        const alpha = 0.05 + edgeWeight * 0.08;
        ctx.strokeStyle = `rgba(14, 40, 65, ${alpha})`;
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.stroke(piece.path);
        ctx.restore();
      }
    };
    const draw = () => {
      const t = performance.now() * 18e-4;
      const intensity = intensityRef.current;
      const mouse = mouseRef.current;
      mouse.active *= 0.96;
      const influenceRadius = 180;
      const influenceRadiusSq = influenceRadius * influenceRadius;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.7;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      for (const piece of pieces) {
        const pullWave = (Math.sin(t * 1.4 + piece.phase) + 1) / 2;
        const pull = pullWave * piece.distFromCenter * intensity * 14;
        let offsetX = piece.ux * pull;
        let offsetY = piece.uy * pull;
        let mouseBoost = 0;
        if (mouse.active > 0.01) {
          const mdx = piece.cx - mouse.x;
          const mdy = piece.cy - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < influenceRadiusSq) {
            const mDist = Math.sqrt(mDistSq) || 1;
            const falloff = (1 - mDist / influenceRadius) * mouse.active;
            const push = falloff * 22;
            offsetX += mdx / mDist * push;
            offsetY += mdy / mDist * push;
            mouseBoost = falloff * 0.55;
          }
        }
        const lightWave = (Math.sin(t * 1.6 + piece.phase2) + 1) / 2;
        const edgeWeight = Math.pow(piece.distFromCenter, 1.4);
        const alpha = (0.06 + intensity * edgeWeight * 0.22 + lightWave * edgeWeight * intensity * 0.12 + mouseBoost) * 0.9;
        const isRed = piece.distFromCenter > 0.55 && lightWave > 0.85 || mouseBoost > 0.25;
        ctx.strokeStyle = isRed ? `rgba(203, 3, 3, ${alpha})` : `rgba(14, 40, 65, ${alpha})`;
        ctx.save();
        ctx.translate(piece.x + offsetX, piece.y + offsetY);
        ctx.stroke(piece.path);
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    const onScroll = () => updateIntensity();
    const onResize = () => {
      build();
      if (reduceMotion) drawStatic();
    };
    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = 1;
    };
    const onMouseLeave = () => {
      mouseRef.current.active = 0;
    };
    build();
    updateIntensity();
    if (reduceMotion) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [sectionRef]);
  return /* @__PURE__ */ jsxDEV(
    "canvas",
    {
      ref: canvasRef,
      "aria-hidden": "true",
      className: "absolute inset-0 h-full w-full"
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/redfoxx/HeroGrid.tsx",
      lineNumber: 304,
      columnNumber: 5
    },
    void 0
  );
};
const Hero = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();
  const h = t.hero;
  const rotations = h.cards.meetingRotation;
  const [rIdx, setRIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRIdx((i) => (i + 1) % rotations.length), 2800);
    return () => clearInterval(id);
  }, [rotations.length]);
  return /* @__PURE__ */ jsxDEV("section", { ref: sectionRef, className: "relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32", children: [
    /* @__PURE__ */ jsxDEV(HeroGrid, { sectionRef }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 top-0 h-[800px] bg-gradient-ember pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 35,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 36,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 34,
                columnNumber: 15
              }, void 0),
              h.badge
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 28,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.h1,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.05 },
            className: "mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-balance leading-[0.95]",
            children: [
              h.title1,
              " ",
              /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 47,
                columnNumber: 26
              }, void 0),
              h.title2,
              " ",
              /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: h.titleAccent }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 49,
                columnNumber: 15
              }, void 0),
              " ",
              h.title3
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 41,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.p,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.15 },
            className: "mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed",
            children: h.desc
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.25 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#contact",
                  className: "group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-ember transition-transform hover:scale-[1.02]",
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full animate-shine" }, void 0, false, {
                      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, void 0),
                    h.ctaPrimary,
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
                      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                      lineNumber: 74,
                      columnNumber: 17
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 68,
                  columnNumber: 15
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#how",
                  className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-card transition-colors",
                  children: h.ctaSecondary
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 76,
                  columnNumber: 15
                },
                void 0
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8, delay: 0.4 },
            className: "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground",
            children: h.trust.map((tr) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 92,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { children: tr }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, void 0)
            ] }, tr, true, {
              fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, void 0))
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative h-[520px] hidden lg:block", children: [
        /* @__PURE__ */ jsxDEV(
          motion.img,
          {
            src: foxEmblem,
            alt: "REDFOXX emblem",
            width: 1024,
            height: 1024,
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            className: "absolute inset-0 m-auto h-[420px] w-[420px] object-contain drop-shadow-[0_30px_80px_rgba(203,3,3,0.45)] animate-float"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 100,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 30, x: -20 },
            animate: { opacity: 1, y: 0, x: 0 },
            transition: { duration: 0.8, delay: 0.6 },
            className: "absolute top-4 -left-4 card-glass rounded-2xl p-4 w-64 shadow-card",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Calendar, { className: "h-4.5 w-4.5 text-primary-foreground" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 118,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium", children: h.cards.meetingBooked }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: rotations[rIdx].isNew && /* @__PURE__ */ jsxDEV(
                    motion.span,
                    {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.8 },
                      transition: { duration: 0.25 },
                      className: "text-[10px] font-mono text-primary-glow",
                      children: h.cards.new
                    },
                    `new-${rIdx}`,
                    false,
                    {
                      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                      lineNumber: 126,
                      columnNumber: 25
                    },
                    void 0
                  ) }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                    lineNumber: 124,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 122,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "relative h-4 mt-0.5 overflow-hidden", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxDEV(
                  motion.p,
                  {
                    initial: { y: 12, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    exit: { y: -12, opacity: 0 },
                    transition: { duration: 0.35 },
                    className: "text-xs text-muted-foreground truncate",
                    children: rotations[rIdx].detail
                  },
                  rIdx,
                  false,
                  {
                    fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                    lineNumber: 141,
                    columnNumber: 23
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 140,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 139,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 121,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 111,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 1 },
            className: "absolute bottom-0 left-6 card-glass rounded-2xl p-3 flex items-center gap-3 shadow-card",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 164,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV(Phone, { className: "h-4 w-4 text-primary" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 165,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 163,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono text-muted-foreground", children: h.cards.dialing }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 168,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium", children: h.cards.dialingDetail }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                  lineNumber: 169,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
                lineNumber: 167,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
            lineNumber: 157,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/Hero.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, void 0);
};
const clients = [
  { name: "Involv", src: "/clients/involv.png", scale: 1 },
  { name: "Dscribe", src: "/clients/compass-large.svg", scale: 1 },
  { name: "Digimedio", src: "/clients/digimedio.png", scale: 1 },
  { name: "Inku", src: "/clients/inku_tech_cover.jpg", scale: 1 },
  { name: "Fyndera", src: "/clients/fyndera.png", scale: 1 },
  { name: "Saniori", src: "/clients/saniori.png", scale: 0.7 }
];
const ClientMarquee = () => {
  const { t } = useLang();
  return /* @__PURE__ */ jsxDEV("section", { className: "relative py-14 border-y border-border bg-card/30", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mb-10", children: /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground", children: t.clients.label }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex marquee-clients w-max items-center", children: [0, 1].map((set) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "flex gap-12 md:gap-20 shrink-0 pr-12 md:pr-20",
          "aria-hidden": set === 1 ? "true" : void 0,
          children: clients.map((c) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "shrink-0 flex items-center justify-center h-14 md:h-20",
              title: c.name,
              children: /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: c.src,
                  alt: set === 0 ? c.name : "",
                  loading: "lazy",
                  draggable: false,
                  style: { transform: `scale(${c.scale})` },
                  className: "h-full w-auto max-w-[160px] md:max-w-[240px] object-contain opacity-70"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
                  lineNumber: 37,
                  columnNumber: 19
                },
                void 0
              )
            },
            `${c.name}-${set}`,
            false,
            {
              fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
              lineNumber: 32,
              columnNumber: 17
            },
            void 0
          ))
        },
        set,
        false,
        {
          fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/ClientMarquee.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0);
};
const aircall = "/assets/aircall-DZoKRIAR.png";
const airtable = "/assets/airtable-C_2bb_VR.png";
const apify = "/assets/apify-ByLcOzcw.png";
const apollo = "/assets/apollo-DvuiymTL.png";
const calendly = "/assets/calendly-etwvrgQa.png";
const claude = "/assets/claude-Kfn5vELo.png";
const clay = "/assets/clay-BjQtav7P.png";
const fathom = "/assets/fathom-B2sAvjDy.png";
const findymail = "/assets/findymail-DP8Pp9fE.png";
const googleMeet = "/assets/google-meet-CwAKUwRf.png";
const hubspot = "/assets/hubspot-CMNoYfY6.png";
const hunter = "/assets/hunter-CpxVX6eP.png";
const instantly = "/assets/instantly-C4tmdEhs.png";
const lemlist = "/assets/lemlist-Bfu9OZuE.png";
const n8n = "/assets/n8n-oxQTJ76I.png";
const notion = "/assets/notion-DJ_iw4sn.png";
const phantombuster = "/assets/phantombuster-ButWmees.webp";
const prospeo = "/assets/prospeo-W1X4yNBT.png";
const salesNav = "/assets/sales-nav-BB-K0tz8.png";
const smartlead = "/assets/smartlead-Did-kpkT.png";
const teams = "/assets/teams-wujxMOUi.png";
const zapier = "/assets/zapier-GQR-bY-g.png";
const tools = [
  { name: "Apollo.io", src: apollo },
  { name: "Clay", src: clay },
  { name: "HubSpot", src: hubspot },
  { name: "Lemlist", src: lemlist },
  { name: "Instantly", src: instantly },
  { name: "Smartlead", src: smartlead },
  { name: "LinkedIn Sales Navigator", src: salesNav },
  { name: "Aircall", src: aircall },
  { name: "PhantomBuster", src: phantombuster },
  { name: "Findymail", src: findymail },
  { name: "Hunter", src: hunter },
  { name: "Prospeo", src: prospeo },
  { name: "Apify", src: apify },
  { name: "Notion", src: notion },
  { name: "Airtable", src: airtable },
  { name: "n8n", src: n8n },
  { name: "Zapier", src: zapier },
  { name: "Calendly", src: calendly },
  { name: "Google Meet", src: googleMeet },
  { name: "Microsoft Teams", src: teams },
  { name: "Fathom", src: fathom },
  { name: "Claude", src: claude }
];
const LogoMarquee = () => {
  const { t } = useLang();
  return /* @__PURE__ */ jsxDEV("section", { className: "relative py-14 border-y border-border bg-card/30", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container mb-10", children: /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground", children: t.marquee.label }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex marquee gap-8 md:gap-16 whitespace-nowrap items-center", children: [...tools, ...tools].map((t2, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "shrink-0 flex items-center justify-center h-10 md:h-14",
          title: t2.name,
          children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: t2.src,
              alt: t2.name,
              loading: "lazy",
              className: "h-full w-auto max-w-[120px] md:max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
              lineNumber: 70,
              columnNumber: 15
            },
            void 0
          )
        },
        i,
        false,
        {
          fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
          lineNumber: 65,
          columnNumber: 13
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/LogoMarquee.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, void 0);
};
const icons$3 = [Zap, MailX, Clock, Target, UserX, AlertCircle];
const Problem = () => {
  const { t } = useLang();
  const p = t.problem;
  return /* @__PURE__ */ jsxDEV("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: p.eyebrow }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: p.title }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-muted-foreground text-lg", children: p.desc }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: p.items.map((item, i) => {
      const Icon = icons$3[i] || Zap;
      return /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, delay: i * 0.05 },
          className: "group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors overflow-hidden",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
              lineNumber: 37,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-lg border border-border bg-secondary flex items-center justify-center mb-5 group-hover:border-primary/50 transition-colors", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-4.5 w-4.5 text-primary-glow" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
                lineNumber: 40,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
                lineNumber: 39,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-medium text-lg", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
                lineNumber: 42,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
                lineNumber: 43,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
              lineNumber: 38,
              columnNumber: 17
            }, void 0)
          ]
        },
        item.title,
        true,
        {
          fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
          lineNumber: 29,
          columnNumber: 15
        },
        void 0
      );
    }) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/redfoxx/Problem.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, void 0);
};
const icons$2 = [Database, Send, CalendarCheck];
const nums = ["01", "02", "03"];
const HowItWorks = () => {
  const { t } = useLang();
  const h = t.how;
  return /* @__PURE__ */ jsxDEV("section", { id: "how", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: h.eyebrow }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: [
            h.title1,
            " ",
            /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: h.titleAccent }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
              lineNumber: 21,
              columnNumber: 26
            }, void 0),
            h.title2
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground md:max-w-sm", children: h.desc }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative grid md:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, void 0),
        h.steps.map((s, i) => {
          const Icon = icons$2[i];
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: i * 0.1 },
              className: "relative",
              children: /* @__PURE__ */ jsxDEV("div", { className: "border-gradient relative rounded-2xl bg-card/60 backdrop-blur p-7 h-full", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "relative h-14 w-14 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center shadow-ember", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-6 w-6 text-primary-glow" }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                    lineNumber: 46,
                    columnNumber: 23
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-5xl font-bold text-primary/20", children: nums[i] }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                  lineNumber: 44,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display font-semibold", children: s.title }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                  lineNumber: 52,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-muted-foreground text-[15px] leading-relaxed", children: s.desc }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                  lineNumber: 53,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap gap-2", children: s.tags.map((tag) => /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border", children: tag }, tag, false, {
                  fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                  lineNumber: 56,
                  columnNumber: 23
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                  lineNumber: 54,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, void 0)
            },
            s.title,
            false,
            {
              fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
              lineNumber: 35,
              columnNumber: 15
            },
            void 0
          );
        })
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/HowItWorks.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, void 0);
};
const icons$1 = [Cpu, Banknote, Briefcase, Calendar, TrendingUp, Handshake];
const sizes = ["lg", "", "", "", "lg", ""];
const ForWhom = () => {
  const { t } = useLang();
  const f = t.forWhom;
  return /* @__PURE__ */ jsxDEV("section", { id: "for-whom", className: "relative py-24 md:py-32 bg-card/30 border-y border-border", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-dots opacity-[0.15]" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-14", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: f.eyebrow }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: f.title }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4", children: f.items.map((it, i) => {
        const Icon = icons$1[i];
        return /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.05 },
            className: `group relative rounded-2xl border border-border bg-card p-6 hover:bg-secondary transition-colors overflow-hidden ${sizes[i] === "lg" ? "md:col-span-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-transparent" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col h-full", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "h-10 w-10 rounded-lg bg-gradient-primary/20 border border-primary/30 flex items-center justify-center mb-auto", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-4.5 w-4.5 text-primary-glow" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                  lineNumber: 41,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                  lineNumber: 40,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-display font-medium text-lg leading-snug", children: it.title }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                    lineNumber: 44,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc }, void 0, false, {
                    fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                  lineNumber: 43,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
                lineNumber: 39,
                columnNumber: 17
              }, void 0)
            ]
          },
          it.title,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
            lineNumber: 28,
            columnNumber: 15
          },
          void 0
        );
      }) }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/ForWhom.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, void 0);
};
const icons = [Target, Settings2, Rocket, Compass];
const highlights = [false, false, true, false];
const Services = () => {
  const { t } = useLang();
  const s = t.services;
  return /* @__PURE__ */ jsxDEV("section", { id: "services", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: s.eyebrow }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/Services.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: s.title }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/Services.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/Services.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground md:max-w-sm", children: s.desc }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/Services.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/Services.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-5", children: s.items.map((item, i) => {
      const Icon = icons[i];
      const highlight = highlights[i];
      return /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: `group relative rounded-3xl p-8 overflow-hidden ${highlight ? "bg-gradient-to-br from-primary/20 via-card to-card border border-primary/40 shadow-ember" : "border border-border bg-card hover:border-primary/30 transition-colors"}`,
          children: [
            highlight && /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/Services.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-mono uppercase tracking-[0.2em] text-primary-glow", children: item.tag }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 50,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "h-11 w-11 rounded-xl bg-secondary border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-5 w-5 text-primary-glow" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 54,
                  columnNumber: 23
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 53,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 49,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "mt-6 text-2xl md:text-3xl font-display font-semibold", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "mt-6 space-y-2.5", children: item.items.map((it) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5 text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "mt-1.5 h-1 w-4 rounded-full bg-gradient-primary shrink-0" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 63,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: it }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 64,
                  columnNumber: 25
                }, void 0)
              ] }, it, true, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 62,
                columnNumber: 23
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("a", { href: "#contact", className: "mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group/link", children: [
                s.cta,
                /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                  lineNumber: 71,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/Services.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/redfoxx/Services.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, void 0)
          ]
        },
        item.tag,
        true,
        {
          fileName: "/dev-server/src/components/redfoxx/Services.tsx",
          lineNumber: 33,
          columnNumber: 15
        },
        void 0
      );
    }) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/Services.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/Services.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/redfoxx/Services.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, void 0);
};
const T = {
  salesNav: { name: "LinkedIn Sales Navigator", src: salesNav },
  apollo: { name: "Apollo.io", src: apollo },
  phantombuster: { name: "PhantomBuster", src: phantombuster },
  clay: { name: "Clay", src: clay },
  findymail: { name: "Findymail", src: findymail },
  prospeo: { name: "Prospeo", src: prospeo },
  apify: { name: "Apify", src: apify },
  lemlist: { name: "Lemlist", src: lemlist },
  claude: { name: "Claude", src: claude },
  n8n: { name: "n8n", src: n8n },
  hubspot: { name: "HubSpot", src: hubspot },
  airtable: { name: "Airtable", src: airtable },
  notion: { name: "Notion", src: notion },
  instantly: { name: "Instantly", src: instantly },
  smartlead: { name: "Smartlead", src: smartlead },
  aircall: { name: "Aircall", src: aircall },
  linkedin: { name: "LinkedIn Sales Navigator", src: salesNav },
  calendly: { name: "Calendly", src: calendly },
  fathom: { name: "Fathom", src: fathom },
  googleMeet: { name: "Google Meet", src: googleMeet },
  teams: { name: "Microsoft Teams", src: teams },
  zapier: { name: "Zapier", src: zapier }
};
const stepTools = [
  [T.salesNav, T.apollo, T.phantombuster, T.clay, T.findymail, T.prospeo],
  [T.apollo, T.clay, T.prospeo, T.apify, T.findymail, T.lemlist],
  [T.clay, T.claude, T.phantombuster, T.n8n, T.apollo],
  [T.hubspot, T.airtable, T.notion],
  [T.lemlist, T.instantly, T.smartlead, T.aircall, T.linkedin],
  [T.calendly, T.fathom, T.googleMeet, T.teams],
  [T.n8n, T.zapier, T.claude]
];
const System = () => {
  const { t } = useLang();
  const s = t.system;
  return /* @__PURE__ */ jsxDEV("section", { id: "system", className: "relative py-24 md:py-32 bg-card/30 border-y border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-grid opacity-[0.08]" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/System.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: s.eyebrow }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: [
          s.title1,
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: s.titleAccent }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/System.tsx",
            lineNumber: 74,
            columnNumber: 24
          }, void 0),
          s.title2
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-muted-foreground text-lg", children: s.desc }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/System.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute left-4 md:left-[140px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-10", children: s.steps.map((step, i) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5, delay: i * 0.05 },
            className: "relative grid md:grid-cols-[140px_1fr] gap-6 md:gap-10",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative pl-10 md:pl-0", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "absolute left-0 md:left-auto md:right-[-17px] top-1.5 h-8 w-8 rounded-full bg-background border-2 border-primary/60 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "h-2 w-2 rounded-full bg-primary shadow-ember" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 96,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-primary-glow", children: step.step }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 98,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/System.tsx",
                lineNumber: 94,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "pl-10 md:pl-10", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-display font-semibold", children: step.title }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 104,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-muted-foreground max-w-2xl", children: step.desc }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 105,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-5 flex flex-wrap gap-2.5", children: stepTools[i].map((tool, idx) => /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    title: tool.name,
                    className: "inline-flex items-center justify-center h-12 w-28 md:w-32 px-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors",
                    children: /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: tool.src,
                        alt: tool.name,
                        loading: "lazy",
                        className: "max-h-7 md:max-h-8 max-w-full w-auto object-contain"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/dev-server/src/components/redfoxx/System.tsx",
                        lineNumber: 113,
                        columnNumber: 25
                      },
                      void 0
                    )
                  },
                  `${tool.name}-${idx}`,
                  false,
                  {
                    fileName: "/dev-server/src/components/redfoxx/System.tsx",
                    lineNumber: 108,
                    columnNumber: 23
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/System.tsx",
                  lineNumber: 106,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/System.tsx",
                lineNumber: 103,
                columnNumber: 17
              }, void 0)
            ]
          },
          step.step,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/System.tsx",
            lineNumber: 86,
            columnNumber: 15
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/System.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-16 text-center text-sm text-muted-foreground", children: [
        t.services.footer1,
        " ",
        /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: t.services.footer2 }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/System.tsx",
          lineNumber: 129,
          columnNumber: 32
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/System.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/System.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/System.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, void 0);
};
const WhyRedfoxx = () => {
  const { t } = useLang();
  const c = t.comparison;
  const renderCell = (val, isRedfoxx) => {
    if (val === "check") {
      return /* @__PURE__ */ jsxDEV(
        Check,
        {
          size: 20,
          className: `mx-auto ${isRedfoxx ? "text-primary" : "text-foreground/70"}`
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 12,
          columnNumber: 9
        },
        void 0
      );
    }
    if (val === "cross") {
      return /* @__PURE__ */ jsxDEV(X, { size: 20, className: "mx-auto text-muted-foreground/70" }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
        lineNumber: 19,
        columnNumber: 14
      }, void 0);
    }
    return /* @__PURE__ */ jsxDEV("span", { className: "text-[13px] text-muted-foreground", children: val }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0);
  };
  return /* @__PURE__ */ jsxDEV("section", { id: "why", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-[720px] mx-auto text-center mb-14", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4", children: c.eyebrow }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display font-semibold text-balance", children: c.title }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-lg text-muted-foreground", children: c.desc }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-[1100px] mx-auto", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.6 },
            className: "border-gradient rounded-2xl bg-card/60 backdrop-blur overflow-hidden",
            children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full border-collapse min-w-[800px]", style: { tableLayout: "fixed" }, children: [
              /* @__PURE__ */ jsxDEV("colgroup", { children: [
                /* @__PURE__ */ jsxDEV("col", { style: { width: "28%" } }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 55,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("col", { style: { width: "18%" } }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("col", { style: { width: "18%" } }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 57,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("col", { style: { width: "18%" } }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 58,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("col", { style: { width: "18%" } }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 59,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                lineNumber: 54,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: c.headers.map((h, i) => {
                const isRedfoxx = i === 1;
                return /* @__PURE__ */ jsxDEV(
                  "th",
                  {
                    className: `py-4 px-3 text-sm font-medium ${i === 0 ? "text-left pl-6" : "text-center"} ${isRedfoxx ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-foreground"}`,
                    children: h
                  },
                  i,
                  false,
                  {
                    fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                    lineNumber: 66,
                    columnNumber: 25
                  },
                  void 0
                );
              }) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                lineNumber: 62,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("tbody", { children: c.rows.map((row, rIdx) => {
                const isLast = rIdx === c.rows.length - 1;
                return /* @__PURE__ */ jsxDEV(
                  motion.tr,
                  {
                    initial: { opacity: 0, y: 8 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-40px" },
                    transition: { duration: 0.4, delay: rIdx * 0.05 },
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "td",
                        {
                          className: `py-4 pl-6 pr-3 text-sm text-foreground ${isLast ? "" : "border-b border-border"}`,
                          children: row.criterion
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                          lineNumber: 93,
                          columnNumber: 25
                        },
                        void 0
                      ),
                      row.cells.map((cell, cIdx) => {
                        const isRedfoxx = cIdx === 0;
                        return /* @__PURE__ */ jsxDEV(
                          "td",
                          {
                            className: `py-4 px-3 text-center ${isRedfoxx ? "bg-primary/[0.06]" : ""} ${isLast ? "" : "border-b border-border"}`,
                            children: renderCell(cell, isRedfoxx)
                          },
                          cIdx,
                          false,
                          {
                            fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                            lineNumber: 103,
                            columnNumber: 29
                          },
                          void 0
                        );
                      })
                    ]
                  },
                  row.criterion,
                  true,
                  {
                    fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                    lineNumber: 86,
                    columnNumber: 23
                  },
                  void 0
                );
              }) }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                lineNumber: 82,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
            lineNumber: 45,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "md:hidden mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV("span", { children: c.scrollHint }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(MoveRight, { size: 14 }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl font-display font-medium gradient-text", children: c.tagline }, void 0, false, {
            fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "#contact",
              className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform mt-6",
              children: [
                c.cta,
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
                  lineNumber: 133,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
              lineNumber: 128,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/WhyRedfoxx.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const soroushPhoto = "/assets/soroush-MoEy2926.jpg";
const helenaPhoto = "/assets/helena-BKHF8j0f.jpg";
const CALENDLY_URL = "https://calendly.com/soroush-redfoxx/30min";
const CTA = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();
  const c = t.cta;
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return /* @__PURE__ */ jsxDEV("section", { ref: sectionRef, id: "contact", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV(HeroGrid, { sectionRef }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-ember opacity-70 pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-grid opacity-[0.07] mask-radial pointer-events-none" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-5", children: c.eyebrow }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-5xl md:text-7xl font-display font-semibold text-balance leading-[1]", children: [
        c.title1,
        " ",
        /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
          lineNumber: 36,
          columnNumber: 24
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: c.titleAccent }, void 0, false, {
          fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto", children: c.desc }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: CALENDLY_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform",
          children: [
            c.button,
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
              fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
          lineNumber: 44,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "calendly-inline-widget mt-10 mx-auto rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur",
          "data-url": CALENDLY_URL,
          style: { minWidth: "320px", height: "700px" }
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-base text-muted-foreground", children: [
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "mailto:info@redfoxx.be",
            className: "inline-flex items-center gap-2 hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV(Mail, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                lineNumber: 66,
                columnNumber: 15
              }, void 0),
              "info@redfoxx.be"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
            lineNumber: 62,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "tel:+32456369848",
            className: "inline-flex items-center gap-2 hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV(Phone, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                lineNumber: 73,
                columnNumber: 15
              }, void 0),
              "+32 456 36 98 48"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
            lineNumber: 69,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://www.linkedin.com/company/redfoxx/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV(Linkedin, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
                fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                lineNumber: 82,
                columnNumber: 15
              }, void 0),
              c.connectCompany
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
            lineNumber: 76,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-col items-center gap-3 text-base text-muted-foreground", children: [
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://www.linkedin.com/in/soroush-qanawizian/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center gap-3 hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: soroushPhoto,
                    alt: "Soroush Qanawizian",
                    className: "h-9 w-9 rounded-full object-cover ring-1 ring-border group-hover:ring-primary transition-all"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(Linkedin, { className: "absolute -bottom-1 -right-1 h-3.5 w-3.5 p-0.5 rounded-full bg-background text-primary-glow" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                  lineNumber: 100,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, void 0),
              c.connectSoroush
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://www.linkedin.com/in/helena-m-a38414103/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center gap-3 hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: helenaPhoto,
                    alt: "Helena Michaux",
                    className: "h-9 w-9 rounded-full object-cover ring-1 ring-border group-hover:ring-primary transition-all"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV(Linkedin, { className: "absolute -bottom-1 -right-1 h-3.5 w-3.5 p-0.5 rounded-full bg-background text-primary-glow" }, void 0, false, {
                  fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                  lineNumber: 116,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
                lineNumber: 110,
                columnNumber: 15
              }, void 0),
              c.connectHelena
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
            lineNumber: 104,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, void 0);
};
const Footer = () => {
  const { t } = useLang();
  return /* @__PURE__ */ jsxDEV("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxDEV("div", { className: "container flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV("img", { src: logoLockup, alt: "REDFOXX Sales Solutions", className: "h-40 w-auto object-contain" }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 133,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      t.footer.rights
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
      lineNumber: 135,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/redfoxx/CTA.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, void 0);
};
const Index = () => {
  return /* @__PURE__ */ jsxDEV("main", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "REDFOXX — Outbound Sales for Technical B2B" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "REDFOXX is the extension of your sales team. Multichannel outbound — cold calling, email, LinkedIn — that books qualified meetings for technical B2B companies." }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://redfoxx.be/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "REDFOXX — Outbound Sales for Technical B2B" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Qualified meetings, straight into your calendar. Multichannel outbound built for technical B2B." }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://redfoxx.be/" }, void 0, false, {
        fileName: "/dev-server/src/pages/Index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ClientMarquee, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Problem, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(HowItWorks, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(ForWhom, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(LogoMarquee, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(System, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(WhyRedfoxx, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(CTA, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, void 0);
};
const RESPONSIBILITIES = [
  "You run cold and warm prospecting conversations via phone, email and LinkedIn. The phone is your most important weapon.",
  "You work with a modern, data-driven sales and AI technology stack to find, qualify and follow up on leads.",
  "You help build outbound campaigns and the go-to-market (GTM) for our clients.",
  "You conduct discovery calls and qualify appointments that you hand over to the client.",
  "You grow into a trusted commercial partner of our clients in a short time."
];
const REQUIREMENTS = [
  "You speak fluent Dutch and English. Both are a must. French is a very strong plus.",
  "You have commercial drive and pick up the phone without hesitation.",
  "You communicate empathically and professionally.",
  "You work independently, but feel at home in a team.",
  "You learn fast and love to sink your teeth into a new field.",
  "A technical or industrial background is a nice plus, but not a requirement. Affinity with technology helps, since our clients are technical."
];
const BENEFITS = [
  {
    title: "Fast growth in sales",
    desc: "A steep learning curve. In a short time you become a strong, independent sales professional."
  },
  {
    title: "The modern way of selling",
    desc: "You learn how outbound and go-to-market really work today: data-driven, technical, and with a modern tech stack."
  },
  {
    title: "Mentoring that counts",
    desc: "Coaching by experienced technical sales people. No theory, just practice."
  },
  {
    title: "Real impact",
    desc: "Your work is immediately visible and makes the difference at the client."
  },
  {
    title: "A journey, not a job",
    desc: "We are building an internationally growing sales company. You build along from the start."
  }
];
const PERKS = ["Company laptop", "Remote work options"];
const APPLICATION_QUESTIONS = ["Do you live in or around 3200 Aarschot?"];
const LANGUAGES = ["Dutch (Required)", "English (Required)", "French (Required)"];
const Jobs = () => {
  return /* @__PURE__ */ jsxDEV("main", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "BDR (B2B Outbound Sales) — Jobs at REDFOXX" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "REDFOXX is hiring a Business Development Representative (BDR) for B2B outbound sales in Aarschot. Cold calling, email and LinkedIn for technical B2B clients."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 58,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://redfoxx.be/jobs" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "BDR (B2B Outbound Sales) — Jobs at REDFOXX" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Join REDFOXX as a Business Development Representative. Cold calling, email and LinkedIn for technical B2B clients. Aarschot, Belgium."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://redfoxx.be/jobs" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-grid opacity-[0.06] mask-radial pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-ember opacity-40 pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "container relative", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6",
            children: [
              /* @__PURE__ */ jsxDEV(Home, { className: "h-3.5 w-3.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/Jobs.tsx",
                lineNumber: 82,
                columnNumber: 15
              }, void 0),
              "Back to home"
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 78,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-5", children: "We're hiring · Aarschot" }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-6xl font-display font-semibold text-balance leading-[1.05]", children: [
          "Business Development Representative",
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: "(BDR)" }, void 0, false, {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl mx-auto", children: "B2B outbound sales at REDFOXX — the phone is your most important weapon." }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Briefcase, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, void 0),
            "Full-time"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, void 0),
            "Aarschot, Belgium"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Globe, { className: "h-4 w-4 text-primary-glow" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, void 0),
            "On-site"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "mailto:helena@redfoxx.be?subject=BDR%20application%20%E2%80%94%20REDFOXX",
            className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform",
            children: [
              "Apply now",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
                fileName: "/dev-server/src/pages/Jobs.tsx",
                lineNumber: 117,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Jobs.tsx",
            lineNumber: 112,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass rounded-3xl p-8 md:p-12", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-balance leading-relaxed", children: "REDFOXX helps technical B2B companies grow with outbound sales that actually works. No call center, no random dialing. We build predictable prospecting systems and run campaigns as an extension of our clients' sales team." }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-lg md:text-xl text-balance leading-relaxed", children: "We're growing fast, also across borders. And we're looking for BDRs who help build — not just call." }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-8 font-display text-2xl md:text-3xl gradient-text", children: "We win. You win bigger." }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-semibold mb-8", children: "What you'll do" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: RESPONSIBILITIES.map((item, i) => /* @__PURE__ */ jsxDEV(
        "li",
        {
          className: "flex gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur p-5",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "mt-1 shrink-0 h-2 w-2 rounded-full bg-gradient-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 153,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-semibold mb-8", children: "Who you are" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: REQUIREMENTS.map((item, i) => /* @__PURE__ */ jsxDEV(
        "li",
        {
          className: "flex gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur p-5",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "mt-1 shrink-0 h-2 w-2 rounded-full bg-gradient-primary" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 175,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-display font-semibold mb-8", children: "What we offer" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 md:grid-cols-2", children: BENEFITS.map((b, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "rounded-2xl border border-border bg-card/40 backdrop-blur p-6",
          children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-display text-lg md:text-xl mb-2", children: b.title }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 201,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: b.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 197,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl", children: /* @__PURE__ */ jsxDEV("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border border-border bg-card/40 backdrop-blur p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-mono uppercase tracking-wider text-primary-glow mb-4", children: "Perks" }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 216,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: PERKS.map((p) => /* @__PURE__ */ jsxDEV("li", { className: "text-base text-muted-foreground", children: p }, p, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 221,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 219,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border border-border bg-card/40 backdrop-blur p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-mono uppercase tracking-wider text-primary-glow mb-4", children: "Languages" }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: LANGUAGES.map((l) => /* @__PURE__ */ jsxDEV("li", { className: "text-base text-muted-foreground", children: l }, l, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 233,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border border-border bg-card/40 backdrop-blur p-6 md:col-span-2", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-mono uppercase tracking-wider text-primary-glow mb-4", children: "Application questions" }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: APPLICATION_QUESTIONS.map((q) => /* @__PURE__ */ jsxDEV("li", { className: "text-base text-muted-foreground", children: q }, q, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 245,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 239,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxDEV("div", { className: "container max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display font-semibold text-balance", children: "Interested?" }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 258,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl mx-auto", children: "Send a short email or message. Don't tell us what's on your CV. Tell us why you dare to pick up the phone." }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 261,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "mailto:helena@redfoxx.be?subject=BDR%20application%20%E2%80%94%20REDFOXX",
          className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform",
          children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, void 0),
            "helena@redfoxx.be",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" }, void 0, false, {
              fileName: "/dev-server/src/pages/Jobs.tsx",
              lineNumber: 272,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/Jobs.tsx",
          lineNumber: 266,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/Jobs.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 257,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Jobs.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Jobs.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, void 0);
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  const url = `https://redfoxx.be${location.pathname}`;
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Head, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Page Not Found — REDFOXX" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: "The page you're looking for doesn't exist. Head back to the REDFOXX homepage." }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "noindex, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: url }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Page Not Found — REDFOXX" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "The page you're looking for doesn't exist." }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: url }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "mb-4 text-4xl font-bold", children: "404" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/NotFound.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0);
};
const queryClient = new QueryClient();
function Layout() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(LanguageProvider, { children: /* @__PURE__ */ jsxDEV(TooltipProvider, { children: [
    /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
      fileName: "/dev-server/src/routes.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster$1, {}, void 0, false, {
      fileName: "/dev-server/src/routes.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/dev-server/src/routes.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/routes.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/dev-server/src/routes.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/dev-server/src/routes.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
      fileName: "/dev-server/src/routes.tsx",
      lineNumber: 31,
      columnNumber: 14
    }, void 0),
    children: [
      { index: true, element: /* @__PURE__ */ jsxDEV(Index, {}, void 0, false, {
        fileName: "/dev-server/src/routes.tsx",
        lineNumber: 33,
        columnNumber: 31
      }, void 0) },
      { path: "jobs", element: /* @__PURE__ */ jsxDEV(Jobs, {}, void 0, false, {
        fileName: "/dev-server/src/routes.tsx",
        lineNumber: 34,
        columnNumber: 32
      }, void 0) },
      { path: "*", element: /* @__PURE__ */ jsxDEV(NotFound, {}, void 0, false, {
        fileName: "/dev-server/src/routes.tsx",
        lineNumber: 35,
        columnNumber: 29
      }, void 0) }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
