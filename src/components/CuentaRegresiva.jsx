import { useMemo } from "react";
import { boda } from "../data/boda";
import Reveal from "./Reveal";

export default function CuentaRegresiva() {
  const { dias, esHoy, yaPaso } = useMemo(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const [anio, mes, dia] = boda.fecha.split("-").map(Number);
    const fechaBoda = new Date(anio, mes - 1, dia);
    const diferenciaMs = fechaBoda.getTime() - hoy.getTime();
    const dias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    return { dias, esHoy: dias === 0, yaPaso: dias < 0 };
  }, []);

  return (
    <section className="bg-celeste text-beige flex flex-col items-center justify-center py-20 px-6 text-center">
      {yaPaso ? (
        <Reveal>
          <p className="text-2xl tracking-[0.2rem]">¡NOS CASAMOS!</p>
          <p className="font-qonelya text-5xl mt-4">gracias por estar</p>
        </Reveal>
      ) : (
        <Reveal>
          <p className="text-xl tracking-[0.2rem]">FALTAN</p>
          <h2 className="text-6xl tracking-wide leading-none mt-2">
            {dias} DÍAS
          </h2>
          <p className="text-xl tracking-[0.2rem] mt-2">PARA CELEBRAR</p>
          <p className="font-qonelya text-4xl mt-4">
            {esHoy ? "¡es hoy!" : "guarda la fecha"}
          </p>
        </Reveal>
      )}
    </section>
  );
}
