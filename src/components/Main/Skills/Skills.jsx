import React from "react";
import SkillCard from "./SkillCard/SkillCard.jsx";

const Skills = ({ skills }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">My Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
