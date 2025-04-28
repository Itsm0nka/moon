import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex bg-[#5f6FFF] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 dark:bg-[#002A4F]">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{t("bookAppointment")}</p>
          <p className="mt-4">{t("trustedDoctors")}</p>
        </motion.div>

        <motion.button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 dark:bg-[#005380] dark:text-white hover:scale-105 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t("createAccount")}
        </motion.button>
      </div>
      <motion.div
        className="hidden md:block md:w-1/2 lg:w-[370px] relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
