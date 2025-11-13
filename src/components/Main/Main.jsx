import React from "react";
import InfoCard from "./InfoCard/InfoCard.jsx";
import Skills from "./Skills/Skills.jsx";

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

const Main = ({ about, academic, skills }) => {
  return (
    <main className="space-y-16">
      {/* Bagian Tentang Saya */}
      <section>
        <SectionTitle>About Me</SectionTitle>
        <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Bagian Informasi Akademik */}
      <section>
        <SectionTitle>Academic Information</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard title="University" value={academic.university} />
          <InfoCard title="Study Program" value={academic.studyProgram} />
          <InfoCard title="Class" value={academic.class} />
          <InfoCard title="Academic Year" value={academic.academicYear} />
        </div>
      </section>

      {/* Bagian Skills */}
      <Skills skills={skills} />
    </main>
  );
};

export default Main;
