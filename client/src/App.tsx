import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceWhiteningPage from "@/pages/ServiceWhiteningPage";
import ServicePediatricPage from "@/pages/ServicePediatricPage";
import ServiceCrownsPage from "@/pages/ServiceCrownsPage";
import ServiceImplantsPage from "@/pages/ServiceImplantsPage";
import ServiceDenturesPage from "@/pages/ServiceDenturesPage";
import ServiceOrthodonticsPage from "@/pages/ServiceOrthodonticsPage";
import ServiceGumPage from "@/pages/ServiceGumPage";
import ServiceGeneralPage from "@/pages/ServiceGeneralPage";
import AboutPage from "@/pages/AboutPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FAQPage from "@/pages/FAQPage";
import BlogPage from "@/pages/BlogPage";
import BlogArticlePage from "@/pages/BlogArticlePage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Root redirect - handled by LanguageContext */}
      <Route path="/">
        {() => <div />}
      </Route>
      
      {/* Language-prefixed routes */}
      <Route path="/:lang" component={HomePage} />
      <Route path="/:lang/services" component={ServicesPage} />
      <Route path="/:lang/services/whitening" component={ServiceWhiteningPage} />
      <Route path="/:lang/services/pediatric" component={ServicePediatricPage} />
      <Route path="/:lang/services/crowns" component={ServiceCrownsPage} />
      <Route path="/:lang/services/implants" component={ServiceImplantsPage} />
      <Route path="/:lang/services/dentures" component={ServiceDenturesPage} />
      <Route path="/:lang/services/orthodontics" component={ServiceOrthodonticsPage} />
      <Route path="/:lang/services/gum" component={ServiceGumPage} />
      <Route path="/:lang/services/general" component={ServiceGeneralPage} />
      <Route path="/:lang/about" component={AboutPage} />
      <Route path="/:lang/testimonials" component={TestimonialsPage} />
      <Route path="/:lang/faq" component={FAQPage} />
      <Route path="/:lang/blog" component={BlogPage} />
      <Route path="/:lang/blog/:id" component={BlogArticlePage} />
      <Route path="/:lang/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
              <WhatsAppButton />
            </div>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
