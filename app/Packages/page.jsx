"use client";
import { useState } from 'react';
import Head from 'next/head';
import { FaBolt, FaLayerGroup, FaRocket, FaArrowRight, FaCheck, FaTimes, FaStar, FaRegStar, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Package data structure
const packageData = {
  single: {
    basic: [
      {
        name: 'Logo Design',
        price: '2000 ₹',
        description: "A simple, clean, and timeless design that represents a brand with minimal elements.",
        features: [
          '2 Logo Design option',
          'Only Single purchesing',
          'Simple Logo Design',
          'PNG & JPG Formats',
          '2 Days Delivery'
        ],
        excluded: [
          
        ],
        popular: false
      },
      {
        name: 'Portfolio Website',
        price: '5000 ₹',
        description: 'Simple portfolio website to showcase your work',
        features: [
          '5 Pages',
          'Basic Portfolio Design',
          'Email Form',
          'Email Id Generate',
          '1 Month Support',
          '5 Days Duration'
        ],
        excluded: [
        
        ],
        popular: false
      },
      {
        name: 'Business Card',
        price: '600 ₹',
        description: 'Professional business card design',
        features: [
          'Double-sided Design',
          'Print-ready Files',
          '2 Revisions',
          'If you want to get your business card printed'
        ],
        excluded: [
          
        ],
        popular: false
      },
      {
        name: 'Social Media Post',
        price: '500 ₹',
        description: 'Custom social media graphics',
        features: [
          '1 Platform Design',
          '3 Initial Concepts',
          '2 Revisions',
        ],
        excluded: [
         
        ],
        popular: false
      }
    ],
    standard: [
      {
        name: 'Logo Design',
        price: '4500 ₹',
        description: 'Professional website with more features',
        features: [
          '2 logo Design Option ',
          'Choose Only one Option',
          'Standard Design',
          
        ],
        excluded: [
          'Only Single Logo',
          'Not Include Package Only Choose Single Package'
        ],
        popular: false
      },
      {
        name: 'Portfolio Website',
        price: '12000 ₹',
        description: 'Simple online store setup',
        features: [
          'Suggestion Your Content in Website',
          'Standard Website',
          'Best Design',
          'Support 24/7:Duration 6 Months'
        ],
        excluded: [
          'Only Website',
          'Not Include Package only Single Package'
        ],
        popular: true
      },
      {
        name: 'Buisness Card',
        price: '600 ₹',
        description: 'Complete branding solution',
        features: [
          'Buisness Card Design',
          'Color Palette',
          'include Your Company Logo',
          '2 Side Design',
          '2 Design Options'
        ],
        excluded: [
          
        ],
        popular: false
      },
      {
        name: 'Letter Head',
        price: '300 ₹',
        description: 'Basic search engine optimization',
        features: [
          '2 Design Options',
          'One-Page Optimization',
          'Standard Design',
        ],
        excluded: [
          
        ],
        popular: false
      },
      {
        name: 'Social Media Post',
        price: '800 ₹/Post',
        description: 'Complete social media branding',
        features: [
          'Per Post Price',
          'Post Templates',
          'Story Templates',
          'Cover Photos'
        ],
        excluded: [
          'Content Strategy',
          'Management'
        ],
        popular: false
      },
      {
        name: 'Social Media Reel',
        price: '400 ₹/Reels',
        description: 'Mobile application interface design',
        features: [
          'Per Reel Price',
          'Best Shooting',
          'Per reels Duration 30-40 Second',
          'Animation'
        ],
        excluded: [
          'Development',
          
        ],
        popular: false
      },
      {
        name: 'Digital Marketing',
        price: '5000 ₹',
        description: 'Custom illustrations for your brand',
        features: [
          '5 Illustrations',
          '2 Styles',
          '3 Revisions',
          'Multiple Formats'
        ],
        excluded: [
          'Unlimited Illustrations',
          'Animation'
        ],
        popular: false
      },
      
    ],
    premium: [
      {
        name: 'Logo Design',
        price: '10000 ₹',
        description: 'Advanced website with custom features',
        features: [
          '5+ logo Design Option ',
          'Choose Only One Option',
          'Premium Design',
        ],
        excluded: [],
        popular: true
      },
      {
        name: 'Portfolio Website',
        price: '25000 ₹',
        description: 'Full-featured Website',
        features: [
          'Suggestion Your Content in Website',
          'Premium Website',
          'Best Design',
          'Support 24/7:Duration 1 Years'
        ],
        excluded: [],
        popular: true
      },
      {
        name: 'Buisness Card',
        price: '1000 ₹',
        description: 'Full corporate identity package',
        features: [
          'Logo Design',
          'Brand Guidelines',
          'Buisness Card Design',
          'Color Palette',
          'include Your Company Logo',
          '2 Side Design',
        ],
        excluded: [],
        popular: false
      },
      {
        name: 'Letterhead',
        price: '500 ₹',
        description: 'Complete search engine optimization',
        features: [
          '2 Design Options',
          'One-Page Optimization',
          'Standard Design',
        ],
        excluded: [],
        popular: false
      },
      {
        name: 'Envolope',
        price: '1000 ₹',
        description: 'Complete social media solution',
        features: [
          'Strategy Development',
          'Content Creation',
          'Community Management',
          'Monthly Reports',
          '3 Months Service'
        ],
        excluded: [],
        popular: false
      },
      {
        name: 'Broucher/Flyer',
        price: '700₹/Page',
        description: 'Custom mobile application',
        features: [
          'iOS & Android',
          'Backend Integration',
          'Admin Panel',
          '6 Months Support'
        ],
        excluded: [],
        popular: false
      },
      {
        name: 'Social Media Post',
        price: '1500₹/Post',
        description: 'Professional motion graphics',
        features: [
          '2D Animation',
          'Explainer Video',
          '3 Revisions',
          'Multiple Formats'
        ],
        excluded: [],
        popular: true
      },
      
      {
        name: 'Social Media Reel',
        price: '1200₹/Reel',
        description: 'Professional video content',
        features: [
          'Concept Development',
          'Script Writing',
          'Filming',
          'Editing',
          '2 Revisions'
        ],
        excluded: [],
        popular: false
      },
      {
        name: 'Digital Marketing',
        price: '10000 ₹',
        description: 'High-quality 3D assets',
        features: [
          '3 Product Models',
          'Texturing',
          'Rendering',
          '3 Revisions'
        ],
        excluded: [],
        popular: false
      },
      
      
    ]
  },
  multiple: {
    basic: [
      {
        name: 'Basic Pakckage',
        price: '8000 ₹',
        description: 'Essential services for new businesses',
        features: [
          'Basic Logo Design: include 3 Option of Logo Design ',
          'Basic Portfolio Website',
          'Business Card',
          'Social Media Post: Build a 5 Post'
        ],
        excluded: [
          'Only One pacage of Basic',
          'Not choosing Particular Package',
          'Purchace Only Multiple Package'

        ],
        popular: false
      },
      
    ],
    standard: [
      {
        name: 'Standard Launch',
        price: '25000 ₹',
        description: 'Everything to launch your business',
        features: [
          'Standard Logo Design:3 Design Suggestion ',
          'Standard Portfolio Website',
          'Social Media post:6 Posts',
          'Buisness Card:2 Design Suggestion',
          'Letterhead',
          'Brouchure',
          'Envelope',
          'Social Media Reels:3 Reels',
          'Digital Marketing',
          'Support 24/7:Duration 6 Months',

        ],
        excluded: [
          'E-commerce',
          'Custom Development'
        ],
        popular: true
      },
      
    ],
    premium: [
      {
        name: 'Premium Executive',
        price: '70000 ₹',
        description: 'Complete business solution',
        features: [
          'Premium Portfolio Website:Customer Requirement',
          'Premium Logo Design:6 Suggestion Design',
          'Include Website Security',
          'Buisness Card:2 Suggestion',
          'Letterhead',
          'Envolope',
          'Brochuer/Flyer',
          'Social Media Post:10 posts',
          'Social Media Reels:6 Reels',
          'Digital Marketing',
          'Regular Update',
          '24/7 Support:Duration 1.5 Years'
        ],
        excluded: [],
        popular: true
      },
     
    ]
  }
};

export default function PricingPage() {
  // State
  const [packageType, setPackageType] = useState('single'); // 'single' or 'multiple'
  const [packageTier, setPackageTier] = useState('basic'); // 'basic', 'standard', 'premium'
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Get current package data
  const currentPackages = packageData[packageType][packageTier];

  // Toggle package expansion
  const togglePackageExpansion = (index) => {
    setExpandedPackage(expandedPackage === index ? null : index);
  };

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Pricing Packages | Your Company</title>
        <meta name="description" content="Flexible pricing packages for your business needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-transparent py-6 z-50">
        <nav className="container mx-auto px-10 flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            <a href="#">RJOmnify</a>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="text-white hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="/About" className="text-white hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="/Project" className="text-white hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="/Packages" className="text-white hover:text-blue-400 transition-colors">Packages</a></li>
            <li><a href="/Contact" className="text-white hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <ul className="text-center space-y-8">
              <li>
                <a 
                  href="/" 
                  className="text-white text-2xl hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/About" 
                  className="text-white text-2xl hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/Project" 
                  className="text-white text-2xl hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/Packages" 
                  className="text-white text-2xl hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  Packages
                </a>
              </li>
              <li>
                <a 
                  href="/Contact" 
                  className="text-white text-2xl hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative h-[750px] flex flex-col justify-center items-center text-center text-white px-6 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://img.freepik.com/free-vector/flat-price-list-collection_23-2148087885.jpg?uid=P173969216&ga=GA1.1.976119461.1747630857&semt=ais_hybrid&w=740')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: '-80px',
          paddingTop: '80px'
        }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Pricing Packages
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto opacity-90 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Choose the perfect package for your needs, whether you're looking for a single service or a complete solution.
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Package Type Toggle */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 mb-4">
              <button 
                onClick={() => {
                  setPackageType('single');
                  setPackageTier('basic');
                  setExpandedPackage(null);
                }}
                className={`px-6 py-2 rounded-full font-medium ${packageType === 'single' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                Single Package
              </button>
              <button 
                onClick={() => {
                  setPackageType('multiple');
                  setPackageTier('basic');
                  setExpandedPackage(null);
                }}
                className={`px-6 py-2 rounded-full font-medium ${packageType === 'multiple' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                Multiple Packages
              </button>
            </div>
            
            <p className="text-gray-600 text-center max-w-2xl">
              {packageType === 'single' 
                ? "Select a single service package tailored to your specific needs"
                : "Get bundled services at a discounted rate with our comprehensive packages"}
            </p>
          </div>

          {/* Package Tier Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <div className="flex space-x-1">
              <button 
                onClick={() => {
                  setPackageTier('basic');
                  setExpandedPackage(null);
                }}
                className={`px-6 py-3 font-medium rounded-t-lg flex items-center ${packageTier === 'basic' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-black hover:text-black'}`}
              >
                <FaRegStar className="mr-2" /> Basic
              </button>
              <button 
                onClick={() => {
                  setPackageTier('standard');
                  setExpandedPackage(null);
                }}
                className={`px-6 py-3 font-medium rounded-t-lg flex items-center ${packageTier === 'standard' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-black hover:text-black'}`}
              >
                <FaStar className="mr-2" /> Standard
              </button>
              <button 
                onClick={() => {
                  setPackageTier('premium');
                  setExpandedPackage(null);
                }}
                className={`px-6 py-3 font-medium rounded-t-lg flex items-center ${packageTier === 'premium' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-black hover:text-black'}`}
              >
                <FaRocket className="mr-2" /> Premium
              </button>
            </div>
          </div>

          {/* Package Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPackages.map((pkg, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-white p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-black mb-2">{pkg.name}</h3>
                    <p className="text-black mb-4 text-sm">{pkg.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-black">{pkg.price}</span>
                      {packageType === 'multiple' && (
                        <span className="text-black text-sm ml-2"></span>
                      )}
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-medium mb-4 flex items-center justify-center ${
                      pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Get Started <FaArrowRight className="ml-2" />
                    </button>

                    <div className="space-y-3">
                      <button 
                        onClick={() => togglePackageExpansion(index)}
                        className="text-blue-600 text-sm font-medium flex items-center"
                      >
                        {expandedPackage === index ? (
                          <>
                            <span>Hide Details</span>
                            <FaChevronUp className="ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Show Details</span>
                            <FaChevronDown className="ml-1" />
                          </>
                        )}
                      </button>

                      {expandedPackage === index && (
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-black text-md">What's included:</h4>
                            <ul className="space-y-2 mt-2">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <FaCheck className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {pkg.excluded.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">Not included:</h4>
                              <ul className="space-y-2 mt-2">
                                {pkg.excluded.map((item, i) => (
                                  <li key={i} className="flex items-start text-sm text-black">
                                    <FaTimes className="text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>          
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-amber-50 tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white hover:text-gray-900">About</Link></li>
                <li><Link href="/careers" className="text-white hover:text-gray-900">Careers</Link></li>
                <li><Link href="/blog" className="text-white ver:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-50 tracking-wider uppercase mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/web-development" className="text-white hover:text-gray-900">Web Development</Link></li>
                <li><Link href="/design" className="text-white hover:text-gray-900">Design Packages</Link></li>
                <li><Link href="/solutions" className="text-white hover:text-gray-900">Full Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="text-white hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/faq" className="text-white hover:text-gray-900">FAQ</Link></li>
                <li><Link href="/contact" className="text-white hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-50 tracking-wider uppercase mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-white hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="text-white hover:text-gray-900">Terms</Link></li>
                <li><Link href="/cookies" className="text-white hover:text-gray-900">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-white text-xl text-center">
              &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}