import { useState } from "react";
import verDatosBtn from "../assets/ver-datos.png";
import { boda } from "../data/boda";
import { copiarTexto } from "../lib/copy";
import Reveal from "./Reveal";

export default function InfoImportante() {
  const [abierto, setAbierto] = useState(false);
  const [copiado, setCopiado] = useState(null);

  const copiar = async (texto, campo) => {
    const ok = await copiarTexto(texto);
    if (ok) {
      setCopiado(campo);
      setTimeout(() => setCopiado(null), 1500);
    }
  };

  return (
    <section className="bg-celeste text-beige flex flex-col items-center justify-center py-20 px-6 text-center">
      <Reveal>
        <h2 className="font-qonelya text-5xl">info importante</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-col items-center gap-6">
          <div>
            <p className="text-4xl tracking-wide">{boda.precios.adultos}</p>
            <p className="text-lg tracking-[0.2rem]">ADULTOS</p>
          </div>
          <div>
            <p className="text-4xl tracking-wide">{boda.precios.menores}</p>
            <p className="text-lg tracking-[0.2rem]">MENORES</p>
            <p className="text-xs tracking-[0.15rem]">DE 12 A 17 AÑOS</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          className="mt-8 block w-52 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={abierto ? "Ocultar datos" : "Ver datos"}
        >
          <img
            src={verDatosBtn}
            alt={abierto ? "Ocultar datos" : "Ver datos"}
            className="h-auto w-full"
          />
        </button>
      </Reveal>

      {/* Despliegue suave: grid-rows 0fr -> 1fr + fade. Siempre montado. */}
      <div
        aria-hidden={!abierto}
        className={`grid w-full max-w-sm transition-all duration-500 ease-in-out ${
          abierto
            ? "mt-6 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-6 text-left text-beige">
            <p className="text-center text-sm tracking-[0.2rem]">
              DATOS DE LA CUENTA
            </p>
            <dl className="mt-4 flex flex-col text-[15px] text-center leading-6 gap-5">
              <div>
                <dt>Titular</dt>
                <dd className="text-xl">{boda.datosCuenta.titular}</dd>
              </div>
              <div className="flex flex-col items-center justify-between gap-2">
                <div>
                  <dt>Alias</dt>
                  <dd className="text-xl">{boda.datosCuenta.alias}</dd>
                </div>
                <button
                  type="button"
                  disabled={!abierto}
                  onClick={() => copiar(boda.datosCuenta.alias, "alias")}
                  className="shrink-0 text-xs tracking-widest underline underline-offset-2 disabled:opacity-0 cursor-pointer"
                >
                  {copiado === "alias" ? "¡COPIADO!" : "COPIAR"}
                </button>
              </div>
              <div className="flex flex-col items-center justify-between gap-2">
                <div>
                  <dt>CVU</dt>
                  <dd className="text-xl">{boda.datosCuenta.cvu}</dd>
                </div>
                <button
                  type="button"
                  disabled={!abierto}
                  onClick={() => copiar(boda.datosCuenta.cvu, "cvu")}
                  className="shrink-0 text-xs tracking-widest underline underline-offset-2 disabled:opacity-0 cursor-pointer"
                >
                  {copiado === "cvu" ? "¡COPIADO!" : "COPIAR"}
                </button>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Reveal delay={80}>
        <hr className="mt-12 w-44 border-beige/70" />
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 flex flex-col items-center gap-1.5">
          <p className="text-sm tracking-[0.35rem]">DRESS CODE</p>
          <p className="text-5xl tracking-wide">ELEGANTE</p>
          <p className="text-[15px]">Evitar los colores negro y blanco</p>
        </div>
      </Reveal>
    </section>
  );
}
