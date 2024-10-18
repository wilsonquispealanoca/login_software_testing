"use client";
import Image from "next/image";
import googleIcon from "../public/images/google-icon.png";
import facebookIcon from "../public/images/facebook-icon-white.png";
import dellLogo from "../public/images/dell-logo.png";
import backgroundLogin from "../public/images/laptos dell.png";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isErrorAuth, setIsErrorAuth] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const watchPassword = watch("password");

  useEffect(() => {
    if (watchPassword && watchPassword.length >= 8 && !errors.email) {
        setIsButtonDisabled(false);
    } else {
        setIsButtonDisabled(true);
    }
}, [watchPassword, errors]);

  const onSubmit = (data) => {
    if (data){
      if (data.email === "admin@dell.com" && data.password === "12345678w"){
        router.push('/dashboard');
      } else {
        setIsErrorAuth("Correo electrónico o contraseña invalida")
      }
    }

};

  return (
    <main className="font-[sans-serif] bg-gradient-to-t from-[#070517] via-[#070517] to-[#4A4773]">
      <div className="grid md:grid-cols-2 items-center w-full flex">
        <div className="hidden md:block lg:ml-20 md:ml-10">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src={backgroundLogin}
              alt="Dell Products"
              width={1000}
              height={1000}
            />
            <div className="text-center mt-12">
              <h1 className="text-sm text-white mb-2">
                DELL, La empresa más potente del mercado
              </h1>
              <p className="text-sm text-[#484653]">Visita nuestra tienda</p>
            </div>
          </div>
        </div>

        <form
          className="md:ml-auto h-screen bg-[#070517] px-4 lg:pl-16 lg:pr-24 md:px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-end mb-20 mt-10">
            <Image src={dellLogo} alt="Dell Logo" width={160} height={160} />
          </div>

          <div className="space-y-4">
            <div className="w-full">
              <label className="text-sm mb-2 block" htmlFor="email">Correo electrónico</label>
              <input
                aria-label="input email o entrada para el correo electrónico"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-[#0D0A22] w-full text-sm px-4 py-3.5 rounded-md outline-blue-600 color-[#484653]focus:bg-transparent"
                placeholder="Ingresa tu correo electrónico"
                id="email"
                {...register("email", {
                  required: "El correo electrónico es requerido",
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 ||
                      "El correo electrónico debe tener menos de 50 caracteres",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "El correo electrónico debe ser un correo válido",
                  },
                })}
              />
              {errors.email?.message && (
                <small className="block text-red-500 mt-4">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 flex-wrap">
                <label htmlFor="password">Contraseña</label>
                <span className="text-gray-400">
                  Has olvidado tu contraseña?
                </span>
              </div>
              <input
                aria-label="input password o entrada para la contraseña"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="bg-[#0D0A22] w-full text-sm text-[#484653] px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                placeholder="Ingresa tu contraseña"
                id="password"
                {...register("password", {
                  required: "La contraseña es requerida",
                  validate: {
                    matchPattern: (v) =>
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
                      "La contraseña debe tener 8 carácteres, al menos una letra y un número",
                  },
                })}
              />
              {errors.password?.message && (
                <small className="block text-red-500 mt-4">
                  {errors.password.message}
                </small>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white ${
              isButtonDisabled ? "bg-gray-700 text-gray-900" : "bg-blue-600"
            } focus:outline-none mt-8`}
          >
            Iniciar sesión
          </button>
          <p className="text-red-500 text-sm mt-4">{isErrorAuth}</p>
          <div className="text-center my-6">O inicia sesión con</div>

          <div className="flex justify-center mt-6 flex-wrap gap-4">
            <button
              type="button"
              className="border-[1px] px-6 py-3 outline-none rounded-md flex items-center"
            >
              <Image
                src={googleIcon}
                alt="Google Icon"
                width={18}
                height={18}
              />
              <span className="text-sm ml-2">Google</span>
            </button>
            <button
              type="button"
              className="border-[1px] px-6 py-3 outline-none rounded-md flex items-center"
            >
              <Image
                src={facebookIcon}
                alt="Facebook Icon"
                width={18}
                height={18}
              />
              <span className="text-sm ml-2">Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
