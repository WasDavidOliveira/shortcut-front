import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black">
      <Navbar />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 dark:bg-gray-900/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent dark:from-black/60 dark:to-transparent pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-8 shadow-lg">
                <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Mais de 1M+ links encurtados
              </div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-extrabold text-black dark:text-white mb-8 tracking-tight leading-none">
              Encurte.<br/>
              <span className="text-gray-400 dark:text-gray-600">Compartilhe.</span><br/>
              Analise.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              A maneira mais elegante de transformar URLs longas em links profissionais e rastreáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/register"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium rounded-lg transition-all duration-200 text-lg"
              >
                Começar Gratuitamente
              </Link>
            </div>

            {/* Hero Illustration */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-2xl">
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

        {/* Features Section */}
        <section id="features" className="py-20">
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
              <div className="text-center p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg hover:bg-white/70 dark:hover:bg-black/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Velocidade</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Encurte suas URLs em segundos com nossa tecnologia otimizada</p>
              </div>

              <div className="text-center p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg hover:bg-white/70 dark:hover:bg-black/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Confiabilidade</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Links seguros e estáveis que funcionam sempre que precisar</p>
              </div>

              <div className="text-center p-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-lg hover:bg-white/70 dark:hover:bg-black/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
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

      <Footer />
    </div>
  );
}
