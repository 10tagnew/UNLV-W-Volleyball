import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import StadiumEnergy from "@/pages/StadiumEnergy";
import CrimsonCourt from "@/pages/CrimsonCourt";
import DesertGold from "@/pages/DesertGold";

const queryClient = new QueryClient();

const DESIGNS = [
  { path: "/", label: "Stadium Energy", num: "01" },
  { path: "/crimson-court", label: "Crimson Court", num: "02" },
  { path: "/desert-gold", label: "Desert Gold", num: "03" },
] as const;

function DesignSwitcherNav() {
  const [location, setLocation] = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-xl">
      {DESIGNS.map((design) => {
        const active = location === design.path;
        return (
          <button
            key={design.path}
            onClick={() => setLocation(design.path)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black tracking-[0.15em] uppercase transition-all duration-200 ${
              active
                ? "bg-[#CC0000] text-white"
                : "text-white/50 hover:text-white hover:bg-white/8"
            }`}
          >
            <span className={`text-[8px] ${active ? "text-white/70" : "text-white/30"}`}>
              {design.num}
            </span>
            {design.label}
          </button>
        );
      })}
    </div>
  );
}

function AppNav() {
  const [location] = useLocation();
  const isDark = location === "/" || location === "/desert-gold";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-black/80 border-white/5"
          : "bg-white/90 border-black/8"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-300 ${
            isDark ? "bg-[#CC0000]" : "bg-[#CC0000]"
          }`}
        >
          <span className="font-[Barlow_Condensed] text-white text-xl font-black">R</span>
        </div>
        <div className="flex flex-col">
          <span
            className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/90" : "text-[#0d0d0d]/90"
            }`}
          >
            Rebels Volleyball
          </span>
          <span
            className={`text-[8px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/40" : "text-black/40"
            }`}
          >
            2026 Recruiting
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {["Schedule", "Roster", "Recruiting", "Contact"].map((item) => (
          <button
            key={item}
            className={`hidden md:block text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${
              isDark ? "text-white/60 hover:text-white" : "text-black/50 hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          className={`flex flex-col gap-[5px] group`}
          data-testid="button-menu"
        >
          <div
            className={`w-5 h-[2px] transition-colors ${isDark ? "bg-white/70 group-hover:bg-white" : "bg-black/70 group-hover:bg-black"}`}
          />
          <div
            className={`w-5 h-[2px] transition-colors ${isDark ? "bg-white/70 group-hover:bg-white" : "bg-black/70 group-hover:bg-black"}`}
          />
        </button>
      </div>
    </nav>
  );
}

function Router() {
  return (
    <>
      <AppNav />
      <DesignSwitcherNav />
      <Switch>
        <Route path="/" component={StadiumEnergy} />
        <Route path="/crimson-court" component={CrimsonCourt} />
        <Route path="/desert-gold" component={DesertGold} />
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
