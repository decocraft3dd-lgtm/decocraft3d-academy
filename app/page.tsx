"use client";

import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}
   <header className="sticky top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-950/95 backdrop-blur-md text-white rounded-3xl shadow-2xl px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img
                src="/logo.png"
                alt="Logo Decocraft3D"
                className="w-28 md:w-56 h-auto"
              />

              <div className="h-16 w-px bg-white/25"></div>
            </div>
<button
  className="lg:hidden text-3xl font-bold text-white"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
            <nav className="hidden lg:flex items-center gap-10">
              
              <a
                href="#inicio"
                className="text-yellow-400 font-bold border-b-4 border-yellow-400 pb-2"
              >
                Inicio
              </a>

              <a href="#curso" className="hover:text-yellow-400 font-semibold">
                Curso
              </a>

              <a href="#temario" className="hover:text-yellow-400 font-semibold">
                Temario
              </a>

              <a href="#proyectos" className="hover:text-yellow-400 font-semibold">
                Proyectos
              </a>

              <a href="#contacto" className="hover:text-yellow-400 font-semibold">
                Contacto
              </a>
            </nav>

          <div className="hidden lg:flex items-center gap-6">
              <div className="h-16 w-px bg-white/25 hidden lg:block"></div>

            <a
  href="/login"
  className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm md:text-base px-4 py-2 md:px-8 md:py-4 rounded-xl font-bold"
>
  Acceder
</a>
            </div>

          </div>
        </div>
      </header>
     {menuOpen && (
  <div className="fixed top-32 left-6 right-6 lg:hidden bg-blue-950 text-white rounded-2xl p-4 shadow-xl z-50">
    <a href="#inicio" className="block py-3 border-b border-white/20">
      Inicio
    </a>

    <a href="#curso" className="block py-3 border-b border-white/20">
      Curso
    </a>

    <a href="#temario" className="block py-3 border-b border-white/20">
      Temario
    </a>

    <a href="#proyectos" className="block py-3 border-b border-white/20">
      Proyectos
    </a>

    <a href="#contacto" className="block py-3">
      Contacto
    </a>
  </div>
)}

      {/* HERO */}
      <section id="inicio" className="scroll-mt-19 max-w-7xl mx-auto px-6 pt-4 pb-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
  Aprende a diseñar <br />
  muebles de melamina con{" "}
  <span className="text-blue-700">
    SketchUp
  </span>
</h1>

          <p className="text-xl text-gray-700 mb-8">
            Diseña muebles utilizando una metodología práctica basada en
            proyectos reales y experiencia en fabricación.
          </p>

          <div className="space-y-3 mb-10 text-gray-800 font-medium text-lg">
  <p>✅ Clases en vivo</p>
  <p>✅ Acceso a contenido grabado</p>
  <p>✅ Despiece y optimización</p>
  <p>✅ Proyectos reales de melamina</p>
</div>

          <div className="flex gap-4">
           <a
  href="https://wa.me/51922736386?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20el%20Curso%20de%20Dise%C3%B1o%20de%20Muebles%20de%20Melamina%20con%20SketchUp."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
>
  Comenzar Curso
</a>
            <button className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg">
              Ver Módulos
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-4">
          <img
            src="/hero.png"
            alt="Curso de Melamina"
            className="rounded-2xl w-full"
          />
        </div>

      </section>

      {/* QUE INCLUYE */}
     <section id="curso" className="scroll-mt-16 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Qué incluye el curso?
            </h2>

            <p className="text-lg text-gray-600">
              Clases en vivo, contenido grabado y una metodología práctica
              orientada a la fabricación real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
  <h3 className="text-black font-bold text-2xl mb-3">
    🎥 Clases en vivo
  </h3>

  <p className="text-black">
    Aprende paso a paso con acompañamiento directo.
  </p>
</div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-black font-bold text-2xl mb-3">
                📚 Biblioteca de contenido
              </h3>
  <p className="text-black">
                Accede a material grabado para reforzar tu aprendizaje.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-black font-bold text-2xl mb-3">
                🎨 Diseño en SketchUp
              </h3>
              <p className="text-black">
                Aprende una metodología práctica aplicada a melamina.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-black font-bold text-xl mb-3">
                Despiece
              </h3>
              <p className="text-black">
                Organización correcta de piezas para fabricación.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-black font-bold text-xl mb-3">
                Optimización
              </h3>
              <p className="text-black">
                Aprovecha mejor las planchas y reduce desperdicios.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-black font-bold text-xl mb-3">
                Proyectos reales
              </h3>
              <p className="text-black">
                Aplicación práctica en muebles utilizados diariamente.
              </p>
            </div>

          </div>

        </div>
      </section>
<section id="temario" className="scroll-mt-14 bg-gray-100 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Programa del Curso
      </h2>
      <p className="text-lg text-gray-700">
        4 clases virtuales en vivo + contenido grabado para reforzar tu aprendizaje.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          clase: "Clase 1",
          titulo: "Instalación y primeros pasos",
          texto: "Instalación de SketchUp, reconocimiento del software, estructura de un mueble de melamina, procedimiento de diseño, primer proyecto e identificación de piezas principales."
        },
        {
          clase: "Clase 2",
          titulo: "Diseño de muebles en SketchUp",
          texto: "Diseño completo de muebles, estructura de cajas, puertas, cajones, aplicación de melamina y exportación a Open Cut List."
      
        },
        {
          clase: "Clase 3",
          titulo: "Despiece para fabricación",
          texto: "Diagramas de corte, optimización de materiales, exportación de despiece a Excel e identificación de cantos y ranuras para fabricación."
          },
        {
          clase: "Clase 4",
          titulo: "Optimización y producción",
          texto: "Diseño de proyecto personalizado, ejecución de optimización, elaboración de despiece, repaso general y resolución de dudas."
                  },
      ].map((item) => (
        <div
          key={item.clase}
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
        >
          <span className="inline-block bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg mb-5">
            {item.clase}
          </span>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {item.titulo}
          </h3>

          <p className="text-gray-700">
            {item.texto}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* PROYECTOS REALES */}
<section id="proyectos"  className="scroll-mt-12 bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Proyectos Reales
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Aprende una metodología aplicada a proyectos reales de melamina,
        desde el diseño en SketchUp hasta la fabricación.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/diseno-ropero.jpg"
          alt="Diseño de ropero en SketchUp"
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Diseño en SketchUp
          </h3>
          <p className="text-gray-700 mt-2">
            Aprende a desarrollar proyectos completos antes de fabricarlos.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/proyecto-ropero.jpg"
          alt="Ropero fabricado"
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Ropero Fabricado
          </h3>
          <p className="text-gray-700 mt-2">
            Aplicación real del proceso de diseño, despiece y fabricación.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/proyecto-cocina.jpg"
          alt="Cocina moderna"
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Cocina Moderna
          </h3>
          <p className="text-gray-700 mt-2">
            Diseño y fabricación de mobiliario para cocina.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/proyecto-tv.jpg"
          alt="Centro de entretenimiento"
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Centro de Entretenimiento
          </h3>
          <p className="text-gray-700 mt-2">
            Proyectos personalizados con iluminación y acabados modernos.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>
<section id="contacto" className="scroll-mt-24 bg-blue-950 text-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-5xl font-bold mb-6">
        Inscríbete hoy y comienza a diseñar muebles
      </h2>

      <p className="text-xl text-gray-300 mb-8">
        Aprende a diseñar muebles de melamina con SketchUp mediante clases en vivo,
        contenido grabado y proyectos reales.
      </p>

      <div className="space-y-4 text-lg">
        <p>🎥 4 clases virtuales en vivo</p>
        <p>🎓 No necesitas experiencia previa</p>
        <p>🛠️ Aprende desde cero paso a paso</p>
        <p>📹 Acceso a las grabaciones del curso</p>
        <p>👥 Comunidad privada Decocraft3D</p>
      </div>
    </div>
    

    <div className="bg-white text-black rounded-3xl p-10 shadow-2xl text-center">
      <h3 className="text-5xl font-bold text-blue-950 mb-2">
        S/ 80
      </h3>

      <p className="text-gray-600 mb-6">
        Acceso completo al curso
      </p>

      <div className="inline-block text-left text-sm md:text-base mb-10">
  <p>✅ Contenido complementario grabado</p>
  <p>✅ Comunidad privada Decocraft3D</p>
  <p>✅ Actualizaciones futuras</p>
  <p>✅ Soporte post curso</p>
</div>

      <a
        href="https://wa.me/51922736386?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20el%20Curso%20de%20Dise%C3%B1o%20de%20Muebles%20de%20Melamina%20con%20SketchUp."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl transition"
      >
        🚀 Quiero mi vacante
      </a>

      <p className="mt-6 text-sm text-gray-500">
        🚀 Empieza a diseñar y fabricar muebles desde cero.
      </p>
    </div>
  </div>
</section>
    </main>
  );

}