"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll event listener
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Set navbar background when scrolled
        setNavScrolled(currentScrollY > 50);
        
        // Hide/show navbar on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setNavHidden(true); // Scrolling down
          setMobileMenuOpen(false); // Close mobile menu when scrolling down
        } else {
          setNavHidden(false); // Scrolling up
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenuOpen && 
          !mobileMenu.contains(event.target) && 
          !mobileMenuButton.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      <Head>
        <title>Animated Navbar Website</title>
        <meta name="description" content="Website with animated navbar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation */}
      <header>
        <nav className={`fixed w-full z-50 flex justify-between items-center px-8 py-6 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
          navScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
        } ${
          navHidden ? '-translate-y-full' : 'translate-y-0'
        }`}>
          <div className="logo">
            <a href="#" className="text-white text-4xl font-bold transition-all duration-300 hover:text-blue-500">RJOmnify</a>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Home</a></li>
            <li><a href="/About" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">About</a></li>
            <li><a href="/Project" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Projects</a></li>
            <li><a href="/Packages" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Packages</a></li>
            <li><a href="/Contact" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Contact-Us</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button"
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 pt-24 px-8 transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            } md:hidden`}
          >
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <a 
                  href="/" 
                  className="text-white text-2xl hover:text-blue-500 transition-all duration-300 block py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/About" 
                  className="text-white text-2xl hover:text-blue-500 transition-all duration-300 block py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/Project" 
                  className="text-white text-2xl hover:text-blue-500 transition-all duration-300 block py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/Packages" 
                  className="text-white text-2xl hover:text-blue-500 transition-all duration-300 block py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Packages
                </a>
              </li>
              <li>
                <a 
                  href="/Contact" 
                  className="text-white text-2xl hover:text-blue-500 transition-all duration-300 block py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content with Background Image */}
      <main>
        <section 
          id="home" 
          className="hero min-h-screen flex flex-col items-center justify-center text-white text-center px-4"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://png.pngtree.com/background/20231017/original/pngtree-blue-desk-background-with-computer-laptop-mobile-phone-and-digital-tablet-picture-image_5587466.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RJOmnify</h1>
          <p className="text-2xl md:text-4xl mb-8">Creative to innovation</p>
          <a 
            href="/About" 
            className="cta-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8">
        <div className="top text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">One platform to do it all.</h1>
          <p className="text-lg mb-6">From the back office to the storefront, we keep you in control every step of the way.</p>
          <button className="footer-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-300">
            Talk to Sales
          </button>
        </div>

        <div className="columns grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
          <div>
            <h4 className="text-lg font-bold mb-4">Use Cases</h4>
            <ul className="space-y-2">
              <li>Management</li>
              <li>Logos</li>
              <li>brouchers</li>
              <li>flyers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>Widgets</li>
              <li>Emails</li>
              <li>Social Media Post</li>
              <li>Portfolio website</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>contents</li>
              <li>Contact Us</li>
              <li>Self Building</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Love</h4>
            <ul className="space-y-2">
              <li>Case Studies</li>
              <li>Academies</li>
              <li>Studios</li>
              <li>Gyms</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>Video Animation</li>
              <li>Support 24/7</li>
              <li>Unique ideas</li>
            </ul>
          </div>
        </div>

        <div className="bottom flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto pt-8 border-t border-gray-700">
          <div className="social-icons flex space-x-4 mb-4 md:mb-0">
            <FaFacebook className="text-xl hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}