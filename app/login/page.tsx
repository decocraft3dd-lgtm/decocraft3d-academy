"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function iniciarSesion(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-gray-950 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Decocraft3D"
            className="w-44 mx-auto mb-6"
          />

          <h1 className="text-3xl font-bold text-white">
            Acceso Alumnos
          </h1>

          <p className="text-gray-300 mt-2">
            Ingresa a tu plataforma de aprendizaje
          </p>
        </div>

        <form onSubmit={iniciarSesion} className="space-y-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl p-4 bg-white text-gray-900 outline-none border-2 border-transparent focus:border-yellow-400"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl p-4 bg-white text-gray-900 outline-none border-2 border-transparent focus:border-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition shadow-lg"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Decocraft3D Academy
        </p>
      </div>
    </main>
  );
}