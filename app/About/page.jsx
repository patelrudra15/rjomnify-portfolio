"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { 
  FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, 
  FaBehance, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLightbulb, FaHandshake, FaHeart, FaUsers, FaTrophy, FaLaugh
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Scroll event listener for navbar
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      AOS.refresh();
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      social: [
        { icon: <FaLinkedinIn />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaEnvelope />, link: "#" }
      ]
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: [
        { icon: <FaLinkedinIn />, link: "#" },
        { icon: <FaBehance />, link: "#" },
        { icon: <FaEnvelope />, link: "#" }
      ]
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      social: [
        { icon: <FaLinkedinIn />, link: "#" },
        { icon: <FaGithub />, link: "#" },
        { icon: <FaEnvelope />, link: "#" }
      ]
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      social: [
        { icon: <FaLinkedinIn />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaEnvelope />, link: "#" }
      ]
    }
  ];

  // Timeline data
  const timelineItems = [
    { year: "2015", title: "Company Founded", description: "Launched as a graphic design studio with our first office in New York." },
    { year: "2017", title: "Expanded Services", description: "Added web development and digital marketing to our service offerings." },
    { year: "2019", title: "First International Client", description: "Began working with clients outside the US, starting with London-based businesses." },
    { year: "2021", title: "Team Growth", description: "Expanded our team to 15 full-time employees and moved to a larger office." },
    { year: "2023", title: "Current Day", description: "Serving 200+ clients worldwide with a team of 25+ specialists." }
  ];

  // Values data
  const values = [
    { icon: <FaLightbulb />, title: "Innovation", description: "We constantly push boundaries and explore new ideas to deliver cutting-edge solutions for our clients." },
    { icon: <FaHandshake />, title: "Integrity", description: "Honesty and transparency are at the core of every client relationship and business decision we make." },
    { icon: <FaHeart />, title: "Passion", description: "We love what we do, and it shows in the quality of our work and dedication to our clients' success." },
    { icon: <FaUsers />, title: "Collaboration", description: "We believe the best results come from teamwork - both within our team and with our clients." },
    { icon: <FaTrophy />, title: "Excellence", description: "We strive for perfection in every project, delivering only the highest quality work to our clients." },
    { icon: <FaLaugh />, title: "Fun", description: "We enjoy our work and create an environment where creativity and joy can flourish." }
  ];

  // Footer links data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { text: "Web Design", href: "#" },
        { text: "Web Development", href: "#" },
        { text: "Branding", href: "#" },
        { text: "Digital Marketing", href: "#" },
        { text: "SEO", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Our Team", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Contact", href: "#" }
      ]
    },
    {
      title: "Contact",
      links: [
        { text: "123 Business Ave, New York", href: "#", icon: <FaMapMarkerAlt /> },
        { text: "+1 (555) 123-4567", href: "#", icon: <FaPhone /> },
        { text: "hello@yourbrand.com", href: "#", icon: <FaEnvelope /> }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Your Brand</title>
        <meta name="description" content="Learn about our company, team, and values" />
      </Head>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 flex justify-between items-center px-8 py-6 transition-all duration-400 ${
        navScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="logo">
          <a href="#" className="text-white text-4xl font-bold transition-all duration-300 hover:text-blue-500">RJOmnify</a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="/" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Home</a></li>
          <li><a href="/About" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">About</a></li>
          <li><a href="/Project" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Projects</a></li>
          <li><a href="/Packages " className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Packages</a></li>
          <li><a href="/Contact" className="text-white hover:text-blue-500 transition-all duration-300 relative py-2">Contact Us</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div 
          className="md:hidden flex flex-col space-y-2 cursor-pointer" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-black/90 backdrop-blur-md z-40 p-6 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li><a href="/" className="text-white hover:text-blue-500 transition-all duration-300">Home</a></li>
            <li><a href="/About" className="text-white hover:text-blue-500 transition-all duration-300">About</a></li>
            <li><a href="/Project" className="text-white hover:text-blue-500 transition-all duration-300">Projects</a></li>
            <li><a href="/Packages" className="text-white hover:text-blue-500 transition-all duration-300">Packages</a></li>
            <li><a href="/Contact" className="text-white hover:text-blue-500 transition-all duration-300">Contact Us</a></li>
          </ul>
        </div>
      )}

      {/* About Hero Section */}
      <section 
        className="relative h-[750px] flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?uid=P173969216&ga=GA1.1.976119461.1747630857&semt=ais_hybrid&w=740')"
        }}
      >
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 top-10 left-5 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute w-48 h-48 top-60 left-80 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-30 rounded-full blur-3xl animate-float animation-delay-5000"></div>
          <div className="absolute w-36 h-36 top-30 left-70 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-30 rounded-full blur-3xl animate-float animation-delay-10000"></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About My Story
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 text-white max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Founded in 2015, we've grown from a small design studio to a full-service digital agency helping businesses worldwide achieve their online goals.
          </p>
          <a 
            href="#our-story" 
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-500/30"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore Our Journey
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                  Who We Are
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded"></span>
                </h2>
                <p className="text-gray-500 text-lg max-w-md">
                  Our journey and what makes us different
                </p>
              </div>
              <p className="mb-4 text-gray-700">
                YourBrand was founded with a simple mission: to help businesses thrive in the digital world through beautiful design, innovative technology, and strategic marketing.
              </p>
              <p className="mb-4 text-gray-700">
                What started as a two-person operation in a small home office has grown into a team of 25+ talented designers, developers, and marketers serving clients across 15 countries.
              </p>
              <p className="text-gray-700">
                We believe in building long-term partnerships with our clients, not just delivering one-off projects. Our approach combines creative thinking with data-driven strategies to deliver results that matter.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <div className="rounded-2xl overflow-hidden shadow-xl transform perspective-1000 -rotate-y-6 hover:rotate-y-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Journey
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded"></span>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Key milestones in our company history
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto py-12">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-indigo-700 rounded transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                >
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-indigo-600 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    {/* Timeline dot */}
                    <div className={`hidden md:block absolute top-6 w-6 h-6 bg-white border-4 border-indigo-500 rounded-full shadow-md ${index % 2 === 0 ? '-right-3' : '-left-3'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Meet Our Team
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded"></span>
            </h2>
            <p className="text-gray-500 text-lg">
              The talented people behind YourBrand's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.map((social, i) => (
                      <a 
                        key={i}
                        href={social.link}
                        className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center transition-all duration-300 hover:bg-indigo-600 hover:text-white opacity-0 group-hover:opacity-100"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-indigo-500/5 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Core Values
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded"></span>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700 hover:text-white group"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="text-5xl mb-6 text-indigo-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto p-12 md:p-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-indigo-500/10 to-transparent opacity-20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Ready to work with us?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're looking for a complete brand overhaul or just need help with a specific project, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                
                <a 
                  href="/Contact" 
                  className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-200/30"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <a href="#" className="text-2xl font-bold mb-4 inline-block">YourBrand</a>
              <p className="text-gray-400 mb-6">
                Helping businesses thrive in the digital world through innovative design, development, and marketing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
            
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start"
                      >
                        {link.icon && <span className="mr-2 mt-1">{link.icon}</span>}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved. |{' '}
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a> |{' '}
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 15s infinite linear;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
        .animation-delay-10000 {
          animation-delay: 10s;
        }
      `}</style>
    </>
  );
}