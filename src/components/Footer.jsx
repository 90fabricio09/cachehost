import React from "react";
import Logo from "../assets/logo_png.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="/"><img src={Logo} alt="CacheHost Logo" className="footer-title"/></a>
                <p className="footer-subtitle">A melhor hospedagem para VPS e servidores Minecraft.</p>
                
                <ul className="footer-links">
                    <li><a href="#">Termos de Serviço</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="https://discord.gg/CC7HH2mzsK" target="_blank">Contato</a></li>
                </ul>
                
                <div className="footer-socials">
                    <a href="#" className="social-link" target="_blank"><i className="bi bi-whatsapp"></i></a>
                    <a href="https://discord.gg/CC7HH2mzsK" className="social-link"  target="_blank"><i className="bi bi-discord"></i></a>
                    <a href="/chat" className="social-link"><i className="bi bi-robot"></i></a>
                </div>

                <p className="footer-copy">&copy; 2025 CacheHost - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;