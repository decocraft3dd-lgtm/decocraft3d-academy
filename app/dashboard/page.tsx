"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    async function verificarSesion() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
  window.location.href = "/login";
  return;
}

const email = data.session.user.email || "";
const nombre = email.split("@")[0];

setUsuario(nombre);
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
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-gray-950 p-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <img
            src="/logo.png"
            alt="Decocraft3D"
            className="w-40 md:w-56"
          />

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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
  Bienvenido
</h1>

<p className="text-yellow-400 text-xl font-semibold">
  {usuario}
</p>

          <p className="text-gray-300 text-lg">
            Accede a tus módulos, clases grabadas y recursos del curso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a
            href="/dashboard/modulo1"
            className="block bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              📚 Módulo 1
            </h2>

            <p className="text-gray-700 mb-4">
              Introducción a SketchUp
            </p>

            <span className="inline-block bg-green-100 text-green-700 font-bold px-4 py-2 rounded-xl text-sm">
              Disponible
            </span>
          </a>

          <div className="bg-white/80 rounded-3xl p-6 shadow-xl opacity-80">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              📚 Módulo 2
            </h2>

            <p className="text-gray-700 mb-4">
              Diseño de muebles en melamina
            </p>

            <span className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-xl text-sm">
              Próximamente
            </span>
          </div>

          <div className="bg-white/80 rounded-3xl p-6 shadow-xl opacity-80">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              📚 Módulo 3
            </h2>

            <p className="text-gray-700 mb-4">
              Despiece y optimización
            </p>

            <span className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-xl text-sm">
              Próximamente
            </span>
          </div>

          <div className="bg-white/80 rounded-3xl p-6 shadow-xl opacity-80">
            <h2 className="text-2xl font-bold text-blue-950 mb-2">
              📚 Módulo 4
            </h2>

            <p className="text-gray-700 mb-4">
              Proyecto final completo
            </p>

            <span className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-xl text-sm">
              Próximamente
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}