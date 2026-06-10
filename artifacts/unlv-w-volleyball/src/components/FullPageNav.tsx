import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X } from "lucide-react";

interface FullPageNavProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Academics", path: "/academics" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "The Pavilion", path: "/arena" },
  { label: "Schedule", path: "#" },
  { label: "Roster", path: "#" },
  { label: "Recruiting", path: "#" },
  { label: "Contact", path: "#" },
];

const CONTACT_LINES = [
  { label: "Head Coach", value: "Dani Busboom Kelly" },
  { label: "Program", value: "UNLV Women's Volleyball" },
  { label: "Location", value: "Las Vegas, Nevada" },
  { label: "Conference", value: "Mountain West" },
];

export default function FullPageNav({ open, onClose }: FullPageNavProps) {
  const [location, setLocation] = useLocation();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Close when route changes
  useEffect(() => { onClose(); }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  function navigate(path: string) {
    if (path === "#") return;
    setLocation(path);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="fullnav"
          className="fixed inset-0 z-[200] bg-[#080000] flex flex-col overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Red accent line — top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Top bar — logo + close */}
          <div className="flex items-center justify-between px-6 md:px-14 py-5">
            <div className="flex items-center">
              <img
                src="/main_logo.svg"
                alt="UNLV Rebels"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>

            <motion.button
              onClick={onClose}
              className="flex items-center gap-2 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close navigation"
            >
              <span className="font-['Inter'] text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase group-hover:text-white/80 transition-colors hidden sm:block">
                Close
              </span>
              <div className="w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <X className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </motion.button>
          </div>

          {/* Main content */}
          <div className="flex flex-1 min-h-0 px-6 md:px-14 pb-8 md:pb-14 gap-0 md:gap-16">

            {/* Left — Nav links */}
            <nav className="flex flex-col justify-center flex-1 gap-0">
              <motion.p
                className="font-['Inter'] text-[9px] font-semibold tracking-[0.5em] text-[#CC0000] uppercase mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Navigation
              </motion.p>

              {NAV_LINKS.map((link, i) => {
                const isActive = location === link.path && link.path !== "#";
                const isPlaceholder = link.path === "#";
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden border-b border-white/5 last:border-b-0"
                  >
                    <button
                      onClick={() => navigate(link.path)}
                      disabled={isPlaceholder}
                      className={`
                        group w-full text-left py-4 md:py-5 flex items-center justify-between
                        transition-colors duration-200
                        ${isPlaceholder ? "cursor-default" : "cursor-pointer"}
                      `}
                    >
                      <span
                        className={`
                          font-['Bebas_Neue'] leading-none tracking-wide transition-colors duration-200
                          ${isActive
                            ? "text-[#CC0000]"
                            : isPlaceholder
                              ? "text-white/20"
                              : "text-white group-hover:text-[#CC0000]"
                          }
                        `}
                        style={{ fontSize: "clamp(2.2rem, 7vw, 6rem)" }}
                      >
                        {link.label}
                      </span>

                      <span className={`
                        font-['Inter'] text-[9px] tracking-[0.3em] uppercase self-center ml-4
                        ${isActive ? "text-[#CC0000]" : isPlaceholder ? "text-white/15" : "text-white/25 group-hover:text-white/50"}
                        transition-colors
                      `}>
                        {isActive ? "Current" : isPlaceholder ? "Soon" : `0${i + 1}`}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </nav>

            {/* Right — Info panel (desktop only) */}
            <motion.aside
              className="hidden md:flex flex-col justify-end w-[280px] shrink-0 pb-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="border-t border-white/10 pt-8 space-y-6">
                {CONTACT_LINES.map((line) => (
                  <div key={line.label}>
                    <p className="font-['Inter'] text-[9px] font-semibold tracking-[0.4em] text-[#CC0000] uppercase mb-1">
                      {line.label}
                    </p>
                    <p className="font-['Inter'] text-sm text-white/60">{line.value}</p>
                  </div>
                ))}
              </div>

              {/* Decorative large R */}
              <div
                className="mt-10 font-['Bebas_Neue'] text-[12rem] leading-none text-white/[0.03] select-none"
                aria-hidden
              >
                R
              </div>
            </motion.aside>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="px-6 md:px-14 py-4 border-t border-white/5 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-['Inter'] text-[9px] tracking-[0.2em] text-white/20 uppercase">
              &copy; {new Date().getFullYear()} UNLV Athletics
            </p>
            <div className="flex items-center gap-6">
              {["Instagram", "Twitter", "YouTube"].map((s) => (
                <button
                  key={s}
                  className="font-['Inter'] text-[9px] tracking-[0.25em] text-white/25 uppercase hover:text-white/60 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
