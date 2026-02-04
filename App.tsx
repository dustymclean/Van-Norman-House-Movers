
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// SEO Helper (Simulated Meta Management)
const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Van Norman House Movers LLC | Structural Moving MS & LA',
      '/services': 'Our Services | House Moving, Raising & Leveling',
      '/about': 'Our Story | Family Owned House Movers Since 2001',
      '/faq': 'F.A.Q. | Everything You Need to Know About House Moving',
      '/contact': 'Get a Quote | Professional Structural Moving Experts'
    };

    document.title = pageTitles[location.pathname] || 'Van Norman House Movers LLC';
    
    // In a real environment, we'd use React Helmet for meta tags
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      {/* Schema.org JSON-LD for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Van Norman House Movers LLC",
          "image": "https://picsum.photos/seed/structuralmoving/1200/800",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "789 Highway 51 SE",
            "addressLocality": "Bogue Chitto",
            "addressRegion": "MS",
            "postalCode": "39629",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.5108,
            "longitude": -90.4605
          },
          "url": "https://vannormanmovers.com",
          "telephone": "+16018236091",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "priceRange": "$$$",
          "founder": "Chauncey Van Norman"
        })}
      </script>
    </Router>
  );
};

export default App;
