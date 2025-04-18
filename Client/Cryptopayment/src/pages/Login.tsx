import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simular login
    localStorage.setItem('jwt', 'fake-jwt-token');
    navigate('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto mt-16 space-y-4">
      <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white p-2 rounded"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
};

export default Login;
