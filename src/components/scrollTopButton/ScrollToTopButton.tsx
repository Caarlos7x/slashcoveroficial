import { useState, useEffect } from "react";
import "./ScrollTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar rolagem para exibir ou esconder o botão
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Exibe o botão após 300px de rolagem
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para rolar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;
