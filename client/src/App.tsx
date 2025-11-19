import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Governance from "./pages/Governance";
import History from "./pages/History";
import Issues from "./pages/Issues";
import Finance from "./pages/Finance";
import Roadmap from "./pages/Roadmap";
import FinanceLearn from "./pages/FinanceLearn";
import FAQ from "./pages/FAQ";
import BusinessDivision from "./pages/BusinessDivision";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/governance"} component={Governance} />
        <Route path={"/history"} component={History} />
        <Route path={"/issues"} component={Issues} />
        <Route path={"/finance"} component={Finance} />
        <Route path={"/finance-learn"} component={FinanceLearn} />
        <Route path={"/roadmap"} component={Roadmap} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/business-division"} component={BusinessDivision} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router base="/nihon-u-student-autonomy">
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
