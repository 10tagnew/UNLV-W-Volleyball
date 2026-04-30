import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import heroRef from "@assets/UNLV_Volleyball_—_Stadium_Energy_Homepage_1777519729850.jpg";
import { useEffect } from "react";

const queryClient = new QueryClient();

function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0000] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0000]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-sm">
            <span className="font-[Barlow_Condensed] text-2xl font-bold">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.2em] text-white/90">REBELS VOLLEYBALL</span>
            <span className="text-[10px] tracking-[0.1em] text-white/50">2026 RECRUITING</span>
          </div>
        </div>
        <button 
          className="flex items-center gap-3 group"
          data-testid="button-menu"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-white/90 group-hover:text-white transition-colors">MENU</span>
          <div className="flex flex-col gap-[5px]">
            <div className="w-6 h-[2px] bg-white/90 group-hover:bg-white transition-colors"></div>
            <div className="w-6 h-[2px] bg-white/90 group-hover:bg-white transition-colors"></div>
          </div>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: y1 }}
            src={heroRef} 
            alt="UNLV Volleyball Arena" 
            className="w-full h-[120%] object-cover object-center opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.6)_0%,rgba(10,0,0,0.95)_60%,rgba(10,0,0,1)_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0000]/50 to-[#0a0000]"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center w-full px-4"
          style={{ y: y1, opacity: opacity1 }}
        >
          <div className="mb-6 overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-primary text-sm md:text-base tracking-[0.5em] font-medium"
            >
              — MAKE HISTORY —
            </motion.p>
          </div>
          
          <h1 className="font-[Barlow_Condensed] text-[15vw] leading-[0.85] font-black uppercase text-white drop-shadow-2xl flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block w-full text-center"
            >
              REBEL
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block w-full text-center"
            >
              RISING
            </motion.span>
          </h1>
        </motion.div>
      </section>

      {/* Recruiting Pitch */}
      <section className="relative z-20 bg-[#0a0000] py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[Barlow_Condensed] text-5xl md:text-7xl font-bold mb-8 uppercase tracking-wide">
              Join the <span className="text-primary">Rebellion</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              We are building something undeniable in Las Vegas. A culture of excellence, a relentless pursuit of greatness, and a brotherhood of athletes who demand more from themselves and each other. The lights are bright. The stage is set. Are you ready to rise?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "3", label: "MWC CHAMPIONSHIPS" },
              { number: "25+", label: "ALL-AMERICANS" },
              { number: "Top 25", label: "NATIONAL RANKING" },
              { number: "10k", label: "ARENA CAPACITY" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-[Barlow_Condensed] text-5xl md:text-6xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-xs tracking-[0.2em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(204,0,0,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[Barlow_Condensed] text-4xl md:text-6xl font-bold mb-10 uppercase">
              Your Legacy Starts Here
            </h2>
            <button 
              className="group relative inline-flex items-center gap-4 bg-primary hover:bg-white text-white hover:text-black px-10 py-5 font-bold tracking-[0.1em] text-sm uppercase transition-all duration-300"
              data-testid="button-cta"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 border border-primary scale-[1.05] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#050000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-sm">
              <span className="font-[Barlow_Condensed] text-xl font-bold">R</span>
            </div>
            <span className="text-xs tracking-[0.2em] font-bold text-white/90">UNLV WOMEN'S VOLLEYBALL</span>
          </div>
          <p className="text-[10px] tracking-[0.1em] text-white/40 uppercase">
            &copy; {new Date().getFullYear()} UNLV Athletics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
