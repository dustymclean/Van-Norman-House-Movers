
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * PRODUCTION SEO MANAGER
 * Automatically updates head tags for social media and search engines
 */
const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    const seoConfig: Record<string, { title: string; desc: string }> = {
      '/': {
        title: 'Van Norman House Movers LLC | Structural Moving Mississippi & Louisiana',
        desc: 'Trusted structural house movers since 2001. Specializing in house raising, leveling, and historic relocation in Bogue Chitto, Brookhaven, and across MS & LA.'
      },
      '/services': {
        title: 'Expert House Moving & Raising Services | Van Norman House Movers',
        desc: 'Professional structural solutions including flood zone elevation, foundation leveling, and USDOT authorized heavy transport.'
      },
      '/gallery': {
        title: 'Project Gallery | See Our Structural Moves in Mississippi & Louisiana',
        desc: 'View our portfolio of successful house moves, elevations, and structural repairs. Proof of our 20+ years of expertise.'
      },
      '/about': {
        title: 'About Us | 20+ Years of Structural Moving Excellence',
        desc: 'Learn about Chauncey Van Norman and our family-owned commitment to old-school integrity and modern structural precision.'
      },
      '/contact': {
        title: 'Get a Quote | Contact Van Norman House Movers Today',
        desc: 'Ready to move your home or raise your foundation? Contact Chauncey directly for a custom quote and route evaluation.'
      }
    };

    const current = seoConfig[location.pathname] || seoConfig['/'];
    document.title = current.title;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', current.desc);

    // Update Open Graph (Social Sharing)
    const updateOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOG('og:title', current.title);
    updateOG('og:description', current.desc);
    updateOG('og:type', 'website');
    updateOG('og:url', `https://vannormanmovers.com${location.pathname}`);
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      {/* ADVANCED SCHEMA.ORG JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "name": "Van Norman House Movers LLC",
              "image": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
              "@id": "https://vannormanmovers.com",
              "url": "https://vannormanmovers.com",
              "telephone": "+16018236091",
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
                "latitude": 31.4429,
                "longitude": -90.4479
              },
              "priceRange": "$$$",
              "areaServed": ["Mississippi", "Louisiana"]
            },
            {
              "@type": "Service",
              "serviceType": "House Moving",
              "provider": { "@id": "https://vannormanmovers.com" },
              "description": "Relocating residential and commercial structures with hydraulic jacking systems."
            },
            {
              "@type": "Service",
              "serviceType": "House Raising",
              "provider": { "@id": "https://vannormanmovers.com" },
              "description": "Elevation of structures for flood protection and foundation repair."
            }
          ]
        })}
      </script>
    </Router>
  );
};

export default App;
