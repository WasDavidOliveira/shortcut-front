// Configuração da API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://sua-api.com';

// Função utilitária para fazer chamadas à API com JWT
export async function apiCall(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('shortcut_token');
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  
  return response.json();
}

// Funções específicas da API
export const authAPI = {
  login: (email: string, password: string) =>
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
    
  register: (name: string, email: string, password: string) =>
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
    
  me: () => apiCall('/auth/me'),
};

export const urlsAPI = {
  getAll: () => apiCall('/urls'),
  
  create: (originalUrl: string, title?: string) =>
    apiCall('/urls', {
      method: 'POST',
      body: JSON.stringify({ originalUrl, title }),
    }),
    
  delete: (id: string) =>
    apiCall(`/urls/${id}`, {
      method: 'DELETE',
    }),
    
  getStats: (id: string) => apiCall(`/urls/${id}/stats`),
}; 