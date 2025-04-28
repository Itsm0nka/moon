import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <>
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 dark:border-b-gray-600 transition-colors">
        <motion.img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="w-44 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.ul
          className="hidden md:flex items-start gap-5 font-medium text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <NavLink to="/"><li>{t('home')}</li></NavLink>
          <NavLink to="/doctors"><li>{t('allDoctors')}</li></NavLink>
          <NavLink to="/about"><li>{t('aboutUs')}</li></NavLink>
          <NavLink to="/contact"><li>{t('contact')}</li></NavLink>
        </motion.ul>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 hover:scale-110 transition-transform"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {darkMode ? <MdDarkMode /> : <CiLight />}
          </motion.button>
          <LanguageSwitcher />
          
          {token ? (
            <div className="flex items-center gap-4 cursor-pointer group relative">
              <motion.img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <motion.div
                className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 dark:text-gray-200 z-20 hidden group-hover:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="min-w-48 bg-stone-100 dark:bg-gray-800 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate("my-profile")} className="hover:text-black dark:hover:text-white cursor-pointer">
                    {t('myProfile')}
                  </p>
                  <p onClick={() => navigate("my-appointments")} className="hover:text-black dark:hover:text-white cursor-pointer">
                    {t('myAppointments')}
                  </p>
                  <p onClick={() => setToken(false)} className="hover:text-black dark:hover:text-white cursor-pointer">
                    {t('logout')}
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.button
              onClick={() => navigate("/login")}
              className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {t('createAccount')}
            </motion.button>
          )}

          <motion.img
            src={assets.menu_icon}
            className="w-6 md:hidden"
            alt=""
            onClick={() => setShowMenu(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />

          {/* Mobile menu */}
          <motion.div
            className={`${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white dark:bg-gray-900 transition-all`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img src={assets.logo} alt="" className="w-36" />
              <img
                className="w-7"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-800 dark:text-gray-200">
              <NavLink onClick={() => setShowMenu(false)} to="/"><p>{t('home')}</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p>{t('allDoctors')}</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about"><p>{t('aboutUs')}</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact"><p>{t('contact')}</p></NavLink>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
