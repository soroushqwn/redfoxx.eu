import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Phone, Sparkles } from "lucide-react";
import foxEmblem from "@/assets/fox-emblem.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-ember" />
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Outbound Sales · Technical B2B
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-balance leading-[0.95]"
            >
              We book qualified <br className="hidden md:block" />
              meetings for{" "}
              <span className="gradient-text">technical B2B</span>{" "}
              companies.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              REDFOXX is the extension of your sales team. We design a multichannel
              outbound strategy tailored to your ICP, market, and sales cycle —
              cold email, cold calling, LinkedIn, or a mix. The result: qualified
              meetings, straight into your calendar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-ember transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 rounded-full animate-shine" />
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-card transition-colors"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              {["Multichannel SDR team", "AI-powered personalization", "Weekly Notion reports"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                  <span>{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Fox + floating cards */}
          <div className="relative h-[520px] hidden lg:block">
            <motion.img
              src={foxEmblem}
              alt="REDFOXX emblem"
              width={1024}
              height={1024}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 m-auto h-[420px] w-[420px] object-contain drop-shadow-[0_30px_80px_rgba(239,43,45,0.45)] animate-float"
            />

            {/* Floating card: Meeting booked */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-4 -left-4 card-glass rounded-2xl p-4 w-64 shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <Calendar className="h-4.5 w-4.5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Meeting booked</p>
                    <span className="text-[10px] font-mono text-primary-glow">NEW</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">CTO · Siemens Digital — Thu 14:30</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: Reply rate */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-12 -right-4 card-glass rounded-2xl p-4 w-60 shadow-card"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Reply rate</p>
                <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              </div>
              <p className="text-2xl font-display font-semibold">12.4%</p>
              <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.4, delay: 1.1 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </motion.div>

            {/* Floating card: Dialing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-0 left-6 card-glass rounded-2xl p-3 flex items-center gap-3 shadow-card"
            >
              <div className="relative h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Dialing</p>
                <p className="text-sm font-medium">+32 · Tier 1 prospect</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
