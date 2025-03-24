import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/logo_png.png";
import MinecraftImage from "../assets/mine-image.png";
import ctrlImage from "../assets/ctrl_logo.png";
import LfImage from "../assets/lf-image.png";
import AthosImage from "../assets/athos-image.webp";
import FAQImage from "../assets/server.gif";

const Home = () => {

  const feedbacks = [
    {
      text: "Minha VPS roda liso e sem travamentos. Recomendo muito para projetos sérios.",
      image: LfImage,
      name: "Luis Fernando",
    },
    {
      text: "A melhor hospedagem de Minecraft que já utilizei! Preço justo e muita qualidade.",
      image: ctrlImage,
      name: "ctrl",
    },
    {
      text: "Serviço excelente! Meu servidor nunca caiu e o suporte é muito rápido.",
      image: AthosImage,
      name: "Athos Rodrigues",
    },
  ];

  const [activeFeedback, setActiveFeedback] = useState(0);
  const [fade, setFade] = useState(false);

  const changeFeedback = (index) => {
    if (index === activeFeedback) return;
    setFade(true);
    setTimeout(() => {
      setActiveFeedback(index);
      setFade(false);
    }, 300);
  };

  const faqItems = [
    {
      question: "Como faço para contratar uma VPS?",
      answer:
        "Você pode contratar uma VPS acessando a seção de planos e escolhendo o serviço que melhor atende às suas necessidades.",
    },
    {
      question: "Qual o tempo de garantia do serviço?",
      answer:
        "Oferecemos garantia de uptime e suporte 24/7 para que você tenha sempre o melhor desempenho.",
    },
    {
      question: "Como acessar e gerenciar a VPS?",
      answer:
        "Após a contratação, você terá acesso a um painel de controle intuitivo para gerenciar seu servidor.",
    },
    
    {
      question: "O servidor tem proteção DDoS?",
      answer:
        "Todos os servidores incluem proteção DDoS enterprise-grade, mantendo seu servidor online e estável.",
    },
    {
      question: "O que diferencia a CacheHost das outras?",
      answer:
        "Com infraestrutura de ponta, suporte 24/7 e garantia de uptime, oferecemos serviços robustos e confiáveis, ideais para projetos que exigem alta performance.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(-1);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <div className="home-container">
      <div className="grid-overlay"></div>
      <img src={Logo} alt="" className="home-title" />

      <p className="home-subtitle">
        Servidores VPS no Brasil com excelente custo-benefício, oferecendo alta confiabilidade e desempenho excepcional.
        Nossos servidores virtuais são projetados para oferecer velocidade e eficiência máximas!
      </p>

      <a
        className="discord-button"
        href="https://discord.gg/CC7HH2mzsK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-discord"></i> Junte-se ao nosso Discord
      </a>

      <section id="features">
        <h2 className="features-title">Sobre nossas hospedagens</h2>
        <p className="features-subtitle">
          Descubra um pouco mais sobre como são nossas hospedagens
        </p>

        <div className="features">
          <div className="feature-card">
            <i className="bi bi-speedometer2 feature-icon"></i>
            <h3>Alta Performance</h3>
            <p>Servidores otimizados para garantir a melhor experiência de jogo possível.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-shield-lock feature-icon"></i>
            <h3>Proteção DDoS</h3>
            <p>Proteção avançada contra ataques DDoS para manter seu servidor sempre online.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-gear feature-icon"></i>
            <h3>Painel de Controle</h3>
            <p>Interface intuitiva para gerenciar seu servidor com facilidade.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-lightning-fill feature-icon"></i>
            <h3>Suporte 24/7</h3>
            <p>Equipe especializada pronta para ajudar quando você precisar.</p>
          </div>
        </div>
      </section>

      <section id="feedback">
        <h2 className="feedback-title">O que nossos clientes dizem</h2>
        <p className="feedback-subtitle">
          Veja alguns depoimentos de nossos clientes satisfeitos
        </p>

        <div
          className={`feedback-card ${fade ? "fade" : ""}`}
          style={{ margin: "0 auto" }}
        >
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>{feedbacks[activeFeedback].text}</p>
          <div className="feedback-user">
            <img
              src={feedbacks[activeFeedback].image}
              alt={feedbacks[activeFeedback].name}
              className="user-photo"
            />
            <h3>{feedbacks[activeFeedback].name}</h3>
          </div>
        </div>

        <div className="feedback-dots">
          {feedbacks.map((_, index) => (
            <span
              key={index}
              className={`feedback-dot ${activeFeedback === index ? "active" : ""}`}
              onClick={() => changeFeedback(index)}
            ></span>
          ))}
        </div>
      </section>

      <section id="plans">
        <div className="plans-header">
          <h2 className="plans-title">Nossos serviços</h2>
        </div>
        <p className="features-subtitle">
          Aqui você encontra mais sobre nossas hospedagens
        </p>
        <a href="/plans" className="view-more">
          Ver todos os planos &rarr;
        </a>

        <div className="plans-container">
          <div className="plan-card recommended">
            <span className="recommendation-tag">Recomendado</span>
            <h3>VPS Advanced</h3>
            <p>
              Intel Xeon, 8GB, 4 core, 2.60GHz Até 3.40GHz, 70GB SSD, até 1Gbps
            </p>
            <span className="price">R$ 129,99/mês</span>
            <a href="/plans" className="plan-button">
              Assinar
            </a>
          </div>

          <div className="plan-card recommended">
            <span className="recommendation-tag">Recomendado</span>
            <h3>Minecraft Ouro</h3>
            <p>4 vCPUs, 8GB RAM, 160GB SSD NVMe</p>
            <span className="price">R$ 14,99/mês</span>
            <a href="/plans" className="plan-button">
              Assinar
            </a>
          </div>
        </div>
      </section>

      <section id="minecraft" className="minecraft-container">
        <div className="minecraft-content">
          <h2 className="minecraft-title">Crie e explore com seu próprio servidor de Minecraft</h2>
          <p className="minecraft-text">
            Hospede seu servidor de Minecraft com a CacheHost e tenha a melhor performance para suas aventuras. Contamos com hardware de última geração, baixa latência e proteção contra DDoS, garantindo um ambiente estável e seguro para você e sua comunidade. Escolha um plano e comece a jogar sem preocupações!
          </p>
          <a href="/plans" className="minecraft-button">Escolha seu plano</a>
        </div>
        <div className="minecraft-image">
          <img src={MinecraftImage} alt="Servidor Minecraft" />
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="faq-image-container">
          <img src={FAQImage} alt="Perguntas Frequentes" className="faq-image" />
        </div>
        <div className="faq-content">
          <h2 className="faq-title">Perguntas Frequentes</h2>
          <p className="faq-text">
            Confira as dúvidas mais comuns dos nossos clientes e tire suas dúvidas!
          </p>
          <div className="accordion">
            {faqItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="accordion-question">{item.question}</h3>
                  <span className={`accordion-icon ${activeFaq === index ? "open" : ""}`}>
                    {activeFaq === index ? (
                      <i className="bi bi-chevron-down accordion-icon"></i>
                    ) : (
                      <i className="bi bi-chevron-down accordion-icon"></i>
                    )}
                  </span>
                </div>
                <div className={`accordion-content ${activeFaq === index ? "open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;