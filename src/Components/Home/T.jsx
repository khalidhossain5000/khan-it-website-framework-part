import React from 'react';
import { Rocket, Users, Target, Zap, Play, Quote } from 'lucide-react';

const TrustSection = () => {
  return (
    <div className="bg-white p-6 md:p-12 min-h-screen flex items-center justify-center font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full">
        
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {/* 200% Conversion Card */}
          <div className="bg-[#fdf4ff] p-10 rounded-[2.5rem] aspect-square flex flex-col justify-center relative overflow-hidden">
            <div className="mb-6">
              {/* Rocket Icon wrapped in a styled container */}
              <div className="relative w-16 h-16">
                 <Rocket className="w-12 h-12 text-slate-700 fill-slate-200 transform -rotate-12" />
                 <div className="absolute -bottom-1 -left-1 flex gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                 </div>
              </div>
            </div>
            <h2 className="text-6xl font-bold text-gray-900 flex items-center gap-3">
              200% <span className="text-green-500 text-4xl">↑</span>
            </h2>
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-800">More Conversions</p>
              <p className="text-gray-500 font-medium">Than Industry Average</p>
            </div>
          </div>

          {/* Video / Case Study Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Professional"
            />
            {/* Blue/Cyan Overlay */}
            <div className="absolute inset-0 bg-cyan-900/30 backdrop-blur-[2px]"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#8b5cf6] hover:scale-110 transition-transform w-20 h-20 rounded-full flex items-center justify-center pl-1 shadow-2xl">
                <Play fill="white" className="text-white w-8 h-8" />
              </button>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-lg">Watch Case Study</span>
              </div>
              <p className="text-sm opacity-80">2:45 min</p>
            </div>
            
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-5">
          {/* Track Record Card (Taller) */}
          <div className="bg-[#ebf3ff] p-10 rounded-[2.5rem] relative overflow-hidden">
            {/* Decorative Top Right Shape */}
            <div className="absolute top-0 right-0 w-32 h-20 bg-blue-100/50 rounded-bl-[5rem]"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Track Record</h3>
            
            <div className="space-y-4">
              <RecordRow icon={<Users className="text-blue-600"/>} value="500+" label="Clients" />
              <RecordRow icon={<Target className="text-blue-500"/>} value="98%" label="Success" />
              <RecordRow icon={<Zap className="text-blue-400"/>} value="24h" label="Support" />
            </div>
          </div>

          
        </div>

      </div>
    </div>
  );
};

// Sub-component for the track record rows
const RecordRow = ({ icon, value, label }) => (
  <div className="bg-[#f8fbff] rounded-3xl p-5 flex items-center gap-5 border border-white/50 shadow-sm">
    <div className="bg-[#e0eeff] p-3 rounded-2xl">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-black text-gray-900">{value}</span>
      <span className="text-gray-400 font-medium">{label}</span>
    </div>
  </div>
);

export default TrustSection;