import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Plans = () => {
  return (
    <div className="home-container">
      <div className="grid-overlay"></div>
      <section id="plans">
        <div className="plans-header">
          <h2 className="plans-title">Planos VPS</h2>
        </div>
        <p className="features-subtitle">Aqui você encontra mais sobre nossas vps</p>
        <div className="plans-container">
          <div className="plan-card">
            <h3>VPS Basic</h3>
            <p>Intel Xeon, 2GB, 2 core, 2.60GHz Até 3.40GHz, 40GB SSD, até 1Gbps</p>
            <span className="price">R$59,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>

          <div className="plan-card">
            <h3>VPS Essential</h3>
            <p>Intel Xeon, 4GB, 4 core, 2.60GHz Até 3.40GHz, 60GB SSD, até 1Gbps</p>
            <span className="price">R$89,99/mês</span>
            <a href="/planos/minecraft-deluxe" className="plan-button">Assinar</a>
          </div>
          
          <div className="plan-card recommended">
            <span className="recommendation-tag">Recomendado</span>
            <h3>VPS Advanced</h3>
            <p>Intel Xeon, 8GB, 4 core, 2.60GHz Até 3.40GHz, 70GB SSD, até 1Gbps</p>
            <span className="price">R$129,99/mês</span>
            <a href="/planos/minecraft-deluxe" className="plan-button">Assinar</a>
          </div>

          <div className="plan-card">
            <h3>VPS Ultimate</h3>
            <p>Intel Xeon, 12GB, 4 core, 2.60GHz Até 3.40GHz, 90GB SSD, até 1Gbps</p>
            <span className="price">R$169,99/mês</span>
            <a href="/planos/minecraft-deluxe" className="plan-button">Assinar</a>
          </div>

          <div className="plan-card">
            <h3>VPS Max</h3>
            <p>Intel Xeon, 16GB, 6 core, 2.60GHz Até 3.40GHz, 100GB SSD, até 1Gbps</p>
            <span className="price">R$199,99/mês</span>
            <a href="/planos/minecraft-deluxe" className="plan-button">Assinar</a>
          </div>

          <div className="plan-card">
            <h3>VPS Ultra</h3>
            <p>Intel Xeon, 32GB, 6 core, 2.60GHz Até 3.40GHz, 150GB SSD, até 1Gbps</p>
            <span className="price">R$299,99/mês</span>
            <a href="/planos/minecraft-deluxe" className="plan-button">Assinar</a>
          </div>
        </div>
        <div className="plans-header">
          <h2 className="plans-title">Planos Minecraft</h2>
        </div>
        <p className="features-subtitle">Aqui você encontra mais sobre nossas hospedagens para Minecraft</p>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Minecraft Madeira</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$4,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>
          <div className="plan-card">
            <h3>Minecraft Pedra</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$ 9,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>
          <div className="plan-card recommended">
            <span className="recommendation-tag">Recomendado</span>
            <h3>Minecraft Ouro</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$ 14,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>
          <div className="plan-card">
            <h3>Minecraft Ferro</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$ 24,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>
          <div className="plan-card">
            <h3>Minecraft Diamante</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$ 34,99/mês</span>
            <a href="/planos/vps-premium" className="plan-button">Assinar</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;