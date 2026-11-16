# Boda Nere & Isa · 14 . 08 . 27

Invitación web de la boda, hecha con React 19 + Vite + Tailwind CSS 4.

## Desarrollo

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm lint
pnpm build        # genera dist/
pnpm preview      # sirve dist/ localmente
```

## Estructura

```
.
├─ .github/workflows/deploy.yml   # deploy automático a gh-pages
├─ public/
│  ├─ favicon.svg
│  ├─ icons.svg
│  ├─ fonts/                      # fuentes (respaldo estático)
│  └─ .nojekyll                   # evita que Jekyll filtre archivos
├─ src/
│  ├─ assets/                     # imágenes, video y fuentes
│  ├─ components/
│  │  ├─ Inicio.jsx               # 1. hero con video
│  │  ├─ NosCasamos.jsx           # 2. Isa y Nere / fecha
│  │  ├─ CuentaRegresiva.jsx      # 3. días restantes (dinámico)
│  │  ├─ Itinerario.jsx           # 4. ceremonia y fiesta
│  │  ├─ InfoImportante.jsx       # 5. precios, datos, dress code
│  │  ├─ Regalo.jsx               # 6. alias / CVU
│  │  ├─ ConfirmarAsistencia.jsx  # 7. CTA al formulario
│  │  ├─ Footer.jsx               # 8. cierre
│  │  └─ Reveal.jsx               # animación de scroll reutilizable
│  ├─ data/boda.js                # ⚠️ links, precios y datos de cuenta
│  ├─ lib/copy.js                 # copiar al portapapeles
│  ├─ App.jsx
│  ├─ index.css                   # tema, fuentes, animaciones
│  └─ main.jsx
├─ index.html
└─ vite.config.js                 # base: "./" para gh-pages
```

## Datos a completar

Todo lo editable está en **`src/data/boda.js`**:

| Campo | Qué es |
| --- | --- |
| `fecha` | Fecha de la boda (`YYYY-MM-DD`), alimenta la cuenta regresiva |
| `links.ubicacionUrl` | Google Maps del salón |
| `links.confirmarUrl` | Google Form de confirmación |
| `precios` | Adultos y menores |
| `datosCuenta` | Alias, CBU, CVU, titular (hoy ficticios) |

## Deploy en GitHub Pages

El sitio se publica en la rama `gh-pages` y se ve en:

```
https://<usuario>.github.io/boda-nere-isa/
```

### 1. Crear el repositorio y subir el código

```bash
git init -b main
git add .
git commit -m "Invitación boda Nere e Isa"
git remote add origin https://github.com/<usuario>/boda-nere-isa.git
git push -u origin main
```

### 2. Elegir cómo se publica

Hay dos caminos; con **uno** alcanza.

**A. Automático (recomendado):** no hacés nada más. El workflow
`.github/workflows/deploy.yml` corre en cada push a `main`, compila y
publica en `gh-pages`.

**B. Manual desde tu máquina:**

```bash
pnpm deploy       # = predeploy (build) + gh-pages -d dist
```

### 3. Activar Pages (una sola vez)

GitHub → **Settings → Pages** → *Build and deployment*:

- **Source:** `Deploy from a branch`
- **Branch:** `gh-pages` · carpeta `/ (root)` → **Save**

En 1–2 minutos queda online. Cada push a `main` (o cada `pnpm deploy`)
actualiza el sitio.

> **Nota:** `vite.config.js` usa `base: "./"`, así que funciona tanto en
> `usuario.github.io/boda-nere-isa/` como en un dominio propio, sin tocar nada.
