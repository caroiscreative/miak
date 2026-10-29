"use client";

import Link from "next/link";
import { ChevronRight, User } from "lucide-react";
import { useState } from "react";

export default function CuentaPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <nav className="mb-8 flex items-center justify-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Mi cuenta</span>
      </nav>

      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
          <User className="h-7 w-7 text-neutral-500" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900">Mi cuenta</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="login-email"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Contraseña
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-neutral-500">
        ¿No tenés cuenta?{" "}
        <span className="font-medium text-neutral-900">Registrate</span>
      </p>

      <div className="mt-8 rounded-lg bg-amber-50 p-4 text-center text-sm text-amber-800">
        Próximamente — Estamos trabajando en esta funcionalidad.
      </div>
    </div>
  );
}
