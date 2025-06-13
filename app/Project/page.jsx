"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarHidden, setNavbarHidden] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const projects = [
        // Existing projects...
       
        // New projects for requested categories
        {
  id: 7,
  title: "Logo",
  category: "logo",
  description: "Modern geometric logo design symbolizing innovation and digital identity.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpFbobAzH9BVqzL1i4nXvDFWzL_rRq3mJWQ&s",
  details: {
    fullDescription: "A bold and contemporary logo that embodies creativity and digital excellence. Featuring clean typography and a dynamic geometric symbol, the design conveys innovation, trust, and a strong digital presence."
  }
},
{
  id: 8,
  title: "Designer Portfolio Website",
  category: "portfolio website",
  description: "Elegant and responsive portfolio website built for a creative professional.",
  image: "https://creativekigen.com/wp-content/uploads/2024/01/Qananu-Africa.png",
  details: {
    fullDescription: "A responsive and visually polished portfolio website crafted to highlight the designer's creative work. It features a clean, minimalist layout with smooth animations, interactive project filtering, and a fully integrated contact form for seamless communication."
  }
},
{
  id: 9,
  title: "Corporate Business Cards",
  category: "business card",
  description: "Luxury business card designs tailored for professionals and executives.",
  image: "https://img.pikbest.com/origin/09/34/63/16CpIkbEsTtQW.jpg!w700wp",
  details: {
    fullDescription: "Premium business card design featuring spot UV coating, embossed lettering, and a sophisticated color scheme that reflects the company's brand identity."
  }
},
{
  id: 10,
  title: "Company Letterhead",
  category: "letterhead",
  description: "Branded company letterhead designed for official correspondence.",
  image: "https://outweave.com/wp-content/uploads/2021/04/DLHP15.jpg",
  details: {
    fullDescription: "Professional letterhead design featuring the company logo, contact information, and subtle watermark pattern. The design maintains brand consistency across all printed communications."
  }
},
{
  id: 11,
  title: "Branded Envelopes",
  category: "envelope",
  description: "Stylish envelope designs with consistent company branding.",
  image: "https://img.freepik.com/premium-vector/envelope-design-with-yellow-color_619235-2844.jpg",
  details: {
    fullDescription: "Custom printed envelopes featuring the company logo and return address in a clean, professional layout. The design complements the company's stationery suite for brand consistency."
  }
},
{
  id: 12,
  title: "Product Brochure",
  category: "brochure",
  description: "Eye-catching brochure design that highlights products and benefits.",
  image: "https://i.ytimg.com/vi/S20w63t6CsE/maxresdefault.jpg",
  details: {
    fullDescription: "An informative tri-fold brochure showcasing the company's eco-friendly product line. The design uses vibrant imagery, clear typography, and compelling copy to highlight product features and benefits."
  }
},
{
  id: 13,
  title: "Social Media Post",
  category: "social media post",
  description: "Engaging social media graphics for product promotion and awareness.",
  image: "https://s.tmimgcdn.com/scr/1200x750/262900/business-agency-corporate-service-social-media-post-design-template-58_262935-original.jpg",
  details: {
    fullDescription: "A series of 15 Instagram posts and stories designed to promote a new product line. The campaign maintained consistent branding while varying content types between product shots, testimonials, and lifestyle imagery."
  }
},
{
  id: 14,
  title: "Social Media Reels",
  category: "social media Reels",
  description: "Short-form video content strategy for increased social media engagement.",
  image: "https://cdn.dribbble.com/userupload/11804729/file/original-16d9f99965a882abef1141c687fe8a40.jpg?resize=400x0",
  details: {
    fullDescription: "A 30-day social media trial including content strategy development, post creation, scheduling, and performance analytics. The trial demonstrated the value of consistent, strategic social media presence."
  }
},
{
  id: 15,
  title: "Digital Marketing",
  category: "digital marketing",
  description: "High-impact digital marketing services focused on lead generation.",
  image: "https://www.globalmediainsight.com/blog/wp-content/uploads/2022/09/digital-marketing-gdfc159c4c_640.jpg",
  details: {
    fullDescription: "A comprehensive digital marketing campaign including keyword research, ad creation, landing page optimization, and conversion tracking. The campaign achieved a 35% increase in qualified leads while reducing cost-per-acquisition by 22%."
  }
}

    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'logo', label: 'Logo Design' },
        { id: 'portfolio website', label: 'Portfolio Websites' },
        { id: 'business card', label: 'Business Cards' },
        { id: 'letterhead', label: 'Letterheads' },
        { id: 'envelope', label: 'Envelopes' },
        { id: 'brochure', label: 'Brochures' },
        { id: 'social media post', label: 'Social Media Posts' },
        { id: 'social media reel', label: 'Social Media Reels' },
        { id: 'digital marketing', label: 'Digital Marketing' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setNavbarScrolled(true);

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down
                    setNavbarHidden(true);
                    setMobileMenuOpen(false); // Close mobile menu when scrolling down
                } else {
                    // Scrolling up
                    setNavbarHidden(false);
                }
            } else {
                setNavbarScrolled(false);
                setNavbarHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            
            if (mobileMenuOpen && 
                mobileMenu && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuButton.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Our Projects | Your Website</title>
                <meta name="description" content="Explore our portfolio of projects" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </Head>

            {/* Navigation */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
                navbarScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
            } ${
                navbarHidden ? '-translate-y-full' : 'translate-y-0'
            }`}>
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="text-white text-3xl font-bold">
                        <a href="#">RJOminfy</a>
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
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584')",
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
                    Our Projects
                </motion.h1>
                <motion.p
                    className="text-xl max-w-3xl mx-auto opacity-90 text-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Explore our collection of successful projects across branding, digital, and print media.
                </motion.p>
            </motion.section>

            {/* Projects Filter */}
            <motion.div
                className="flex justify-center flex-wrap gap-4 my-16 mx-auto max-w-6xl px-4 overflow-x-auto py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-4 py-2 rounded-full border-2 border-blue-500 font-semibold uppercase text-xs sm:text-sm tracking-wider transition-all whitespace-nowrap ${
                            activeFilter === filter.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <span className="absolute top-4 right-4 bg-blue-500 bg-opacity-90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <span className="text-sm text-gray-500">{project.date}</span>
                                        <button
                                            onClick={() => openModal(project)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.section
                className="py-20 text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        We'd love to hear about your ideas and help bring them to life. Get in touch with our team to discuss how we can collaborate.
                    </p>
                    <a
                        href="/Contact"
                        className="inline-block px-10 py-4 bg-blue-500 text-white rounded-md font-bold uppercase tracking-wider hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                        Get Started
                    </a>
                </div>
            </motion.section>

            {/* Project Modal */}
            <AnimatePresence>
                {isModalOpen && selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-gray-500 hover:text-red-500 text-3xl transition-colors"
                            >
                                &times;
                            </button>

                            <div className="h-96 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                                <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                                    {selectedProject.category}
                                </span>

                                <p className="text-gray-700 mb-6">{selectedProject.details.fullDescription}</p>

                                <a
                                    href="#"
                                    className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                                >
                                    {selectedProject.category === 'logo' || selectedProject.category === 'business card' || 
                                     selectedProject.category === 'letterhead' || selectedProject.category === 'envelope' || 
                                     selectedProject.category === 'brochure' ? 'View Full Design' : 
                                     selectedProject.category.includes('social media') ? 'View Campaign' : 
                                     selectedProject.category === 'digital marketing' ? 'View Case Study' : 'Visit Website'}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}