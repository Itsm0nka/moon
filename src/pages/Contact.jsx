import React from 'react';
import { assets } from "../assets/assets_frontend/assets";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 dark:text-gray-300'>
        <p className='dark:text-white'>
          {t('contactWithUs')} <span className='text-gray-700 font-semibold dark:text-gray-500'>{t('contact')}</span>
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 dark:text-white'>{t('ourOffice')}</p>
          <p className='text-gray-500 dark:text-gray-300'>
            54709 Willms Station <br /> 350-xona, Vashington, AQSH
          </p>
          <p className='text-gray-500 dark:text-gray-300'>
            {t('tel')}: (415) 555-0132 <br /> {t('email')}: greatstackdev@gmail.com
          </p>
          <p className='font-semibold text-lg text-gray-600 dark:text-white'>{t('careersAtPrescripto')}</p>
          <p className='text-gray-500 dark:text-gray-300'>{t('learnMoreAboutTeamAndJobs')}</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 dark:border-white dark:hover:bg-white dark:hover:text-black'>
            {t('viewJobOpenings')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
