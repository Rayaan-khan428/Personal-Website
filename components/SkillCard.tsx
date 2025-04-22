import React from 'react';

// Define TypeScript interface for SkillCard props
interface SkillCardProps {
  title: string;
  items: string[];
}

// SkillCard functional component
const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    // Card container with summer-themed glassmorphism effect
    <div className="bg-[rgba(255,245,225,0.7)] rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg border border-[rgba(255,255,255,0.3)]">
      {/* Card header with gradient background */}
      <div className="bg-gradient-to-r from-[rgba(255,139,61,0.15)] to-[rgba(255,90,95,0.1)] p-6 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-[#004777]">{title}</h3>
      </div>
      {/* Container for skill items */}
      <div className="p-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          // Skill item
          <span 
            key={index} 
            className="px-3 py-1.5 rounded-md border border-solid border-[#FF8B3D]/30 text-[#004777] 
                       hover:bg-[#FF8B3D]/10 hover:border-[#FF8B3D] backdrop-blur-sm bg-white/20
                       transition-all duration-300 cursor-default shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
