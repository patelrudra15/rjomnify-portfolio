// pages/contact.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FaPinterestP, } from 'react-icons/fa';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Field validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all the fields before submitting!",
        icon: "warning",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address!",
        icon: "warning",
      });
      setIsSubmitting(false);
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("message", formData.message);
    formDataObj.append("access_key", "eadd4232-fd9c-4000-a116-17d69f0c56aa"); // Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formDataObj))
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Your Company</title>
        <meta name="description" content="Get in touch with our team for any inquiries or questions." />
      </Head>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 w-full py-6 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg')",
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
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto opacity-90 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Get in touch with our team for any inquiries or questions. We're here to help you with your digital needs.
        </motion.p>
      </motion.section>

      {/* Contact Information - Horizontal Layout */}
      <div className="max-w-7xl mx-auto px-5 my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Our Office</h3>
            <p className="text-black">
              Omkar Elegance, RTO Road Vastral, Galaxy Rd, Opposite galaxy coral Bunglow, Vastral, Ahmedabad, Gujarat 382418
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Phone</h3>
            <p className="text-black">
              +91 7069262624<br />
              +91 6352503071<br />
              Mon-sat, 9am-7pm
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">Email</h3>
            <p className="text-black">
              rjomnify2315@gmail.com<br />
              rudrapatel3115@gmail.com<br />
              jnptl23092004@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-12">
          {[
            {
              icon: <FaFacebookF />,
              bg: "bg-blue-500",
              hover: "bg-blue-600",
              url: "https://www.facebook.com/profile.php?id=61577101329662"
            },
            {
              icon: <FaPinterestP />,
              bg: "bg-blue-400",
              hover: "bg-blue-500",
              url: "https://in.pinterest.com/rjomnify2315/"
            },
            
            {
              icon: <FaInstagram />,
              bg: "bg-pink-600",
              hover: "bg-pink-700",
              url: "https://www.instagram.com/rj_omnify/"
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center ${social.bg} rounded-full text-white hover:${social.hover} transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${social.icon.type.displayName} link`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-5 my-16">
        <motion.div
          className="bg-white p-8 md:p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Send Us a Message</h2>

          {submitSuccess && (
            <motion.div
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Email Address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-black font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-black font-medium mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? (
                <>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span className="opacity-0">Sending...</span>
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto my-16 px-5">
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.356064890678!2d72.6555689!3d22.9911715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8726d2e147e9%3A0x6ac77e342c77ef0a!2sOmkar%20Elegance!5e0!3m2!1sen!2sin!4v1718280000000!5m2!1sen!2sin"
            className="w-full h-[400px] border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            title="Omkar Elegance Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  );
}