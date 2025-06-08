"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

const mockUrls = [
  {
    id: 1,
    originalUrl: "https://www.exemplo.com/uma-url-muito-longa-para-demonstracao",
    shortUrl: "shortcut.to/abc123",
    title: "Página Exemplo",
    clicks: 127,
    createdAt: "2024-01-15",
    lastClick: "2024-01-20"
  },
  {
    id: 2,
    originalUrl: "https://github.com/WasDavidOliveira/shortcut-front",
    shortUrl: "shortcut.to/repo456",
    title: "GitHub Repository",
    clicks: 89,
    createdAt: "2024-01-10",
    lastClick: "2024-01-19"
  },
  {
    id: 3,
    originalUrl: "https://www.documentacao-muito-importante.com/docs/getting-started",
    shortUrl: "shortcut.to/docs789",
    title: "Documentação",
    clicks: 234,
    createdAt: "2024-01-05",
    lastClick: "2024-01-18"
  }
];

export default function Dashboard() {
  const [urls, setUrls] = useState(mockUrls);
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);
  const totalUrls = urls.length;
  const avgClicks = totalUrls > 0 ? Math.round(totalClicks / totalUrls) : 0;

  const handleCreateUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;

    setIsCreating(true);
    
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substring(2, 8);
      const newUrlObj = {
        id: Date.now(),
        originalUrl: newUrl,
        shortUrl: `shortcut.to/${shortCode}`,
        title: newTitle || "Link sem título",
        clicks: 0,
        createdAt: new Date().toISOString().split('T')[0],
        lastClick: "Nunca"
      };
      
      setUrls([newUrlObj, ...urls]);
      setNewUrl("");
      setNewTitle("");
      setIsCreating(false);
      setShowCreateForm(false);
    }, 1000);
  };

  const handleDeleteUrl = (id: number) => {
    setUrls(urls.filter(url => url.id !== id));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`https://${text}`);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black">
      <Navbar />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 dark:bg-gray-900/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-20">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
                Dashboard
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Gerencie suas URLs encurtadas e acompanhe estatísticas
              </p>
            </div>
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova URL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total de URLs</p>
                <p className="text-3xl font-bold text-black dark:text-white">{totalUrls}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total de Cliques</p>
                <p className="text-3xl font-bold text-black dark:text-white">{totalClicks}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Média de Cliques</p>
                <p className="text-3xl font-bold text-black dark:text-white">{avgClicks}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {showCreateForm && (
          <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Criar Nova URL</h3>
            <form onSubmit={handleCreateUrl} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL Original
                </label>
                <input
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://exemplo.com/url-longa"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Título (opcional)
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Meu link importante"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black text-black dark:text-white"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isCreating}
                  className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-400 font-medium rounded-lg transition-colors"
                >
                  {isCreating ? "Criando..." : "Criar URL"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/30">
            <h3 className="text-xl font-bold text-black dark:text-white">Suas URLs</h3>
          </div>
          
          <div className="divide-y divide-gray-200/50 dark:divide-gray-700/30">
            {urls.map((url) => (
              <div key={url.id} className="p-6 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-black dark:text-white truncate">
                        {url.title}
                      </h4>
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium rounded-full">
                        {url.clicks} cliques
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-1">
                      {url.originalUrl}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                      <span>Criado em {new Date(url.createdAt).toLocaleDateString('pt-BR')}</span>
                      <span>•</span>
                      <span>Último clique: {url.lastClick}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        {url.shortUrl}
                      </span>
                      <button
                        onClick={() => copyToClipboard(url.shortUrl)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Copiar link"
                      >
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="Ver estatísticas"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteUrl(url.id)}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Deletar URL"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {urls.length === 0 && (
            <div className="p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                Nenhuma URL encontrada
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Comece criando sua primeira URL encurtada
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-colors"
              >
                Criar primeira URL
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
      </div>
    </ProtectedRoute>
  );
} 