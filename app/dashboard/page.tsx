"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  useEffect(() => {
    async function verificarSesion() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/login";
      }
    }

    verificarSesion();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-950 mb-2">
          Bienvenido a Decocraft3D Academy
        </h1>

        <p className="text-gray-600 mb-8">
          Accede a todos los módulos del curso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <a
            href="/dashboard/modulo1"
            className="block bg-white p-6 rounded-2xl shadow-lg text-blue-950 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">
              📚 Módulo 1
            </h2>

            <p className="text-gray-700">
              Introducción a SketchUp
            </p>
          </a>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">
              📚 Módulo 2
            </h2>

            <p className="text-gray-700">
              Diseño de muebles en melamina
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">
              📚 Módulo 3
            </h2>

            <p className="text-gray-700">
              Despiece y optimización
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold mb-2">
              📚 Módulo 4
            </h2>

            <p className="text-gray-700">
              Proyecto final completo
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}