import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import foxEmblem from "@/assets/redfoxx-3d.png";
import { HeroGrid } from "./HeroGrid";
import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();
  const h = t.hero;
  const rotations = h.cards.meetingRotation;
  const [rIdx, setRIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRIdx((i) => (i + 1) % rotations.length), 2800);
    return () => clearInterval(id);
  }, [rotations.length]);
  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <HeroGrid sectionRef={sectionRef} />
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-ember pointer-events-none" />
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
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
              {h.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-balance leading-[0.95]"
            >
              {h.title1} <br className="hidden md:block" />
              {h.title2}{" "}
              <span className="gradient-text">{h.titleAccent}</span>{" "}
              {h.title3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              {h.desc}
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
                {h.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-card transition-colors"
              >
                {h.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              {h.trust.map((tr) => (
                <div key={tr} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                  <span>{tr}</span>
                </div>
              ))}
            </motion.div>
          </div>

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
                    <p className="text-sm font-medium">{h.cards.meetingBooked}</p>
                    <AnimatePresence mode="wait">
                      {rotations[rIdx].isNew && (
                        <motion.span
                          key={`new-${rIdx}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.25 }}
                          className="text-[10px] font-mono text-primary-glow"
                        >
                          {h.cards.new}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative h-4 mt-0.5 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={rIdx}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-xs text-muted-foreground truncate"
                      >
                        {rotations[rIdx].detail}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

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
                <p className="text-xs font-mono text-muted-foreground">{h.cards.dialing}</p>
                <p className="text-sm font-medium">{h.cards.dialingDetail}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
