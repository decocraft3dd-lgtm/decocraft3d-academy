"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CuboBase() {
  const [loading, setLoading] = useState(true);
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    async function verificarSesion() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/login";
        return;
      }

      setCompletado(localStorage.getItem("modulo2-cubos") === "completado");
      setLoading(false);
    }

    verificarSesion();
  }, []);

  const marcarCompletado = () => {
    localStorage.setItem("modulo2-cubos", "completado");
    setCompletado(true);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
        <p className="text-xl font-bold">Verificando acceso...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blue-950 p-8">
      <div className="max-w-5xl mx-auto">
        <a href="/dashboard/modulo2" className="text-yellow-400 font-bold">
          ← Volver al módulo
        </a>

        <div className="bg-white rounded-3xl p-8 shadow-2xl mt-6">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Crear cubo base
          </h1>

          <p className="text-gray-600 mb-8">
            Aprende a crear el volumen inicial que servirá como base para desarrollar muebles de melamina en 3D.
          </p>

          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg mb-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
              title="Crear cubo base"
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