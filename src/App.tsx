import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ExploreStreams from "./pages/ExploreStreams";
import After10th from "./pages/After10th";
import After12th from "./pages/After12th";
import CourseByStream from "./pages/CourseByStream";
import CollegeDetail from "./pages/CollegeDetail";
import ChatbotPage from "./pages/Chatbot";
import { RedirectToDashboard, DashboardRouter } from "./AppHelpers";
import ResetAppButton from "./components/ResetAppButton";

import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ResetAppButton />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Main app pages (protected) */}
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/explore" element={<ProtectedRoute><ExploreStreams /></ProtectedRoute>} />
          <Route path="/after10th" element={<ProtectedRoute><After10th /></ProtectedRoute>} />
          <Route path="/after12th" element={<ProtectedRoute><After12th /></ProtectedRoute>} />
          <Route path="/courses/:stream" element={<ProtectedRoute><CourseByStream /></ProtectedRoute>} />
          <Route path="/colleges/:id" element={<ProtectedRoute><CollegeDetail /></ProtectedRoute>} />
          <Route path="/chatbot" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />

          {/* Dashboard and profile (protected) */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
