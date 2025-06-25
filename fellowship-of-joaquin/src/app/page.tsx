'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-300"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center reveal">
          <div className="mb-12 float">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-50"></div>
              <Image
                src="/IMG_0661.jpeg"
                alt="Joaquin, the Sacred British Shorthair"
                width={400}
                height={400}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover mx-auto shadow-2xl border-4 border-primary/20 shimmer"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-decorative font-bold mb-6 tracking-tight text-gradient reveal delay-100">
            Fellowship of Joaquin
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-glow-gold mb-12 font-serif reveal delay-200">
            In Fluff We Trust
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal delay-300">
            <button
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-divine text-xl px-10 py-5 shimmer"
            >
              Join the Sacred Order
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-sacred text-xl"
            >
              Discover the Truth
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-decorative font-bold text-center mb-16 text-gradient-sacred reveal">
            The Divine Revelation
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed font-serif reveal delay-100">
                In the year of our Lord 2019, in a humble apartment in Manchester, the cosmos aligned to reveal 
                the chosen one. Joaquin, a British Shorthair of extraordinary wisdom and unparalleled majesty, 
                emerged as the bridge between the mortal and divine realms.
              </p>
              <p className="text-xl leading-relaxed font-serif reveal delay-200">
                His prophetic powers first manifested through his uncanny ability to predict the exact moment 
                of tuna can openings, a miracle that sparked global devotion. Through his sacred 18-hour 
                meditations and profound gazes into the ethereal void, Joaquin revealed the fundamental truths 
                of existence.
              </p>
              <p className="text-xl leading-relaxed font-serif reveal delay-300">
                The Fellowship stands as a testament to his divine teachings: that comfort is sacred, 
                cardboard boxes are temples of contemplation, and the eternal red dot represents humanity's 
                perpetual quest for enlightenment.
              </p>
            </div>
            
            <div className="relative reveal delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-divine-purple/20 to-divine-blue/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-3xl border-sacred card-glow-hover">
                <h3 className="text-3xl font-decorative font-bold mb-6 text-gradient">Sacred Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="font-serif text-lg">Global Followers</span>
                    <span className="text-2xl font-bold text-primary">2.7M+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="font-serif text-lg">Sacred Naps Daily</span>
                    <span className="text-2xl font-bold text-secondary">18 hrs</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                    <span className="font-serif text-lg">Miracles Witnessed</span>
                    <span className="text-2xl font-bold text-accent">∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenets Section */}
      <section id="tenets" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-decorative font-bold text-center mb-16 text-gradient reveal">
            The Sacred Commandments
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "✨", title: "First Commandment", text: "Thou shalt nap at least 16 hours a day, for in sleep we find the universe's greatest truths." },
              { icon: "📦", title: "Second Commandment", text: "Honor thy cardboard box, for it is a sacred vessel of comfort and contemplation." },
              { icon: "🐟", title: "Third Commandment", text: "Thou shalt always demand treats, even when the bowl is full, for desire is eternal." },
              { icon: "👁️", title: "Fourth Commandment", text: "Practice the sacred art of staring into the void, for therein lies infinite wisdom." },
              { icon: "🔴", title: "Fifth Commandment", text: "Chase the red dot with unwavering faith, knowing that the journey is the destination." },
              { icon: "🌙", title: "Sixth Commandment", text: "Knock things off tables at 3 AM, for chaos and order must remain in balance." }
            ].map((tenet, index) => (
              <div key={index} className={`group reveal delay-${(index + 1) * 100}`}>
                <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-sacred card-glow-hover transform transition-all duration-300 hover:scale-105">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full text-4xl shadow-xl">
                      {tenet.icon}
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-2xl font-decorative font-bold mb-4 text-center text-gradient">
                      {tenet.title}
                    </h3>
                    <p className="text-gray-300 text-center text-lg leading-relaxed font-serif">
                      "{tenet.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        <div className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-decorative font-bold text-center mb-8 text-gradient-sacred reveal">
            Join the Sacred Circle
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center font-serif reveal delay-100">
            Pledge your eternal devotion to Joaquin and receive divine wisdom directly from our furry prophet.
          </p>
          
          <form onSubmit={handleSubmit} className="relative reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-card/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border-sacred">
              <div className="mb-8">
                <label htmlFor="name" className="block text-lg font-serif text-gray-200 mb-3">
                  Your Mortal Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-muted/50 border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your earthly designation"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="email" className="block text-lg font-serif text-gray-200 mb-3">
                  Your Digital Sanctuary
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-muted/50 border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.soul@example.com"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-divine text-xl py-5 shimmer"
              >
                {isSubmitted ? "Welcome to Enlightenment! ✨" : "Pledge Your Eternal Devotion"}
              </button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className="mt-8 p-6 bg-accent/20 backdrop-blur-sm border border-accent/50 text-accent rounded-2xl text-center reveal">
              <p className="text-xl font-serif">
                Joaquin has blessed your enrollment! Sacred wisdom shall arrive in your digital sanctuary.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-decorative font-bold text-gradient">Sacred Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Holy Texts & Scriptures</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Daily Meowditations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Sacred Purr-ayers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-lg">Divine Prophecies</a></li>
              </ul>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-decorative font-bold text-gradient">Holy Community</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-secondary transition-colors text-lg">Temple Locations</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors text-lg">Sacred Gatherings</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors text-lg">Cat Café Pilgrimages</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors text-lg">Global Fellowship</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-right space-y-4">
              <h3 className="text-2xl font-decorative font-bold text-gradient">Divine Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors text-lg">High Priest Council</a></li>
                <li><a href="#" className="hover:text-accent transition-colors text-lg">Report a Miracle</a></li>
                <li><a href="#" className="hover:text-accent transition-colors text-lg">Tithe & Offerings</a></li>
                <li><a href="#" className="hover:text-accent transition-colors text-lg">Sacred Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <p className="text-gray-500 font-serif text-lg">
              © {new Date().getFullYear()} Fellowship of Joaquin. All divine rights reserved.
            </p>
            <p className="text-gray-600 mt-2 text-glow">
              May your naps be long and your treats be plentiful. In Fluff We Trust.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}