import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 
import { motion } from "framer-motion";

const Login = () => {
  const { t } = useTranslation(); 
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ name, email, password, state });
  };

  return (
    <motion.form
      className="min-h-[80vh] flex items-center justify-center"
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-zinc-200 rounded-xl text-zinc-600 text-sm shadow-lg dark:bg-[#00446E] dark:border-0"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-2xl font-semibold dark:text-white">
          {state === "Sign Up" ? t("createAccount") : t("login")}
        </p>
        <p className="text-sm text-zinc-500 dark:text-gray-400">
          {t(state === "Sign Up" ? "signUpText" : "loginText")}
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="dark:text-gray-300">{t("fullName")}</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="dark:text-gray-300">{t("email")}</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className="dark:text-gray-300">{t("password")}</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <motion.button
          className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base"
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {state === "Sign Up" ? t("createAccount") : t("login")}
        </motion.button>

        {state === "Sign Up" ? (
          <p className="dark:text-gray-300">
            {t("alreadyHaveAccount")}{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#5f6FFF] underline cursor-pointer dark:text-[#1500B5]"
            >
              {t("loginHere")}
            </span>
          </p>
        ) : (
          <p className="dark:text-gray-300">
            {t("createNewAccount")}{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-[#5f6FFF] underline cursor-pointer dark:text-[#1500B5]"
            >
              {t("clickHere")}
            </span>
          </p>
        )}
      </motion.div>
    </motion.form>
  );
};

export default Login;
