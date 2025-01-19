import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Login from './pages/Login';

const Dashboard = () => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <button onClick={async () => {
        await supabase.auth.signOut();
        window.location.reload(); // Redireciona para login após logout
      }}>
        Logout
      </button>
    </div>
  );
};

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false); // Concluiu o carregamento
    };

    fetchSession();

    // Subscreve eventos de autenticação (login/logout)
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) return <div>Carregando...</div>; // Mostra um indicador de carregamento enquanto verifica a sessão

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!session ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
