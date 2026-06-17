# Product Backlog: Ecosistema AgroSmart (B2G)

Este documento contiene el Product Backlog de AgroSmart, estructurado lógicamente desde 0 a 100% para la creación del sistema B2G. Se han tomado las historias de usuario (HU) del Excel `Produc Backlog.xlsx`, ordenado por dependencias técnicas y ponderado por Puntos de Historia (Esfuerzo). También incluye funcionalidades adicionales clave (Marcadas como [NUEVA]) para cumplir con la visión del estado (Roles, Offline, Videollamadas).

## 📋 Formato Estándar para Nuevas Historias de Usuario (Para Trello/Jira)

Cuando necesites agregar una nueva historia a este documento o a Trello, copia y pega la siguiente plantilla:

```markdown
**ID y Título:** HU-XXX-[Nombre_Corto_Descriptivo]
**Módulo/Categoría:** [Ej: Backend, Frontend, UX, Base de Datos]
**Prioridad:** [Alta / Media / Baja]
**Estimación:** [XX] Puntos de Historia (o días)
**Responsable:** [Nombre del asignado]

**Descripción Gherkin:**
- **Como** [Rol del usuario: Agricultor, Admin, Ministerio]
- **Quiero** [La funcionalidad o acción que desea realizar]
- **Para** [El valor, beneficio o razón detrás de la acción]

**Criterios de Aceptación:**
- [ ] Criterio 1... (Ej: Validar campos vacíos)
- [ ] Criterio 2...
```

---

## 🏃 Planificación de Sprints (Roadmap)

El backlog está dividido en 4 Sprints equilibrados lógicamente para construir el sistema de forma incremental.

### 🛡️ Sprint 1: Arquitectura Base, Seguridad, Autenticación y Jerarquía
**Objetivo del Sprint:** Establecer los cimientos del sistema. Configurar la base de datos, asegurar la integridad y construir todo el ecosistema de acceso y roles, así como los límites de los planes de gobierno.
**Total Estimado:** ~78 Puntos de Historia

*   **HU-018-BaseDatos** [Backend] (Alta | 13 pts) - Diseño e implementación del esquema relacional en Supabase (Tablas, llaves foráneas, optimización).
*   **HU-016-SeguridadDatos** [Backend] (Alta | 13 pts) - Configuración de Row Level Security (RLS) en Supabase, hashing y políticas de encriptación.
*   **[NUEVA] HU-024-RolesYJerarquia** [Backend] (Alta | 13 pts) - Lógica central para diferenciar permisos entre Global Owner, Ministry Admin, Org Admin y Farmer.
*   **HU-017-ControlAcceso** [Backend] (Alta | 8 pts) - Middleware de protección de rutas basado en los roles (RBAC) para proteger los paneles.
*   **[NUEVA] HU-025-PlanesMembresia** [Backend] (Alta | 8 pts) - Sistema limitador para bloquear la creación de nuevos usuarios dependiendo del plan de gobierno.
*   **HU-002-Autenticacion** [Frontend] (Alta | 8 pts) - Sistema de login (JWT/Sesiones de Supabase).
*   **HU-001-RegistroUsuario** [Frontend] (Alta | 5 pts) - Creación de la interfaz y lógica para el registro de nuevos usuarios.
*   **HU-003-RecuperacionCuenta** [Frontend] (Media | 5 pts) - Flujo de "¿Olvidaste tu contraseña?" y reseteo por email.
*   **HU-005-SesionActiva** [Frontend] (Media | 3 pts) - Persistencia de sesión y validación de tokens de acceso al recargar.
*   **HU-004-CerrarSesion** [Frontend] (Media | 2 pts) - Terminación segura de la sesión y limpieza de tokens locales.

### 🚜 Sprint 2: Core Agrícola, Gestión de Cultivos y Abono Automatizado
**Objetivo del Sprint:** Dar vida a la funcionalidad principal del agricultor y la organización. Registro de parcelas, integración de calendarios y la automatización de la fertilización técnica.
**Total Estimado:** ~80 Puntos de Historia

*   **HU-006-RegistrarCultivo** [Frontend] (Alta | 8 pts) - Interfaz y lógica para dar de alta nuevas siembras y sus características.
*   **HU-008-MapaCultivo** [Frontend] (Alta | 13 pts) - Representación visual de las parcelas de cultivo (integración de mapas/polígunos).
*   **[NUEVA] HU-031-CatalogoTecnicoAbono** [Backend] (Alta | 8 pts) - Carga del catálogo técnico estándar de fertilizantes como referencia nacional.
*   **[NUEVA] HU-026-PlanFertilizacionAutomatico** [Backend] (Alta | 13 pts) - Generador de planes automáticos de abono, calculando fechas y dosis al registrar un cultivo.
*   **HU-010-RegistrarAbono** [Frontend] (Media | 8 pts) - Ingreso manual de aplicaciones de fertilizante por el agricultor.
*   **HU-007-EditarCultivo** [Frontend] (Media | 5 pts) - Modificación de estados del cultivo o corrección de datos.
*   **HU-009-HistorialCultivo** [Frontend] (Media | 8 pts) - Listado y filtros de todas las cosechas pasadas y activas.
*   **HU-011-HistorialAbono** [Frontend] (Media | 8 pts) - Trazabilidad de todos los insumos aplicados a una parcela.
*   **[NUEVA] HU-027-CalendarioLunar** [Frontend] (Media | 9 pts) - Integración del algoritmo de fases lunares para sugerir las mejores fechas de siembra y cosecha en la UI.

### 🌦️ Sprint 3: Inteligencia Climática, Offline y Experiencia de Usuario
**Objetivo del Sprint:** Integrar APIs externas para el clima, generar valor predictivo mediante recomendaciones, adaptar la app para dispositivos móviles rurales y asegurar el trabajo sin internet.
**Total Estimado:** ~75 Puntos de Historia

*   **[NUEVA] HU-029-ModoOffline** [Frontend] (Alta | 21 pts) - Implementación de Service Workers y bases locales (IndexedDB) para guardar cambios sin red y sincronizarlos luego.
*   **HU-012-DatosClimaticos** [Backend] (Alta | 13 pts) - Conexión con API de clima para obtener datos en tiempo real de la zona del cultivo.
*   **HU-013-Recomendaciones** [Backend] (Alta | 13 pts) - Lógica agronómica que cruza la fase del cultivo actual con el clima para dar sugerencias.
*   **HU-014-AlertasClima** [Backend] (Media | 8 pts) - Notificaciones push o visuales de fenómenos anómalos (heladas, sequías, lluvias extremas).
*   **HU-022-VisualClima** [UX] (Media | 8 pts) - Diseño de la interfaz de clima (widgets de humedad, temperatura, viento).
*   **HU-015-HistorialClima** [Backend] (Media | 5 pts) - Almacenamiento de tendencias climáticas semanales para cruce de datos.
*   **HU-021-Responsive** [Frontend] (Alta | 7 pts) - Auditoría y refactorización CSS para asegurar que todas las pantallas funcionen en tablets y celulares.

### 📡 Sprint 4: Comunicación B2G, Control de Estado y Dashboards
**Objetivo del Sprint:** Finalizar el ecosistema de soporte en tiempo real y proporcionar las herramientas analíticas (Dashboards) a los Ministerios y Administradores de forma consolidada.
**Total Estimado:** ~70 Puntos de Historia

*   **HU-020-Dashboard** [UX] (Alta | 13 pts) - Construcción del panel de control de inicio con gráficos agregados (según el rol: País vs. Cooperativa vs. Finca).
*   **[NUEVA] HU-030-SistemaSuspension** [Backend] (Alta | 13 pts) - Interfaz administrativa para que el Ministerio pueda bloquear o auditar a organizaciones/usuarios.
*   **[NUEVA] HU-028-Videollamadas** [Frontend] (Alta | 21 pts) - Integración de WebRTC para asistencia y diagnóstico remoto en el campo.
*   **HU-023-Chat** [Frontend] (Media | 13 pts) - Implementación de mensajería instantánea jerárquica (agricultor -> cooperativa -> ministerio).
*   **HU-019-MonitoreoSistema** [Backend] (Media | 10 pts) - Panel exclusivo para 'Global Owner' de telemetría de la base de datos, carga y uso del servidor.
Entrega Final y QA: Pruebas End-to-End simulando la carga masiva y paso a producción.