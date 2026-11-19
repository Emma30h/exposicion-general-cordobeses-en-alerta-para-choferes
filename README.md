# Presentación única · Cordobeses en Alerta

Esta presentación une las cuatro exposiciones: CeA, 101, Agenda Móvil y División de Frecuencia. Muestra cómo funciona el programa hoy, todo en presente.

- **Publicada:** https://emma30h.github.io/exposicion-general-cordobeses-en-alerta-para-choferes/ (GitHub Pages; la guía del público está en `guia.html`). Se actualiza sola con cada `git push`.
- **Vercel:** https://cordobeses-en-alerta-presentacion.vercel.app quedó pausado: la cuenta gratis superó el límite de uso el 18/11/2026 y se despausa el 18/12/2026.
- **Repositorio:** https://github.com/Emma30h/exposicion-general-cordobeses-en-alerta-para-choferes
- **Ver en local:** configuración `exposicion-unificada` de `.claude/launch.json`, en http://localhost:8104.
- **Base del código:** el deck de División de Frecuencia (`6-Exposicion Division Frecuencia`), que es el más nuevo. Las láminas de CeA y del 101 se reescribieron con los mismos estilos.
- **`src-cea/`:** copia del HTML y de las fotos publicadas de CeA, porque su carpeta original no está en el Escritorio. Es solo para consulta; la presentación no la usa.

## Criterios acordados (18/11/2026)

- **El 101 se suma, no reemplaza.** El WhatsApp es la vía principal y el 101 es una segunda puerta de entrada. Desde la carta del SAE WEB el circuito es uno solo.
- **8 frecuencias.** Ya no se habla de "4 zonas de radio".
- **Sin Base de Coordinación.** Su personal pasó a la División Alerta, así que el total sigue en 188 y la División Alerta suma 156.
- **Personal en el 911.** Los 6 operadores en comisión siguen siendo parte de la Dirección.
- **Sin historia de cambios.** Hay una sola lámina de cifras, con el período indicado solo en la fuente.
- **Glosario:**
  - Base Olimpo: cabinas y radio operadores.
  - Hecho y carta: la carta es el registro del hecho en el SAE WEB.
  - UT (DJP): "DISTRITO" es solo el campo del SAE WEB.
  - SAE CAD: el sistema del 911.
  - Horas: siempre "Hs".
- **Confirmado por la usuaria:** el superior de turno cubre de 7 a 19 Hs y de 19 a 7 Hs; el radio operador SAE 911 sigue y maneja los hechos relevantes; las cartas las cierran los operadores de cabina; personal tech se dibuja en oscuro en todas las láminas.
- **Fotos:** se usan solo tomas de espaldas o sin la cara de frente del personal civil.

## Láminas (30)

Público: civiles becarios que van a ser choferes de móviles en la calle.

| Parte | Láminas |
|---|---|
| Portada | 1 |
| 01 · Quiénes somos | 2-4: estructura, el programa hoy, mapa de las 8 frecuencias |
| 02 · Cómo trabajamos | 5-8: dos puertas, recorrido único (incluye la escalada), Base Olimpo, sistemas |
| 03 · División de frecuencia | 9-14: RugGear, cabina, 2 réplicas del SAE WEB, radio, tiempos |
| 04 · En la calle · personal móvil | 15-21: resumen y 6 láminas con personal tech animado en el RugGear (motor de demos de la Agenda Móvil; R repite) |
| 05 · El 101 en el 911 | 22-25: qué es, 44 tipificaciones, el operador 101, el equipo en el 911 |
| 06 · Control e información | 26-27 |
| 07 · Resultados y equipo | 28-29 |
| Cierre | 30, con la descarga del instructivo para agendarse |

## Guía en vivo

- **Activarla:** quien expone toca **Activar guía en vivo** (o la tecla G) y escribe la contraseña **Cordobeses**. Queda guardada en esa computadora.
- **Envío:** cada cambio de lámina y de paso se manda por Supabase Realtime, en el canal `dmca-presentacion-unica`, firmado con ECDSA P-256. La guía solo acepta mensajes firmados.
- **Clave:** está cifrada en `config-vivo.js`. La copia sin cifrar vive en `_privado/`, que no se versiona ni se publica.
- **Versión:** `VER` tiene que ser igual en `index.html` y `guia.html`; hay que subirla si cambian las láminas.
- **Supabase:** el proyecto (plan gratis, en la misma cuenta de la guía de la Agenda Móvil) se pausa tras unos 7 días sin uso. Hay que reactivarlo con Restore antes de exponer; el tiempo real tarda unos 2 minutos más que la base en volver.

## Material

- **`Cordobeses en Alerta - Presentacion.pdf`:** las 30 láminas, una por página. Sale de `print/presentacion.html` con las capturas de `print/laminas/`, que se sacan con Chrome automático desde el sitio publicado, sin la ventana de la guía ni los controles.
- **`Instructivo Agendarse - personal tech.pdf`:** el instructivo de la Agenda Móvil.
- **`print/afiche-qr-bn.pdf`:** el afiche A4 en blanco y negro con el QR de la guía. Sale de `print/afiche-qr.html`.

## Publicar

```bash
git push
```

GitHub Pages tarda uno o dos minutos en mostrar los cambios.
