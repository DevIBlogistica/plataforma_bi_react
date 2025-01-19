import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import './Login.css'; // Estilos importados

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('Login falhou. Verifique suas credenciais.');
    } else {
      setError('');
      window.location.href = '/dashboard'; // Redireciona para o dashboard
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Entrar</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
