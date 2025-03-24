import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="grid-overlay"></div>
      <div className="login-card">
        <h2 className="card-title">Redefinir Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper input-icon-left">
              <i className="bi bi-envelope"></i>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>
          <button type="submit" className="btn-submit">
            Enviar Email de Redefinição
          </button>
        </form>
        <p className="login-hint">
          <Link to="/login">Voltar para Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
