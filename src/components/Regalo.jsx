import { useState } from "react";
import autoNovios from "../assets/auto-novios.png";
import { boda } from "../data/boda";
import { copiarTexto } from "../lib/copy";
import Reveal from "./Reveal";

export default function Regalo() {
  const [copiado, setCopiado] = useState(null);

  const copiar = async (texto, campo) => {
    const ok = await copiarTexto(texto);
    if (ok) {
      setCopiado(campo);
      setTimeout(() => setCopiado(null), 1500);
    }
  };

  return (
    <section
      id="regalo"
      className="bg-beige text-negro flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <Reveal>
        <h3 className="text-2xl leading-8 text-celeste">
          El verdadero <span className="font-qonelya text-3xl">regalo</span> ya
          <br />
          lo tenemos: Tu compañía
        </h3>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-6 max-w-xs text-[15px] leading-5">
          si además te gustaría hacernos
          <br />
          un presente nuestra cuenta es:
        </p>
      </Reveal>

      <Reveal delay={200}>
        <dl className="mt-4 flex flex-col gap-1 text-[15px] leading-6">
          <p className="flex items-center justify-center gap-2">
            Alias:{" "}
            <span className="font-semibold">{boda.datosCuenta.alias}</span>
            <button
              type="button"
              onClick={() => copiar(boda.datosCuenta.alias, "alias")}
              className="shrink-0 text-xs tracking-widest text-celeste underline underline-offset-2 cursor-pointer"
            >
              {copiado === "alias" ? "¡COPIADO!" : "COPIAR"}
            </button>
          </p>
          <p className="flex items-center justify-center gap-2">
            Cvu: {boda.datosCuenta.cvu}
            <button
              type="button"
              onClick={() => copiar(boda.datosCuenta.cvu, "cvu")}
              className="shrink-0 text-xs tracking-widest text-celeste underline underline-offset-2 cursor-pointer"
            >
              {copiado === "cvu" ? "¡COPIADO!" : "COPIAR"}
            </button>
          </p>
          <p>A nombre de: {boda.datosCuenta.titular}</p>
        </dl>
      </Reveal>

      <Reveal delay={280} variant="scale">
        <img
          src={autoNovios}
          width="1704"
          height="1863"
          alt="Auto descapotable con moño"
          className="mt-6 h-auto w-64"
        />
      </Reveal>
    </section>
  );
}
