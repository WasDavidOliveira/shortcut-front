"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      console.log("Register:", formData);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 py-8 pt-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-8 group">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-black dark:text-white mb-3">
              Criar sua conta
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Junte-se e comece a encurtar seus links
            </p>
          </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
                minLength={8}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Confirmar senha
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || formData.password !== formData.confirmPassword || formData.password.length < 8}
              className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 dark:disabled:bg-gray-600 font-medium rounded-md transition-colors duration-200 mt-6"
            >
              {isLoading ? "Criando..." : "Criar conta"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Já tem conta?{" "}
              <Link
                href="/login"
                className="text-black dark:text-white hover:underline font-medium"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white text-sm"
          >
            ← Voltar
          </Link>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 