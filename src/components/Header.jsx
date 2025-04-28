import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col md:flex-row flex-wrap bg-[#5f6FFF] dark:bg-[#002A4F] rounded-lg px-6 md:px-10 lg:px-20 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl text-white dark:text-gray-200 font-semibold leading-tight md:leading-tight lg:leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t("title")}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 text-white dark:text-gray-300 text-sm font-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.img
            src={assets.group_profiles}
            alt=""
            className="w-28"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p>{t("description")}</p>
        </motion.div>

        <motion.a
          href="#speciality"
          className="flex items-center gap-2 bg-white dark:bg-[#00396E] hover:dark:bg-[#3a4d62] px-8 py-3 rounded-full text-gray-600 dark:text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t("bookAppointment")}
          <motion.img
            src={assets.arrow_icon}
            className="w-3 invert dark:invert-0"
            alt=""
            initial={{ x: -5 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>
      </div>

      {/* Right side */}
      <motion.div
        className="md:w-1/2 relative"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img
          src={assets.header_img}
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          alt=""
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
