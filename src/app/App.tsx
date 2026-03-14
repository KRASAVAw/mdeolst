import React from 'react';
import { Search, ArrowRight, ArrowUpRight, Plus, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import auraImg1 from 'figma:asset/b5cc5a0e542521c9eefda03e277d90b56ed64a90.png';
import auraImg2 from 'figma:asset/c1cd1754a88bb62b11bae006514f3e1adabc4912.png';
import finTrackImg from 'figma:asset/154e327b2632b7c288494009746f7d62c17dafad.png';
import imgWireframe from 'figma:asset/1f2d95e615aba67f5ffca5f5c830a7de792c2e74.png';
import imgHeatmap from 'figma:asset/2db67576c06a327b12cb810ec63d596aba79db3f.png';
import imgUserFlow from 'figma:asset/09350f0acc18be67d4320d6b91228c28cf4029bc.png';
import imgTeam from 'figma:asset/66336f229dba131c4d2da8e7535c361d13485d6a.png';

const avatar1 = "https://images.unsplash.com/photo-1622812947502-0a643f17387e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNDc1OTg5fDA&ixlib=rb-4.1.0&q=80&w=200";
const avatar2 = "https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM0NTU3MTB8MA&ixlib=rb-4.1.0&q=80&w=200";
const productImage = "https://images.unsplash.com/photo-1612437830721-4f8eab90c5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBpc29sYXRlZCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM1MDczNTd8MA&ixlib=rb-4.1.0&q=80&w=400";

const VIDEO_URL = "https://media.weavy.ai/video/upload/uploads/ugFuyIPVOJhtEUy9CeKQEweHumK2/y4exxrf926p44iv3drly.mp4";

export default function App() {
  return (
    <div className="font-['Inter'] bg-[#f0efea]">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 lg:px-12 h-[80px] border-b border-[#ddd9d0] shrink-0 relative z-20 bg-[#f0efea]">
        <div className="flex items-center gap-2">
           <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
             <rect width="36" height="36" rx="7" fill="#2d1f00" />
             <path d="M18 8C13.5 8 10 11.5 10 15.5C10 18.5 11.8 21 14.5 22.2L10.5 28H15L17.5 24.5C17.7 24.5 17.8 24.5 18 24.5C22.5 24.5 26 21 26 17C26 12.5 22.5 8 18 8ZM18 21C15.2 21 13 19 13 16.5C13 14 15.2 12 18 12C20.8 12 23 14 23 16.5C23 19 20.8 21 18 21Z" fill="#f0efea" />
           </svg>
           <span className="font-['Anton'] text-2xl text-[#2d1f00] tracking-wide mt-1">Forma.</span>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-[#2d1f00]">
          <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">
            Interaction 
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">Lab</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Craft & Culture</a>
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:opacity-70 transition-opacity p-2 hidden sm:block">
             <Search size={20} className="text-[#2d1f00]" />
          </button>
          <button className="bg-[#2d1f00] text-[#f0efea] px-6 py-2.5 text-sm font-medium hover:bg-black transition-colors rounded-[3px]">
            Hire [ Us ]
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex flex-col lg:items-center overflow-hidden bg-[#ECE9DE] lg:bg-[#f0efea]">
        {/* Mobile Video Container (Top) & Desktop Full Video */}
        <div className="relative w-full h-[60vh] shrink-0 lg:absolute lg:inset-0 lg:h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={VIDEO_URL}
            className="w-full h-full object-cover object-[center_top] scale-110 origin-top -translate-x-[4%]"
          />
          {/* Gradient transition for mobile */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#ECE9DE] to-transparent lg:hidden z-10 pointer-events-none"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col w-full px-4 sm:px-8 py-8 gap-8 lg:absolute lg:inset-0 lg:p-0 lg:gap-0 lg:pointer-events-none max-w-[1920px] mx-auto">
          
          {/* Big Text Container - Flows on mobile, Absolute over video on desktop */}
          <div className="w-full flex justify-between select-none z-20 pointer-events-none lg:absolute lg:top-[12%] lg:left-0 lg:px-12 xl:px-16 right-0">
            <h1 className="font-['Anton'] text-[20vw] md:text-[18vw] lg:text-[13vw] 2xl:text-[220px] leading-[0.85] lg:leading-[0.8] text-[#3b261a] m-0 tracking-tight uppercase">
              BOLD<br />
              IDEAS
            </h1>
            <h1 className="font-['Anton'] text-[20vw] md:text-[18vw] lg:text-[13vw] 2xl:text-[220px] leading-[0.85] lg:leading-[0.8] text-[#3b261a] m-0 tracking-tight text-right uppercase">
              SHAPE<br />
              MINDS
            </h1>
          </div>

          {/* Middle Left CTA */}
          <div className="flex flex-col items-start gap-4 pointer-events-auto lg:absolute lg:top-[62%] lg:left-12 lg:flex-row lg:gap-6 lg:items-center">
            <button className="bg-[#e86c1c] text-white px-7 py-3.5 flex items-center justify-center gap-3 font-medium hover:bg-[#d95c1a] transition-colors text-sm rounded-sm shadow-lg shadow-orange-500/20 w-auto">
              Our Studio <ArrowRight size={18} />
            </button>
            <p className="max-w-[220px] lg:max-w-[180px] text-sm text-[#3b261a] font-medium leading-relaxed">
              Discover crafted designs that speaks your soul
            </p>
          </div>

          {/* Bottom Left Content */}
          <div className="flex flex-col items-start gap-4 pointer-events-auto lg:absolute lg:bottom-12 lg:left-12 lg:items-center lg:text-center mt-2 lg:mt-0">
            <div className="flex -space-x-3">
              <img src={avatar1} alt="Team member" className="w-12 h-12 rounded-full border-2 border-[#ECE9DE] lg:border-[#f0efea] object-cover relative z-10" />
              <img src={avatar2} alt="Team member" className="w-12 h-12 rounded-full border-2 border-[#ECE9DE] lg:border-[#f0efea] object-cover relative z-0" />
            </div>
            <h3 className="text-[20px] lg:text-[26px] font-semibold leading-[1.1] max-w-[240px] lg:max-w-[280px] text-[#2d1f00] tracking-tight">Well designed and well crafted only for you</h3>
            <a href="#" className="inline-flex items-center justify-center gap-1 border-b-[1.5px] border-[#2d1f00] text-[13px] font-semibold pb-0.5 text-[#2d1f00] hover:opacity-70 transition-opacity w-fit mt-1 uppercase tracking-wider">
              Portfolios <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Bottom Right Card */}
          <div className="hidden lg:block lg:absolute lg:bottom-12 lg:right-12 bg-white rounded-lg p-5 shadow-2xl w-[260px] lg:w-[280px] pointer-events-auto">
            <div className="flex justify-between items-center mb-5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
              <span className="text-[#2d1f00]">Top of the list</span>
              <div className="flex gap-1">
                <span className="text-[#2d1f00]">Web</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">Desktop</span>
              </div>
            </div>
            <div className="mb-6 h-[130px] flex items-center justify-center bg-[#f5f2ee] rounded-md overflow-hidden p-0">
              <img src="https://images.unsplash.com/photo-1614029896656-a094f640558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwbW9ja3VwfGVufDF8fHx8MTc3MzUwODI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Featured Work" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-[22px] text-[#2d1f00] tracking-tight">$1,699</span>
              <button className="flex items-center gap-1 border-[1.5px] border-[#2d1f00] rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-[#2d1f00] hover:bg-[#2d1f00] hover:text-white transition-colors">
                Book a Call <Plus size={14} />
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* SELECTED WORKS SECTION */}
      <section className="w-full bg-[#ECE9DE] py-20 lg:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 gap-6">
            <div className="text-[#a4a09a] font-medium tracking-wide text-xl lg:w-1/3 text-center lg:text-left">
              2019—2026
            </div>
            
            <h2 className="font-['Anton'] text-[14vw] lg:text-[100px] leading-none text-[#3b261a] tracking-tight m-0 text-center uppercase lg:w-1/3 shrink-0">
              Selected Works
            </h2>
            
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button className="bg-[#e86c1c] text-white px-6 py-2.5 flex items-center justify-center gap-2 font-medium hover:bg-[#d95c1a] transition-colors text-sm rounded-md shadow-sm">
                All Projects <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-2 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center px-4 py-4 text-[13px] font-semibold text-[#3b261a] tracking-wide">
                <span>01 — FINTRACK AI</span>
                <span>2024</span>
              </div>
              <div className="w-full h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden relative">
                <img 
                  src={finTrackImg} 
                  alt="FinTrack AI Project" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-2 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center px-4 py-4 text-[13px] font-semibold text-[#3b261a] tracking-wide">
                <span>02 — AURA COMMERCE</span>
                <span>2024</span>
              </div>
              <div className="w-full h-[400px] lg:h-[500px] rounded-[16px] overflow-hidden relative">
                <img 
                  src={auraImg2} 
                  alt="AURA Commerce Project 2" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION (GALLERY COLLAGE & TEXT, FULL SCREEN DESKTOP) */}
      <section className="w-full bg-[#F4F3EA] px-6 py-20 lg:py-0 lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-center justify-between">
          
          {/* Left Side Gallery Collage */}
          <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-[85vh] flex justify-center lg:justify-start relative shrink-0">
            <div className="relative h-full aspect-[4/5] w-auto max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1704655295066-681e61ecca6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxMjk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Designer portrait"
                className="absolute top-[0%] right-[10%] w-[52%] h-[24%] object-cover object-top rounded-[2px] shadow-sm z-10"
              />
              <img 
                src={imgUserFlow} 
                alt="User Flow"
                className="absolute top-[26%] right-[10%] w-[52%] h-[24%] object-cover object-center rounded-[2px] shadow-sm z-10 bg-white"
              />
              <img 
                src={imgWireframe} 
                alt="Wireframing"
                className="absolute top-[52%] right-[10%] w-[52%] h-[24%] object-cover object-center rounded-[2px] shadow-sm z-10 bg-white"
              />
              <img 
                src={imgHeatmap} 
                alt="Heatmap Analysis"
                className="absolute top-[62%] left-[6%] w-[32%] h-[22%] object-cover object-center rounded-[2px] shadow-sm z-20 bg-white"
              />
              <img 
                src={imgTeam} 
                alt="Creative team"
                className="absolute top-[80%] left-[18%] w-[45%] h-[20%] object-cover object-center rounded-[2px] shadow-md z-30 bg-white"
              />
            </div>
          </div>

          {/* Right Side Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start z-20 pl-0 lg:pl-12">
            <div className="flex flex-col gap-6 lg:gap-7 w-full text-center lg:text-left">
              <h2 className="font-['Anton'] text-[15vw] lg:text-[100px] leading-[0.85] text-[#3b261a] tracking-tight m-0">
                Focused on <br />
                usability
              </h2>
              <p className="text-[#3b261a] text-[15px] lg:text-[16px] leading-[1.6] max-w-[380px] mx-auto lg:mx-0 font-medium">
                Usability is treated as a working standard. Decisions are made with reference to what has proven engaging over time.
              </p>
              <div className="pt-2 flex justify-center lg:justify-start">
                <button className="bg-[#e86c1c] text-white px-8 py-3.5 flex items-center justify-center gap-2 font-medium hover:bg-[#d95c1a] transition-colors text-[14px] rounded-[3px] shadow-sm">
                  About the team <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="w-full bg-[#ECE9DE] py-20 lg:py-32 lg:min-h-[1150px] relative overflow-hidden flex items-center justify-center">
        {/* Concentric Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="absolute w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border border-[#dcd8ce]"></div>
          <div className="absolute w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] rounded-full border border-[#dcd8ce]"></div>
          <div className="absolute w-[850px] h-[850px] lg:w-[1100px] lg:h-[1100px] rounded-full border border-[#dcd8ce]"></div>
          <div className="absolute w-[1100px] h-[1100px] lg:w-[1450px] lg:h-[1450px] rounded-full border border-[#dcd8ce]"></div>

          {/* Floating Avatar Cards - Desktop Orbiting */}
          <div className="hidden lg:block absolute w-[1100px] h-[1100px] rounded-full pointer-events-none animate-[spin_40s_linear_infinite]">
            {/* Card 1 (Top Left, 240 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '260px', top: '70px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTE3MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Kierra V." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Kierra V.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">Design Lead</div>
              </div>
            </div>
            {/* Card 2 (Left, 180 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '35px', top: '460px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsaXN0aWMlMjBldmVyeWRheSUyMG1hbiUyMGdsYXNzZXMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Chance S." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Chance S.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">UX Researcher</div>
              </div>
            </div>
            {/* Card 3 (Bottom Left, 120 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '260px', top: '850px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1701163802657-30d817693cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjAzMCUyMHllYXIlMjBvbGQlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxOTQxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Emery S." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Emery S.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">Creative Dir.</div>
              </div>
            </div>
            {/* Card 4 (Top Right, 300 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '710px', top: '70px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1770363758981-e4753a7d2219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBwcm9mZXNzaW9uYWwlMjBibGFjayUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTE3MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Pallyn S." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Pallyn S.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">Product Lead</div>
              </div>
            </div>
            {/* Card 5 (Right, 0 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '935px', top: '460px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1724118135606-b4ff6b631cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVyeWRheSUyMHlvdW5nJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTE3MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Jaxson G." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Jaxson G.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">UI Designer</div>
              </div>
            </div>
            {/* Card 6 (Bottom Right, 60 deg) */}
            <div className="absolute animate-[spin_40s_linear_infinite_reverse]" style={{ left: '710px', top: '850px' }}>
              <div className="w-[130px] bg-white rounded-[12px] p-2 pb-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e5e3dc] flex flex-col items-center pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1677537946831-4590ff82359c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyNSUyMHllYXIlMjBvbGQlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxOTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full aspect-square rounded-[8px] object-cover mb-3 bg-stone-200" alt="Ashlynn V." />
                <div className="text-[11px] font-extrabold text-[#3b261a] uppercase leading-tight mb-0.5">Ashlynn V.</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase leading-tight text-center">UX Strategist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1100px] mx-auto h-full px-6 pointer-events-none">
          
          {/* Main Content Box */}
          <div className="flex flex-col items-center text-center max-w-[800px] z-20 pointer-events-auto">
            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#e5e3dc] shadow-sm">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1763256377422-fec144edeefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjB3aXRoJTIwcHVycGxlJTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxNDAxOXww&ixlib=rb-4.1.0&q=80&w=200" className="w-8 h-8 rounded-full border-2 border-[#ECE9DE] object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1758611969976-9f38286119ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwd2l0aCUyMGdsYXNzZXMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=200" className="w-8 h-8 rounded-full border-2 border-[#ECE9DE] object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1590905707155-17c680dd7867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwb2xkZXIlMjB3b21hbiUyMHdpdGglMjBjdXJseSUyMGhhaXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=200" className="w-8 h-8 rounded-full border-2 border-[#ECE9DE] object-cover" alt="User" />
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbd08" stroke="#fbbd08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
            </div>

            {/* Overline */}
            <h4 className="text-[12px] md:text-[14px] font-bold text-[#3b261a] tracking-[0.1em] uppercase mb-4">
              Meet our visionary design specialists
            </h4>

            {/* Headline */}
            <h2 className="font-['Anton'] text-[12vw] lg:text-[100px] leading-[0.9] text-[#3b261a] tracking-tight uppercase mb-8">
              Connect with the<br />minds behind Forma
            </h2>

            {/* Button */}
            <button className="bg-[#e86c1c] text-white px-8 py-3.5 flex items-center justify-center gap-2 font-medium hover:bg-[#d95c1a] transition-colors text-[14px] rounded-[3px] shadow-sm uppercase tracking-wider">
              Start a Conversation <ArrowRight size={16} />
            </button>

            {/* Subtitle */}
            <p className="text-[#3b261a] text-[14px] md:text-[16px] font-medium mt-8">
              We're here to design with you at every single step.
            </p>
          </div>

          {/* Mobile Avatar Grid */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 z-20 pointer-events-auto w-full max-w-[500px]">
            <div className="bg-white rounded-[12px] p-2 pb-3 shadow-md border border-[#e5e3dc] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1763256377422-fec144edeefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjB3aXRoJTIwcHVycGxlJTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxNDAxOXww&ixlib=rb-4.1.0&q=80&w=400" className="w-full aspect-square rounded-[8px] object-cover mb-2" alt="Kierra V." />
              <div className="text-[10px] font-extrabold text-[#3b261a] uppercase leading-tight">Kierra V.</div>
              <div className="text-[8px] font-bold text-gray-500 uppercase leading-tight">Design Lead</div>
            </div>
            <div className="bg-white rounded-[12px] p-2 pb-3 shadow-md border border-[#e5e3dc] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1758611969976-9f38286119ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwd2l0aCUyMGdsYXNzZXMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=400" className="w-full aspect-square rounded-[8px] object-cover mb-2" alt="Chance S." />
              <div className="text-[10px] font-extrabold text-[#3b261a] uppercase leading-tight">Chance S.</div>
              <div className="text-[8px] font-bold text-gray-500 uppercase leading-tight">UX Researcher</div>
            </div>
            <div className="bg-white rounded-[12px] p-2 pb-3 shadow-md border border-[#e5e3dc] flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1682096149355-b5529fafcfe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBpbiUyMGJsdWUlMjBzaGlydCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxNDAxOXww&ixlib=rb-4.1.0&q=80&w=400" className="w-full aspect-square rounded-[8px] object-cover mb-2" alt="Pallyn S." />
              <div className="text-[10px] font-extrabold text-[#3b261a] uppercase leading-tight">Pallyn S.</div>
              <div className="text-[8px] font-bold text-gray-500 uppercase leading-tight">Product Lead</div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-white pt-20 pb-8 px-6 lg:px-12 flex flex-col items-center">
        
        {/* Top Row: Logo & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full max-w-[1400px] gap-10 lg:gap-0">
          <h2 className="font-['Anton'] text-[28vw] lg:text-[160px] leading-[0.75] text-[#3b261a] tracking-tight uppercase m-0">
            FORMA
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-5 lg:pb-3">
            <span className="text-[12px] font-bold text-[#3b261a] uppercase tracking-widest">Follow Us</span>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-[#e5e3dc] flex items-center justify-center text-[#3b261a] hover:bg-[#3b261a] hover:text-white transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#e5e3dc] flex items-center justify-center text-[#3b261a] hover:bg-[#3b261a] hover:text-white transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#e5e3dc] flex items-center justify-center text-[#3b261a] hover:bg-[#3b261a] hover:text-white transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#e5e3dc] flex items-center justify-center text-[#3b261a] hover:bg-[#3b261a] hover:text-white transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Top Divider */}
        <div className="w-full max-w-[1400px] h-px bg-[#e5e3dc] my-12"></div>

        {/* Middle Row: Newsletter & Links */}
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1400px] gap-16 lg:gap-8">
          
          {/* Left: Newsletter */}
          <div className="w-full lg:w-[45%] flex flex-col gap-10">
            <h3 className="text-[28px] lg:text-[34px] leading-[1.1] text-[#3b261a] tracking-tight font-medium max-w-[280px]">
              Subscribe to our updates
            </h3>
            <form className="flex flex-col gap-6 w-full max-w-[420px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-transparent border-b border-[#3b261a]/30 py-3 text-[#3b261a] placeholder:text-[#3b261a]/70 focus:outline-none focus:border-[#e86c1c] transition-colors text-[14px] font-medium"
              />
              <div className="relative w-full">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-[#3b261a]/30 py-3 text-[#3b261a] placeholder:text-[#3b261a]/70 focus:outline-none focus:border-[#e86c1c] transition-colors text-[14px] font-medium pr-12"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#e86c1c] rounded-full flex items-center justify-center text-white hover:bg-[#d95c1a] transition-colors shadow-sm">
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Links Columns */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-12 sm:gap-0 sm:divide-x divide-[#e5e3dc]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-5 sm:pr-10 lg:pr-16">
              <h4 className="text-[13px] font-bold text-[#3b261a] tracking-wide">Our Expertise</h4>
              <ul className="flex flex-col gap-3.5 text-[14px] text-[#3b261a]/80 font-medium">
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#e86c1c] rounded-full"></span> UX Research</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#e86c1c] rounded-full"></span> UI Design</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#e86c1c] rounded-full"></span> Wireframing</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#e86c1c] rounded-full"></span> Design Systems</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#e86c1c] rounded-full"></span> Prototyping</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5 sm:px-10 lg:px-16">
              <h4 className="text-[13px] font-bold text-[#3b261a] tracking-wide">Agency Links</h4>
              <ul className="flex flex-col gap-3.5 text-[14px] text-[#3b261a]/80 font-medium">
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#dcd8ce] rounded-full"></span> Home</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#dcd8ce] rounded-full"></span> Studio</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#dcd8ce] rounded-full"></span> Careers</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#dcd8ce] rounded-full"></span> Journal</a></li>
                <li><a href="#" className="hover:text-[#e86c1c] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#dcd8ce] rounded-full"></span> Connect</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8 sm:pl-10 lg:pl-16">
              <div className="flex flex-col gap-4 text-[14px] text-[#3b261a]/80 font-medium">
                <h4 className="text-[13px] font-bold text-[#3b261a] tracking-wide">Headquarters</h4>
                <p className="leading-[1.6] max-w-[160px]">
                  410 Innovation Ave,<br />
                  San Francisco 94105, USA
                </p>
              </div>
              <div className="flex flex-col gap-4 text-[14px] text-[#3b261a]/80 font-medium">
                <h4 className="text-[13px] font-bold text-[#3b261a] tracking-wide">Say Hello</h4>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+15551234567" className="hover:text-[#e86c1c] transition-colors">(555) 123 4567</a>
                  <a href="mailto:hello@forma.studio" className="hover:text-[#e86c1c] transition-colors">hello@forma.studio</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full max-w-[1400px] h-px bg-[#e5e3dc] mt-20 mb-6"></div>

        {/* Bottom Bar */}
        <div className="w-full max-w-[1400px] flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] font-semibold text-[#3b261a]/60 tracking-wide pb-4">
          <p>Designed by Forma Studio.</p>
          <p>Powered by React.</p>
        </div>

      </footer>
    </div>
  );
}