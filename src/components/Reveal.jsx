import { useEffect, useRef, useState } from "react";

/**
 * Reveal — animación reversible al hacer scroll (fade + subida).
 * Usa IntersectionObserver: cuando entra en pantalla suma .is-visible,
 * cuando sale lo quita. Así la animación se "desarma" al subir y se
 * vuelve a ver al bajar.
 *
 * Props:
 * - delay: ms extra para escalonar (0, 100, 200…). Solo aplica al aparecer;
 *   al desaparecer el delay es 0 para que se desarme sin lag.
 * - variant: "up" (sube), "fade" (solo opacidad), "scale" (zoom leve)
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      // threshold bajo (0.1) + rootMargin: dispara cuando el bloque
      // ya está bien dentro de la pantalla, no apenas asomando.
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
