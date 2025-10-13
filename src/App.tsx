import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Materials from "./pages/Materials";
import Publications from "./pages/Publications";
import MoU from "./pages/MoU";
import Competition from "./pages/Competition";
import Registration from "./pages/Registration";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/mou" element={<MoU />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accommodation" element={<Accommodation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
