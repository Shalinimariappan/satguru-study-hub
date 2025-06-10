import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignInPopup";
import NoteResources from "./pages/NoteResources";
import { AuthProvider } from "./AuthContext";
import WhatsAppButton from "./pages/WhatsAppButton"; // ✅ Import added

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <div className="relative min-h-screen">
          <div
            className="fixed inset-0 z-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
            style={{
              backgroundImage:
                "url('/lovable-uploads/258a9587-e030-4708-9a22-c5eb53234bc6.png')",
              backgroundSize: "1000px",
            }}
          />
          <div className="relative z-10">
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/notes/:subject" element={<NoteResources />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <WhatsAppButton /> {/* ✅ WhatsApp icon added */}
          </div>
        </div>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
