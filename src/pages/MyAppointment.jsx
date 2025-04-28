import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const MyAppointments = () => {
  const { t } = useTranslation();
  const { doctors } = useContext(AppContext);

  return (
    <div className="text-sm text-zinc-700 dark:text-gray-100">
      <p className="pb-3 mt-12 font-medium border-b border-zinc-300 dark:border-gray-700">
        {t("myAppointments")}
      </p>

      <div>
        {doctors?.length ? (
          doctors.slice(0, 3).map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="grid grid-cols-[1fr_2fr] sm:flex gap-4 sm:gap-6 py-4 px-4 mt-4 border border-zinc-200 dark:border-gray-700 
                         bg-white dark:bg-[#00263D] rounded-lg shadow-sm hover:shadow-md 
                         dark:hover:shadow-[0_0_10px_#5f6fff55] transition-all duration-300"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover bg-indigo-50 dark:bg-[#004875] rounded-md"
                />
              </div>

              <div className="flex-1 text-sm">
                <p className="text-neutral-800 dark:text-gray-100 font-semibold">{item.name}</p>
                <p className="capitalize text-zinc-700 dark:text-gray-300">{item.speciality}</p>

                <p className="mt-2 text-zinc-700 dark:text-gray-300 font-medium">
                  {item.address?.line1 || t("addressNotAvailable")}
                </p>
                <p className="text-xs dark:text-gray-400">{t("address")}</p>
                <p className="text-xs dark:text-gray-400">{item.address?.line2 || t("addressNotAvailable")}</p>

                <p className="text-xs mt-2 dark:text-gray-400">
                  <span className="text-sm text-neutral-700 dark:text-gray-200 font-medium">{t("dateAndTime")}:</span>{" "}
                  25, July 2025 — 8:30 PM
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-end mt-4 sm:mt-0">
                <button className="text-sm text-stone-500 dark:text-gray-300 text-center sm:min-w-48 py-2 border border-zinc-300 dark:border-gray-600 rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300">
                  {t("payOnline")}
                </button>
                <button className="text-sm text-stone-500 dark:text-gray-300 text-center sm:min-w-48 py-2 border border-zinc-300 dark:border-gray-600 rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                  {t("cancelAppointment")}
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-zinc-400 dark:text-gray-500 mt-4">{t("noUpcomingAppointments")}</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
