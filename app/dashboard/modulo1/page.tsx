"use client";

import { useEffect, useState } from "react";

export default function Modulo1() {
  const [instalacion, setInstalacion] = useState(false);
  const [primerosPasos, setPrimerosPasos] = useState(false);
  const [primerosPasos2, setPrimerosPasos2] = useState(false);
  const [metodos, setMetodos] = useState(false);

  useEffect(() => {
    setInstalacion(localStorage.getItem("modulo1-instalacion") === "completado");
    setPrimerosPasos(localStorage.getItem("modulo1-primeros-pasos") === "completado");
    setPrimerosPasos2(localStorage.getItem("modulo1-primeros-pasos-2") === "completado");
    setMetodos(localStorage.getItem("modulo1-metodos-abreviados") === "completado");
  }, []);

  const completadas = [
    instalacion,
    primerosPasos,
    primerosPasos2,
    metodos,
  ].filter(Boolean).length;

  const progreso = Math.round((completadas / 4) * 100);

  return (
    <main className="min-h-screen bg-blue-950 p-8">
      <div className="max-w-5xl mx-auto">
        <a href="/dashboard" className="inline-block mb-6 text-yellow-400 font-bold">
          ← Volver al Dashboard
        </a>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Módulo 1
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Introducción a SketchUp
          </p>

          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso del módulo</span>
              <span>{progreso}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full"
                style={{ width: `${progreso}%` }}
              ></div>
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href="/dashboard/modulo1/instalacion"
              className="block bg-gray-100 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-950">
                {instalacion ? "✅" : "⬜"} Instalación de SketchUp
              </h2>
              <p className="text-gray-600 mt-2">
                Aprende a instalar el programa y preparar tu espacio de trabajo.
              </p>
            </a>

            <a
              href="/dashboard/modulo1/primeros-pasos"
              className="block bg-gray-100 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-950">
                {primerosPasos ? "✅" : "⬜"} Primeros pasos
              </h2>
              <p className="text-gray-600 mt-2">
                Conoce la interfaz, herramientas básicas y navegación.
              </p>
            </a>

            <a
              href="/dashboard/modulo1/primeros-pasos-2"
              className="block bg-gray-100 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-950">
                {primerosPasos2 ? "✅" : "⬜"} Primeros pasos - Parte 2
              </h2>
              <p className="text-gray-600 mt-2">
                Aprende medidas, precisión y uso correcto de grupos.
              </p>
            </a>

            <a
              href="/dashboard/modulo1/metodos-abreviados"
              className="block bg-gray-100 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-950">
                {metodos ? "✅" : "⬜"} Métodos abreviados y atajos
              </h2>
              <p className="text-gray-600 mt-2">
                Aprende los comandos rápidos más usados en SketchUp.
              </p>
            </a>
          </div>
          {progreso === 100 && (
  <div className="mt-8 bg-green-100 border border-green-300 rounded-2xl p-6 text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-2">
      🎉 ¡Felicitaciones!
    </h2>

    <p className="text-gray-700 mb-4">
      Has completado el Módulo 1.
    </p>

    <a
      href="/dashboard/modulo2"
      className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
    >
      Continuar al Módulo 2 →
    </a>
  </div>
)}
        </div>
      </div>
    </main>
  );
}