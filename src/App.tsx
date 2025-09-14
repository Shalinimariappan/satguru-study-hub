import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Godwin from "./pages/Godwin";
import Malini from "./pages/Malini";
import Keerthika from "./pages/Keerthika";
import Results from "./pages/Results";
import Events from "./pages/Events";
import Courses from "./pages/Courses";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NoteResources from "./pages/NoteResources";
import { AuthProvider, useAuth } from "./AuthContext";
import WhatsAppButton from "./pages/WhatsAppButton";
import ExportUsers from "./pages/ExportUsers";

// 🔑 Auth Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const queryClient = new QueryClient();

// 🔒 Protected Route
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/signin" />;

  return children;
}

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
                {/* Public Routes */}
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/godwin" element={<Godwin />} />
                  <Route path="/malini" element={<Malini />} />
                  <Route path="/keerthika" element={<Keerthika />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/notes" element={<Notes/>} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin/export"element={<PrivateRoute><ExportUsers /></PrivateRoute>}/>
                </Route>

                {/* 🔑 Auth Routes */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />

                {/* 🔒 Protected Routes */}
                <Route
                  path="/notes"
                  element={
                    <PrivateRoute>
                      <Notes />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/notes/:subject"
                  element={
                    <PrivateRoute>
                      <NoteResources />
                    </PrivateRoute>
                  }
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <WhatsAppButton />
          </div>
        </div>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
