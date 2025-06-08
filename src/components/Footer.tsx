import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Shortcut
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              Projeto open source para encurtar URLs de forma elegante e profissional. 
              Simples, rápido e minimalista.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-800 dark:hover:to-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-black dark:text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-all duration-200 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 group-hover:bg-black dark:group-hover:bg-white transition-colors"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/login" className="group text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-all duration-200 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 group-hover:bg-black dark:group-hover:bg-white transition-colors"></span>
                  Entrar
                </Link>
              </li>
              <li>
                <Link href="/register" className="group text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-all duration-200 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 group-hover:bg-black dark:group-hover:bg-white transition-colors"></span>
                  Cadastrar
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-all duration-200 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 group-hover:bg-black dark:group-hover:bg-white transition-colors"></span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent h-px"></div>
          <div className="relative pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 dark:text-gray-500 text-sm bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
                © 2024 Shortcut. Projeto open source minimalista.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 dark:text-gray-600">Feito com</span>
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 dark:text-gray-600">para desenvolvedores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 