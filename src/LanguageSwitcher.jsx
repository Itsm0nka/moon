import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="flex items-center -translate-x-8">
      <motion.select
        onChange={handleChange}
        value={i18n.language}
        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm dark:bg-[#003E7D] dark:text-white dark:border-0 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 appearance-none pr-10 ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <option value="en">English</option>
        <option value="uz">Uzbek</option>
      </motion.select>

      {/* Custom arrow */}
      <motion.div
        className="pointer-events-none -ml-8 text-gray-500 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        ▼
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
