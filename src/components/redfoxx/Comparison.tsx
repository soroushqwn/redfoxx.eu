import { motion } from "framer-motion";
import { Check, X, ArrowRight, MoveRight } from "lucide-react";

type Cell = { type: "check" | "cross" | "text"; value?: string };

const rows: { criterion: string; cells: Cell[] }[] = [
  {
    criterion: "Technische B2B-expertise",
    cells: [
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      { type: "text", value: "Afhankelijk" },
    ],
  },
  {
    criterion: "Multichannel geïntegreerd (call + email + LinkedIn)",
    cells: [
      { type: "check" },
      { type: "text", value: "Enkel call" },
      { type: "text", value: "Enkel email" },
      { type: "text", value: "Afhankelijk" },
    ],
  },
  {
    criterion: "Founder-led prospectie",
    cells: [
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      { type: "text", value: "Afhankelijk" },
    ],
  },
  {
    criterion: "Calls opgenomen, open rapportage",
    cells: [
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      { type: "text", value: "Afhankelijk" },
    ],
  },
  {
    criterion: "ROI-gegarandeerd 5:1 minimum",
    cells: [
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      { type: "cross" },
    ],
  },
  {
    criterion: "Operationeel binnen 1 à 2 weken",
    cells: [
      { type: "check" },
      { type: "check" },
      { type: "text", value: "Variabel" },
      { type: "text", value: "3 à 6 maanden ramp-up" },
    ],
  },
  {
    criterion: "Pay-per-demo prijsmodel",
    cells: [
      { type: "check" },
      { type: "cross" },
      { type: "cross" },
      { type: "text", value: "Vast loon" },
    ],
  },
];

const headers = ["", "REDFOXX", "Call center", "Lead gen agency", "Eigen SDR"];

const RED = "#CB0303";
const NAVY = "#0E2841";
const CREAM = "#F5F5F0";
const GREEN = "#1D9E75";
const SOFT_GREY = "#888780";
const TEXT_GREY = "#6B6B66";
const RED_TINT = "rgba(203, 3, 3, 0.05)";
const BORDER = "1px solid rgba(14, 40, 65, 0.08)";

const renderCell = (cell: Cell, isRedfoxx: boolean) => {
  if (cell.type === "check") {
    return <Check size={20} style={{ color: isRedfoxx ? GREEN : NAVY }} className="mx-auto" />;
  }
  if (cell.type === "cross") {
    return <X size={20} style={{ color: SOFT_GREY }} className="mx-auto" />;
  }
  return (
    <span style={{ fontSize: "13px", color: TEXT_GREY }}>{cell.value}</span>
  );
};

export const Comparison = () => {
  return (
    <section id="vergelijking" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary-glow mb-4">
            Vergelijking
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-balance" style={{ color: NAVY }}>
            Niet elke outbound-aanpak is hetzelfde
          </h2>
          <p className="mt-5 text-base md:text-lg" style={{ color: "#4B5563" }}>
            Je kan kiezen voor een call center, een lead gen agency, of zelf een SDR aanwerven. Hier is wat je in de praktijk krijgt.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <div className="overflow-x-auto md:overflow-visible">
            <div
              className="rounded-[12px] overflow-hidden"
              style={{
                background: CREAM,
                border: "1px solid rgba(14, 40, 65, 0.1)",
                minWidth: "800px",
              }}
            >
              <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
                <thead>
                  <tr>
                    {headers.map((h, i) => {
                      const isRedfoxx = i === 1;
                      return (
                        <th
                          key={i}
                          style={{
                            background: isRedfoxx ? RED : NAVY,
                            color: CREAM,
                            fontWeight: 500,
                            padding: "16px 12px",
                            textAlign: i === 0 ? "left" : "center",
                            paddingLeft: i === 0 ? "24px" : "12px",
                            width: i === 0 ? "28%" : "18%",
                          }}
                        >
                          {h}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => {
                    const isLast = rIdx === rows.length - 1;
                    return (
                      <motion.tr
                        key={row.criterion}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.4, delay: rIdx * 0.05 }}
                      >
                        <td
                          style={{
                            padding: "16px 12px 16px 24px",
                            borderBottom: isLast ? "none" : BORDER,
                            color: NAVY,
                            fontWeight: 400,
                            textAlign: "left",
                          }}
                        >
                          {row.criterion}
                        </td>
                        {row.cells.map((cell, cIdx) => {
                          const isRedfoxx = cIdx === 0;
                          return (
                            <td
                              key={cIdx}
                              style={{
                                padding: "16px 12px",
                                borderBottom: isLast ? "none" : BORDER,
                                background: isRedfoxx ? RED_TINT : "transparent",
                                textAlign: "center",
                              }}
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
          </div>

          <div className="md:hidden mt-3 flex items-center justify-center gap-2 text-xs" style={{ color: TEXT_GREY }}>
            <span>Scroll</span>
            <MoveRight size={14} />
          </div>

          <div className="text-center" style={{ marginTop: "48px" }}>
            <p className="italic" style={{ color: NAVY }}>We win. You win bigger.</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform mt-6"
            >
              Plan een verkenningsgesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
