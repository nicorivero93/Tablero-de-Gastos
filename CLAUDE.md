# CLAUDE.md — Proyecto

> Este archivo se commitea al repo. Se carga automáticamente por Claude Code al trabajar sobre este proyecto.

---

## Bootstrap del orquestador

**Regla fundamental**: si en este repo NO existe `.claude/orquestador.md`, antes de ejecutar cualquier acción no trivial:

1. Invocar la skill `/orquestador`.
2. El orquestador detecta: stack, estructura, convenciones observadas, deuda visible, objetivo declarado por el usuario.
3. Generar `.claude/orquestador.md` con esas decisiones.
4. Proponer commit: `chore: add Claude orchestrator bootstrap`.
5. Recién después, ejecutar la tarea original.

Si ya existe `.claude/orquestador.md`, respetarlo como fuente de verdad para convenciones de este repo.

---

## Skills y agents heredados

Este repo hereda el catálogo completo definido en `~/.claude/CLAUDE.md`. Resumen:

- **Skills**: `/orquestador`, `/write-human`, `/learn-10x`, `/strategist`, `/brain-better`, `/think-sideways`, `/regex-explain`.
- **Agents generales**: `project-auditor`, `adaptive-solver`, `critical-auditor`, `long-memory-keeper`, `integration-architect`.
- **Agents de código**: `senior-code-reviewer`, `error-teacher`, `system-architect`, `test-writer`, `refactor-readability`, `step-debugger`, `api-reviewer`, `code-translator`.

---

## Reglas de este proyecto

<!-- Esta sección se completa al correr /orquestador por primera vez en el repo. -->
<!-- Incluí acá: stack, convenciones, branches, tests, deploy, y cualquier cosa específica. -->

*Pendiente de bootstrap.*

---

## Memoria del proyecto

Para proyectos largos, mantener:

- `.claude/memory/decisions.md` — decisiones tomadas con fecha y motivo.
- `.claude/memory/changes.md` — cambios de requisitos con motivo.
- `.claude/memory/attempts.md` — qué se probó y qué resultó.
- `.claude/memory/context.md` — snapshot compacto del estado actual.
- `.claude/memory/pending.md` — qué quedó incompleto (se escribe en cada daily shutdown).

Gestionado por el subagente `long-memory-keeper`.
