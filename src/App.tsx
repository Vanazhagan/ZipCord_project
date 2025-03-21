import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import AIFeaturePage from './pages/AIFeaturePage';
import LoginPage from './pages/LoginPage';
import BenefitsPage from './pages/BenefitsPage';
import CardPage from './pages/CardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route 
          path="/home" 
          element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/features" 
          element={isLoggedIn ? <FeaturesPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/benefits" 
          element={isLoggedIn ? <BenefitsPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/card" 
          element={isLoggedIn ? <CardPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/testimonials" 
          element={isLoggedIn ? <TestimonialsPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/pricing" 
          element={isLoggedIn ? <PricingPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/ai-features" 
          element={isLoggedIn ? <AIFeaturePage /> : <Navigate to="/" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;