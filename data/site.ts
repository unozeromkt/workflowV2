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

export const industries = [
  { title: "SALUD", text: "Historia clínica, agendamiento médico, seguimiento y control de pacientes estandarizado." },
  { title: "CAJAS DE COMPENSACIÓN", text: "Automatizamos la carga operativa de afiliaciones, espacios, subsidios y atención al afiliado." },
  { title: "SECTOR PÚBLICO", text: "Gestionamos asertivamente gobierno corporativo y atención integral al ciudadano." },
  { title: "TURISMO", text: "Atención, reserva inteligente y gestión al viajero de manera autónoma." },
  { title: "EDUCACIÓN", text: "Procesos académicos estándar, matricula digital y programas de extensión." },
  { title: "DEPORTE", text: "Análisis de rendimiento, gestión de membresias y administración de espacios deportivos." },
  { title: "SERVICIOS PÚBLICOS", text: "Gestión inteligente de PQRs, facturación, proyectos especiales y trámites de usuarios." },
  { title: "CONSTRUCCIÓN", text: "Implementaciones BIM, seguimiento de obra y administración de especialidades." },
  { title: "BIENES RAICES", text: "Gestión de prospectos e inmuebles impulsados por pipelines inteligentes." },
  { title: "AUTOMOTRIZ", text: "Exhibición, tratamiento de pospectos, seguimiento, venta y post-venta centralizada." },
  { title: "E-COMMERCE", text: "Omnicanalidad, ventas masivas, carritos abandonados gestionados autonomamente, pasarelas de pago y control logístico." },
  { title: "COMERCIO", text: "Gestión de inventarios, puntos de venta digitales, administración estandarizada de despachos y exportaciones." },
  { title: "SERVICIOS FINANCIEROS", text: "Verificación de identidad, gestión transaccional, programas de fidelización y atención en redes multiservicio." },
  { title: "SOFTWARE", text: "Gestión de clientes, administración de proyectos, integración de servicos y desarrollo ágil asistido." },
  { title: "MANUFACTURA", text: "Optimización de la cadena de suministro y administración de oportunidades de negocio mediante implementaciones potencializadas con IA." },
];

export const locations = ["Medellín, Colombia", "Buenos Aires, Argentina", "Quito, Ecuador", "Madrid, España", "Miami, Estados Unidos", "Lima, Perú", "San Salvador, El Salvador", "Berlín, Alemania"];
export const technologyNames = ["OpenAI", "deepseek", "AWS", "IBM Watson", "Bitrix24", "Microsoft Azure", "Google Cloud", "Anthropic", "Zapier", "GitHub"];
