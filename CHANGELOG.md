# Registro de Cambios (Changelog)

> [!IMPORTANT]
> **REGLA DE EDICION PARA ASISTENTES E IA:**
> Los dos anexos iniciales (*1. Reglas del Documento* y *2. Convencion de Commits*) **SIEMPRE** deben permanecer anclados al inicio de este archivo. Cualquier nueva version o cambio debe agregarse inmediatamente **debajo** de la seccion de anexos (despues de la linea divisoria `---`).

---

## Anexo 1: Reglas de Funcionamiento del Changelog

* **Orden Cronologico Inverso:** Las versiones y sprints mas nuevos se anaden arriba, justo debajo de esta seccion de anexos.
* **Clasificacion de Cambios:** Agrupa las modificaciones bajo los siguientes subtitulos segun corresponda:
  * `Anadido` (Added): Nuevas caracteristicas o archivos creados.
  * `Modificado` (Changed): Cambios en codigo o logica existente.
  * `Corregido` (Fixed): Resolucion de bugs y errores del sistema.
  * `Eliminado` (Removed): Funcionalidades removidas.
  * `Seguridad` (Security): Parches de vulnerabilidades.
* **Trazabilidad:** Cada cambio registrado debe finalizar indicando el hash o identificador del commit correspondiente entre parentesis: `(Commit: [hash])`.

---

## Anexo 2: Guia de Mensajes de Commit (Conventional Commits)

Utiliza la siguiente estructura para tus mensajes de Git:
`<tipo>(<ambito opcional>): <descripcion corta en minusculas y presente>`

### Tipos comunes:
* **`feat`**: Nueva funcionalidad.
* **`fix`**: Solucion de un error/bug.
* **`docs`**: Cambios en la documentacion.
* **`refactor`**: Cambio en el codigo que no corrige un error ni anade funcionalidad.
* **`style`**: Cambios de estilo y formato de codigo.
* **`test`**: Anadir o corregir pruebas existentes.
* **`chore`**: Tareas de mantenimiento o configuracion.

---

## [0.1.4] - Sprint 3 Documentacion y Distribucion - 2026-06-14
### Anadido
- `README.md` tecnico final con arbol real del proyecto, guia de clonacion, ejecucion en Docker y testing efimero en Docker (Commit: `pendiente`).
- `Dockerfile.test` y `Dockerfile.test.dockerignore` para ejecutar `pnpm test` en un contenedor efimero separado de la imagen de produccion (Commit: `pendiente`).
### Modificado
- Registro de publicacion de imagen en Docker Hub: `nivergara/adoptme-back:1.0` y validacion de escaneo basico con Docker Scout (Commit: `pendiente`).

## [0.1.3] - Cierre Sprint 2 - 2026-06-14
### Anadido
- `Dockerfile` y `.dockerignore` para ejecutar la app con `pnpm` sobre `node:24-alpine` (Commit: `pendiente`).
### Modificado
- Ejecucion validada del contenedor `adoptme-back:1.0` con `--env-file .env`, puerto `3000` y conexion correcta a Mongo Atlas (Commit: `pendiente`).

## [0.1.2] - Sprint 1 Estabilizacion y Tests - 2026-06-14
### Modificado
- Desacople de `app` y `server`; `start` y `dev` pasan a usar `src/server.js` con `pnpm` (Commit: `pendiente`).
- Inyeccion simple de servicios para tests y suite funcional de `adoption.router.js` con mocks/fakes en memoria (Commit: `pendiente`).
- `deleteUser` elimina realmente y `createPetWithImage` valida archivo, usa ruta relativa y captura errores basicos (Commit: `pendiente`).
- Sesiones usan `JWT_SECRET`, `unprotectedLogin` pasa a `POST` y `current`/`unprotectedCurrent` responden sin colgar la app (Commit: `pendiente`).
- Se agregan `asyncHandler`, `errorHandler` y validacion de ObjectId en rutas para evitar crashes por errores asincronos e IDs invalidos (Commit: `pendiente`).

## [0.1.1] - Analisis documental y validacion de plan - 2026-06-14
### Anadido
- Creacion de `auxiliar/ScrumOps/plan_validation.md` con resumen documental, inconsistencias, cobertura, vacios y propuesta de integracion del plan (Commit: `7a3f024`).

## [0.1.0] - Sprint 0 Configuracion Inicial e Informes - 2026-06-13
### Anadido
- Creacion de la estructura del proyecto y analisis de estado inicial (Commit: `9a8b7c6`).
- Estructuracion de la metodologia Solo-ScrumOps en la carpeta `auxiliar/ScrumOps/` (Commit: `5d4e3f2`).
- Reporte detallado de API bugs en `auxiliar/errors/` (Commit: `1a2b3c4`).
