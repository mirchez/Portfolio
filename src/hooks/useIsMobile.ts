import { useState, useEffect } from "react";

// Hook para detectar si el ancho de la ventana es menor a 768px (puedes ajustar el breakpoint)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Ejecuta la función inicialmente
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;
