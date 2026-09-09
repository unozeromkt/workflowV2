export type ContentGroup = { title: string; items: string[] };
export type ContentSection = {
  title: string;
  subtitle?: string;
  phrase?: string;
  intro?: string;
  groups: ContentGroup[];
};
export type Service = {
  slug: string;
  number: string;
  title: string;
  heroLines?: string[];
  sections: ContentSection[];
};

export const services: Service[] = [
  {
    slug: "inteligencia-artificial",
    number: "1.1",
    title: "INTELIGENCIA ARTIFICIAL",
    heroLines: ["INTELIGENCIA ARTIFICIAL APLICADA A MODELOS DE NEGOCIO."],
    sections: [
      {
        title: "VENTAS & FRONT-OFFICE",
        subtitle: "Interacción Omnicanal - IA Conversacional",
        phrase: "Transformando la relación con el cliente y acelerando el ciclo comercial 24/7",
        groups: [
          { title: "AGENTES DE VOZ AUTÓNOMOS", items: ["Telefonía inteligente con procesamiento de lenguaje natural (NLP).", "Análisis de contexto de la conversación en tiempo real.", "Resolución automática de situaciones y aprendizaje continuo."] },
          { title: "ASISTENTES CONVERSACIONALES AVANZADOS", items: ["iBots multitarea con capacidad de calificar leads y cerrar ventas.", "Autogestión y resolución inmediata de PQRs y trámites complejos.", "Documentación en bases de conocimiento automatizadas."] },
        ],
      },
      {
        title: "RECURSOS HUMANOS (HR-TECH)",
        subtitle: "Gestión del talento y experiencia del colaborador",
        phrase: "Maximizando la productividad y el bienestar operativo del equipo humano",
        groups: [
          { title: "RECLUTAMIENTO INTELIGENTE", items: ["Filtrado masivo de hojas de vida y coincidencia de perfiles (profile matching).", "Reducción de sesgos y optimización de tiempos de selección."] },
          { title: "ONBOARDING Y ASISTENTE AL EMPLEADO", items: ["Agentes virtuales 24/7 para consultas de nómina, certificados y políticas.", "Capacitación y tutoría adaptativa según el rol de cada colaborador."] },
          { title: "ANALÍTICA DE CLIMA Y RETENCIÓN", items: ["Modelos predictivos para identificar riesgos de rotación y satisfacción laboral.", "Metricas especializadas por cargo."] },
        ],
      },
      {
        title: "FINANZAS, CONTABILIDAD Y ÁREA LEGAL",
        subtitle: "Eficiencia Back - Office",
        phrase: "Automatización transaccional y mitigación del riesgo operativo",
        groups: [
          { title: "PROCESAMIENTO INTELIGENTE DE DOCUMENTOS (IDP)", items: ["Lectura, extracción y contabilización automática de facturas y documentos.", "Eliminación de la digitación manual y cero margen de error."] },
          { title: "GESTIÓN LEGAL Y CONTRACTUAL", items: ["Auditoría rápida de contratos, validación de cláusulas de riesgo, fechas de vencimiento y control de versiones."] },
          { title: "GERENCIA FINANCIERA", items: ["Gestión contable automatizada y auditoría continua de gastos corporativos.", "Planificación financiera a corto, mediano y largo plazo."] },
        ],
      },
      {
        title: "FLUJOS DE TRABAJO INTELIGENTES",
        subtitle: "Automatización de procesos internos y externos",
        phrase: "Ecosistemas integrados para eliminar cuellos de botella operativos",
        groups: [
          { title: "WORKFLOWS AUTÓNOMOS (FLUJOS INTELIGENTES)", items: ["Lógica de IA para aprobación de solicitudes, validación de requisitos y escalamiento", "Coordinación fluida entre áreas sin intervención humana repetitiva y gestión particularizada de indicadores."] },
          { title: "CEREBRO CORPORATIVO (GESTIÓN DEL CONOCIMIENTO)", items: ["Buscador de conocimiento interno entrenado con manuales, normativas y procedimientos.", "Respuestas precisas e instantáneas para los diferentes equipos de trabajo en la organización."] },
        ],
      },
      {
        title: "OPERACIÓN EN CAMPO Y ENTORNO FÍSICO",
        subtitle: "Inteligencia de las Cosas (IoT + IA)",
        phrase: "Conectando el entorno físico con la toma de decisiones en tiempo real",
        groups: [
          { title: "REDES DE SENSORES Y MONITOREO (IOT)", items: ["Captura, análisis y actualización automática de variables en tiempo real (ubicación, temperatura, flujos y consumo).", "Visibilidad total de activos e inventarios en campo."] },
          { title: "MANTENIMIENTO Y CONTROL PREDICTIVO", items: ["Algoritmos que previenen fallas en equipos e infraestructura antes de que ocurran.", "Optimización de rutas de logística y cadena de suministro."] },
        ],
      },
      {
        title: "ALTA GERENCIA Y ANALÍTICA PREDICTIVA",
        subtitle: "Estrategia e inteligencia de negocio",
        phrase: "Decisiones respaldadas por datos consolidando una empresa AI-First",
        groups: [
          { title: "PREDICCIÓN DE DEMANDA", items: ["Evaluación de mercado, basada en datos actualizados en tiempo real.", "Proyección de ventas, tendencias de consumo y necesidades de stock."] },
          { title: "DETECCIÓN DE ANOMALÍAS Y PREVENCIÓN DE FRAUDE", items: ["Monitoreo transaccional continuo para evitar fugas de capital y controlar KPIs corporativos."] },
          { title: "SIMULACIÓN DE ESCENARIOS ESTRATÉGICOS", items: ["Modelado predictivo para evaluar el impacto de decisiones financieras y comerciales previas a la ejecución."] },
        ],
      },
    ],
  },
  {
    slug: "crm-software-rpa",
    number: "1.2",
    title: "CRM, DESARROLLO DE SOFTWARE & RPA",
    heroLines: ["CRM, DESARROLLO DE SOFTWARE Y RPA"],
    sections: [
      {
        title: "CRM DEL FUTURO",
        subtitle: "Administración comercial inteligente",
        phrase: "Sistemas de gestión que automatizan, venden y fidelizan por ti",
        intro: "Evolucionamos la gestión de clientes desde un simple registro de contactos hacia un motor analítico y autónomo. Integramos IA para predecir comportamientos, priorizar oportunidades y acelerar el cierre de ventas.",
        groups: [
          { title: "Gestión & Analítica Predictiva", items: ["Análisis en tiempo real de interacciones y comportamientos de compra para anticipar necesidades y maximizar la tasa de conversión."] },
          { title: "Automatización del Embudo de Ventas", items: ["Asignación automática de leads, seguimiento sin fricción y nutrición personalizada de prospectos sin carga operativa manual."] },
          { title: "Visión 360° e Interoperabilidad", items: ["Centralización de canales de atención, historial de clientes e integración total con ERPs, pasarelas de pago y sistemas de facturación."] },
        ],
      },
      {
        title: "SOLUCIONES A LA MEDIDA",
        subtitle: "Desarrollo de software",
        phrase: "Plataformas creadas para responder a la lógica de su negocio",
        intro: "Diseñamos y construimos sistemas tecnológicos que no imponen restricciones ni obligan a su empresa a adaptarse a un software rígido. Creamos plataformas escalables, seguras y alineadas con sus objetivos estratégicos.",
        groups: [
          { title: "Desarrollo Web & Móvil Avanzado", items: ["Aplicaciones de alto rendimiento diseñadas con arquitecturas modernas y enfocadas en la experiencia de usuario (UX/UI)."] },
          { title: "Sistemas Empresariales Especializados", items: ["Portales de clientes, paneles operativos y motores de gestión a la medida para procesos críticos de negocio."] },
          { title: "Escalabilidad y Seguridad", items: ["Código limpio con infraestructura en la nube preparada para crecer en volumen de usuarios y datos sin perder velocidad."] },
        ],
      },
      {
        title: "AUTOMATIZACIÓN ROBÓTICA (RPA + IA)",
        subtitle: "Estandarización inteligente de negocios",
        phrase: "Fuerza de trabajo digital para eliminar la carga operativa repetitiva",
        intro: "Desplegamos bots de software con capacidad de integración inteligente para ejecutar tareas estructuradas de alto volumen a máxima velocidad, liberando a su equipo de la digitación y el trabajo operativo manual.",
        groups: [
          { title: "Ejecución Digital 24/7", items: ["Procesamiento continuo de datos, conciliaciones, migración de archivos y reportes sin interrupción."] },
          { title: "Eliminación del Error Humano", items: ["Precisión del 100% en tareas críticas y repetitivas, garantizando un cumplimiento normativo impecable."] },
          { title: "Automatización Inteligente (IPA)", items: ["Combinación de bots con Inteligencia Artificial para la toma de decisiones en flujos de trabajo semiestructurados."] },
        ],
      },
      {
        title: "INTEGRACIÓN DE SISTEMAS",
        subtitle: "Interoperabilidad",
        phrase: "Conectando sus herramientas para garantizar un flujo de información unificado y sin fricción",
        intro: "Eliminamos los silos de información conectando sus sistemas existentes (ERP, CRM, bases de datos y plataformas ligadas) para lograr una operación interconectada en tiempo real.",
        groups: [
          { title: "Desarrollo e Integración de APIs", items: ["Conexión fluida y segura de datos entre herramientas propias y de terceros."] },
          { title: "Middleware y Unificación de Datos", items: ["Orquestación de flujos de trabajo transaccionales para evitar la duplicidad de información o el reingreso de datos."] },
          { title: "Modernización de Sistemas Legados", items: ["Conectamos plataformas heredadas o antiguas con nuevas tecnologías sin necesidad de reemplazar su infraestructura actual."] },
        ],
      },
    ],
  },
  {
    slug: "ai-websites-ecommerce",
    number: "1.3",
    title: "AI WEBSITES E - COMMERCE",
    heroLines: ["AI WEBSITES", "E - COMMERCE"],
    sections: [
      {
        title: "VENTAS AUTÓNOMAS",
        subtitle: "E-commerce con IA",
        intro: "Transformamos los sitios web y tiendas virtuales tradicionales en canales transaccionales autónomos. Implementamos Inteligencia Artificial para personalizar la experiencia de compra, automatizar la gestión de productos y elevar la tasa de conversión.",
        groups: [
          { title: "RECOMENDACIÓN DINÁMICA DE PRODUCTOS", items: ["Algoritmos predictivos que sugieren productos según el historial, comportamiento e intención del comprador."] },
          { title: "GESTIÓN AUTÓNOMA DE INVENTARIO", items: ["Actualización y sincronización de existencias en tiempo real para evitar quiebres de stock o sobreventas."] },
          { title: "ASISTENTES DE VENTA VIRTUALES", items: ["Agentes inteligentes capaces de resolver dudas de clientes, guiarlos hasta el checkout y recuperar todos los carritos abandonados 24/7."] },
        ],
      },
      {
        title: "LOGÍSTICA INTELIGENTE",
        subtitle: "Operación y checkout",
        intro: "Conectamos su tienda en línea con un ecosistema transaccional completo, integrando de forma transparente pasarelas de pago y sistemas de envío para una experiencia de compra sin fricción.",
        groups: [
          { title: "INTEGRACIÓN CON PASARELAS DE PAGO", items: ["Soporte multipago (tarjetas, transferencias, billeteras digitales y otros medios de pago) con validación IA antifraude."] },
          { title: "AUTOMATIZACIÓN DE ENVÍOS Y GUÍAS", items: ["Generación e integración automática de guías logísticas con transportadoras locales e internacionales en el proceso final de compra."] },
          { title: "TRAZABILIDAD EN TIEMPO REAL", items: ["Notificaciones automatizadas por diferentes canales conversacionales (WhatsApp/Email/SMS/otros) para mantener comunicación permanente con el cliente e informarle sobre el estado de su pedido."] },
        ],
      },
      {
        title: "WEB PERFORMANCE & OPTIMIZACIÓN",
        subtitle: "Crecimiento digital",
        intro: "Optimizamos la infraestructura técnica y el rendimiento de sus plataformas web mediante analítica predictiva, garantizando cargas eficientes e implementando estrategias de adquisición de tráfico de alta precisión.",
        groups: [
          { title: "SEO & SEM POTENCIADO POR IA", items: ["Optimización continua de contenidos, palabras clave e inversión publicitaria basada en patrones reales de búsqueda."] },
          { title: "ANÁLISIS DE COMPORTAMIENTO DE USUARIO", items: ["Monitoreo con mapas de calor y patrones de navegación para eliminar puntos de fuga dentro del embudo de ventas."] },
          { title: "VELOCIDAD Y RENDIMIENTO TÉCNICO (CORE WEB VITALS)", items: ["Infraestructura optimizada para garantizar cargas instantáneas, mayor posicionamiento orgánico y mejor experiencia móvil."] },
        ],
      },
    ],
  },
  {
    slug: "smart-bpo",
    number: "1.4",
    title: "SMART BPO",
    heroLines: ["SMART BPO", "(Business Process Outsourcing)"],
    sections: [
      {
        title: "ESPECIALISTAS EN OUTSOURCING",
        subtitle: "Tecnología y talento especializado para potencializar tu productividad.",
        phrase: "Lideramos y controlamos tus áreas de negocio",
        groups: [
          { title: "CONTACT CENTER", items: ["Omnicanalidad", "Especialistas en CX", "Atención 24/7", "Retención y fidelización.", "Trazabilidad y métricas"] },
          { title: "SALES", items: ["Ventas Especializadas", "Prospección y Calificación de Leads", "Estrategias Outbound e Inbound", "Integración de CRM"] },
          { title: "MARKETING", items: ["Growth Marketing", "Generación de Leads", "Conversión y Ventas", "Posicionamiento de Marca"] },
          { title: "TECNOLOGÍA", items: ["Infraestructura y Redes", "Automatización de tareas", "Ciberseguridad", "Mantenimiento Preventivo y Correctivo"] },
          { title: "I+D", items: ["Desarrollo de producto", "Estudio de mercado especializado", "Colaboración interdisciplinar", "Proyección estratégica"] },
          { title: "TRANSFORMACIÓN DIGITAL", items: ["Automatización Especializada de Procesos", "Machine Learning", "Flujos de Trabajo Digitales", "Agilidad Organizacional"] },
        ],
      },
    ],
  },
  {
    slug: "consultoria-interdisciplinar",
    number: "1.5",
    title: "CONSULTORÍA INTERDISCIPLINAR",
    heroLines: ["CONSULTORÍA INTERDISCIPLINAR"],
    sections: [
      {
        title: "CRECIMIENTO EMPRESARIAL",
        subtitle: "Expertos en potencializar habilidades",
        phrase: "Formación especializada para profesionales",
        groups: [
          { title: "ALTA GERENCIA", items: ["Direccionamiento Estratégico y Gobierno Corporativo"] },
          { title: "VENTAS", items: ["Estrategia Comercial y Conversión"] },
          { title: "MARKETING", items: ["Posicionamiento y Generación de Demanda"] },
          { title: "IT", items: ["(Tecnologías de la Información) Transformación Digital e Infraestructura"] },
          { title: "PRODUCCIÓN", items: ["Excelencia Operativa y Eficiencia Industrial"] },
          { title: "LOGÍSTICA", items: ["Cadena de Suministro y Gestión Operativa"] },
          { title: "CONTABILIDAD", items: ["Cumplimiento, Control y estandarización"] },
          { title: "FINANZAS", items: ["Estrategia Financiera y Maximización del Valor"] },
          { title: "I+D", items: ["(Investigación y Desarrollo) Innovación y Creación de Valor Futuro"] },
        ],
      },
    ],
  },
];

export const methodology = [
  { phase: "FASE 1", title: "Levantamiento", text: "Análisis profundo de procesos y datos." },
  { phase: "FASE 2", title: "Diseño", text: "Arquitectura de IA y Workflows personalizados" },
  { phase: "FASE 3", title: "Despliegue", text: "Implementación técnica y entrenamiento de equipos" },
  { phase: "FASE 4", title: "Optimización", text: "Monitoreo continuo y escalabilidad" },
];

export type Client = {
  name: string;
  logo: string;
  width: number;
  focus?: "left" | "right";
  surface?: "dark";
  scale?: number;
};

export const clients: Client[] = [
  // Orden prioritario solicitado por el cliente para el carrusel de inicio.
  { name: "EPM", logo: "/clients/2026/epm.png", width: 228 },
  { name: "Confía", logo: "/clients/2026/confia.png", width: 276, surface: "dark" },
  { name: "Alcaldía de Medellín", logo: "/clients/2026/alcaldia-medellin.png", width: 278, surface: "dark" },
  { name: "Comfacundi", logo: "/clients/2026/comfacundi.png", width: 236, scale: 0.62 },
  { name: "Cajamag", logo: "/clients/2026/cajamag.png", width: 270 },
  { name: "Universidad Autónoma de Manizales", logo: "/clients/2026/uam.svg", width: 248, surface: "dark" },
  { name: "Greater Medellín Convention & Visitors Bureau", logo: "/clients/2026/greater-medellin.png", width: 278 },
  { name: "Auros", logo: "/clients/2026/auros.png", width: 270 },
  { name: "Grupo Sura", logo: "/clients/2026/grupo-sura.png", width: 260 },
  { name: "Comfaboy", logo: "/clients/2026/comfaboy.png", width: 270 },
  { name: "Imcolmédica", logo: "/clients/2026/imcolmedica.png", width: 286 },
  { name: "Alcaldía Mayor de Tunja", logo: "/clients/2026/alcaldia-tunja.png", width: 270, surface: "dark" },
  { name: "Comfenalco Antioquia", logo: "/clients/2026/comfenalco-antioquia.png", width: 268 },
  { name: "Suplemédicos", logo: "/clients/2026/suplemedicos.png", width: 286 },
  { name: "Guillermo Rhenals", logo: "/clients/2026/guillermo-rhenals.png", width: 150 },
  { name: "Bogotá", logo: "/clients/2026/bogota.png", width: 278, surface: "dark" },
  { name: "Comfandi", logo: "/clients/2026/comfandi.png", width: 276 },
  { name: "AmCham Colombia", logo: "/clients/2026/amcham-colombia.png", width: 270, surface: "dark" },
];

const client = (...names: string[]) => names.map((name) => clients.find((item) => item.name === name)).filter((item): item is Client => Boolean(item));

const experienceClients: Client[] = [
  { name: "Guillermo Rhenals", logo: "/experience-logos/salud/01.png", width: 220 },
  { name: "Grupo Sura", logo: "/experience-logos/salud/02.png", width: 220 },
  { name: "Imcolmédica", logo: "/experience-logos/salud/03.png", width: 220 },
  { name: "Suplemédicos", logo: "/experience-logos/salud/04.png", width: 220 },
  { name: "Atenea", logo: "/experience-logos/salud/05.png", width: 220, surface: "dark" },
  { name: "Comfaboy", logo: "/experience-logos/cajas-compensacion/01.png", width: 220 },
  { name: "Cajamag", logo: "/experience-logos/cajas-compensacion/02.png", width: 220 },
  { name: "Comfenalco Antioquia", logo: "/experience-logos/cajas-compensacion/03.png", width: 220 },
  { name: "Comfandi", logo: "/experience-logos/cajas-compensacion/04.png", width: 220 },
  { name: "Comfacundi", logo: "/experience-logos/cajas-compensacion/05.png", width: 220 },
  { name: "AmCham Colombia", logo: "/experience-logos/sector-publico/01.png", width: 220, surface: "dark" },
  { name: "Alcaldía de Medellín", logo: "/experience-logos/sector-publico/02.png", width: 220, surface: "dark" },
  { name: "Alcaldía Mayor de Tunja", logo: "/experience-logos/sector-publico/03.png", width: 220, surface: "dark" },
  { name: "Alcaldía Mayor de Bogotá", logo: "/experience-logos/sector-publico/04.png", width: 220, surface: "dark" },
  { name: "Sixteen Travel", logo: "/experience-logos/turismo/01.png", width: 220, surface: "dark" },
  { name: "Viajes y Viajes", logo: "/experience-logos/turismo/02.png", width: 220, surface: "dark" },
  { name: "Reserve Ahora", logo: "/experience-logos/turismo/03.png", width: 220 },
  { name: "Geoser", logo: "/experience-logos/turismo/04.png", width: 220, surface: "dark" },
  { name: "StudyNow", logo: "/experience-logos/educacion/01.png", width: 220 },
  { name: "Universidad de Antioquia", logo: "/experience-logos/educacion/02.png", width: 220, surface: "dark" },
  { name: "Universidad Nacional de Colombia", logo: "/experience-logos/educacion/03.png", width: 220, surface: "dark" },
  { name: "Tecnológico de Artes Débora Arango", logo: "/experience-logos/educacion/04.png", width: 220 },
  { name: "Universidad Autónoma de Manizales", logo: "/experience-logos/educacion/05.png", width: 220 },
  { name: "Politécnico PIO", logo: "/experience-logos/educacion/06.png", width: 220 },
  { name: "Greater Medellín Convention & Visitors Bureau", logo: "/experience-logos/servicios-publicos/01.png", width: 220 },
  { name: "Gaz", logo: "/experience-logos/servicios-publicos/02.png", width: 220 },
  { name: "Llanogas", logo: "/experience-logos/servicios-publicos/03.png", width: 220, surface: "dark" },
  { name: "Cusianagas", logo: "/experience-logos/servicios-publicos/04.png", width: 220, surface: "dark" },
  { name: "EPM", logo: "/experience-logos/servicios-publicos/05.png", width: 220 },
  { name: "Biogás", logo: "/experience-logos/servicios-publicos/06.png", width: 220 },
  { name: "Green Services and Solutions", logo: "/experience-logos/construccion/01.png", width: 220, surface: "dark" },
  { name: "DKO", logo: "/experience-logos/construccion/02.png", width: 220 },
  { name: "S2 Solpak", logo: "/experience-logos/construccion/03.png", width: 220, surface: "dark" },
  { name: "López Grupo Constructor", logo: "/experience-logos/construccion/04.png", width: 220, surface: "dark" },
  { name: "Prinza", logo: "/experience-logos/construccion/05.png", width: 220, surface: "dark" },
  { name: "LBI", logo: "/experience-logos/bienes-raices/01.png", width: 220 },
  { name: "Century 21", logo: "/experience-logos/bienes-raices/02.png", width: 220 },
  { name: "Maxibienes", logo: "/experience-logos/bienes-raices/03.png", width: 220 },
  { name: "Alquiler Argentina", logo: "/experience-logos/bienes-raices/04.png", width: 220 },
  { name: "Sumeria Premium Homes", logo: "/experience-logos/bienes-raices/05.png", width: 220, surface: "dark" },
  { name: "Grupo UMA", logo: "/experience-logos/automotriz/01.png", width: 220 },
  { name: "Grupo Mayesa", logo: "/experience-logos/automotriz/02.png", width: 220 },
  { name: "Autocor", logo: "/experience-logos/automotriz/03.png", width: 220 },
  { name: "Autoland", logo: "/experience-logos/automotriz/04.png", width: 220, surface: "dark" },
  { name: "Divemotor", logo: "/experience-logos/automotriz/05.png", width: 220, surface: "dark" },
  { name: "Ambacar", logo: "/experience-logos/automotriz/06.png", width: 220, surface: "dark" },
  { name: "Root+Co", logo: "/experience-logos/ecommerce/01.png", width: 220, surface: "dark" },
  { name: "Fajitex", logo: "/experience-logos/ecommerce/02.png", width: 220, surface: "dark" },
  { name: "PPA", logo: "/experience-logos/ecommerce/03.png", width: 220 },
  { name: "Finca Urbana", logo: "/experience-logos/ecommerce/04.png", width: 220 },
  { name: "Auros", logo: "/experience-logos/comercio/01.png", width: 220 },
  { name: "Vanguard Logistics", logo: "/experience-logos/comercio/02.png", width: 220 },
  { name: "Artesa", logo: "/experience-logos/comercio/03.png", width: 220, surface: "dark" },
  { name: "PM Mayorista", logo: "/experience-logos/comercio/04.png", width: 220 },
  { name: "NCredit", logo: "/experience-logos/servicios-financieros/01.png", width: 220 },
  { name: "Servicios de Crédito", logo: "/experience-logos/servicios-financieros/02.png", width: 220 },
  { name: "CrediNómina", logo: "/experience-logos/servicios-financieros/03.png", width: 220 },
  { name: "ConSuerte", logo: "/experience-logos/servicios-financieros/04.png", width: 220, surface: "dark" },
  { name: "Apoyo Crediticio", logo: "/experience-logos/servicios-financieros/05.png", width: 220 },
  { name: "SCS Agency Insurance", logo: "/experience-logos/servicios-financieros/06.png", width: 220 },
  { name: "Perseo", logo: "/experience-logos/software/01.png", width: 220, surface: "dark" },
  { name: "Validatech", logo: "/experience-logos/software/02.png", width: 220 },
  { name: "Globaltec", logo: "/experience-logos/software/03.png", width: 220 },
  { name: "Prevsis", logo: "/experience-logos/software/04.png", width: 220 },
  { name: "Bismark", logo: "/experience-logos/software/05.png", width: 220, surface: "dark" },
  { name: "Fadesa", logo: "/experience-logos/manufactura/01.png", width: 220 },
  { name: "902", logo: "/experience-logos/manufactura/02.png", width: 220 },
  { name: "Algamar", logo: "/experience-logos/manufactura/03.png", width: 220 },
  { name: "Link & Paper", logo: "/experience-logos/manufactura/04.png", width: 220 },
  { name: "Forma", logo: "/experience-logos/manufactura/05.png", width: 220, surface: "dark" },
  { name: "Sierras y Equipos", logo: "/experience-logos/manufactura/06.png", width: 220 },
];

const experienceClient = (...names: string[]) => names.map((name) => experienceClients.find((item) => item.name === name)).filter((item): item is Client => Boolean(item));

export const industries = [
  { title: "SALUD", text: "Historia clínica, agendamiento médico, seguimiento y control de pacientes estandarizado.", clients: experienceClient("Guillermo Rhenals", "Grupo Sura", "Imcolmédica", "Suplemédicos", "Atenea") },
  { title: "CAJAS DE COMPENSACIÓN", text: "Automatizamos la carga operativa de afiliaciones, espacios, subsidios y atención al afiliado.", clients: experienceClient("Comfaboy", "Cajamag", "Comfenalco Antioquia", "Comfandi", "Comfacundi") },
  { title: "SECTOR PÚBLICO", text: "Gestionamos asertivamente gobierno corporativo y atención integral al ciudadano.", clients: experienceClient("AmCham Colombia", "Alcaldía de Medellín", "Alcaldía Mayor de Tunja", "Alcaldía Mayor de Bogotá") },
  { title: "TURISMO", text: "Atención, reserva inteligente y gestión al viajero de manera autónoma.", clients: experienceClient("Sixteen Travel", "Viajes y Viajes", "Reserve Ahora", "Geoser") },
  { title: "EDUCACIÓN", text: "Procesos académicos estándar, matrícula digital y programas de extensión.", clients: experienceClient("StudyNow", "Universidad de Antioquia", "Universidad Nacional de Colombia", "Tecnológico de Artes Débora Arango", "Universidad Autónoma de Manizales", "Politécnico PIO") },
  { title: "DEPORTE", text: "Análisis de rendimiento, gestión de membresías y administración de espacios deportivos.", clients: client() },
  { title: "SERVICIOS PÚBLICOS", text: "Gestión inteligente de PQRs, facturación, proyectos especiales y trámites de usuarios.", clients: experienceClient("Greater Medellín Convention & Visitors Bureau", "Gaz", "Llanogas", "Cusianagas", "EPM", "Biogás") },
  { title: "CONSTRUCCIÓN", text: "Implementaciones BIM, seguimiento de obra y administración de especialidades.", clients: experienceClient("Green Services and Solutions", "DKO", "S2 Solpak", "López Grupo Constructor", "Prinza") },
  { title: "BIENES RAÍCES", text: "Gestión de prospectos e inmuebles impulsados por pipelines inteligentes.", clients: experienceClient("LBI", "Century 21", "Maxibienes", "Alquiler Argentina", "Sumeria Premium Homes") },
  { title: "AUTOMOTRIZ", text: "Exhibición, tratamiento de prospectos, seguimiento, venta y posventa centralizada.", clients: experienceClient("Grupo UMA", "Grupo Mayesa", "Autocor", "Autoland", "Divemotor", "Ambacar") },
  { title: "E-COMMERCE", text: "Omnicanalidad, ventas masivas, carritos abandonados gestionados autónomamente, pasarelas de pago y control logístico.", clients: experienceClient("Root+Co", "Fajitex", "PPA", "Finca Urbana") },
  { title: "COMERCIO", text: "Gestión de inventarios, puntos de venta digitales, administración estandarizada de despachos y exportaciones.", clients: experienceClient("Auros", "Vanguard Logistics", "Artesa", "PM Mayorista") },
  { title: "SERVICIOS FINANCIEROS", text: "Verificación de identidad, gestión transaccional, programas de fidelización y atención en redes multiservicio.", clients: experienceClient("NCredit", "Servicios de Crédito", "CrediNómina", "ConSuerte", "Apoyo Crediticio", "SCS Agency Insurance") },
  { title: "SOFTWARE", text: "Gestión de clientes, administración de proyectos, integración de servicios y desarrollo ágil asistido.", clients: experienceClient("Perseo", "Validatech", "Globaltec", "Prevsis", "Bismark") },
  { title: "MANUFACTURA", text: "Optimización de la cadena de suministro y administración de oportunidades de negocio mediante implementaciones potencializadas con IA.", clients: experienceClient("Fadesa", "902", "Algamar", "Link & Paper", "Forma", "Sierras y Equipos") },
];

export const locations = [
  { city: "Medellín", country: "Colombia", flag: "🇨🇴" },
  { city: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
  { city: "Quito", country: "Ecuador", flag: "🇪🇨" },
  { city: "Madrid", country: "España", flag: "🇪🇸" },
  { city: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  { city: "Lima", country: "Perú", flag: "🇵🇪" },
  { city: "San Salvador", country: "El Salvador", flag: "🇸🇻" },
  { city: "Berlín", country: "Alemania", flag: "🇩🇪" },
];
export const technologyNames = ["OpenAI", "deepseek", "AWS", "IBM Watson", "Bitrix24", "Microsoft Azure", "Google Cloud", "Anthropic", "Zapier", "GitHub"];
