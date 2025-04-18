// src/utils/auth.ts
export const getToken = (): string | null => {
    return localStorage.getItem('jwt');  // debe coincidir con la clave que usas en Login.tsx
  };
  
  export const setToken = (token: string): void => {
    localStorage.setItem('jwt', token);
  };
  
  export const removeToken = (): void => {
    localStorage.removeItem('jwt');
  };
  