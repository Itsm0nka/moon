import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTranslation } from 'react-i18next'; 

const Doctors = () => {
  const { t } = useTranslation();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilters, setShowFiltres] = useState(false);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality?.toLowerCase().trim() ===
            speciality.toLowerCase().trim()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="">
      <p className="text-gray-600 dark:text-gray-300">{t('viewDoctorsList')}</p>
      <div className="flex-col flex sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilters ? "bg-[#5f6FFF] text-white" : ""
          }`}
          onClick={() => setShowFiltres((prev) => !prev)}
        >
          {t('filters')}
        </button>
     <div
  className={`flex-col flex gap-4 text-sm text-gray-600 ${
    showFilters ? "flex" : "hidden sm:flex"
  }`}
>
  <p
    onClick={() =>
      speciality === "General physician"
        ? navigate("/doctors")
        : navigate("/doctors/General physician")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:bg-[#004882] dark:border-1 dark:border-[#00AAD4] ${
      speciality === "General physician"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('generalPhysician')}
  </p>
  <p
    onClick={() =>
      speciality === "Gynecologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gynecologist")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:border-1 dark:bg-[#004882] dark:border-[#00AAD4] ${
      speciality === "Gynecologist"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('gynecologist')}
  </p>
  <p
    onClick={() =>
      speciality === "Dermatologist"
        ? navigate("/doctors")
        : navigate("/doctors/Dermatologist")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:border-1 dark:bg-[#004882] dark:border-[#00AAD4] ${
      speciality === "Dermatologist"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('dermatologist')}
  </p>
  <p
    onClick={() =>
      speciality === "Pediatricians"
        ? navigate("/doctors")
        : navigate("/doctors/Pediatricians")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:border-1 dark:bg-[#004882] dark:border-[#00AAD4] ${
      speciality === "Pediatricians"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('pediatrician')}
  </p>
  <p
    onClick={() =>
      speciality === "Neurologist"
        ? navigate("/doctors")
        : navigate("/doctors/Neurologist")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:border-1 dark:bg-[#004882] dark:border-[#00AAD4] ${
      speciality === "Neurologist"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('neurologist')}
  </p>
  <p
    onClick={() =>
      speciality === "Gastroenterologist"
        ? navigate("/doctors")
        : navigate("/doctors/Gastroenterologist")
    }
    className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer dark:text-white dark:border-1 dark:bg-[#004882] dark:border-[#00AAD4] ${
      speciality === "Gastroenterologist"
        ? "bg-indigo-100 text-black dark:bg-blue-400"
        : ""
    }`}
  >
    {t('gastroenterologist')}
  </p>
</div>

        <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 gap-y-6 ">
          {filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center">
                  <p className="w-2 h-2 bg-green-500 rounded-full dark:text-white"></p>
                  <p className="dark:text-white">{t('available')}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium dark:text-white">{item.name}</p>
                <p className="text-gray-600 text-sm dark:text-gray-400">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
