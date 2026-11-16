import mesa from "../assets/mesa.png";
import Reveal from "./Reveal";

export default function NosCasamos() {
  return (
    <section id="nos-casamos" className="bg-beige flex flex-col items-center justify-center py-20 gap-10 text-center text-negro">
      <Reveal>
        <h1 className="font-qonelya text-celeste text-5xl">Isa y Nere</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-2xl tracking-[0.2rem]">NOS CASAMOS</p>
      </Reveal>
      <Reveal delay={220} variant="scale">
        <img
          src={mesa}
          width="3750"
          height="3563"
          alt=""
          className="h-auto w-80"
        />
      </Reveal>
      <Reveal delay={320}>
        <h3 className="text-celeste text-3xl font-semibold tracking-widest">
          14 . 08 . 27
        </h3>
        <p className="mt-2 text-[22px] tracking-wide leading-6">
          Queremos celebrar <br /> junto a vos este momento <br /> tan especial
          para nosotros.
        </p>
      </Reveal>
    </section>
  );
}
