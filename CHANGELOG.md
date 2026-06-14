# Registro de Cambios (Changelog)

> [!IMPORTANT]
> **REGLA DE EDICIÓN PARA ASISTENTES E IA:** 
> Los dos anexos iniciales (*1. Reglas del Documento* y *2. Convención de Commits*) **SIEMPRE** deben permanecer anclados al inicio de este archivo. Cualquier nueva versión o cambio debe agregarse inmediatamente **debajo** de la sección de anexos (después de la línea divisoria `---`).

---

## 📌 Anexo 1: Reglas de Funcionamiento del Changelog

* **Orden Cronológico Inverso:** Las versiones y sprints más nuevos se añaden arriba, justo debajo de esta sección de anexos.
* **Clasificación de Cambios:** Agrupa las modificaciones bajo los siguientes subtítulos según corresponda:
  * `Añadido` (Added): Nuevas características o archivos creados.
  * `Modificado` (Changed): Cambios en código o lógica existente.
  * `Corregido` (Fixed): Resolución de bugs y errores del sistema.
  * `Eliminado` (Removed): Funcionalidades removidas.
  * `Seguridad` (Security): Parches de vulnerabilidades.
* **Trazabilidad:** Cada cambio registrado debe finalizar indicando el hash o identificador del commit correspondiente entre paréntesis: `(Commit: [hash])`.

---

## 💡 Anexo 2: Guía de Mensajes de Commit (Conventional Commits)

Utiliza la siguiente estructura para tus mensajes de Git:
`💥 <tipo>(<ámbito opcional>): <descripción corta en minúsculas y presente>`

### Tipos comunes:
* **`feat`**: Nueva funcionalidad (ej. `feat(tests): agregar tests funcionales para adoption`)
* **`fix`**: Solución de un error/bug (ej. `fix(users): corregir deleteUser para retornar el usuario eliminado`)
* **`docs`**: Cambios en la documentación (ej. `docs(scrum): actualizar sprint review 1`)
* **`refactor`**: Cambio en el código que no corrige un error ni añade funcionalidad (ej. `refactor(auth): modularizar middleware de login`)
* **`style`**: Cambios de estilo y formato de código (espacios, punto y coma, etc., sin impacto funcional).
* **`test`**: Añadir o corregir pruebas existentes.
* **`chore`**: Tareas de mantenimiento o configuración (ej. `chore(deps): actualizar npm packages`).

---

## [0.1.1] - Analisis documental y validacion de plan - 2026-06-14
### Aniadido
- Creacion de `auxiliar/ScrumOps/plan_validation.md` con resumen documental, inconsistencias, cobertura, vacios y propuesta de integracion del plan (Commit: `65f5369`).

## [0.1.0] - Sprint 0: Configuración Inicial e Informes - 2026-06-13
### Añadido
- Creación de la estructura del proyecto y análisis de estado inicial (Commit: `9a8b7c6`).
- Estructuración de la metodología Solo-ScrumOps en la carpeta `auxiliar/ScrumOps/` (Commit: `5d4e3f2`).
- Reporte detallado de API bugs en `auxiliar/errors/` (Commit: `1a2b3c4`).
