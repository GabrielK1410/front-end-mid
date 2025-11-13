import React from "react";
import InfoCard from "./InfoCard/InfoCard.jsx";
import Skills from "./Skills/Skills.jsx";

const Main = ({ about, academic, skills }) => {
  return (
    // Kita beri jarak 12 (48px) antar section di dalam Main
    <main className="space-y-12">
      {/* Bagian Tentang Saya (Desain Ulang) */}
      <section>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#004D98] mb-6">
          About Me
        </h2>
        {/* Kita tidak perlu box abu-abu lagi */}
        <div className="space-y-3  text-lg  text-black">
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Bagian Informasi Akademik (Desain Ulang) */}
      <section>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#004D98] mb-6">
          Academic Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard title="University" value={academic.university} />
          <InfoCard title="Study Program" value={academic.studyProgram} />
          <InfoCard title="Class" value={academic.class} />
          <InfoCard title="Academic Year" value={academic.academicYear} />
        </div>
      </section>

      {/* Bagian Skills (akan di-style oleh filenya sendiri) */}
      <Skills skills={skills} />
    </main>
  );
};

export default Main;
