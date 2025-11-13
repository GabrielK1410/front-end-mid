import React from "react";
import SkillCard from "./SkillCard/SkillCard.jsx";

// Judul Section Kustom (dengan aksen merah)
const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl font-bold text-white mb-8 relative
                 before:content-[''] before:absolute before:left-0 before:bottom-[-4px] 
                 before:w-16 before:h-1 before:bg-[#A50044]"
  >
    {children}
  </h2>
);

const Skills = ({ skills }) => {
  return (
    <section>
      <SectionTitle>My Tools</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            category={skill.category}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
