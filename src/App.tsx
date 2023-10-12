import React from 'react';
import './App.css';
import { ToastProvider } from './hook/toastContext';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="App">
      <ToastProvider>
        <LoginForm />
      </ToastProvider>
    </div>
  );
}

export default App;
