import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTranslation } from 'react-i18next';
import { motion, useInView } from "framer-motion";

const TopDoctors = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 dark:text-white"
    >
      <motion.h1
        className="text-3xl font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t('bestDoctorsToBook')}
      </motion.h1>

      <motion.p
        className="sm:w-1/3 text-center text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('browseDoctors')}
      </motion.p>

      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <img className="bg-blue-50" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>{t('available')}</p>
              </div>
              <p className="text-gray-900 text-lg font-medium dark:text-white">{item.name}</p>
              <p className="text-gray-600 text-sm dark:text-gray-400">{item.speciality}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {t('seeOthers')}
      </motion.button>
    </div>
  );
};

export default TopDoctors;
