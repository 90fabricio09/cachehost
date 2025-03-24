import { useState } from "react";
import {
  FaServer,
  FaFileInvoiceDollar,
  FaBars,
  FaTimes,
  FaHome,
  FaCloud,
  FaComment,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_png.png";

const Dashboard = () => {
  const activeServices = 0;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
            <div className="grid-overlay"></div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" />
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
        <div className="grid-overlay"></div>
          <Link to="/dashboard" className="sidebar-link">
            <FaHome /> Dashboard
          </Link>
          <Link to="/servicos" className="sidebar-link">
            <FaCloud /> Serviços
          </Link>
          <Link to="/dashboard/faturas" className="sidebar-link">
            <FaFileInvoiceDollar /> Faturas
          </Link>
          <Link to="https://discord.gg/CC7HH2mzsK" target="_blank" className="sidebar-link">
            <FaComment /> Suporte
          </Link>
        </nav>
        <div className="sidebar-footer">
          <Link to="/logout" className="sidebar-link logout-btn">
            <FaSignOutAlt /> Sair
          </Link>
        </div>
      </div>

      <button
        className={`menu-btn ${sidebarOpen ? "outside" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars size={24} />
      </button>

      <div className={`content ${sidebarOpen ? "shifted" : ""}`}>
        <header className="content-header">
          <h1>Painel CacheHost</h1>
        </header>

        <div className="grid-container">
          <div className="card active-card">
            <h2>Serviços Ativos</h2>
            <p className="active-number">{activeServices}</p>
          </div>

          <Link to="/servicos" className="card clickable-card">
            <FaServer size={40} className="icon blue" />
            <h2>Gerenciar meus serviços</h2>
            <p>Configure e monitore seus serviços</p>
          </Link>

          <Link to="/dashboard/faturas" className="card clickable-card">
            <FaFileInvoiceDollar size={40} className="icon red" />
            <h2>Faturas</h2>
            <p>Acompanhe seus pagamentos</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;