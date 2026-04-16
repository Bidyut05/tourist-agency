"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Youtube, 
  Menu, X, ChevronRight, ChevronLeft, Calendar, Users, CheckCircle2,
  Ship, Utensils, Hotel, Camera, Shield, Stethoscope, Zap,
  Clock, Plus, Minus
} from 'lucide-react';

const slides = [
  { title: "Perfect Weekend Getaway", subtitle: "Relax and explore amidst breathtaking mangrove beauty", image: "https://picsum.photos/seed/sundarban1/1920/1080" },
  { title: "Adventure & Nature Combined", subtitle: "Unleash your adventurous spirit with guided tours", image: "https://picsum.photos/seed/sundarban2/1920/1080" },
  { title: "Explore Sundarbans Safely", subtitle: "World's largest mangrove forest with expert guides", image: "https://picsum.photos/seed/sundarban3/1920/1080" },
  { title: "2 Night / 3 Day Wildlife Tour", subtitle: "Enjoy nature with comfort and luxury", image: "https://picsum.photos/seed/mangrove/1920/1080" }
];

const packages = [
  { name: "Sundarban 1 Day Tour", duration: "1 Day", min: 18, pickup: "Canning Station 9:00 AM", price: "₹1,999" },
  { name: "Sundarban 1 Night 2 Days", duration: "1N/2D", min: 18, pickup: "Canning Station 9:00 AM", price: "₹2,999" },
  { name: "Sundarban 2 Nights 3 Days", duration: "2N/3D", min: 18, pickup: "New Garia Metro 8:00 AM", price: "₹3,999" },
  { name: "Sundarban 3 Nights 4 Days", duration: "3N/4D", min: 18, pickup: "Canning Station 9:00 AM", price: "₹4,999" }
];

const features = [
  { icon: Calendar, title: "Eventful Itineraries", desc: "For a journey filled with surprises" },
  { icon: CheckCircle2, title: "Variety in Packages", desc: "Choose as per your budget" },
  { icon: Phone, title: "Customer Support", desc: "For complete assistance" },
  { icon: Users, title: "Reasonable Rates", desc: "Affordable journey without compromise" }
];

const bookingSteps = [
  { num: 1, title: "Book a Tour", desc: "Select your package and book online" },
  { num: 2, title: "Payment", desc: "Secure online payment via debit card or net banking" },
  { num: 3, title: "Confirmation", desc: "Receive email with booking confirmation and itinerary" },
  { num: 4, title: "Enjoy Your Trip", desc: "Travel and dive into an extraordinary Sundarban experience" }
];

const services = [
  { icon: Hotel, name: "Accommodation", desc: "Comfortable stays" },
  { icon: Shield, name: "Privacy", desc: "Respected and maintained" },
  { icon: Utensils, name: "Good Food", desc: "Delicious local cuisine" },
  { icon: Ship, name: "Transport", desc: "Safe and reliable" },
  { icon: Shield, name: "Safety", desc: "100% secure tours" },
  { icon: Camera, name: "Sightseeing", desc: "Guided watchtower visits" },
  { icon: Stethoscope, name: "Doctor on Call", desc: "Medical help on standby" },
  { icon: Zap, name: "Electricity", desc: "24/7 power backup" }
];

const dishes = [
  { name: "Mutton Kosha", emoji: "🍖" },
  { name: "Prawn Curry", emoji: "🦐" },
  { name: "Hilsha Fish", emoji: "🐟" },
  { name: "Crab", emoji: "🦀" }
];

const faqs = [
  { q: "What is included in the tour package?", a: "Accommodation, meals, experienced local guide, tour manager, overnight stay, wildlife spotting, watchtower visits" },
  { q: "How do I book?", a: "Call us or fill the online form" },
  { q: "Best time to visit?", a: "November to March (winter), but visits are welcome year-round" },
  { q: "Is the tour safe?", a: "Yes, operators follow strict safety guidelines" },
  { q: "What should I pack?", a: "Light clothes, sunscreen, insect repellent, comfortable shoes, ID proof" },
  { q: "Do I need a permit?", a: "Yes, permits are required for Sundarban Tiger Reserve protected areas" },
  { q: "Are medical facilities available?", a: "Limited in core areas; basic first-aid available; doctor on call" },
  { q: "Mode of transport?", a: "Motorized boats within Sundarban; AC/non-AC vehicles from Kolkata" }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. TOP HEADER BAR */}
      <div className="bg-primary-dark text-white text-xs sm:text-sm py-2 px-4 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Mukundapur, Kolkata - 700099</span>
            <a href="tel:6289388805" className="flex items-center gap-1.5 hover:text-secondary transition-colors"><Phone size={14} /> +91 6289388805</a>
            <a href="mailto:Patherdabi333@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors"><Mail size={14} /> Patherdabi333@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={16} /></a>
            <a href="https://instagram.com/patherdabi2023" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      {/* 2. STICKY NAVIGATION BAR */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary font-bold text-xl sm:text-2xl cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Ship className="text-secondary" /> 
            <span>Pother Dabi</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 font-medium text-primary">
            {['Home', 'About', 'Activities', 'Tour Packages', 'Gallery', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors uppercase text-sm tracking-wide">
                {item}
              </a>
            ))}
          </div>

          <button className="lg:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col">
            {['Home', 'About', 'Activities', 'Tour Packages', 'Gallery', 'Services', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="px-6 py-3 border-b border-gray-50 text-primary hover:bg-gray-50 hover:text-secondary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative h-[60vh] sm:h-[80vh] w-full bg-primary overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
            <Image 
              src={slide.image} 
              alt={slide.title} 
              fill 
              className="object-cover"
              priority={index === 0}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight max-w-4xl">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <a href="#tour-packages" className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                Book Now
              </a>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hidden sm:block">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all hidden sm:block">
          <ChevronRight size={24} />
        </button>
        
        {/* Slider Dots */}
        <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. QUICK BOOKING FORM */}
      <section className="bg-primary-dark py-6 sm:py-8 px-4 relative z-20 sm:-mt-8">
        <div className="max-w-7xl mx-auto bg-primary-dark sm:bg-[#1a3c2e]/95 sm:backdrop-blur sm:p-6 sm:rounded-xl sm:border sm:border-white/10 sm:shadow-2xl">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end" onSubmit={(e) => { e.preventDefault(); alert('Booking request submitted! We will contact you shortly.'); }}>
            <div className="space-y-1 lg:col-span-1">
              <label className="text-white/80 text-xs font-medium uppercase tracking-wide">Name</label>
              <input type="text" required placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded text-white px-3 py-2 outline-none focus:border-secondary transition-colors placeholder:text-white/40" />
            </div>
            <div className="space-y-1 lg:col-span-1">
              <label className="text-white/80 text-xs font-medium uppercase tracking-wide">Phone</label>
              <input type="tel" required placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded text-white px-3 py-2 outline-none focus:border-secondary transition-colors placeholder:text-white/40" />
            </div>
            <div className="space-y-1 lg:col-span-1">
              <label className="text-white/80 text-xs font-medium uppercase tracking-wide">Tour Date</label>
              <input type="date" required className="w-full bg-white/10 border border-white/20 rounded text-white px-3 py-2 outline-none focus:border-secondary transition-colors placeholder:text-white/40 [color-scheme:dark]" />
            </div>
            <div className="space-y-1 lg:col-span-1">
              <label className="text-white/80 text-xs font-medium uppercase tracking-wide">Persons</label>
              <input type="number" min="1" required placeholder="No. of Persons" className="w-full bg-white/10 border border-white/20 rounded text-white px-3 py-2 outline-none focus:border-secondary transition-colors placeholder:text-white/40" />
            </div>
            <div className="space-y-1 lg:col-span-1">
              <label className="text-white/80 text-xs font-medium uppercase tracking-wide">Package</label>
              <select required defaultValue="" className="w-full bg-[#1b6b3a] border border-white/20 rounded text-white px-3 py-2 outline-none focus:border-secondary transition-colors">
                <option value="" disabled>Select</option>
                {packages.map(p => <option key={p.name} value={p.name}>{p.duration}</option>)}
              </select>
            </div>
            <div className="lg:col-span-1">
              <button type="submit" className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded transition-colors h-[42px] flex items-center justify-center shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-secondary font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <Ship size={18} /> Premier Sundarban Tour Guide
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Welcome to Sundarban with Pother Dabi Tour & Travels</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px] sm:text-base">
              We are the perfect tour guide for Sundarban. As the top trip planner, we have been providing exceptional services for more than nine years. As the leading Sundarban tour operator in Kolkata, we take pride in providing unparalleled package rates. 
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-[15px] sm:text-base">
              Sundarban – only 2 hours from Kolkata – is the Amazon of East, an incredible destination for weekend getaways. Enjoy peaceful stays away from city noise, and dive into an extraordinary wilderness experience exploring dense mangroves and the Royal Bengal Tiger.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-gray-100 pt-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">9+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">1.5L+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">250+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">Tours Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[450px] sm:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <Image 
              src="https://picsum.photos/seed/mangrove/800/1000" 
              alt="Sundarban Mangrove Forest" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><MapPin size={20} className="text-secondary" /> Uncover the Wild</h3>
              <p className="text-sm text-white/90 leading-relaxed">Experience thrilling wildlife safaris, dense mangrove forests, and the world-famous Royal Bengal Tiger in its natural habitat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOUR PACKAGES SECTION */}
      <section id="tour-packages" className="py-20 sm:py-28 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
              <Calendar size={18} /> Choose Your Adventure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">A Few of Our Best Packages</h2>
            <p className="text-gray-600">Explore our carefully crafted itineraries suited for every type of traveler, from quick weekend escapes to comprehensive wildlife tours in the heart of nature.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative group border border-gray-100 hover:-translate-y-2">
                <div className="h-2 w-full bg-primary absolute top-0 group-hover:bg-secondary transition-colors"></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="bg-primary/10 text-primary self-start px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide">{pkg.duration}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight pr-4">{pkg.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 flex items-center gap-2"><Users size={16} className="text-primary"/> Minimum {pkg.min} persons</p>
                  
                  <div className="space-y-4 mb-8 flex-grow bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <Clock size={18} className="text-secondary" />
                      <span className="leading-snug">Pickup: <br/><span className="font-medium">{pkg.pickup}</span></span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-3">Inclusions</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex flex-col items-center gap-1"><span className="p-2 bg-white rounded-lg shadow-sm text-primary" title="Transport"><Ship size={18} /></span></div>
                        <div className="flex flex-col items-center gap-1"><span className="p-2 bg-white rounded-lg shadow-sm text-primary" title="Meals"><Utensils size={18} /></span></div>
                        <div className="flex flex-col items-center gap-1"><span className="p-2 bg-white rounded-lg shadow-sm text-primary" title="Hotel"><Hotel size={18} /></span></div>
                        <div className="flex flex-col items-center gap-1"><span className="p-2 bg-white rounded-lg shadow-sm text-primary" title="Sightseeing"><Camera size={18} /></span></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Starting from</div>
                    <div className="text-3xl font-black text-gray-900 mb-6">{pkg.price}<span className="text-sm font-medium text-gray-500"> /head</span></div>
                    
                    <div className="flex gap-3">
                      <a href="#contact" className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors text-sm">View Details</a>
                      <a href="#contact" className="flex-1 text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 sm:py-28 px-4 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1.5px,_transparent_1.5px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Why We&apos;re the Best Choice</h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto text-lg">We prioritize your comfort, safety, and experience above all else, ensuring memories that last a lifetime.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:-translate-y-2">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BOOKING PROCESS */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How to Book Your Trip</h2>
            <p className="text-gray-600 text-lg">A simple and seamless 4-step process to get you started on your adventure.</p>
          </div>

          <div className="relative">
            <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-100 md:block hidden">
              <div className="absolute top-0 left-0 h-full bg-secondary w-full opacity-20"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {bookingSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white border-[3px] border-gray-100 group-hover:border-secondary text-gray-400 group-hover:text-secondary font-black text-2xl rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300 bg-clip-padding relative z-10">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SERVICES */}
      <section id="services" className="py-20 sm:py-28 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm">Everything you need</div>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Superior Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-100 group-hover:bg-primary group-hover:border-primary rounded-full mb-5 text-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. SPECIAL DISHES */}
      <section className="py-20 px-4 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Special Local Dishes</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Savor the authentic taste of Bengal during your trip. We provide sumptuous, freshly prepared local delicacies to make your journey even more memorable.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors uppercase tracking-wider text-sm">
                View Food Menu <ChevronRight size={18} />
              </a>
            </div>
            
            <div className="lg:w-2/3 flex justify-center lg:justify-end gap-6 sm:gap-8 flex-wrap">
              {dishes.map((dish, idx) => (
                <div key={idx} className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border border-gray-100 flex flex-col items-center justify-center gap-3 hover:border-secondary shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer group hover:-translate-y-2">
                  <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">{dish.emoji}</span>
                  <span className="font-bold text-gray-900 text-center text-sm sm:text-base">{dish.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-20 sm:py-28 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <div className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Got Questions?
             </div>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'border-primary shadow-md' : 'border-gray-200'}`}>
                <button 
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-center bg-white text-left focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className={`pr-4 font-semibold text-base sm:text-lg transition-colors ${openFaqIndex === idx ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaqIndex === idx ? 'bg-primary/10 text-primary' : 'bg-gray-50 text-gray-400'}`}>
                    {openFaqIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 sm:px-8 pb-6 pt-0 text-gray-600 text-[15px] leading-relaxed border-t border-gray-50 mt-2">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA BANNER */}
      <section className="py-24 sm:py-32 px-4 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent z-0"></div>
        {/* Subtle pattern placeholder */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Embark on Your Adventure. <br />Book Your Sundarban Tour Today.</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">Join over 1,50,000 happy clients who have safely experienced the majestic beauty and thrilling wildlife of the Sundarbans with us.</p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-2xl hover:shadow-secondary/30">
            Secure Your Booking Now <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* 13. CONTACT SECTION */}
      <section id="contact" className="py-20 sm:py-28 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:pr-8">
            <div className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm">Reach Out to Us</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">Have questions about our packages or itineraries? Ready to book your weekend getaway? Contact us directly or use the form, and our team will assist you immediately.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 group-hover:bg-primary group-hover:border-primary rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 text-lg mb-1.5">Our Office</h4>
                  <p className="text-gray-600 text-[15px]">Mukundapur, Kolkata, <br/>West Bengal, India - 700099</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 group-hover:bg-primary group-hover:border-primary rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Phone size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 text-lg mb-1.5">Call Us</h4>
                  <p className="text-gray-600 text-[15px]"><a href="tel:6289388805" className="hover:text-primary font-medium transition-colors">+91 6289388805</a></p>
                  <p className="text-gray-500 text-sm mt-1">Available 24/7 for booking assistance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 group-hover:bg-primary group-hover:border-primary rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Mail size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-gray-900 text-lg mb-1.5">Email Us</h4>
                  <p className="text-gray-600 text-[15px]"><a href="mailto:Patherdabi333@gmail.com" className="hover:text-primary font-medium transition-colors">Patherdabi333@gmail.com</a></p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-14 h-72 bg-gray-100 rounded-3xl border border-gray-200 flex items-center justify-center text-gray-400 overflow-hidden relative shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689622838!2d88.26495015967073!3d22.53556493867623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027732a3f707f1%3A0xcf6f0ccefe88a100!2sMukundapur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter grayscale-[20%] contrast-125"
               ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 h-fit sticky top-24">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Your Tour</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 1234567890" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Tour Date</label>
                  <input type="date" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Select Package</label>
                  <select required defaultValue="" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white text-gray-700 font-medium">
                    <option value="" disabled>Select from below</option>
                    {packages.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Additional Message</label>
                <textarea rows={4} placeholder="Any special requests or inquiries?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all focus:bg-white resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all mt-4 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
                Confirm Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#0f1f18] text-gray-400 py-20 px-4 pb-8 border-t-[8px] border-secondary">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-1 border-b border-gray-800/50 pb-8 sm:border-0 sm:pb-0">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                 <Ship className="text-secondary" size={20} />
              </div> 
              <span>Pother Dabi</span>
            </div>
            <p className="text-[15px] mb-8 leading-relaxed font-light text-gray-400">
              Your trusted partner and premier Sundarban tour guide. Providing exceptional, safe, and memorable tours into the heart of the world&apos;s largest mangrove forest for over 9 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all hover:-translate-y-1"><Facebook size={20} /></a>
              <a href="https://instagram.com/patherdabi2023" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all hover:-translate-y-1"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-[15px]">
              {['Home', 'About', 'Tour Packages', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors flex items-center gap-2 relative group w-fit"><span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all"></span>{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Important Links</h4>
            <ul className="space-y-4 text-[15px]">
              {['Privacy Policy', 'Terms & Conditions', 'Cancellation & Refund', 'Disclaimer'].map(link => (
                <li key={link}><a href="#" className="hover:text-secondary transition-colors flex items-center gap-2 relative group w-fit"><span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all"></span>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-[15px]">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-secondary"><MapPin size={16} /></div>
                <span className="leading-relaxed">Mukundapur, Kolkata, <br/>India - 700099</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-secondary"><Phone size={16} /></div>
                <a href="tel:6289388805" className="hover:text-white transition-colors font-medium">6289388805</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-secondary"><Mail size={16} /></div>
                <a href="mailto:Patherdabi333@gmail.com" className="hover:text-white transition-colors">Patherdabi333@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800/50 text-center text-[13px] flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Pother Dabi Tour & Travels. All Rights Reserved.</p>
          <p>Made with Next.js & Tailwind CSS for an AI Studio Demo</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/916289388805" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce group border-4 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-10 right-0 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
