"use client";

import { useEffect, useState } from "react";

export default function PrimerosPasos() {
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    const estado = localStorage.getItem("modulo1-primeros-pasos");
    setCompletado(estado === "completado");
  }, []);

  const marcarCompletado = () => {
    localStorage.setItem("modulo1-primeros-pasos", "completado");
    setCompletado(true);
  };

  return (
    <main className="min-h-screen bg-blue-950 p-8">
      <div className="max-w-5xl mx-auto">
        <a
          href="/dashboard/modulo1"
          className="text-yellow-400 font-bold"
        >
          ← Volver al módulo
        </a>

        <div className="bg-white rounded-3xl p-8 shadow-2xl mt-6">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Primeros pasos
          </h1>

          <p className="text-gray-600 mb-8">
            Conoce la interfaz de SketchUp, las herramientas principales y cómo moverte dentro del espacio 3D.
          </p>

          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg mb-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2YwzQW15ZCA"
              title="Primeros pasos"
              allowFullScreen
            />
          </div>

          <button
            onClick={marcarCompletado}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
          >
            {completado ? "✅ Clase completada" : "Marcar clase como completada"}
          </button>
        </div>
      </div>
    </main>
  );
}