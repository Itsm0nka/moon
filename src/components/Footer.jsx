import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useTranslation } from 'react-i18next'; 
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-40 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
    
        <div>
          <motion.div
            className="flex items-center gap-2 mb-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={assets.logo} alt="Logo" className="w-44" />
          </motion.div>
          <motion.p
            className="text-gray-600 leading-6 text-sm dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {t('footerDescription')}
          </motion.p>
        </div>

        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm font-semibold text-[#2d2e32] mb-5 dark:text-gray-500">{t('company')}</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
              {t('home')}
            </motion.li>
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
              {t('aboutUs')}
            </motion.li>
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              {t('contact')}
            </motion.li>
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
              {t('privacyPolicy')}
            </motion.li>
          </ul>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm font-semibold text-[#2d2e32] mb-5 dark:text-gray-500">{t('contactTitle')}</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
              {t('phone')}
            </motion.li>
            <motion.li className="dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
              {t('email')}
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        className="border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="py-5 text-center text-sm text-gray-600 dark:text-white">
          {t('copyright')}
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
