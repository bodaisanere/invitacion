/**
 * Copia texto al portapapeles con fallback para navegadores
 * que no soportan navigator.clipboard (contextos no seguros, etc).
 * Devuelve true si copió, false si no pudo.
 */
export async function copiarTexto(texto) {
  if (!texto) return false;

  // Vía moderna (requiere contexto seguro: https o localhost)
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch {
      // seguimos al fallback
    }
  }

  // Fallback: textarea oculto + execCommand (funciona en más navegadores)
  try {
    const textarea = document.createElement("textarea");
    textarea.value = texto;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}
