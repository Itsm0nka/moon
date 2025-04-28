import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { assets } from "../assets/assets_frontend/assets";
import { motion } from "framer-motion";

const MyProfil = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm text-zinc-700 dark:text-gray-100">
      <motion.img
        src={userData.image}
        alt={`${userData.name}'s profile`}
        className="w-36 rounded border border-gray-300 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      {isEdit ? (
        <motion.input
          className="bg-gray-50 dark:bg-gray-800 dark:text-white text-3xl font-medium max-w-60 mt-4 px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ) : (
        <motion.p
          className="font-medium text-3xl text-neutral-800 dark:text-gray-100 mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {userData.name}
        </motion.p>
      )}

      <hr className="bg-zinc-400 dark:bg-gray-700 h-[1px] border-none" />

      <div>
        <motion.p
          className="text-neutral-500 dark:text-gray-400 underline mt-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("contact_information")}
        </motion.p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <motion.p
            className="font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("email")}
          </motion.p>
          <motion.p
            className="text-blue-500 dark:text-blue-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {userData.email}
          </motion.p>

          <motion.p
            className="font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("phone")}
          </motion.p>

          {isEdit ? (
            <motion.input
              className="bg-gray-100 dark:bg-gray-800 dark:text-white max-w-52 px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          ) : (
            <motion.p
              className="text-blue-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {userData.phone}
            </motion.p>
          )}

          <motion.p
            className="font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("address")}
          </motion.p>
          {isEdit ? (
            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <input
                className="bg-gray-50 dark:bg-gray-800 dark:text-white px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-50 dark:bg-gray-800 dark:text-white px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </motion.div>
          ) : (
            <motion.p
              className="text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </motion.p>
          )}
        </div>
      </div>

      <div>
        <motion.p
          className="text-neutral-500 dark:text-gray-400 underline mt-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("basic_information")}
        </motion.p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <motion.p
            className="font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("gender")}
          </motion.p>
          {isEdit ? (
            <motion.select
              className="max-w-20 bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
            </motion.select>
          ) : (
            <motion.p
              className="text-gray-400 dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {userData.gender}
            </motion.p>
          )}

          <motion.p
            className="font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("birthday")}
          </motion.p>
          {isEdit ? (
            <motion.input
              className="max-w-28 bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          ) : (
            <motion.p
              className="text-gray-400 dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {userData.dob}
            </motion.p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <motion.button
          className="border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all"
          onClick={() => setIsEdit(!isEdit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {isEdit ? t("save") : t("edit")}
        </motion.button>
      </div>
    </div>
  );
};

export default MyProfil;
