import { useState } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import StadiumEnergy from "@/pages/StadiumEnergy";
import Academics from "@/pages/Academics";
import FullPageNav from "@/components/FullPageNav";

const queryClient = new QueryClient();

function AppNav({ onMenuOpen }: { onMenuOpen: () => void }) {
  const [location] = useLocation();
  const isDark = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-black/80 border-white/5"
          : "bg-white/90 border-black/8"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#CC0000] flex items-center justify-center rounded-sm">
          <span className="font-['Bebas_Neue'] text-white text-xl leading-none">R</span>
        </div>
        <div className="flex flex-col">
          <span
            className={`text-[10px] font-['Inter'] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/90" : "text-[#0d0d0d]/90"
            }`}
          >
            Rebels Volleyball
          </span>
          <span
            className={`text-[8px] font-['Inter'] tracking-[0.15em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/40" : "text-black/40"
            }`}
          >
            2026 Recruiting
          </span>
        </div>
      </div>

      {/* Hamburger */}
      <button
        onClick={onMenuOpen}
        className="flex items-center gap-3 group"
        aria-label="Open navigation"
        data-testid="button-menu"
      >
        <span
          className={`font-['Inter'] text-[10px] font-bold tracking-[0.25em] uppercase transition-colors hidden sm:block ${
            isDark ? "text-white/50 group-hover:text-white" : "text-black/40 group-hover:text-black"
          }`}
        >
          Menu
        </span>
        <div className="flex flex-col gap-[5px] p-1">
          <div
            className={`w-5 h-[2px] transition-colors ${
              isDark ? "bg-white/70 group-hover:bg-white" : "bg-black/60 group-hover:bg-black"
            }`}
          />
          <div
            className={`w-5 h-[2px] transition-colors ${
              isDark ? "bg-white/70 group-hover:bg-white" : "bg-black/60 group-hover:bg-black"
            }`}
          />
        </div>
      </button>
    </nav>
  );
}

function Router() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <AppNav onMenuOpen={() => setNavOpen(true)} />
      <FullPageNav open={navOpen} onClose={() => setNavOpen(false)} />
      <Switch>
        <Route path="/" component={StadiumEnergy} />
        <Route path="/academics" component={Academics} />
        <Route component={NotFound} />
      </Switch>
    </>
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
