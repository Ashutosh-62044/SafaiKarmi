import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';
import { SERVICES } from './constants';
import ReviewSection from "./components/Reviews";


const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'aboutus'>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: 'home' | 'services' | 'aboutus') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main>
        {/* HOME */}
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />

            {/* Trust Bar */}
            <div className="bg-[#00a8e8] py-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-around items-center gap-8 text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black">14k+</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">Bookings Done</span>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black">4.8★</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">Customer Rating</span>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black">10+</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">Cities Covered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Services Preview */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Popular Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                  {SERVICES.slice(0, 3).map((s) => (
                    <div key={s.id} className="bg-white p-6 rounded-3xl shadow-sm">
                      <h4 className="font-bold text-xl mb-2">{s.name}</h4>
                      <p className="text-gray-500 text-sm mb-4">{s.description}</p>
                      <button
                        onClick={() => handleNavigate('services')}
                        className="text-[#00a8e8] font-bold text-sm hover:underline"
                      >
                        Book Now →
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleNavigate('services')}
                  className="px-10 py-4 border-2 border-[#00a8e8] text-[#00a8e8] rounded-2xl font-bold hover:bg-[#00a8e8] hover:text-white transition-all"
                >
                  View All Services
                </button>
              </div>
            </section>

            <Features />
          </>
        )}

        {/* SERVICES */}
        {currentView === 'services' && <Services />}

        {/* ABOUT US */}
        {currentView === 'aboutus' && <AboutUs />}

        {/* Call to Action Banner (Common for all pages) */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#00a8e8] to-[#005c80] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-6 relative z-10">
                Ready to make your home <br />feel like new again?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button
                  onClick={() => handleNavigate('services')}
                  className="px-10 py-5 bg-[#76c043] hover:bg-green-600 text-white rounded-2xl font-black text-xl transition-all shadow-xl"
                >
                  Book a Service
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
<ReviewSection />

      <Footer onNavigate={handleNavigate} />
      <AIChatAssistant />
    </div>
  );
};

export default App;
