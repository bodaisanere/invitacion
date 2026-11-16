import VideoNereIsa from "../assets/video-nere-isa.mp4";

export default function Inicio() {
  return (
    <section className="relative flex justify-center bg-beige">
      <video
        src={VideoNereIsa}
        autoPlay
        loop
        muted
        playsInline
        className="max-h-screen"
      />
      <a
        href="#nos-casamos"
        className="absolute bottom-10 font-baskerville text-center text-beige"
        aria-label="Desliza hacia abajo"
      >
        <p>DESLIZA</p>
        <p className="font-area-extended animate-v-bounce">V</p>
      </a>
    </section>
  );
}
