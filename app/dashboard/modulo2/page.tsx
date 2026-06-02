"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Modulo2() {
  const [loading, setLoading] = useState(true);

  const [cubos, setCubos] = useState(false);
  const [estructuras, setEstructuras] = useState(false);
  const [laterales, setLaterales] = useState(false);
  const [tapas, setTapas] = useState(false);
  const [fondos, setFondos] = useState(false);
  const [divisiones, setDivisiones] = useState(false);
  const [medidas, setMedidas] = useState(false);

  useEffect(() => {
    async function verificarSesion() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/login";
        return;
      }

      setCubos(localStorage.getItem("modulo2-cubos") === "completado");
      setEstructuras(localStorage.getItem("modulo2-estructuras") === "completado");
      setLaterales(localStorage.getItem("modulo2-laterales") === "completado");
      setTapas(localStorage.getItem("modulo2-tapas") === "completado");
      setFondos(localStorage.getItem("modulo2-fondos") === "completado");
      setDivisiones(localStorage.getItem("modulo2-divisiones") === "completado");
      setMedidas(localStorage.getItem("modulo2-medidas") === "completado");

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

  const completadas = [
    cubos,
    estructuras,
    laterales,
    tapas,
    fondos,
    divisiones,
    medidas,
  ].filter(Boolean).length;

  const progreso = Math.round((completadas / 7) * 100);

  return (
    <main className="min-h-screen bg-blue-950 p-8">
      <div className="max-w-5xl mx-auto">
        <a
          href="/dashboard"
          className="inline-block mb-6 text-yellow-400 font-bold"
        >
          ← Volver al Dashboard
        </a>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Módulo 2
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Bases del Diseño de Melamina
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

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {cubos ? "✅" : "⬜"} Crear cubos base
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {estructuras ? "✅" : "⬜"} Estructuras
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {laterales ? "✅" : "⬜"} Laterales
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {tapas ? "✅" : "⬜"} Tapas
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {fondos ? "✅" : "⬜"} Fondos
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {divisiones ? "✅" : "⬜"} Divisiones
              </h2>
            </a>

            <a href="#" className="block bg-gray-100 rounded-2xl p-5 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-blue-950">
                {medidas ? "✅" : "⬜"} Medidas exactas
              </h2>
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}