import React from 'react';
import heroImage from '../assets/hero.png';
import facebookLogo from '../assets/facebook-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-row items-center justify-between pt-12 md:pt-20 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
      {/* Left text content */}
      <div className="flex-1 min-w-0 space-y-6 flex flex-col">
        <p className="text-gray-400 text-base md:text-xl font-medium tracking-wide">
          Hello It's Me
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          KENJI PETALLAR
        </h1>
        <p className="text-teal-400 text-lg md:text-2xl font-semibold italic">
          and I'm a BSIT Student
        </p>
        <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed">
          Im a dedicated and hardworking Information Technology student with a strong passion for technology, problem-solving, and continuous learning. I thrive in challenging environments and am always eager to expand my knowledge in areas such as programming, networking, and cybersecurity. I take pride in being detail-oriented, reliable, and committed to achieving both academic and personal goals. Whether working independently or as part of a team, I bring a strong work ethic, a positive attitude, and a determination to deliver quality results.
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-4 items-center pt-2">
          <a 
            href="https://www.facebook.com/kenjix.petallar24" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-blue-500 hover:border-white transition-all flex items-center justify-center w-10 h-10 md:w-12 md:h-12 p-2"
          >
            <img src={facebookLogo} alt="Facebook" className="w-full h-full object-contain" />
          </a>

          <a 
            href="https://www.instagram.com/himura_knji/" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-blue-500 hover:border-white transition-all flex items-center justify-center w-10 h-10 md:w-12 md:h-12 p-2"
          >
            <img src={instagramLogo} alt="Instagram" className="w-full h-full object-contain" />
          </a>
        </div>
      </div>

      {/* Right image content with responsive scaling */}
      <div className="w-[35%] md:w-[40%] flex-shrink-0 flex justify-center">
        <img src={heroImage} alt="Hero" className="w-full h-auto max-w-[320px] object-cover rounded-2xl" />
      </div>
    </section>
  );
};