"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substring(2, 8);
      setShortUrl(`https://shortcut.to/${shortCode}`);
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <span className="text-xl font-bold text-black dark:text-white">Shortcut</span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-md transition-colors"
          >
            Cadastrar
          </Link>
        </div>
      </nav>
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-400 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Mais de 1M+ links encurtados
              </div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold text-black dark:text-white mb-8 tracking-tighter leading-none">
              Encurte.<br/>
              <span className="text-gray-400 dark:text-gray-600">Compartilhe.</span><br/>
              Analise.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
              A maneira mais elegante de transformar URLs longas em links profissionais e rastreáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/register"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-all duration-200 text-lg"
              >
                Começar Gratuitamente
              </Link>
              <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 font-medium rounded-lg transition-all duration-200 text-lg">
                Ver Demo
              </button>
            </div>

            {/* Hero Illustration */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="text-left space-y-3">
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                        <div className="h-3 bg-black dark:bg-white rounded w-32"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* URL Shortener Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Experimente agora
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Cole sua URL e veja a mágica acontecer
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Cole sua URL aqui... https://exemplo.com/url-muito-longa"
                    className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 pr-32"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-2 px-6 py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 dark:disabled:bg-gray-600 font-medium rounded-lg transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Encurtando...</span>
                      </div>
                    ) : (
                      "Encurtar"
                    )}
                  </button>
                </div>

                {shortUrl && (
                  <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">Seu link encurtado</h3>
                      <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium">Pronto!</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={shortUrl}
                        readOnly
                        className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-black dark:text-white font-mono"
                      />
                      <button
                        type="button"
                        onClick={copyToClipboard}
                        className="px-6 py-3 bg-gray-800 dark:bg-gray-200 hover:bg-black dark:hover:bg-white text-white dark:text-black rounded-lg transition-all duration-200 font-medium"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Por que Shortcut?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Desenvolvido para profissionais que valorizam simplicidade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Velocidade</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Encurte suas URLs em segundos com nossa tecnologia otimizada</p>
              </div>

              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Confiabilidade</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Links seguros e estáveis que funcionam sempre que precisar</p>
              </div>

              <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Análise</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Acompanhe o desempenho dos seus links com estatísticas detalhadas</p>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
                Simples e profissional
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Criado para quem valoriza simplicidade sem abrir mão da funcionalidade. 
                Transforme URLs longas em links limpos e profissionais.
              </p>
              <Link
                href="/register"
                className="inline-flex px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-all duration-200 text-lg"
              >
                Começar agora
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-500">
            © 2024 Shortcut. Encurtador de URLs minimalista.
          </p>
        </div>
      </footer>
    </div>
  );
}
