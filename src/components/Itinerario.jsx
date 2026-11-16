import fondoItinerario from "../assets/fondo-itinerario.png";
import ubicacionBtn from "../assets/ubicacio.png";
import { boda } from "../data/boda";
import Reveal from "./Reveal";

export default function Itinerario() {
  return (
    <section className="bg-rojo flex justify-center py-20 px-6">
      <Reveal variant="scale" className="w-full max-w-sm">
        <div className="relative w-full">
          <img
            src={fondoItinerario}
            width="3822"
            height="5208"
            alt=""
            className="block h-auto w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-8 py-8 text-center text-negro">
            <p className="text-base tracking-[0.3rem]">ITINERARIO</p>

            <h3 className="mt-4 text-3xl tracking-[0.2rem]">CEREMONIA</h3>
            <p className="text-[15px] leading-5">Sábado 14 de agosto</p>
            <p className="text-[15px] leading-5">16:30 hs</p>
            <p className="text-[15px] leading-5">
              Sunset Eventos, Ruta 90
              <br />
              Kilómetro 4082, Villa Constitución
            </p>

            <p className="mt-2 text-sm tracking-[0.5rem]">...</p>

            <h3 className="mt-2 text-3xl tracking-[0.2rem]">FIESTA</h3>
            <p className="text-[15px] leading-5">19:00 hs</p>

            <a
              href={boda.links.ubicacionUrl}
              target={boda.links.ubicacionUrl !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="mt-4 block w-44 transition-transform duration-200 hover:scale-105 active:scale-95"
              aria-label="Ver ubicación"
            >
              <img
                src={ubicacionBtn}
                alt="Ubicación"
                className="h-auto w-full"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
