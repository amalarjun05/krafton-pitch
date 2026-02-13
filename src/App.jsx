import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Calendar, Trophy, Users, Target, Zap, Layout, ShieldCheck, Gamepad2, BarChart3, Megaphone, Globe, CheckCircle, Printer, X } from 'lucide-react';

// --- Assets & Styles ---
// Using Tailwind CSS for styling (assumed available in environment)

const THEME = {
  black: '#0a0a0a',
  darkGrey: '#121212',
  kraftonOrange: '#F2A900', // Approximate BGMI/Krafton Gold/Orange
  white: '#ffffff',
  accentBlue: '#00e5ff',
};

// --- Components ---

const Slide = ({ active, children, mode = 'presentation', className = "" }) => {
  if (mode === 'presentation' && !active) return null;

  // In presentation mode, absolute positioning centers the slide.
  // In list (print) mode, relative positioning stacks them vertically.
  const baseClasses = mode === 'presentation' 
    ? "absolute inset-0 w-full h-full" 
    : "relative w-full min-h-screen border-b border-gray-800 print:border-0 print:break-after-page print:h-screen";

  return (
    <div className={`${baseClasses} flex flex-col justify-center items-center p-8 md:p-16 transition-opacity duration-500 ${mode === 'presentation' ? 'animate-fadeIn' : ''} ${className}`}>
      {children}
    </div>
  );
};

const GlitchText = ({ text, size = "text-4xl md:text-6xl", color = "text-white" }) => (
  <div className="relative inline-block group">
    <h1 className={`${size} font-black uppercase tracking-tighter ${color} relative z-10`}>
      {text}
    </h1>
    <h1 className={`${size} font-black uppercase tracking-tighter text-red-500 absolute top-0 left-0 -ml-[2px] opacity-0 group-hover:opacity-50 transition-opacity duration-100 select-none z-0`}>
      {text}
    </h1>
    <h1 className={`${size} font-black uppercase tracking-tighter text-blue-500 absolute top-0 left-0 ml-[2px] opacity-0 group-hover:opacity-50 transition-opacity duration-100 select-none z-0`}>
      {text}
    </h1>
  </div>
);

// --- Slides Content ---

const TitleSlide = () => (
  <div className="text-center space-y-6 max-w-5xl">
    <div className="space-y-2">
        <GlitchText text="KRAFTON ESPORTS" size="text-5xl md:text-7xl" />
        <br />
        <GlitchText text="COLLEGE CAMPUS TOUR 2026" size="text-4xl md:text-6xl" color="text-[#F2A900]" />
        <br />
        <h2 className="text-3xl md:text-5xl font-black text-white mt-2">- KERALA</h2>
    </div>
    
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-lg md:text-xl font-medium text-gray-300">
      <div className="flex items-center gap-2">
        <Calendar className="text-[#F2A900]" /> Q2 2026 (Apr - Jun)
      </div>
      <div className="hidden md:block w-2 h-2 bg-gray-600 rounded-full"></div>
      <div className="flex items-center gap-2">
        <MapPin className="text-[#F2A900]" /> NIT Calicut & Jain Univ Kochi
      </div>
    </div>
  </div>
);

const AboutSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
    <div className="space-y-6">
      <h2 className="text-[#F2A900] text-xl font-bold tracking-widest uppercase mb-2">Who We Are</h2>
      <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
        KERALA'S PREMIER <br/>ESPORTS EXECUTORS
      </h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        The All Kerala Esports Federation (AKEF) is the driving force behind the state's gaming revolution. We don't just host tournaments; we build ecosystems. 
      </p>
      <ul className="space-y-4 mt-6">
        <li className="flex items-center gap-3 text-gray-200">
          <ShieldCheck className="text-[#F2A900]" /> Established Grassroots Network
        </li>
        <li className="flex items-center gap-3 text-gray-200">
          <Users className="text-[#F2A900]" /> Access to 50+ College Campus Communities
        </li>
        <li className="flex items-center gap-3 text-gray-200">
          <Trophy className="text-[#F2A900]" /> Proven Track Record of LAN Executions
        </li>
      </ul>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center h-48">
        <h3 className="text-4xl font-black text-[#F2A900] mb-2">100%</h3>
        <p className="text-sm uppercase tracking-wide text-gray-400">Execution Capability</p>
      </div>
      <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center h-48">
        <h3 className="text-4xl font-black text-[#F2A900] mb-2">A-Z</h3>
        <p className="text-sm uppercase tracking-wide text-gray-400">Management</p>
      </div>
      <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center h-48 col-span-2">
        <h3 className="text-4xl font-black text-white mb-2">1 Lakh +</h3>
        <p className="text-sm uppercase tracking-wide text-gray-400">Community Network</p>
      </div>
    </div>
  </div>
);

const WhyKeralaSlide = () => (
    <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">Market Analysis</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white">WHY KERALA?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-[#F2A900] transition-all">
                <Globe className="text-[#F2A900] w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">High Digital Literacy</h3>
                <p className="text-gray-400">Kerala boasts one of India's highest mobile internet penetration rates, creating a massive, connected player base ready for competitive gaming.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-[#F2A900] transition-all">
                <Users className="text-[#F2A900] w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Hyper-Local Community</h3>
                <p className="text-gray-400">The "Mallu" gaming community is distinct, vocal, and highly engaged. They rally behind local events with unmatched enthusiasm.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-[#F2A900] transition-all">
                <Zap className="text-[#F2A900] w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Untapped Potential</h3>
                <p className="text-gray-400">While metros get major events, Tier-2 cities like Calicut and Kochi are starving for premium esports experiences. The demand exceeds supply.</p>
            </div>
        </div>
    </div>
);

const SocialProofSlide = () => (
    <div className="w-full max-w-6xl text-center">
        <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-4">Our Track Record</h2>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-12">TRUSTED NETWORK</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-80">
            {['NIT CALICUT', 'CUSAT', 'CET TRIVANDRUM', 'TKM KOLLAM', 'RSET KOCHI', 'GEC THRISSUR', 'FISAT', 'MACE'].map((college, i) => (
                <div key={i} className="bg-white/5 border border-white/10 py-6 px-4 rounded flex items-center justify-center">
                    <span className="font-bold text-gray-400 tracking-wider">{college}</span>
                </div>
            ))}
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="text-center">
                    <h3 className="text-4xl font-black text-white">50+</h3>
                    <p className="text-[#F2A900] uppercase text-sm font-bold mt-1">College Clubs</p>
                </div>
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                <div className="text-center">
                    <h3 className="text-4xl font-black text-white">200+</h3>
                    <p className="text-[#F2A900] uppercase text-sm font-bold mt-1">Tournaments Executed</p>
                </div>
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                 <div className="text-center">
                    <h3 className="text-4xl font-black text-white">100%</h3>
                    <p className="text-[#F2A900] uppercase text-sm font-bold mt-1">Success Rate</p>
                </div>
            </div>
        </div>
    </div>
);

const GameTitlesSlide = () => (
    <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">The Arena</h2>
            <h1 className="text-4xl md:text-6xl font-black text-white">FEATURED TITLES</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 h-80 flex flex-col justify-end p-8 transition-all hover:border-[#F2A900]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50" style={{ backgroundImage: "url('https://downloadr2.apkmirror.com/wp-content/uploads/2023/05/48/64711804c17fd.png')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                
                <div className="relative z-10">
                    <h3 className="text-5xl font-black text-white italic mb-2 group-hover:text-[#F2A900] transition-colors">BGMI</h3>
                    <p className="text-xl text-gray-300 font-bold">BATTLEGROUNDS MOBILE INDIA</p>
                    <p className="mt-4 text-gray-400 text-sm">The heartbeat of Indian Esports. Squad mode, custom lobbies, high-octane LAN finale.</p>
                </div>
            </div>

             <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 h-80 flex flex-col justify-end p-8 transition-all hover:border-blue-500">
                 <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50" style={{ backgroundImage: "url('https://play-lh.googleusercontent.com/jSv6ZBqavvM1O6FXERCwh_bOkXKdYs1NCrr09yYMr7KpC1SJqRSoTvV5pXCbBkt1V-xvS4pwaneYMTBeOWaPxg')" }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                <div className="relative z-10">
                    <h3 className="text-5xl font-black text-white italic mb-2 group-hover:text-blue-500 transition-colors">REAL CRICKET</h3>
                    <p className="text-xl text-gray-300 font-bold">MOBILE CRICKET SIMULATION</p>
                    <p className="mt-4 text-gray-400 text-sm">Tapping into the nation's passion. 1v1 and multiplayer showdowns engaging the casual and hardcore fanbase.</p>
                </div>
            </div>
        </div>
    </div>
);

const VenuesSlide = () => (
  <div className="w-full max-w-6xl">
    <div className="text-center mb-12">
       <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">The Battlegrounds</h2>
       <h1 className="text-4xl md:text-5xl font-black text-white">DUAL VENUE STRATEGY</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#111] rounded-xl overflow-hidden border border-white/10">
        <div className="h-2 bg-[#F2A900]"></div>
        <div className="p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="bg-[#F2A900] text-black text-xs font-bold px-2 py-1 rounded uppercase">Tier 1 Event</span>
                    <h3 className="text-3xl font-black text-white mt-2">NIT CALICUT</h3>
                </div>
                <MapPin className="text-gray-500" />
            </div>
            <p className="text-gray-400 mb-6 text-sm">One of South India's premier engineering institutes. Known for 'Ragam' and a massive, tech-savvy student population.</p>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Users size={18} className="text-[#F2A900]" />
                    <span className="text-gray-200 text-sm">High Footfall Campus</span>
                </div>
                <div className="flex items-center gap-3">
                    <Zap size={18} className="text-[#F2A900]" />
                    <span className="text-gray-200 text-sm">Massive Auditorium LAN Setup</span>
                </div>
                <div className="flex items-center gap-3">
                    <Target size={18} className="text-[#F2A900]" />
                    <span className="text-gray-200 text-sm">Access to North Kerala Gaming Hubs</span>
                </div>
            </div>
        </div>
      </div>

       <div className="bg-[#111] rounded-xl overflow-hidden border border-white/10">
        <div className="h-2 bg-blue-500"></div>
        <div className="p-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">Tier 2 Event</span>
                    <h3 className="text-3xl font-black text-white mt-2">JAIN UNIV KOCHI</h3>
                </div>
                <MapPin className="text-gray-500" />
            </div>
            <p className="text-gray-400 mb-6 text-sm">A modern campus in the heart of Kerala's commercial capital. Targeted, urban, and high-energy.</p>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Users size={18} className="text-blue-500" />
                    <span className="text-gray-200 text-sm">Urban Gamer Demographic</span>
                </div>
                <div className="flex items-center gap-3">
                    <Zap size={18} className="text-blue-500" />
                    <span className="text-gray-200 text-sm">Premium LAN Environment</span>
                </div>
                <div className="flex items-center gap-3">
                    <Target size={18} className="text-blue-500" />
                    <span className="text-gray-200 text-sm">Strategic Kochi Metro Coverage</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const MarketingSlide = () => (
    <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">Audience Acquisition</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white">IGNITING THE HYPE</h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-lg border border-white/10 text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Megaphone className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Digital Blitz</h3>
                <p className="text-gray-400 text-sm">Targeted social media campaigns across Instagram and YouTube shorts. Collaboration with Kerala's top gaming content creators.</p>
            </div>
            
            <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-lg border border-white/10 text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-[#5865F2] rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Activation</h3>
                <p className="text-gray-400 text-sm">Leveraging the 1 Lakh+ AKEF network via Discord and WhatsApp. Direct entry into college student groups.</p>
            </div>
            
            <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-black p-8 rounded-lg border border-white/10 text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-[#F2A900] rounded-full mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="text-black w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">On-Ground Guerrilla</h3>
                <p className="text-gray-400 text-sm">Physical posters, QR code standees in canteens, and "Campus Ambassador" driven registrations.</p>
            </div>
        </div>
    </div>
);

const RoadmapSlide = () => (
    <div className="w-full max-w-6xl">
        <div className="text-center mb-10">
            <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">Scope of Work</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white">A-Z EXECUTION MODEL</h1>
        </div>

        <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/5 hover:border-[#F2A900] transition-all">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-[#F2A900] font-bold mb-4 border border-[#F2A900]">1</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Launch</h3>
                    <ul className="text-base text-gray-400 space-y-2">
                        <li>• Campus Ambassador Pgm</li>
                        <li>• Social Media Teasers</li>
                        <li>• Registration Portal</li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/5 hover:border-[#F2A900] transition-all">
                     <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-[#F2A900] font-bold mb-4 border border-[#F2A900]">2</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Online Qualifiers</h3>
                    <ul className="text-base text-gray-400 space-y-2">
                        <li>• 2 Weeks Duration</li>
                        <li>• Anti-Cheat Monitoring</li>
                        <li>• Content Production</li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-white/5 hover:border-[#F2A900] transition-all shadow-[0_0_30px_rgba(242,169,0,0.1)]">
                     <div className="w-10 h-10 bg-[#F2A900] rounded-full flex items-center justify-center text-black font-bold mb-4">3</div>
                    <h3 className="text-2xl font-bold text-[#F2A900] mb-4">LAN FINALE</h3>
                    <ul className="text-base text-gray-400 space-y-2">
                        <li>• 1-Day Mega Event</li>
                        <li>• LAN Production</li>
                        <li>• Prize Distribution</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <div className="inline-block bg-white/5 border border-white/10 px-8 py-4 rounded-full">
                <span className="text-gray-300">Total Project Timeline: </span>
                <span className="text-[#F2A900] font-bold">10 - 25 Days per Event</span>
            </div>
        </div>
    </div>
);

const KPISlide = () => (
    <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
            <h2 className="text-[#F2A900] text-lg font-bold tracking-widest uppercase mb-2">Deliverables</h2>
            <h1 className="text-4xl md:text-5xl font-black text-white">PROJECTED IMPACT</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111] p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center h-64 hover:bg-white/5 transition-colors">
                <h3 className="text-5xl font-black text-[#F2A900] mb-2">2,000+</h3>
                <p className="text-lg font-bold text-white uppercase">Registrations</p>
                <p className="text-xs text-gray-500 mt-2">Across both titles</p>
            </div>
             <div className="bg-[#111] p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center h-64 hover:bg-white/5 transition-colors">
                <h3 className="text-5xl font-black text-blue-500 mb-2">5,000+</h3>
                <p className="text-lg font-bold text-white uppercase">Campus Footfall</p>
                <p className="text-xs text-gray-500 mt-2">Live Audience</p>
            </div>
             <div className="bg-[#111] p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center h-64 hover:bg-white/5 transition-colors">
                <h3 className="text-5xl font-black text-white mb-2">1M+</h3>
                <p className="text-lg font-bold text-white uppercase">Digital Impressions</p>
                <p className="text-xs text-gray-500 mt-2">Social Reach</p>
            </div>
             <div className="bg-[#111] p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center h-64 hover:bg-white/5 transition-colors">
                <h3 className="text-5xl font-black text-green-500 mb-2">100%</h3>
                <p className="text-lg font-bold text-white uppercase">Brand Recall</p>
                <p className="text-xs text-gray-500 mt-2">Post-Event Survey</p>
            </div>
        </div>
    </div>
);

const ConclusionSlide = () => (
  <div className="text-center space-y-8 max-w-4xl">
    <GlitchText text="READY TO DROP?" size="text-5xl md:text-7xl" />
    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      AKEF is ready to turn these campuses into battlegrounds. Let's build the future of grassroots esports in Kerala together.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left bg-white/5 p-8 rounded-xl border border-white/10">
        <div>
            <h3 className="text-[#F2A900] font-bold uppercase tracking-widest mb-4">Contact</h3>
            <p className="text-white text-lg">All Kerala Esports Federation</p>
            <p className="text-gray-400">corp@akef.in</p>
            <p className="text-gray-400">+91 8129 469 669</p>
        </div>
        <div>
             <h3 className="text-[#F2A900] font-bold uppercase tracking-widest mb-4">Next Steps</h3>
             <ul className="space-y-2 text-gray-300">
                <li>1. Budget Approval</li>
                <li>2. Campus Dates Finalization</li>
                <li>3. Asset Handoff</li>
                <li>4. Launch</li>
             </ul>
        </div>
    </div>
    <div className="mt-12">
        <button className="bg-[#F2A900] hover:bg-yellow-500 text-black font-black py-4 px-12 rounded-sm uppercase tracking-widest transition-transform transform hover:scale-105">
            Contact US Now
        </button>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('presentation'); // 'presentation' or 'list'
  const totalSlides = 10;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (viewMode === 'list') return; // Disable keyboard nav in list view
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);

  return (
    <div className={`relative w-full h-screen bg-[#0a0a0a] font-sans text-white selection:bg-[#F2A900] selection:text-black ${viewMode === 'presentation' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black z-0 pointer-events-none"></div>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Header / Logo Area */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none print:hidden">
        <div className="text-2xl font-black tracking-tighter italic pointer-events-auto">
            AKEF <span className="text-[#F2A900]">x</span> KRAFTON
        </div>
        <div className="flex items-center gap-4">
            <button 
                onClick={() => setViewMode(prev => prev === 'presentation' ? 'list' : 'presentation')}
                className="pointer-events-auto bg-white/10 hover:bg-white/20 p-2 rounded text-sm flex items-center gap-2 backdrop-blur-sm transition-colors border border-white/10 text-white"
                title={viewMode === 'presentation' ? "Prep for PDF / Print" : "Close Print View"}
            >
                {viewMode === 'presentation' ? <Printer size={16} /> : <X size={16} />}
                <span className="hidden md:inline">{viewMode === 'presentation' ? 'Prep for PDF' : 'Close PDF View'}</span>
            </button>
            <div className="text-xs font-mono text-gray-500 uppercase">
                Confidential // Q2 2026 Proposal
            </div>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="relative z-10 w-full min-h-full">
        {viewMode === 'presentation' ? (
          <>
            <Slide active={currentSlide === 0}><TitleSlide /></Slide>
            <Slide active={currentSlide === 1}><AboutSlide /></Slide>
            <Slide active={currentSlide === 2}><WhyKeralaSlide /></Slide>
            <Slide active={currentSlide === 3}><SocialProofSlide /></Slide>
            <Slide active={currentSlide === 4}><GameTitlesSlide /></Slide>
            <Slide active={currentSlide === 5}><VenuesSlide /></Slide>
            <Slide active={currentSlide === 6}><MarketingSlide /></Slide>
            <Slide active={currentSlide === 7}><RoadmapSlide /></Slide>
            <Slide active={currentSlide === 8}><KPISlide /></Slide>
            <Slide active={currentSlide === 9}><ConclusionSlide /></Slide>
          </>
        ) : (
          <div className="flex flex-col bg-[#0a0a0a]">
             {/* Printable Header for PDF */}
             <div className="hidden print:block text-center p-8 border-b border-gray-800">
                <h1 className="text-2xl font-black">AKEF x KRAFTON</h1>
                <p className="text-gray-500 text-sm">Kerala Collegiate Esports Series 2026</p>
             </div>

            <Slide mode="list"><TitleSlide /></Slide>
            <Slide mode="list"><AboutSlide /></Slide>
            <Slide mode="list"><WhyKeralaSlide /></Slide>
            <Slide mode="list"><SocialProofSlide /></Slide>
            <Slide mode="list"><GameTitlesSlide /></Slide>
            <Slide mode="list"><VenuesSlide /></Slide>
            <Slide mode="list"><MarketingSlide /></Slide>
            <Slide mode="list"><RoadmapSlide /></Slide>
            <Slide mode="list"><KPISlide /></Slide>
            <Slide mode="list"><ConclusionSlide /></Slide>
          </div>
        )}
      </div>

      {/* Navigation Controls (Hidden in List View) */}
      {viewMode === 'presentation' && (
        <div className="absolute bottom-0 w-full p-8 z-50 flex justify-between items-end print:hidden">
            {/* Progress Dots */}
            <div className="flex gap-2 mb-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-[#F2A900]' : 'w-4 bg-gray-700 hover:bg-gray-500'}`}
                />
            ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
            <button onClick={prevSlide} className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:border-[#F2A900] transition-all group">
                <ChevronLeft className="group-hover:text-[#F2A900]" />
            </button>
            <button onClick={nextSlide} className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:border-[#F2A900] transition-all group">
                <ChevronRight className="group-hover:text-[#F2A900]" />
            </button>
            </div>
        </div>
      )}

      {/* CSS Animations & Print Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @media print {
            @page { margin: 0; size: landscape; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .print\\:hidden { display: none !important; }
            .print\\:block { display: block !important; }
            .print\\:border-0 { border: 0 !important; }
            .print\\:break-after-page { break-after: page; page-break-after: always; min-height: 100vh; }
            .print\\:h-screen { height: 100vh !important; }
        }
      `}</style>
    </div>
  );
};

export default App;