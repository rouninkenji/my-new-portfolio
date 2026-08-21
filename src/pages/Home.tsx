import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import Skills from './Skills'; // Correct path to pages folder

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-gray-300 font-sans px-6 md:px-16 py-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <Navbar />
        <Hero />

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default Home;