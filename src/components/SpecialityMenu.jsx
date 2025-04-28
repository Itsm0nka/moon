import React, { useRef } from 'react';
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion, useInView } from "framer-motion";

const SpecialityMenu = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className='flex flex-col items-center gap-4 py-16 text-gray-800 dark:text-white'
      id='speciality'
    >
      <motion.h1
        className='text-3xl font-medium'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t('findBySpeciality')}
      </motion.h1>

      <motion.p
        className='sm:w-1/3 text-center text-sm'
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('checkDoctors')}
      </motion.p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto scrollbar-hide'>
        {specialityData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              onClick={() => scrollTo(0, 0)}
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-transform duration-300'
              to={`/doctors/${item.speciality}`}
            >
              <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
              <p>{item.speciality}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
