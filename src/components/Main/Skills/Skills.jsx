import React from "react";
import SkillCard from "./SkillCard/SkillCard.jsx";

const Skills = ({ skills }) => {
  return (
    <section>
      <h2 className="text-4xl sm:text-5xl font-bold text-[#004D98] mb-6">
        My Skill
      </h2>
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
