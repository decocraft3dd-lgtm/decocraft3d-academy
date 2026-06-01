export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-950">
          Acceso Alumnos
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border rounded-xl p-3 text-gray-900"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border rounded-xl p-3 text-gray-900"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}