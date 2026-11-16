import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-beige text-negro flex flex-col items-center justify-center gap-4 py-14 px-6 text-center">
      <Reveal>
        <p className="font-qonelya text-5xl text-celeste">Isa y Nere</p>
        <p className="mt-3 text-lg tracking-[0.3rem]">14 . 08 . 27</p>
      </Reveal>
    </footer>
  );
}
