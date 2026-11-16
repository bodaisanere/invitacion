import confirmarBtn from "../assets/confirmar-asistencia.png";
import { boda } from "../data/boda";
import Reveal from "./Reveal";

export default function ConfirmarAsistencia() {
  return (
    <section className="bg-verde text-beige flex flex-col items-center justify-center py-20 px-6 text-center">
      <Reveal>
        <p className="text-3xl leading-9 tracking-wide">
          ESTA FIESTA
          <br />
          NO SERÍA
          <br />
          LO MISMO
          <br />
          SIN VOS.
        </p>
        <p className="font-qonelya mt-3 text-5xl">Esperamos verte!</p>
      </Reveal>

      <Reveal delay={180}>
        <a
          href={boda.links.confirmarUrl}
          target={boda.links.confirmarUrl !== "#" ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-8 block w-80 max-w-full transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label="Quiero confirmar asistencia"
        >
          <img
            src={confirmarBtn}
            alt="Quiero confirmar asistencia"
            className="h-auto w-full"
          />
        </a>
      </Reveal>
    </section>
  );
}
