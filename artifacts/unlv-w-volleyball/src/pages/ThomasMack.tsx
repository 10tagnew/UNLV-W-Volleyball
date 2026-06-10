import { motion } from "framer-motion";
import { useEffect } from "react";

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-[2px] bg-[#CF0A2C]" />
      <p className="font-sans text-[10px] font-semibold tracking-[0.5em] text-[#CF0A2C] uppercase">
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
  { number: "18,776", label: "Seating Capacity" },
  { number: "42,000", label: "Sq Ft Concourse" },
  { number: "104 ft", label: "Floor to Ceiling" },
  { number: "458–101", label: "All-Time Home Record" },
  { number: "7.4M+", label: "Fans All-Time" },
];

const HISTORY = [
  {
    year: "1983",
    headline: "Grand Opening",
    body: "The grand opening on December 16, 1983, was celebrated with performances by Frank Sinatra, Dean Martin, and Diana Ross.",
  },
  {
    year: "1984",
    headline: "NBA History Made",
    body: "Less than eight months after opening, the arena hosted NBA history when Kareem Abdul-Jabbar broke Wilt Chamberlain's all-time scoring record in a regular-season game between the Lakers and Jazz.",
  },
  {
    year: "1999",
    headline: "Nevada's Biggest Night",
    body: "In November 1999, the venue set the record for the highest-grossing single event in Nevada history when Evander Holyfield faced Lennox Lewis, generating over $18 million.",
  },
  {
    year: "2007",
    headline: "NBA All-Star Game",
    body: "The Thomas & Mack Center hosted the NBA All-Star Game, the first time the event was held in a city without an NBA franchise.",
  },
];

export default function ThomasMack() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0d0d0d] overflow-x-hidden font-sans">

      {/* HERO */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-8 md:px-16 bg-white">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow text="Las Vegas, Nevada · UNLV Athletics" />

            <h1
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.88] mb-6"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Thomas &amp; Mack<br />
              <span className="text-[#CF0A2C]">Center</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-[#808080] leading-relaxed max-w-2xl font-light tracking-wide uppercase mb-3">
              Home of the Runnin' Rebels. The Shark Tank. Las Vegas's Court.
            </p>

            <p className="font-sans text-base md:text-lg text-black/60 leading-relaxed max-w-3xl font-light mt-6">
              There's no building quite like it in college basketball. Located on the campus of the University of Nevada, Las Vegas, the Thomas &amp; Mack Center has been home to the Runnin' Rebels since 1983 and in that time, it's become one of the most iconic arenas in the sport.
            </p>

            <p className="font-sans text-base md:text-lg text-black/55 leading-relaxed max-w-3xl font-light mt-5">
              Named in honor of prominent Nevada bankers E. Parry Thomas and Jerome D. Mack, who donated the original funds for feasibility and land studies, the building carries the spirit of the city it calls home: bold, electric, and built for big moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE: Full-width arena interior */}
      <section className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full overflow-hidden bg-[#0d0d0d]"
          style={{ height: "clamp(260px, 41.6vw, 500px)" }}
        >
          <img
            src="https://unlvrebels.com/images/2007/10/8/TMC-Interior-07-250.jpg"
            alt="Thomas &amp; Mack Center arena interior, full bowl view"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
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

      {/* THE SHARK TANK */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Shark Tank" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Where Opponents Come to Lose." />
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
              The arena earned the nickname "the Shark Tank" after legendary UNLV coach Jerry Tarkanian, known as Tark the Shark, who won a national championship in 1990 and led the program to four Final Fours. That nickname stuck because it fits. When the Rebels are rolling and the building is full, there's nowhere opponents want to be less.
            </p>
            <p className="font-sans text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              In 559 games played at the Thomas &amp; Mack Center, UNLV has drawn over 7.4 million fans and compiled a remarkable home record of 458 wins and 101 losses (.819), including a 59-game home winning streak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WORLD-CLASS VENUE */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <Eyebrow text="The Facility" />
            <h2
              className="font-['Bebas_Neue'] text-[#0d0d0d] leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="A World-Class Venue." />
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
              The Thomas &amp; Mack Center seats up to 18,776 fans for basketball, features a 42,000 square-foot concourse, and rises 104 feet from floor to ceiling. With 4,500 on-site parking spaces and an additional 6,500 on-campus spots, the game-day experience is built for fans.
            </p>
            <p className="font-sans text-base md:text-lg text-black/50 leading-relaxed font-light mt-6">
              The facility hosts championship boxing matches, the National Finals Rodeo, NBA exhibition games, Mountain West Basketball Tournaments, PBR World Finals, and the NBA Vegas Summer League, making it one of the most active and versatile arenas in the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HISTORIC MOMENTS */}
      <section className="py-24 md:py-36 px-8 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Eyebrow text="Historic Moments" />
            <h2
              className="font-['Bebas_Neue'] text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              <WordReveal text="Not Just a College Arena. A Landmark." />
            </h2>
            <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed font-light mt-6 max-w-2xl">
              The Thomas &amp; Mack Center isn't just a college arena. It's a landmark in sports history.
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

      {/* IMAGE PLACEHOLDER 2 + COME EXPERIENCE IT — 50/50 split */}
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

          {/* Right: Come Experience It copy */}
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
              Come Experience It
            </h2>
            <p className="font-sans text-base text-white/80 leading-relaxed font-light mb-4">
              The Thomas &amp; Mack Center is more than a venue. It's a proving ground. Every game played here carries the weight of 40-plus years of tradition, championship basketball, and some of the biggest moments in Las Vegas sports history.
            </p>
            <p className="font-sans text-base text-white/65 leading-relaxed font-light">
              For recruits, visiting the Shark Tank is a moment you don't forget. Come see where the Runnin' Rebels play and where your future might begin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-16 border-t border-black/10 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/main_logo.svg" alt="UNLV Rebels" className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="font-sans text-[9px] tracking-[0.15em] text-white/25 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
