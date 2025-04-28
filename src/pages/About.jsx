import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useTranslation } from 'react-i18next'; 

const About = () => {
  const { t } = useTranslation(); 

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="dark:text-white">
          {t('aboutTitle')} <span className="text-gray-700 font-medium dark:text-gray-500">{t('aboutSubtitle')}</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="dark:text-gray-400">
            {t('aboutDescription1')}
          </p>
          <p className="dark:text-gray-400">
            {t('aboutDescription2')}
          </p>
          <b className="text-gray-800 dark:text-gray-600">{t('missionTitle')}</b>
          <p className="dark:text-gray-400">
            {t('missionDescription')}
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          {t('whyChooseUs')} <span className="text-gray-700 font-semibold dark:text-gray-500">{t('whyChooseUsSubtitle')}</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duraction-300 text-gray-600 cursor-pointer">
          <b className="dark:text-white">{t('efficiencyTitle')}:</b>
          <p className="dark:text-white">
            {t('efficiencyDescription')}
          </p>
        </div>
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duraction-300 text-gray-600 cursor-pointer">
          <b className="dark:text-white">{t('convenienceTitle')}:</b>
          <p className="dark:text-white">
            {t('convenienceDescription')}
          </p>
        </div>
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duraction-300 text-gray-600 cursor-pointer">
          <b className="dark:text-white">{t('personalizationTitle')}:</b>
          <p className="dark:text-white">
            {t('personalizationDescription')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
