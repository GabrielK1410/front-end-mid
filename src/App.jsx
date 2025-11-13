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

  // ... (Logika useEffect, if(loading), if(error) Anda tetap sama)
  // ... (Tidak perlu diubah)
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
        Gagal mengambil data. Cek koneksi ke json-server port 3000.
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
    // === MODIFIKASI HANYA DI SINI ===
    // Kita pakai arbitrary values [kode_warna] langsung
    // Ini membuat gradient dari merah (#6B0000) ke merah lebih gelap (#5A0000)
    // agar cocok dengan foto profil Anda.
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#6B0000] to-[#5A0000]">
      {/* Kartu putih Anda tetap sama */}
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 md:p-10">
        <Header profile={profile} />

        <Main about={profile.about} academic={academic} skills={skills} />

        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default App;
