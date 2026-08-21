import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const leftSkills: Skill[] = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 90 },
  { name: 'Javascript', percentage: 50 },
  { name: 'Photoshop', percentage: 70 },
];

const rightSkills: Skill[] = [
  { name: 'Figma', percentage: 80 },
  { name: 'Canva', percentage: 90 },
  { name: 'PHP', percentage: 50 },
  { name: 'C#', percentage: 70 },
];

export default function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>MY SKILLS</h2>
        
        <div style={gridStyle}>
          {/* Left Column */}
          <div style={columnStyle}>
            {leftSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* Right Column */}
          <div style={columnStyle}>
            {rightSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, percentage }: Skill) {
  return (
    <div style={skillWrapperStyle}>
      <div style={skillHeaderStyle}>
        <span style={skillNameStyle}>{name}</span>
        <span style={skillPercentageStyle}>{percentage}%</span>
      </div>
      <div style={trackStyle}>
        <div style={{ ...progressBarStyle, width: `${percentage}%` }} />
      </div>
    </div>
  );
}

// Styles
const sectionStyle: React.CSSProperties = {
  minHeight: '100vh',
  padding: '80px 20px',
background: 'radial-gradient(circle at center, #19191a 0%, #141414 100%)',  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#ffffff',
  fontFamily: 'sans-serif',
};
   const containerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '2000px',
  margin: '0 auto',

};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '32px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  marginBottom: '60px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px 60px',
};

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '150px',
};

const skillWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const skillHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const skillNameStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const skillPercentageStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 'bold',
};

const trackStyle: React.CSSProperties = {
  width: '100%',
  height: '20px',
  backgroundColor: '#1e1e2f',
  borderRadius: '7px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

const progressBarStyle: React.CSSProperties = {
  height: '100%',
  backgroundColor: '#3b82f6',
  borderRadius: '7px',
  transition: 'width 0.5s ease-in-out',
};