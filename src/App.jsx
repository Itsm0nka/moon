import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Doktors from './pages/Doctors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfil from './pages/MyProfil';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import MyAppointment from './pages/MyAppointment';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#003261] dark:text-gray-100 transition-colors duration-300">
      <div className="mx-4 sm:mx-[10%]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doktors />} />
          <Route path="/doctors/:speciality" element={<Doktors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfil />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
