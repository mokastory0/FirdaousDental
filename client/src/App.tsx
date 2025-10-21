import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useRef, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget, { WhatsAppChatWidgetRef } from "@/components/WhatsAppChatWidget";
import CornerActionButtons from "@/components/CornerActionButtons";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FAQPage from "@/pages/FAQPage";
import BlogPage from "@/pages/BlogPage";
import BlogArticlePage from "@/pages/BlogArticlePage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

// Task 9.2: Lazy load service pages for better performance
const ServiceWhiteningPage = lazy(() => import("@/pages/ServiceWhiteningPage"));
const WhiteningPricingPage = lazy(() => import("@/pages/WhiteningPricingPage"));
const ServicePediatricPage = lazy(() => import("@/pages/ServicePediatricPage"));
const ServiceCrownsPage = lazy(() => import("@/pages/ServiceCrownsPage"));
const CrownPricingPage = lazy(() => import("@/pages/CrownPricingPage"));
const ServiceImplantsPage = lazy(() => import("@/pages/ServiceImplantsPage"));
const ServiceDenturesPage = lazy(() => import("@/pages/ServiceDenturesPage"));
const ServiceOrthodonticsPage = lazy(() => import("@/pages/ServiceOrthodonticsPage"));
const ServiceGumPage = lazy(() => import("@/pages/ServiceGumPage"));
const ServiceGeneralPage = lazy(() => import("@/pages/ServiceGeneralPage"));

function Router() {
  return (
    <Switch>
      {/* Root path - serve as French homepage for SEO */}
      <Route path="/" component={HomePage} />
      
      {/* Language-prefixed routes */}
      <Route path="/:lang" component={HomePage} />
      <Route path="/:lang/services" component={ServicesPage} />
      
      {/* Lazy-loaded service pages with French URLs + Casablanca for SEO */}
      <Route path="/:lang/services/blanchiment-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceWhiteningPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/blanchiment-casablanca/prix">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <WhiteningPricingPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/pedodontie-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServicePediatricPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/couronne-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceCrownsPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/couronne-casablanca/prix">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <CrownPricingPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/implants-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceImplantsPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/prothese-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceDenturesPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/orthodontie-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceOrthodonticsPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/parodontologie-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceGumPage />
          </Suspense>
        )}
      </Route>
      <Route path="/:lang/services/soins-generaux-casablanca">
        {() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <ServiceGeneralPage />
          </Suspense>
        )}
      </Route>
      
      <Route path="/:lang/a-propos" component={AboutPage} />
      <Route path="/:lang/avis" component={TestimonialsPage} />
      <Route path="/:lang/faq" component={FAQPage} />
      <Route path="/:lang/blog" component={BlogPage} />
      <Route path="/:lang/blog/:id" component={BlogArticlePage} />
      <Route path="/:lang/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const chatWidgetRef = useRef<WhatsAppChatWidgetRef>(null);

  const handleToggleChat = () => {
    chatWidgetRef.current?.toggle();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
              <WhatsAppChatWidget ref={chatWidgetRef} />
              <CornerActionButtons onWhatsAppClick={handleToggleChat} />
            </div>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
