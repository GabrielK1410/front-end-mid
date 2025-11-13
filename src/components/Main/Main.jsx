import React from "react";
import InfoCard from "./InfoCard/InfoCard.jsx";
import Skills from "./Skills/Skills.jsx";

const Main = ({ about, academic, skills }) => {
  return (
    <main className="mt-8">
      {/* Bagian Tentang Saya */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="bg-gray-50 rounded-lg p-5 space-y-4 text-gray-700">
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Bagian Informasi Akademik */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Academic Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
