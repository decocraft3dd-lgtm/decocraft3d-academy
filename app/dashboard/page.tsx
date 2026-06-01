"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/login";
        return;
      }

      setLoading(false);
    }

    verificarSesion();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-blue-950 text-white">
        <p className="text-xl font-bold">Verificando acceso...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
       <div className="flex justify-between items-center mb-2">
  <h1 className="text-4xl font-bold text-blue-950">
    Bienvenido a Decocraft3D Academy
  </h1>

  <button
    onClick={async () => {
      await supabase.auth.signOut();
      window.location.href = "/login";
    }}
    className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-xl"
  >
    Cerrar sesión
  </button>
</div>

        <p className="text-gray-600 mb-8">
          Accede a todos los módulos del curso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <a
            href="/dashboard/modulo1"
            className="block bg-white p-6 rounded-2xl shadow-lg text-blue-950 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">📚 Módulo 1</h2>
            <p className="text-gray-700">Introducción a SketchUp</p>
          </a>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950">
            <h2 className="text-2xl font-bold mb-2">📚 Módulo 2</h2>
            <p className="text-gray-700">Diseño de muebles en melamina</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950">
            <h2 className="text-2xl font-bold mb-2">📚 Módulo 3</h2>
            <p className="text-gray-700">Despiece y optimización</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-blue-950">
            <h2 className="text-2xl font-bold mb-2">📚 Módulo 4</h2>
            <p className="text-gray-700">Proyecto final completo</p>
          </div>
        </div>
      </div>
    </main>
  );
}