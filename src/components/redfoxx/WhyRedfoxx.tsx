import { motion } from "framer-motion";
import { ArrowRight, Check, MoveRight, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const WhyRedfoxx = () => {
  const { t } = useLang();
  const c = t.comparison;

  const renderCell = (val: string, isRedfoxx: boolean) => {
    if (val === "check") {
      return (
        <Check
          size={20}
          className={`mx-auto ${isRedfoxx ? "text-primary" : "text-foreground/70"}`}
        />
      );
    }
    if (val === "cross") {
      return <X size={20} className="mx-auto text-muted-foreground/70" />;
    }
    return (
      <span className="text-[13px] text-muted-foreground">{val}</span>
    );
  };

  return (
    <section id="why" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            {c.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance">
            {c.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {c.desc}
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border-gradient rounded-2xl bg-card/60 backdrop-blur overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]" style={{ tableLayout: "fixed" }}>
                <colgroup>
                  <col style={{ width: "28%" }} />
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "18%" }} />
                </colgroup>
                <thead>
                  <tr>
                    {c.headers.map((h, i) => {
                      const isRedfoxx = i === 1;
                      return (
                        <th
                          key={i}
                          className={`py-4 px-3 text-sm font-medium ${
                            i === 0 ? "text-left pl-6" : "text-center"
                          } ${
                            isRedfoxx
                              ? "bg-gradient-primary text-primary-foreground"
                              : "bg-secondary text-foreground"
                          }`}
                        >
                          {h}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row, rIdx) => {
                    const isLast = rIdx === c.rows.length - 1;
                    return (
                      <motion.tr
                        key={row.criterion}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: rIdx * 0.05 }}
                      >
                        <td
                          className={`py-4 pl-6 pr-3 text-sm text-foreground ${
                            isLast ? "" : "border-b border-border"
                          }`}
                        >
                          {row.criterion}
                        </td>
                        {row.cells.map((cell, cIdx) => {
                          const isRedfoxx = cIdx === 0;
                          return (
                            <td
                              key={cIdx}
                              className={`py-4 px-3 text-center ${
                                isRedfoxx ? "bg-primary/[0.06]" : ""
                              } ${isLast ? "" : "border-b border-border"}`}
                            >
                              {renderCell(cell, isRedfoxx)}
                            </td>
                          );
                        })}
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="md:hidden mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>{c.scrollHint}</span>
            <MoveRight size={14} />
          </div>

          <div className="text-center mt-12">
            <p className="italic text-foreground/80 text-lg">{c.tagline}</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform mt-6"
            >
              {c.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
