import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import YouTubeBackground from "@/components/YouTubeBackground";

const YOUTUBE_ID = "_06FQHXf0a0";

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-[2px] bg-[#CF0A2C]" />
      <p className={`font-sans text-[10px] font-semibold tracking-[0.5em] uppercase ${light ? "text-[#CF0A2C]" : "text-[#CF0A2C]"}`}>
        {text}
      </p>
    </div>
  );
}

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const STATS = [
  { number: "3,100", label: "Seating Capacity" },
  { number: "78,300", label: "Sq Ft Facility" },
  { number: "$16.8M", label: "Built in 2001" },
  { number: "1978", label: "Program Founded" },
  { number: "MWC", label: "Conference" },
];

const HISTORY = [
  {
    year: "1978",
    headline: "Program Founded",
    body: "UNLV launched its women's volleyball program as a Division I independent, finishing the inaugural season with a 10-7 record and establishing a foundation that would grow into one of the Mountain West's most competitive programs.",
  },
  {
    year: "2001",
    headline: "Cox Pavilion Opens",
    body: "Cox Pavilion opened as a dedicated home for UNLV women's athletics. The $16.8 million facility gave the volleyball and women's basketball programs a state-of-the-art venue built specifically for their game-day experience.",
  },
  {
    year: "2007",
    headline: "First NCAA Tournament",
    body: "Under head coach Kathy Gillen, UNLV posted a 24-6 record, won the Mountain West tournament, and made its first-ever NCAA Division I tournament appearance, announcing the program on a national stage.",
  },
  {
    year: "Now",
    headline: "Building Something New",
    body: "Under head coach Dani Busboom Kelly, the Rebels are building toward a championship standard. Cox Pavilion is where that future is being forged, one match at a time.",
  },
];

export default function ThomasMack() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0d0d0d] overflow-x-hidden font-sans">

      {/* ── VIDEO HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-black" style={{ height: "100svh", minHeight: "560px" }}>
        {/* YouTube background */}
        <YouTubeBackground videoId={YOUTUBE_ID} opacity={0.55} />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

        {/* Hero copy */}
        <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <Eyebrow text="Las Vegas, Nevada · UNLV Women's Volleyball" />

            <h1
              className="font-['Bebas_Neue'] text-white leading-[0.88] mb-5"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Cox<br />
              <span className="text-[#CF0A2C]">Pavilion</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-light tracking-widest uppercase">
              Home of the Rebels. Right in the Heart of Las Vegas.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-white/40" />
            </motion.div>
            <span className="font-sans text-[8px] tracking-[0.4em] text-white/30 uppercase rotate-90 origin-center mt-4">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO TEXT ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-base md:text-lg text-black/60 leading-relaxed max-w-3xl font-light">
              Cox Pavilion is home to UNLV Women's Volleyball. Opened in 2001 and connected to the adjacent Thomas &amp; Mack Center, the 78,300 square-foot facility was built specifically for the Rebels' women's programs and delivers an intimate, electric atmosphere that recruits and opponents both remember.
            </p>
            <p className="font-sans text-base md:text-lg text-black/50 leading-relaxed max-w-3xl font-light mt-5">
              The result of a partnership between Cox Communications and UNLV, the $16.8 million facility gave the volleyball program a true home court for the first time and helped raise the standard for women's athletics on campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────── */}
      <section className="bg-[#CF0A2C]">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-white text-center py-10 px-4 border-b md:border-b-0 border-white/20 last:border-b-0"
            >
              <div className="font-['Bebas_Neue'] text-4xl md:text-5xl mb-1">{stat.number}</div>
              <div className="font-sans text-[9px] font-semibold tracking-[0.25em] text-white/70 uppercase leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── THE SHARK TANK ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Home Court" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Where the Rebels Play." />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="pt-2"
          >
            <p className="font-sans text-base md:text-lg text-black/60 leading-relaxed font-light">
              With seating for up to 3,100 fans, Cox Pavilion creates the kind of tight, loud, focused atmosphere that gives the Rebels a genuine home court advantage. Every serve, every kill, every block echoes inside these walls in a way that larger arenas simply cannot match.
            </p>
            <p className="font-sans text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              The ground floor houses dedicated locker rooms, player lounges, and practice courts for both volleyball and basketball, giving student-athletes a world-class training environment steps away from the competition floor. Everything you need to compete at the highest level is under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INTERIOR PHOTO — full width ────────────────────────────────── */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full overflow-hidden bg-[#0d0d0d]"
          style={{ height: "clamp(260px, 41.6vw, 500px)" }}
        >
          <img
            src="https://unlvrebels.com/images/2007/10/8/TMC-Interior-07-250.jpg"
            alt="Thomas & Mack Center arena interior, full bowl view"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* ── WORLD-CLASS VENUE ──────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Complex" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Next Door to Greatness." />
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="pt-2"
          >
            <p className="font-sans text-base md:text-lg text-black/60 leading-relaxed font-light">
              Cox Pavilion sits directly connected to the Thomas &amp; Mack Center, one of the most storied arenas in college sports history. As a Rebel, you train and compete within one of the most active and versatile sports complexes in the country, surrounded daily by a culture built on big moments.
            </p>
            <p className="font-sans text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              The broader Thomas &amp; Mack complex hosts the National Finals Rodeo, NBA Summer League, Mountain West tournaments, and championship boxing. The energy and expectation that fill this campus every season are unlike anything else in college athletics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HISTORIC MOMENTS ───────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Eyebrow text="Program History" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Built From the Ground Up." />
            </h2>
            <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed font-light mt-6 max-w-2xl">
              The UNLV Women's Volleyball program has been building its story since 1978. Cox Pavilion is where the next chapter gets written.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-t border-white/10">
            {HISTORY.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="border-b border-white/10 py-10 px-0 md:px-8 first:md:pl-0 [&:nth-child(odd)]:md:border-r [&:nth-child(odd)]:md:pr-8 [&:nth-child(even)]:md:pl-8"
              >
                <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#CF0A2C] uppercase mb-3">
                  {item.year}
                </p>
                <h3 className="font-['Bebas_Neue'] text-white text-2xl md:text-3xl mb-3 leading-tight">
                  {item.headline}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTERIOR PHOTO + COME EXPERIENCE IT — 50/50 ────────────────── */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          {/* Left: exterior photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden bg-[#0d0d0d]"
            style={{ minHeight: "400px" }}
          >
            <img
              src="https://unlvrebels.com/images/2007/10/8/TMC-Exterior-07-Other-250.jpg"
              alt="Thomas & Mack Center exterior"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right: Come Experience It */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#CF0A2C] flex flex-col justify-center px-10 md:px-16 py-16"
          >
            <Eyebrow text="Come Experience It" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
            >
              Come See It for Yourself
            </h2>
            <p className="font-sans text-base text-white/80 leading-relaxed font-light mb-4">
              Cox Pavilion is where UNLV Women's Volleyball comes to life. The crowd is close, the energy is real, and the atmosphere on a big match night is something every recruit needs to feel in person.
            </p>
            <p className="font-sans text-base text-white/65 leading-relaxed font-light">
              Come visit campus, walk the facility, and see why Las Vegas and UNLV are the right place to build your career as a student-athlete. Your future starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="py-10 px-8 md:px-16 border-t border-black/10 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/main_logo.svg" alt="UNLV Rebels" className="h-8 w-auto brightness-0 invert" />
          <p className="font-sans text-[9px] tracking-[0.15em] text-white/25 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
