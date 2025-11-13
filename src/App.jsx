import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [academic, setAcademic] = useState(null);
  const [footer, setFooter] = useState(null);
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, academicRes, footerRes, skillsRes] =
          await Promise.all([
            axios.get("http://localhost:3000/profile"),
            axios.get("http://localhost:3000/academicInfo"),
            axios.get("http://localhost:3000/footer"),
            axios.get("http://localhost:3000/skills"),
          ]);

        setProfile(profileRes.data);
        setAcademic(academicRes.data);
        setFooter(footerRes.data);
        setSkills(skillsRes.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Gagal mengambil data. Cek json-server.
      </div>
    );
  }
  if (!profile || !academic || !footer || !skills) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Data tidak ditemukan.
      </div>
    );
  }

  return (
    // Layout 2 Kolom (Split-Screen)
    <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-12 p-8 md:p-12">
      {/* KOLOM KIRI (Statis) - 1/3 Lebar */}
      <aside className="md:col-span-1 md:sticky md:top-12 h-screen">
        <Header profile={profile} />
      </aside>

      {/* KOLOM KANAN (Scroll) - 2/3 Lebar */}
      <div className="md:col-span-2 space-y-16 mt-12 md:mt-0">
        <Main about={profile.about} academic={academic} skills={skills} />
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default App;
