import React from 'react'
import { Tablas } from '../Tablas/Tablas';
import '../Tablas/Tablas.css';
import { MenuPlanEstudio } from './MenuPlanEstudio';

export const PlanEstudioSistemas = () => {
    const fila1 = ['Cálculo Diferencial', 'Cálculo Integral', 'Cálculo Vectorial', 'Ecuaciones Diferenciales', 'Métodos Numéricos', 'Simulación', 'Programación Lógica y funcional', 'Inteligencia Artificial', 'Residencia Profesional'];
    const fila2 = ['Fundamentos de Programación', 'Programación Orientada a Objetos', 'Estructura de Datos', 'Tópicos Avanzados De Programación', 'Fundamentos de Telecomunicaciones', 'Redes De Computadoras', 'Conmutación y Enrutamiento De Redes De Datos', 'Administración De Redes', ' '];
    const fila3 = ['Taller de Ética', 'Contabilidad Financiera', 'Cultura Empresarial', 'Lenguaje y Autómatas I', 'Lenguaje y Autómatas II', 'Graficación', 'Taller de Investigación I', 'Taller de Investigación II', ' '];
    const fila4 = ['Matemáticas Discretas', 'Química', 'Álgebra Lineal', 'Fundamentos de Bases de Datos', 'Taller de Bases de Datos', 'Administración de Base de Datos', 'Programación Web', 'Programación Web II', ' '];
    const fila5 = ['Taller de administración', 'Desarrollo Sustentable', 'Sistemas Operativos', 'Taller de Sistemas Operativos', 'Fundamentos de Ing. de Software', 'Ingeniería de Software', 'Gestión de Proyectos de Software', 'Programación Web III', ' '];
    const fila6 = ['Fundamentos de Investigación', 'Probabilidad y Estadística', 'Física General', 'Principios Elec. y Apl. Dig.', 'Arquitectura de Computadoras', 'Lenguajes de Interfaz', 'Actividad Complementaria V', 'Investigación de Operaciones', ' '];
    const fila7 = ['Tutoría I (Actividad Complementaria I)', 'Tutoría II (Actividad Complementaria II)', 'Servicio Social II 70% Créditos (7mo y 8vo)', ' ', ' ', 'Sistemas Programables', 'Programación Móvil I', 'Programación Móvil II', ' '];
    const fila8 = ['Extracurriculares I (Actividad Complementaria III)', 'Extracurriculares II (Actividad Complementaria IV)', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Form. y Eval. de Proy. de Inv.', ' '];
    const perfilIngreso = [{
        encabezado: 'El aspirante a la carrera de Ingeniería en Sistemas Computacionales preferentemente debe cumplir los siguientes requisitos:',
        lista: ['Gusto por la tecnología', 'Habilidad para la solución de problemas (lógica)', 'Habilidad de comunicación oral y escrita', 'Capacidad de aprender por su propia cuenta (investigación)',
            'Trabajo en equipo', 'Creactividad', 'Habilidades para la solución de problemas matemáticos'],
    }
    ];
    const areaConocimiento = [
        {
            title: 'Área básica',
            lista: ['','Matemáticas', 'Física', 'Estadística', 'Computación']
        },
        {
            title: 'Área de especialidad:',
            lista: ['','Programación', 'Redes e Internet', 'Ingeniería de Software', 'Simulación e inteligencia artificial', 'Internet de las cosas',
                'Programación de aplicaciones web', 'Programación de aplicaciones móviles']
        },
        {
            title: 'Área de desarrollo integral:',
            lista: ['','Formación social y cultural', 'Inglés', 'Desarrollo profesional y humanístico']
        }
    ]
    const mision = ['Formar ingenieros en sistemas computacionales de manera integral comprometidos con el desarrollo sustentable y con su entorno, mediante la aplicación de tecnologías de información y comunicación.'];
    const vision = ['Ser una carrera que forme Ingenieros en Sistemas Computacionales, reconocido por ofrecer soluciones sustentables de alto nivel tecnológico para los sectores públicos, privados y sociales; comprometidos con su entorno y siempre regidos por la ética profesional.'];
    const atributosEgreso = ['Identificar, diseñar, configurar y administrar tecnologías de hardware y redes computacionales aplicando las normas y estándares vigentes.', 'Diseñar, desarrollar y administrar software de sistemas o de aplicación, bases de datos y tecnologías de la nube cumpliendo con estándares y normas de calidad; conforme a requerimientos definidos y seguridad de la información participando en proyectos interdisciplinarios.',
        'Detectar áreas de oportunidad que le permitan emprender y desarrollar proyectos aplicando las tecnologías de la información y comunicación vigentes y emergentes con una visión empresarial.', 'Desempeñar sus actividades profesionales aplicando habilidades humanas y considerando los aspectos legales, éticos, sociales y de desarrollo sustentable.',
        'Elaborar protocolos de investigación básica y/o aplicada que fortalezcan el desarrollo académico, científico y/o tecnológico en el ámbito de sistemas computacionales y disciplinas afines.', 'Seleccionar y aplicar herramientas matemáticas en el modelado, diseño y desarrollo de tecnología computacional y la extracción de conocimiento para el análisis e interpretación de datos.'];
    const perfilEgreso = ['Diseñar, configurar y administrar redes computacionales aplicando las normas y estándares vigentes.', 'Desarrollar, implementar y administrar software de sistemas o de aplicación que cumpla con los estándares de calidad con el fin de apoyar la productividad y competitividad de las organizaciones.',
        'Coordinar y participar en proyectos interdisciplinarios.', 'Diseñar e implementar interfaces hombre‐máquina y máquina‐máquina para la automatización de sistemas.', 'Identificar y comprender las tecnologías de hardware para proponer, desarrollar y mantener aplicaciones eficientes.',
        'Diseñar, desarrollar y administrar bases de datos conforme a requerimientos definidos, normas organizacionales de manejo y seguridad de la información, utilizando tecnologías emergentes.', 'Integrar soluciones computacionales con diferentes tecnologías, plataformas o dispositivos.',
        'Desarrollar una visión empresarial para detectar áreas de oportunidad que le permitan emprender y desarrollar proyectos aplicando las tecnologías de la información y comunicación.', 'Desempeñar sus actividades profesionales considerando los aspectos legales, éticos, sociales y de desarrollo sustentable.',
        'Poseer habilidades metodológicas de investigación que fortalezcan el desarrollo cultural, científico y tecnológico en el ámbito de sistemas computacionales y disciplinas afines.', 'Seleccionar y aplicar herramientas matemáticas para el modelado, diseño y Desarrollo de tecnología computacional.'];
    const objetivosEducacionales = ['Se desarrolla de una manera eficiente en las áreas de Software, Redes y Hardware, dentro de un marco ético y conciencia social.', 'Optimiza los recursos computacionales disponibles en las organizaciones para resolver problemas.',
        'Utiliza y adapta las nuevas tecnologías para desarrollar sistemas que apoyan a las áreas funcionales de las organizaciones.', 'Es un profesional proactivo e innovador que diseña, implanta y administra los sistemas mediante las tecnologías computacionales.', 'Se actualiza continuamente en su desarrollo profesional, mediante estudios de especialización.',
        'Contribuye al desarrollo regional, nacional o internacional, mediante su ejercicio profesional.'];
    const perfilProfesional = ['Analizar, desarrollar y programar modelos matemáticos, estadísticos y de simulación.', 'Reconocer y guiarse por los aspectos sociales, profesionales y éticos en su entorno.', 'Dirigir y coordinar equipos de trabajo multi e interdisciplinarios.', 'Coordinar y realizar investigaciones que fortalezcan el desarrollo cultural, científico y tecnológico.', 'Aplicar nuevas tecnologías a la solución de problemas de su entorno laboral.', 'Desarrollar y administrar sistemas de información, redes de computadoras y aplicaciones distribuidas.',
        'Poseer una visión empresarial y detectar áreas de oportunidad para emprender y desarrollar proyectos aplicando las tecnologías de información y las comunicaciones.', 'Seleccionar y administrar los recursos humanos y computacionales para unidades de servicios de cómputo.', 'Estar comprometido con el desarrollo sustentable, respetando el entorno social y cultural donde se desarrollan las organizaciones.',
        'Desarrollar y administrar software de aplicación y de base.', 'Desarrollar interfaces Hombre-Máquina.', 'Desarrollar e Integrar soluciones de arquitectura básica máquina-máquina.', 'Proporcionar consultoría a usuarios de diferentes niveles en una organización.',
        'Conocer y aplicar las normas y estándares correspondientes a las tecnologías de información y de las comunicaciones.', 'Identificar riesgos y aplicar esquemas de seguridad en las tecnologías de información y de las comunicaciones.', 'Comprender y aplicar los aspectos legales del uso y explotación de los sistemas computacionales.'];
    const camposLaborales = ['Industria de desarrollo de software.', 'Empresas de bienes y servicios.', 'Organismos públicos.', 'Empresas propias.', 'Servicios profesionales de asesoría.'];
    const contacto = ['Ing. Miguel Cruz Pineda', 'Coordinación de Sistemas, Edificio "B" Planta Alta', 'Tel. (445) 457-74-68 al 71 Ext. *107', 'sistemas@itsur.edu.mx'];
    const titles = ['PERFIL DE INGRESO',
        'AREA DE CONOCIMIENTOS',
        'MISION', 'VISION',
        'RETICULA REMEDIAL',
        'ATRIBUTOS DE EGRESO',
        'PERFIL DE EGRESO',
        'OBJETIVOS EDUCACIONALES',
        'PERFIL PROFESIONAL',
        'CAMPOS LABORALES',
        'CONTACTO',
        'PAGINAS DE INTERES'];
    return (
        <>
            <Tablas titulo={'Ingeniería en sistemas computacionales con especialidad en programación de aplicaciones web y móviles'}
                fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
            <MenuPlanEstudio titles={titles} perfilIngreso={perfilIngreso} areaConocimiento={areaConocimiento} mision={mision} vision={vision} atributosEgreso={atributosEgreso}
                perfilEgreso={perfilEgreso} objetivosEducacionales={objetivosEducacionales} perfilProfesional={perfilProfesional} camposLaborales={camposLaborales}
                contacto={contacto} />
        </>
    )

}

export const PlanEstudioGastro = () => {
    const fila1 = ['Microbiología de alimentos', 'Higiene en el manejo de alimentos y bebidas', 'Química y conservación de los alimentos', 'Tecnología de frutas, hortalizas y confitería', 'Gestión Estratégica', 'Taller de investigación I', 'Taller de investigación II', 'Formulación y evaluación de proyectos', 'Residencia profesional'];
    const fila2 = ['Fundamentos de Turismo', 'Cultura y patrimonio gastronómico', 'Costo y manejo de almacenes', 'Coctelería', 'Enología y vitivinicultura', 'Nutrición y dietética', 'Cocina internacional II', 'Estancia técnica internacional', ' '];
    const fila3 = ['Introducción a la gastronomía', 'Bases culinarias', 'Cocina mexicana', 'Panadería', 'Introducción a la repostería', 'Cocina internacional I', 'Cocina sudamericana I', 'Cocina sudamericana II', ' '];
    const fila4 = ['Fundamentos de investigación', 'Física en gastronomía', 'Probabilidad y estadística', 'Economía empresarial', 'Investigación de operaciones', 'Mercadotecnia', 'Cocina oriental', 'Cocina mediterránea', ' '];
    const fila5 = ['Matemáticas para gastronomía', 'Fundamentos de gestión empresarial', 'Gestión de capital humano', 'Finanzas de las organizaciones', 'Calidad aplicada a la gestión empresarial', 'Banquetes', 'Estancia técnica nacional', 'Cocina experimental', ' '];
    const fila6 = ['Software de aplicación ejecutivo', 'Taller de ética', 'Protocolo de Seguridad', 'Desarrollo sustentable', 'Marco legal de las organizaciones', ' ', 'Dirección de establecimientos de alimentos y bebidas', 'Cocina vegetariana', ' '];
    const fila7 = [' ', ' ', ' ', ' ', ' ', 'El emprendedor y la innovación', 'Escultura en hielo y mukimono', ' ', ' '];
    const fila8 = [' ', ' ', ' ', ' ', ' ', 'Técnica de cocina caliente', ' ', ' ', ' '];
    const perfilEgreso = ['Aplicar los principios básicos de la administración y la contabilidad en las actividades propias de las organizaciones de alimentos y bebidas, para el mejor manejo de los ingresos y egresos.', 'Realizar actividades específicas en el área de ventas y servicio al cliente tales como la creación de programas de comercialización de servicios de alimentos y bebidas.', 'Aplicar los conocimientos mercadológicos para una mejor comercialización de los diferentes productos y servicios que ofrece una empresa de alimentos y bebidas.', 'Aplicar los conocimientos administrativos básicos en empresas que prestan servicios, compran, transforman y venden alimentos y bebidas.', 'Comprender el comportamiento físico-químico de los alimentos para mejorar la elaboración, conservación, innovación y presentación de los mismos.',
        'Diseñar estructuras administrativas del ámbito gastronómico acorde a los requisitos, aspectos legales, económicos, financieros y comerciales.', 'Solucionar problemas y tomar decisiones para el óptimo cumplimiento de las actividades gastronómicas.', 'Elaborar planes de negocios y establecer controles de calidad de alimentos y bebidas.', 'Organizar y administrar recursos humanos y técnicos en los establecimientos de Alimentos y Bebidas.', 'Integrar, organizar, planear y administrar su propio negocio.', 'Establecer sistemas de información y control en empresas gastronómicas.', 'Generar estrategias para el logro de los objetivos organizacionales.',
        'Identificar el origen y evolución de la gastronomía mediante el estudio de su desarrollo histórico.', 'Implementar las diferentes normas nacionales e internacionales de seguridad e higiene, operando programas para el manejo higiénico de los alimentos.', 'Diseñar, implementar y evaluar los procedimientos de recepción, almacenaje y elaboración de alimentos y bebidas.', 'Diseñar e implementar cartas y menús.', 'Diferenciar el origen y procedimientos de elaboración de las principales bebidas alcohólicas y no alcohólicas.', 'Propiciar la creación y desarrollo de platillos de vanguardia analizando la composición de los alimentos con diversas técnicas y métodos de preparación de la cocina nutricional.', 'Aplicar los conocimientos de las diferentes cocinas para la elaboración de platillos de autor y fusión.', 'Manejar software especializado en organización y control del área de producción y del área de servicio para una mejor administración en los establecimientos de alimentos y bebidas.',
        'Aplicar los conocimientos técnicos especializados del idioma francés e ingles en el área gastronómica.', 'Desarrollar investigación en torno al fenómeno gastronómico desde el punto de vista, cultural, culinario y administrativo para innovar.'];
    const titles = ['PERFIL DE EGRESO'];
    return (
        <>
            <Tablas titulo={'Gastronomía'}
                fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
            <MenuPlanEstudio titles={titles} perfilIngreso={[]} areaConocimiento={[]} mision={[]} vision={[]} atributosEgreso={[]}
                perfilEgreso={perfilEgreso} objetivosEducacionales={[]} perfilProfesional={[]} camposLaborales={[]}
                contacto={[]} />
        </>
    )
}

export const PlanEstudioAutomotriz = () => {
    const fila1 = ['Cálculo diferencial', 'Cálculo integral', 'Cálculo Vectorial', 'Ecuaciones diferenciales', 'Máquinas eléctricas', 'Desarrollo sustentable', 'Taller de investigación I', 'Taller de investigación II', 'Seminario de titulación'];
    const fila2 = ['Taller de ética', 'Álgebra lineal', 'Estática', 'Mecánica de materiales', 'Diseño y selección de elementos de máquinas', 'Tópicos de tribología para sistemas automotrices', 'Circuitos neumáticos e hidráulicos', 'Diseño e ingeniería asistido por computadora', 'Automatización industrial'];
    const fila3 = ['Fundamentos de investigación', 'Programación aplicada', 'Métodos numéricos', 'Dinámica', 'Análisis y síntesis de mecanismos', 'Instrumentación', 'Electrónica de potencia', ' ', 'Especialidad'];
    const fila4 = ['Programación básica', ' ', 'Electricidad y magnetismo', 'Análisis de circuitos eléctricos', 'Electrónica analógica', 'Electrónica digital', 'Control', 'Elementos automotrices', 'Residencia profesional'];
    const fila5 = ['Fundamentos de dibujo', 'Tecnología y comportamiento de los materiales', 'Termodinámica', 'Mecánica de fluidos', 'Transferencia de calor', 'Motores de combustión interna', 'Gestión de la calidad automotriz', ' ', 'Servicio social'];
    const fila6 = ['Química aplicada a sistemas automotrices', 'Metrología y normalización', 'Procesos de manufactura de elementos automotrices', 'Habilidades directivas', 'Control estadístico de procesos automotrices', 'Administración de sistemas automotrices', 'Ingeniería de costos automotrices', 'Actividades Complementarias', ' '];
    const perfilEgreso = ['Analiza y resuelve problemas de las diferentes disciplinas de ingeniería relacionadas con los sistemas automotrices, mediante el desarrollo e implementación de las nuevas tecnologías enfocadas a las necesidades del sector automotriz, de forma responsable y cooperativa.', 'Fomenta el desarrollo sustentable para contribuir al equilibrio ambiental.',
        'Aplica conocimientos y habilidades generales de ingeniería en las áreas de diseño, manufactura, producción, calidad y conservación de la infraestructura, para fomentar la competitividad del sector automotriz.', 'Desarrolla sistemas automotrices, aplicando los procesos de manufactura desde la planeación y diseño de instalaciones hasta las operaciones.',
        'Identifica, diagnostica y mide las áreas de oportunidad en los sistemas automotrices, para proponer alternativas de mejora utilizando técnicas y controles estadísticos mediante el trabajo en equipo.', 'Utiliza normas nacionales e internacionales pertinentes, para asegurar la calidad, productividad, seguridad y sustentabilidad del sector automotriz.',
        'Aplica herramientas computacionales de acuerdo a las tecnologías de vanguardia, para el diseño, simulación, operación y optimización de sistemas automotrices acordes a la demanda del sector industrial.', 'Diseña e integra sistemas de redes industriales para el control, comunicación y automatización de las líneas de producción en la industria automotriz.',
        'Propone alternativas de mejora continua en los sistemas de producción para optimizar los recursos materiales, humanos y financieros.', 'Aplica la capacidad de dirección, liderazgo y comunicación de relaciones interpersonales, para transmitir ideas, facilitar conocimientos y trabajo en equipo con responsabilidad colectiva para la solución de problemas y desarrollo de proyectos en ingeniería en sistemas automotrices.'];
    const titles = [
        'PERFIL DE EGRESO'];
    return (
        <>
            <Tablas titulo={'Ingeniería en Sistemas Automotrices'} fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7 fila8 fila9 />
            <MenuPlanEstudio titles={titles} perfilIngreso={[]} areaConocimiento={[]} mision={[]} vision={[]} atributosEgreso={[]}
                perfilEgreso={perfilEgreso} objetivosEducacionales={[]} perfilProfesional={[]} camposLaborales={[]}
                contacto={[]} />
        </>
    )
}

export const PlanEstudioAmbiental = () => {
    const fila1 = ['Química inorgánica', 'Fundamentos de química inorgánica', 'Química analítica', 'Análisis instrumental', 'Contaminación atmosférica', 'Fenómenos de transporte', 'Potabilización de agua', 'Fundamentos de aguas residuales', 'Residencia Profesional'];
    const fila2 = ['Cálculo diferencial', 'cálculo integral', 'cálculo vectorial', 'Algebra lineal', 'Ecuaciones diferenciales', 'Taller de investigación I', 'Taller de investigación II', 'Formulación y evaluación de proyectos', ' '];
    const fila3 = ['Dibujo asistido por computadora', 'Física', 'Termodinámica', 'Fisicoquímica I', 'Fisicoquímica II', 'Mecánica de fluidos', 'Ingeniería de costos', 'Remediación de sueldos', ' '];
    const fila4 = ['Taller de ética', 'Desarrollo sustentable', 'Seguridad e higiene industrial', 'Economía ambiental', 'Gestión Ambiental I', 'Gestión ambiental II', 'Gestión de residuos', 'Evaluación de impacto ambiental', ' '];
    const fila5 = ['Fundamentos de investigación', 'Probabilidad y estadística ambiental', 'Sistemas de información geográfica', 'Balance de materia y energía', 'Componentes de equipo industrial', 'Métodos numéricos', 'Ingeniería económica', 'Auditoría y certificación ambiental', ' '];
    const fila6 = ['Biología', 'Ecología', 'Bioquímica', 'Diseño de experimentos ambientales', 'Microbiología', 'Toxicología ambiental', 'Procesos de separación', 'Gestión de los sistemas de Calidad', ' '];
    const fila7 = ['Actividades complementarias I', 'Actividades complementarias II', 'Servicio social I', ' ', ' ', ' ', ' ', 'Servicio social II', ' '];
    const fila8 = ['Actividades Complementarias III', 'Actividades Complementarias IV', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Actividades Complementarias V', ' '];
    const perfilEgreso = ['Vincular el valor de los recursos naturales para promover su uso sustentable de acuerdo a las necesidades de la región, mediante instrumentos de concientización, sensibilización y comunicación.', 'Participar en el desarrollo y ejecución del protocolo de investigación básica o aplicada para la resolución de problemas ambientales.', 'Elaborar, implementar y mantener sistemas de gestión ambiental.', 'Participar en la realización de auditorías ambientales en el sector público y privado.',
        'Realizar diagnósticos y evaluaciones de impacto y riesgo ambiental sustentados en métodos y procedimientos certificados conforme a los criterios Nacionales e Internacionales.', 'Elaborar estudios de factibilidad económica y técnica de los procesos para la prevención y control ambiental.', 'Proponer e innovar tecnologías para el manejo de los residuos cumpliendo la legislación ambiental vigente.', 'Conocer y aplicar criterios de ingeniería básica y aplicada, así como de las ciencias biolígicas para el dimensionamiento, adecuación, operación, mantenimiento y desarrollo de tecnologías de tratamiento, prevención, control y transformación de afluente sólidos, líquidos y gaseosos contaminados.',
        'Conocer y aplicar las TIC, así como sistemas computacionales o software especializados en el área ambiental.', 'Ser analítico, ético, critico, y consiente de la importancia de su entorno para la vida y respetuoso de la misma, siendo promotor del desarrollo sustentable.', 'Ser capaz de formar recursos humanos, realizar actividades de docencia, investigación y capacitación.', 'Tener una actitud emprendedora y de liderazgo para interactuar con grupos multidisciplinarios e interdisciplinarios en la búsqueda de soluciones a los problemas del deterioro del medio ambiente.'];
    const camposLaborales = ['Puede integrarse con éxito en:', 'Empresas públicas o privadas', 'Laboratorios de investigación', 'Industrias extractivas, de transformación y de procesos químicos, para coadyuvar a su transformación en Industrias limpias', 'Empresas del manejo integral de los recursos naturales y de prevención de desastres naturales', 'Empresas de plantas de tratamiento y control de residuos y emisiones atmosféricas, con criterios sustentables'];
    const contacto = ['Dr. Edgar Guadalupe Blanco Díaz', 'Coordinación de Ing. Ambiental, Edificio de Laboratorios Planta Alta', 'Tel. (445) 457-74-68 al 71 Ext. *108', 'ambiental@itsur.edu.mx y edgar.bd@surguanajuato.tecnm.mx'];
    const objetivosEducacionales = [' Nuestros egresados se desempeñan en la industria en áreas de calidad y seguridad e higiene utilizando sistemas de gestión de calidad y sistemas de gestión ambiental', 'El egresado es capaz de analizar y aplicar los conceptos básicos de las normativas Nacionales e Internacionales necesarias para la evaluación de impactos ambientales en el contexto global y social', ' Nuestros egresados laboran en Dependencias de Gobierno y privadas utilizando técnicas y herramientas para realizar evaluaciones ambientales ejecutando su trabajo con ética y responsabilidad',
        'Nuestros egresados establecen procesos de comunicación efectiva y participan activamente la formación de capital humano a nivel básico y medio superior', 'Nuestros egresados continúan con su formación académica realizando estudios de posgrado'];
    const atributosEgreso = ['Elaborar, implementar y mantener sistemas de gestión ambiental y su evaluación mediante auditorías ambientales públicas y privadas', 'Realizar diagnósticos y evaluaciones de impacto y riesgo ambiental sustentados en procedimientos certificados conforme a los criterios Nacionales e Internacionales', ' Elaborar protocolos de investigación básica y aplicada que contengan estudios de factibilidad económica y técnica de los procesos para la prevención y control ambiental.', 'Conocer y aplicar criterios de ingeniería básica y aplicada para el dimensionamiento, operación, mantenimiento y desarrollo de tecnologías de tratamiento',
        ' Adquirir conocimientos de ciencia básica y aplicarlos en el desarrollo de nuevas tecnologías ambientales y TIC´s, así como sistemas computacionales o software especializados en el área ambiental', 'Ser promotor del desarrollo sustentable mediante instrumentos de concientización, sensibilización y comunicación de la importancia del entorno para la vida y el respeto de la misma', 'Tener una actitud emprendedora y de liderazgo para interactuar con grupos multidisciplinarios e interdisciplinarios en la búsqueda de soluciones a los problemas del deterioro del medio ambiente'];
    const titles = [
        'ATRIBUTOS DE EGRESO',
        'PERFIL DE EGRESO',
        'OBJETIVOS EDUCACIONALES',
        'CAMPOS LABORALES',
        'CONTACTO'];
    return (
        <>
            <Tablas titulo={'Ingeniería Ambiental'}
                fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
            <MenuPlanEstudio titles={titles} perfilIngreso={[]} areaConocimiento={[]} mision={[]} vision={[]} atributosEgreso={atributosEgreso}
                perfilEgreso={perfilEgreso} objetivosEducacionales={objetivosEducacionales} perfilProfesional={[]} camposLaborales={camposLaborales}
                contacto={contacto} />
        </>
    )
}

export const PlanEstudioIndustrial = () => {
    const fila1 = ['Fundamentos de investigación', 'Higiene y seguridad industrial', 'Estudio de trabajo I', 'Estudio de trabajo II', 'Administración de proyectos', 'Taller de investigación I', 'Taller de investigación II', 'Sistemas de Manufactura', 'Productividad Humana'];
    const fila2 = ['Taller de ética', 'Taller de liderazgo', 'Algebra lineal', 'Investigación de operaciones I', 'Investigación de operaciones II', 'Ingeniería económica', 'Planeación financiera', 'logística y cadenas de suministro', 'Productividad aplicada'];
    const fila3 = ['Cálculo diferencial', 'Cálculo integral', 'Cálculo vectorial', 'Desarrollo sustentable', 'Gestión de costos', 'Algoritmos y lenguajes de programación', 'Simulación', 'Formulación y evaluación de proyectos', 'Residencia Profesional'];
    const fila4 = ['Taller de herramientas intelectuales', 'Física', 'Economía', 'Análisis de la realidad nacional', 'Administración de las operaciones I', 'Administración de las operaciones II', 'Ingeniería en sistemas', 'Relaciones industriales', ' '];
    const fila5 = ['Química', 'Propiedad de los materiales', 'Procesos de fabricación', 'Electricidad y electrónica industrial', 'Administración del mantenimiento', 'Planeación y diseño de instalaciones', 'Ergonomía', 'Medición y mejoramiento de la productividad', ' '];
    const fila6 = ['Dibujo industrial', 'Probabilidad y estadística', 'Estadística inferencial I', 'Estadística inferencial II', 'Control estadístico de calidad', 'Mercadotecnia', 'Gestión de los sistemas de calidad', 'Temas selectos de ingeniería industrial', ' '];
    const fila7 = [' ', ' ', 'Metrología y normalización', ' ', 'Actividad complementaria V', ' ', 'Ingeniería de calidad I', 'Ingeniería de calidad II', ' '];
    const fila8 = ['Extracurriculares I', 'Extracurriculares II', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'TOEFL', ' '];
    const fila9 = ['Tutorías I', 'Tutorías II', ' ', ' ', ' ', ' ', 'Servicio social', ' ', ' '];
    return (
        <Tablas titulo={'Ingeniería Industrial con especialidad en Calidad y Productividad'} fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9={fila9} />
    )
}

export const PlanEstudiElectronica = () => {
    const fila1 = ['Precálculo', 'Cálculo diferencial', 'Cálculo integral', 'Cálculo vectorial', 'Análisis numérico', 'Circuitos eléctricos II', 'Amplificadores operacionales', 'Instrumentación', 'Introducción a las telecomunicaciones'];
    const fila2 = ['Comprensión lectora', 'Tópicos selectos de física', 'Algebra lineal', 'Ecuaciones diferenciales', 'Circuitos eléctricos I', 'Diodos y transmisores', 'Diseño con transistores', 'Optoelectrónica', 'Electrónica de potencia'];
    const fila3 = ['Mecánica clásica', 'Mediciones eléctricas', 'Electromagnetismo', 'Física de semiconductores', 'Teoría electromagnética', 'Máquinas eléctricas', 'Control II', 'Control digital', 'Señales analógicas en dispositivos programables'];
    const fila4 = ['Lógica matemática', 'Química', 'Diseño digital', 'Diseño digital con VHDL', 'Microcontroladores', 'Control I', 'Transmisión de datos en la industria', 'Tecnologías de automatización', 'Integración de sistemas automatizados'];
    const fila5 = ['Fundamentos de investigación', 'Desarrollo sustentable', 'Programación estructurada', 'Programación visual', 'Controladores lógicos programables', 'Probabilidad y estadística', 'Automatización de empresas', 'Automatización para supervisión y calidad', 'Actividad complementaria V'];
    const fila6 = ['Comunicación humana', ' ', 'Desarrollo humano', 'Marco legal de la empresa', 'Desarrollo profesional', 'Fundamentos financieros', 'Administración gerencial', 'Desarrollo y evaluación de proyectos', ' '];
    const fila7 = ['Taller de ética', ' ', ' ', ' ', ' ', ' ', 'Taller de investigación I', 'Taller de investigación II', ' '];
    const fila8 = ['Actividad complementaria I', 'Actividad complementaria II', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    const fila9 = ['Semestre 10: Residencia profesional', 'Actividad complementaria III', 'Actividad complementaria IV', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Servicio social'];
    const perfilIngreso = [{
        encabezado: '',
        lista: ['Capacidad de razonamiento abstracto.','Destreza manual.','Analizar y solucionar problemas reales.','Ser capaz de crear, criticar y trabajar en equipo.','Gusto o inclinación por la electrónica.',
        'Capacidad y gusto por la información científica y tecnológica.','Superación personal y social.','Interés por la solidaridad social y por lo ecológico para que fundamente su quehacer futuro busque desarrollar productos tecnológicos que no dañen al hombre o  su habitad.'],
    }
    ];
    const areaConocimiento = [
        {
            title: 'Área específica:',
            lista: ['','Automatización de procesos industriales','Sistemas electrónicos con dispositivos programables','Sistemas electrónicos de potencia']
        },
        {
            title: 'Área básica:',
            lista: ['','Matemáticas','Física']
        },
        {
            title: 'Área de desarrollo integral:',
            lista: ['','Idioma Inglés','Formación social, cultural y deportiva','Desarrollo profesional y humanístico']
        }
    ]
    const mision=['Contribuir a la formacion integral de ingenieros altamente calificados y competitivos, capaces de integrarse a equipos de trabajo interdisciplinarios y resolver problemas mediante el diseño e implementación de sistemas electrónicos, propiciando con ello el desarrollo de la sociedad.'];
    const vision=['Ser un programa educativo líder en la región y modelo de referencia para la enseñanza de tecnología en electrónica y automatización, a través de la visión institucional.'];
    const perfilEgreso=['Con base al desempeño esperado para un Ingeniero en Electrónica, a continuación se presentan los principales rasgos que definen su perfil, de acuerdo con las actividades que desarrolla, así como las actitudes importantes para lograr los propósitos de este profesionista.',
    'El Ingeniero en Electrónica es el profesionista que no solo responde a las condiciones actuales del mercado de trabajo, sino que actúa como agente que participa y ayuda a la modernización del Sector Productivo.','Diseñar, analizar y construir equipos y/o sistemas electrónicos para la solución de problemas en el entorno profesional, aplicando normas técnicas y estándares nacionales e internacionales.',
    'Crear, innovar y transferir tecnología aplicando métodos y procedimientos en proyectos de ingeniería electrónica, tomando en cuenta el desarrollo sustentable del entorno.','Promover y participar en programas de mejora continua aplicando normas de calidad en toda empresa.',
    'Planear, organizar, dirigir y controlar actividades de instalación, actualización, operación y mantenimiento de equipos y/o sistemas electrónicos.','Aplicar las nuevas Tecnologías de la información y de la comunicación, para la adquisición y procesamiento de datos.','Desarrollar y administrar proyectos de investigación y/o desarrollo tecnológico.',
    'Ejercer la profesión de manera responsable, ética y dentro del marco legal.','Asumir las implicaciones de su desempeño profesional en el entorno político, social, económico y cultural.','Comunicarse con efectividad en forma oral y escrita en el ámbito profesional tanto en su idioma como en un idioma extranjero.','Ejercer actitudes emprendedoras, de liderazgo y desarrollar habilidades para la toma de decisiones en su ámbito profesional.',
    'Comprometer su formación integral permanente y de actualización profesional continua, de manera autónoma.','Dirigir y participar en equipos de trabajo interdisciplinario y multidisciplinario en contextos nacionales e internacionales.','Capacitar y actualizar en las diversas áreas de aplicación de ingeniería electrónica.',
    'Simular modelos que permitan predecir el comportamiento de sistemas electrónicos empleando plataformas computacionales.','Seleccionar y operar equipo de medición y prueba.','Utilizar lenguaje de descripción de hardware y programación de microcontroladores en el diseño de sistemas digitales para su aplicación en la resolución de problemas.',
    'Resolver problemas en el sector productivo mediante la automatización, instrumentación y control.','Desarrollar aplicaciones en un lenguaje de programación de alto nivel para la solución de problemas relacionados con las diferentes disciplinas en el área.','Diseñar e implementar interfaces gráficas de usuario para facilitar la interacción entre el ser humano, los equipos y sistemas electrónicos.'];
    const camposLaborales=['El egresado de esta profesión, puede desarrollarse básicamente en el sector industrial y de servicios en industrias tales como: metal-mecánica, alimenticia, petroquímica, de la transformación en general, manufactura, maquiladora, con tecnología reciente.','En el sector de servicios puede desempeñarse en el mantenimiento de equipos de computación, asesoría industrial en el área electrónica a nivel diseño, mantenimiento y venta de equipo.',
    'Puede también establecerse como consultor independiente. Incorporarse como auxiliar técnico (sólo con la carrera), o bien como investigador (después de estudiar un posgrado a fin), en los diferentes centros de investigación existentes en el país.','También podrá desempeñar actividades docentes.'];
    const contacto=['Dr. Carlos Alberto Fuentes Hernández','Coordinación de Ing. Electrónica, Edificio "B" Planta Alta','Tel. (445) 457-74-68 al 71 Ext. *137','electronica@itsur.edu.mx'];
    const titles = ['PERFIL DE INGRESO',
        'AREA DE CONOCIMIENTOS',
        'MISION', 'VISION',
        'PERFIL DE EGRESO',
        'CAMPOS LABORALES',
        'CONTACTO'];
    return (
        <>
            <Tablas titulo={'Ingeniería electrónica con especialidad en automatización de empresas'}
                fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9={fila9} />
            <MenuPlanEstudio titles={titles} perfilIngreso={perfilIngreso} areaConocimiento={areaConocimiento} mision={mision} vision={vision} atributosEgreso={[]}
                perfilEgreso={perfilEgreso} objetivosEducacionales={[]} perfilProfesional={[]} camposLaborales={camposLaborales}
                contacto={contacto} />    
        </>
    )
}

export const PlanEstudioGestion = () => {
    const fila1 = ['Fundamentos de investigación', 'Software de aplicación ejecutivo', 'Marco legal de las organizaciones', 'Ingeniería electrónica', 'Finanzas en las organizaciones', 'Administración de la salud y la seguridad ocupacional', 'Calidad aplicada a la gestión empresarial', 'Normatividad de los sistemas de calidad', ' Residencias'];
    const fila2 = ['Cálculo diferencial', 'Cálculo integral', 'Probabilidad y estadística descriptiva', 'Estadística inferencial I', 'Estadística inferencial II', 'el emprendedor y la innovación', 'Plan de negocios', 'Procesos de mejora continua', ' '];
    const fila3 = ['Desarrollo humano', 'Contabilidad orientada a objetos', 'Costos empresariales', 'Instrumentos de presupuestación empresarial', 'Ingeniería de procesos', 'Gestión de la producción I', 'Gestión de la producción II', 'Simulación', ' '];
    const fila4 = ['Fundamentos de gestión empresarial', 'Dinámica social', 'Habilidades directivas I', 'Habilidades directivas II', 'Gestión del capital humano', 'Diseño organizacional', 'Gestión estratégica', 'Taller de destrezas directivas', ' '];
    const fila5 = ['Fundamentos de física', 'Taller de ética', 'Economía empresarial', 'Entorno macroeconómico', 'Taller de investigación I', 'Taller de investigación II', 'Desarrollo sustentable', 'Taller de relaciones públicas', ' '];
    const fila6 = ['Fundamentos de química', 'Legislación laboral', 'Álgebra lineal', 'Investigación de operaciones', 'Mercadotecnia', 'Sistemas de información de la mercadotecnia', 'Mercadotecnia electrónica', 'Tráfico y transporte de la cadena de suministros', ' '];
    const fila7 = ['Tutorías', 'Tutorías', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Cadena de suministros', 'Servicio social', ' '];
    const fila8 = ['Actividades extracurriculares', 'Actividades extracurriculares', ' ', ' ', ' ', ' ', 'Ingles V', 'Actividad complementaria V', ' '];

    return (
        <Tablas titulo={'Ingeniería en gestión empresarial con especialidad en Calidad y Logística'}
            fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
    )
}
