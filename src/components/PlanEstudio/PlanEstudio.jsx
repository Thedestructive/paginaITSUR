import React from 'react'
import { Tablas } from '../Tablas/Tablas';
import '../Tablas/Tablas.css';

export const PlanEstudioSistemas = () => {
    const fila1 = ['Cálculo Diferencial', 'Cáluclo Integral', 'Cálculo Vectorial', 'Ecuaciones Diferenciales', 'Métodos Numéricos', 'Simulación', 'Programación Lógica y funcional', 'Inteligencia Artificial', 'Residencia Profesional'];
    const fila2 = ['Fundamentos de Programación', 'Programación Orientada a Objetos', 'Estructura de Datos', 'Tópicos Avanzados De Programación', 'Fundamentos de Telecomunicaciones', 'Redes De Computadoras', 'Conmutación y Enrutamiento De Redes De Datos', 'Administración De Redes', ' '];
    const fila3 = ['Taller de Ética', 'Contabilidad Financiera', 'Cultura Empresarial', 'Lenguaje y Autómatas I', 'Lenguaje y Autómatas II', 'Graficación', 'Taller de Investigación I', 'Taller de Investigación II', ' '];
    const fila4 = ['Matemáticas Discretas', 'Química', 'Álgebra Lineal', 'Fundamentos de Bases de Datos', 'Taller de Bases de Datos', 'Administración de Base de Datos', 'Programación Web', 'Programación Web II', ' '];
    const fila5 = ['Taller de administración', 'Desarrollo Sustentable', 'Sistemas Operativos', 'Taller de Sistemas Operativos', 'Fundamentos de Ing. de Software', 'Ingeniería de Software', 'Gestión de Proyectos de Software', 'Programación Web III', ' '];
    const fila6 = ['Fundamentos de Investigación', 'Probabilidad y Estadistica', 'Física General', 'Principios Elec. y Apl. Dig.', 'Arquitectura de Computadoras', 'Lenguajes de Interfaz', 'Actividad Complementaria V', 'Investigación de Operaciones', ' '];
    const fila7 = ['Tutoría I (Actividad Complementaria I)', 'Tutoria II (Actividad Complementaria II)', 'Servicio Social II 70% Créditos (7mo y 8vo)', ' ', ' ', 'Sistemas Programables', 'Programación Móvil I', 'Programación Móvil II', ' '];
    const fila8 = ['Extracurriculares I (Actividad Complementaria III)', 'Extracurriculares II (Actividad Complementaria IV)', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Form. y Eval. de Proy. de Inv.', ' '];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería en sistemas computacionales con especialidad en programación de aplicaciones web y móviles</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
        </section>
    )

}

export const PlanEstudioGastro = () => {
    const fila1 = ['Microbiología de alimentos', 'Higiene en el manejo de alimentos y bebidas', 'Química y conservación de los alimentos', 'Tecnología de frutas, hortalizas y confitería', 'Gestión Estratégica', 'Taller de investigación I', 'Taller de investigación II', 'Formulación y evaluación de proyectos', 'Residencia profesional'];
    const fila2 = ['Fundamentos de Turismo', 'Cultura y patrimonio gastronómico', 'Costo y manejo de almacenes', 'Coctelería', 'Enología y vitivinicultura', 'Nutrición y dietética', 'Cocina internacional II', 'Estancia técnica internacional', ' '];
    const fila3 = ['Introducción a la gastronomía', 'Bases culinarias', 'Cocina mexicana', 'Panadería', 'Introducción a la repostería', 'Cocina internacional I', 'Cocina sudamericana I', 'Cocina sudamericana II', ' '];
    const fila4 = ['Fundamentos de investigación', 'Física en gastronomía', 'Probabilidad y estadística', 'Economía empresarial', 'Investigacion de operaciones', 'Mercadotecnia', 'Cocina oriental', 'Cocina mediterranea', ' '];
    const fila5 = ['Matemáticas para gastronomía', 'Fundamentos de gestión empresarial', 'Gestión de capital humano', 'Finanzas de las organizaciones', 'Calidad aplicada a la gestión empresarial', 'Banquetes', 'Estancia técnica nacional', 'Cocina experimental', ' '];
    const fila6 = ['Software de aplicación ejecutivo', 'Taller de ética', 'Protocolo de Seguridad', 'Desarrollo sustentable', 'Marco legal de las organizaciones', ' ', 'Dirección de establecimientos de alimentos y bebidas', 'Cocina vegetariana', ' '];
    const fila7 = [' ', ' ', ' ', ' ', ' ', 'El emprendedor y la innovación', 'Escultura en hielo y mukimono', ' ', ' '];
    const fila8 = [' ', ' ', ' ', ' ', ' ', 'Técnica de cocina caliente', ' ', ' ', ' '];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Gastronomía</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
        </section>
    )
}

export const PlanEstudioAutomotriz = () => {
    const fila1 = ['Cálculo diferencial', 'Cálculo integral', 'Cálculo Vectorial', 'Ecuaciones diferenciales', 'Máquinas eléctricas', 'Desarrollo sustentable', 'Taller de investigación I', 'Taller de investigación II', 'Seminario de titulación'];
    const fila2 = ['Taller de ética', 'Álgebra lineal', 'Estática', 'Mecánica de materiales', 'Diseño y selección de elementos de máquinas', 'Tópicos de tribología para sistemas automotrices', 'Circuitos neumáticos e hidráulicos', 'Diseño e ingeniería asistido por computadora', 'Automatización industrial'];
    const fila3 = ['Fundamentos de investigación', 'Programación aplicada', 'Métodos numéricos', 'Dinámica', 'Análisis y síntesis de mecanismos', 'Instrumentación', 'Electrónica de potencia', ' ', 'Especialidad'];
    const fila4 = ['Programación básica', ' ', 'Electricidad y magnetismo', 'Análisis de circuitos eléctricos', 'Electrónica analógica', 'Electrónica digital', 'Control', 'Elementos automotrices', 'Residencia profesional'];
    const fila5 = ['Fundamentos de dibujo', 'Tecnología y comportamiento de los materiales', 'Termodinámica', 'Mecánica de fluidos', 'Transferencia de calor', 'Motores de combustión interna', 'Gestión de la calidad automotriz', ' ', 'Servicio social'];
    const fila6 = ['Química aplicada a sistemas automotrices', 'Metrología y normalización', 'Procesos de manufactura de elementos automotrices', 'Habilidades directivas', 'Control estadístico de procesos automotrices', 'Administración de sistemas automotrices', 'Ingeniería de costos automotrices', 'Actividades Complementarias', ' '];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería en Sistemas Automotrices</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7 fila8 fila9 />
        </section>
    )
}

export const PlanEstudioAmbiental = () => {
    const fila1 = ['Química inorgánica', 'Fundamentos de química inorgánica', 'Química analítica', 'Análisis instrumental', 'Contaminación atmosférica', 'Fenomenos de transporte', 'Potabilización de agua', 'Fundamentos de aguas residuales', 'Residencia Profesional'];
    const fila2 = ['Cálculo diferencial', 'cálculo integral', 'cálculo vectorial', 'Algebra lineal', 'Ecuaciones diferenciales', 'Taller de investigación I', 'Taller de investigación II', 'Formulación y evaluación de proyectos', ' '];
    const fila3 = ['Dibujo asistido por computadora', 'Física', 'Termodinámica', 'Fisicoquímica I', 'Fisicoquímica II', 'Mecánica de fluidos', 'Ingeniería de costos', 'Remediación de sueldos', ' '];
    const fila4 = ['Taller de ética', 'Desarrollo sustentable', 'Seguridad e higiene industrial', 'Economía ambiental', 'Gestión Ambiental I', 'Gestión ambiental II', 'Gestión de residuos', 'Evaluación de impacto ambiental', ' '];
    const fila5 = ['Fundamentos de investigación', 'Probabilidad y estadística ambiental', 'Sistemas de información geográfica', 'Balance de materia y energía', 'Componentes de equipo industrial', 'Métodos numéricos', 'Ingeniería económica', 'Auditoría y certificación ambiental', ' '];
    const fila6 = ['Biología', 'Ecología', 'Bioquímica', 'Diseño de experimentos ambientales', 'Microbiología', 'Toxicología ambiental', 'Procesos de separación', 'Gestión de los sistemas de Calidad', ' '];
    const fila7 = ['Actividades complementarias I', 'Actividades complementarias II', 'Servicio social I', ' ', ' ', ' ', ' ', 'Servicio social II', ' '];
    const fila8 = ['Actividades Complementarias III', 'Actividaes Complementarias IV', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Actividades Complementarias V', ' '];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería Ambiental</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
        </section>
    )
}

export const PlanEstudioIndustrial = () => {
    const fila1 = ['Fundamentos de investigación', 'Higiene y seguridad industrial', 'Estudio de trabajo I', 'Estudio de trabajo II', 'Administración de proyectos', 'Taller de investigación I', 'Taller de investigación II', 'Sistemas de Manufactura', 'Productividad Humana'];
    const fila2 = ['Taller de ética', 'Taller de liderazgo', 'Algebra lineal', 'Investigación de operaciones I', 'Investigación de operaciones II', 'Ingeniería económica', 'Planeación financiera', 'logistica y cadenas de suministro', 'Productividad aplicada'];
    const fila3 = ['Cálculo diferencial', 'Cálculo integral', 'Cálculo vectorial', 'Desarrollo sustentable', 'Gestión de costos', 'Algoritmos y lenguajes de programación', 'Simulación', 'Formulación y evaluación de proyectos', 'Residencia Profesional'];
    const fila4 = ['Taller de harramientas intelectuales', 'Física', 'Economía', 'Análisis de la realidad nacional', 'Adminstración de las operaciones I', 'Administración de las operaciones II', 'Ingeniería en sistemas', 'Relaciones industriales', ' '];
    const fila5 = ['Química', 'Propiedad de los materiales', 'Procesos de fabricación', 'Electricidad y electrónica industrial', 'Administración del mantenimiento', 'Planeación y diseño de instalaciones', 'Ergonomía', 'Medición y mejoamiento de la productividad', ' '];
    const fila6 = ['Dibujo industrial', 'Probabilidad y estadística', 'Estadística inferencial I', 'Estadística inferencial II', 'Control estadistico de calidad', 'Mercadotecnia', 'Gestión de los sistemas de calidad', 'Temas selectos de ingeniería industrial', ' '];
    const fila7 = [' ', ' ', 'Metrología y normalización', ' ', 'Actividad complementaria V', ' ', 'Ingeniería de calidad I', 'Ingeniería de calidad II', ' '];
    const fila8 = ['Extracurriculares I', 'Extracurriculares II', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'TOEFL', ' '];
    const fila9 = ['Tutorías I', 'Tutorías II', ' ', ' ', ' ', ' ', 'Servicio social', ' ', ' '];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería Industrial con especialidad en Calidad y Productividad</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9={fila9} />
        </section>
    )
}

export const PlanEstudiElectronica = () => {
    const fila1 = ['Precálculo', 'Cálculo diferencial', 'Cálculo integral', 'Cálculo vectorial', 'Análisis numérico', 'Circuitos eléctricos II', 'Amplificadores operacionales', 'Instrumentación', 'Introducción a las telecomunicaciones'];
    const fila2 = ['Comprensión lectora', 'Tópicos selectos de física', 'Algebra lineal', 'Ecuaciones diferenciales', 'Circuitos eléctricos I', 'Diodos y transmisores', 'Diseño con transistores', 'Optoelectrónica', 'Electrónica de potencia'];
    const fila3 = ['Mecánica clásica', 'Mediciones eléctricas', 'Electromagnetismo', 'Física de semiconductores', 'Teoría electromagnética', 'Máquinas eléctricas', 'Contol II', 'Control digital', 'Señales analógicas en dispositivos programables'];
    const fila4 = ['Lógica matemática', 'Química', 'Diseño digital', 'Diseño digital con VHDL', 'Microcontroladores', 'Control I', 'Transmisión de datos en la industria', 'Tecnologías de automatización', 'Integración de sistemas automatizados'];
    const fila5 = ['Fundamentos de investigación', 'Desarrollo sustentable', 'Programación estructurada', 'Programación visual', 'Controladores lógicosprogramables', 'Probabilidad y estadística', 'Automatización de empresas', 'Aytomatización para supervisión y calidad', 'Actividad complementaria V'];
    const fila6 = ['Comunicación humana', ' ', 'Desarrollo humano', 'Marco legal de la empreza', 'Desarrollo profesional', 'Fundamentos financieros', 'Administración gerencial', 'Desarrollo y evaluación de proyectos', ' '];
    const fila7 = ['Taller de ética', ' ', ' ', ' ', ' ', ' ', 'Taller de investigación I', 'Taller de investigación II', ' '];
    const fila8 = ['Actividad complementaria I', 'Actividad complementaria II', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    const fila9 = ['Semestre 10: Residencia profesional', 'Actividad complementaria III', 'Actividad complementaria IV', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Ingles V', 'Servicio social'];
    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería electrónica con especialidad en automatización de empresas</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9={fila9} />
        </section>
    )
}

export const PlanEstudioGestion = () => {
    const fila1 = ['Fundamentos de investigación', 'Softare de aplicación ejecutuvo', 'Marco legal de las organizaciones', 'Ingeniería electrónica', 'Finanzas en las organizaciones', 'Administración de la salud y la seguridad ocupacional', 'Calidad aplicada a la gestión empresarial', 'Normatividad de los sistemas de calidad', ' Residencias'];
    const fila2 = ['Cálculo diferencial', 'Cálculo integral', 'Probabilidad y estadística descriptiva', 'Estadística inferencial I', 'Estadística inferencial II', 'el emprendedor y la innovación', 'Plan de negocios', 'Procesos de mejora continua', ' '];
    const fila3 = ['Desarroloo humano', 'Contabilidad orientada a objetos', 'Costos empresariales', 'Instrumentos de presupuestación empresarial', 'Ingeniería de procesos', 'Gestión de laproducción I', 'Gestión de la producción II', 'Simulación', ' '];
    const fila4 = ['Fundamentos de gestión empresarial', 'Dinámica social', 'Habilidades directivas I', 'Habilidades directivas II', 'Gestión del capital humano', 'Diseño organizacional', 'Gestión estratégica', 'Taller de destrezas directivas', ' '];
    const fila5 = ['Fundamentos de física', 'Taller de ética', 'Economía empresarial', 'Entorno macroeconómico', 'Taller de investigación I', 'Taller de investigación II', 'Desarrollo sustentable', 'Taller de relaciones públicas', ' '];
    const fila6 = ['Fundamentos de química', 'Legislación laboral', 'Álgebra lineal', 'Investigación de operaciones', 'Mercadotecnia', 'Sistemas de información de la mercadotecnia', 'Mercadotecnia electrónica', 'Tráfico y transporte de la cadena de suministros', ' '];
    const fila7 = ['Tutorías', 'Tutorías', 'Ingles I', 'Ingles II', 'Ingles III', 'Ingles IV', 'Cadena de suministros', 'Servicio social', ' '];
    const fila8 = ['Actividades extracurriculares', 'Actividades extracurriculares', ' ', ' ', ' ', ' ', 'Ingles V', 'Actividad complementaria V', ' '];

    return (
        <section className='seccion-plan-estudio'>
            <center><h1>Ingeniería en gestión empresarial con especialidad en Calidad y Logística</h1></center>
            <Tablas fila1={fila1} fila2={fila2} fila3={fila3} fila4={fila4} fila5={fila5} fila6={fila6} fila7={fila7} fila8={fila8} fila9 />
        </section>
    )
}