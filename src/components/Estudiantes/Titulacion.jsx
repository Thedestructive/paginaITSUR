import React, { useState } from 'react'
import './titulacion.css'
import './EstilosGeneralesEstudiantes.css'
import { FaEye, FaChevronDown } from 'react-icons/fa'
export const Titulacion = () => {

    const [infoPop, setInfoPop] = useState({
        title: '',
        info: [],
        index: -1
    });
    const cards = [
        {
            number: 'I',
            text: 'TESIS PROFESIONAL',
            link: '',
            info: ['Se denomina tesis profesional a la presentación de los resultados obtenidos de una investigación realizada por el (los) candidato (s), que contiene una posición de un tema, fundamentada en un área del conocimiento científico y tecnológico.',
                'El trabajo a desarrollar podrá realizarse en forma individual o por dos candidatos. Cuando las características del trabajo requieran un mayor número de participantes, la academia correspondiente podrá ponderarlo y recomendarlo, previa justificación de los proponentes del tema, ante el jefe del departamento académico correspondiente, quien solicitará la aprobación del director del plantel, considerando aportación, alcance y profundidad del mismo.',
                'El tema de la tesis profesional será definido por el (los) candidato(s) y dictaminado por la academia correspondiente.',
                'El candidato podrá realizar su investigación dentro del instituto tecnológico o en otra institución o empresa que le proporcione los medios necesarios.',
                'El candidato tendrá un asesor para el desarrollo de su trabajo, designado por el jefe del departamento académico considerando la propuesta de la academia correspondiente; o nombrado por la institución externa o empresa en la cual desarrolle su trabajo de tesis, en cuyo caso será ratificado por el jefe del departamento académico.',
                'El trabajo de tesis será revisado por una comisión de tres profesionistas integrada para tal efecto en el seno de la academia, y/o con miembros externos a juicio del jefe de departamento, la cual  dictaminará la aprobación o modificación del mismo.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al jefe del departamento de servicios escolares del instituto del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'II',
            text: 'LIBROS DE TEXTO O PROTOTIPOS DIDÁCTICOS',
            link: '',
            info: ['Se denomina libro de texto al documento que contiene información relevante e innovadora relacionada con alguna asignatura del plan de estudios vigente en el SNIT de la carrera cursada.',
                'Se denomina prototipo didáctico a todo tipo de material audiovisual, software educativo, modelos tridimensionales y demás material útil en el proceso enseñanza-aprendizaje que sirva de apoyo para el logro de algún objetivo de cualquier asignatura del plan de estudios vigente de la carrera cursada.',
                'El título y contenido del libro de texto, o bien el prototipo a desarrollar y su informe técnico documental será propuesto por el candidato, y en su caso autorizado por el jefe del departamento académico previo análisis de la academia correspondiente.',
                'El candidato tendrá un asesor para el desarrollo de su trabajo, quien será designado por el jefe del departamento académico; considerando la propuesta. de la academia correspondiente o, en caso de ser asesor externo, apreciando la experiencia profesional de las personas propuestas por la institución o empresa.',
                'El libro de texto o bien el prototipo didáctico y su informe técnico será revisado por una comisión de tres profesionistas integrada en el seno de la academia, y/o con miembros externos a juicio del jefe del departamento académico, la cual dictaminará sobre la aprobación o modificación del mismo.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, con base en las propuestas de la academia correspondiente y, para los externos, de instituciones o empresas.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al jefe del departamento de servicios escolares del instituto del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'III',
            text: 'PROYECTO DE INVESTIGACIÓN',
            link: '',
            info: ['El proyecto de investigación consiste en el procedimiento metodológico a través del cual se obtiene un resultado científico y/o tecnológico, se innova  o adecua una tecnología o parte de un proceso productivo o experimental, etc.; que resulta de utilidad para la humanidad; y cuyo impacto puede ser local, regional, nacional o internacional. El proyecto de  investigación puede ser realizado dentro o fuera del instituto tecnológico.',
                'Los proyectos de investigación presentados en el Concurso Nacional de Creatividad y en el Concurso Nacional de Emprendedores de los institutos tecnológicos pueden ser considerados en esta opción de titulación, así como los proyectos realizados durante la residencia profesional o la práctica profesional y los realizados durante el ejercicio profesional del egresado en cualquier lugar acreditado para ello.',
                'El tema del proyecto a desarrollar será definido por el candidato o asignado por el responsable del mismo y dictaminado por la academia correspondiente y, en su caso, autorizado por el jefe del departamento académico correspondiente.',
                'El candidato comprobará mediante constancia, su participación en un proyecto de investigación realizado en el instituto tecnológico o en otro centro o institución que desarrolle investigación.',
                'El sustentante tendrá como asesor al titular responsable del proyecto de investigación, el cual será autorizado por el jefe del departamento académico correspondiente.',
                'El informe técnico de la investigación será revisado por una comisión de tres profesores, integrada en el seno de la academia para tal efecto, y/o con miembros externos a juicio del jefe de departamento.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al departamento de servicios escolares del instituto del cual egresó el sustentante corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'IV',
            text: 'DISEÑO O REDISEÑO DE EQUIPO, APARATO O MAQUINARIA',
            link: '',
            info: ['Se considera diseño o rediseño de equipo, aparato o maquinaria al diseño o modificación de uno o más de sus componentes originales, que tiendan a mejorar su funcionamiento logrando con ello un impacto económico o de calidad que sea de utilidad en alguna empresa, centro de investigación, industria o institución educativa.',
                'El tema del diseño o rediseño de equipo, aparato o maquinaria será definido por el candidato, analizado por la academia correspondiente y, en su caso, autorizado por el jefe del departamento académico.',
                'Los diseños o rediseños de equipo, aparato o maquinaria, así como las innovaciones tecnológicas presentados en el Concurso Nacional de Creatividad y en el Concurso Nacional de Emprendedores podrán ser considerados en esta opción de titulación.',
                'El candidato podrá realizar su diseño o rediseño de aparato, equipo o maquinaria dentro del instituto tecnológico o en otra institución o empresa que lo requiera y le proporcione los medios necesarios.',
                'El candidato tendrá un asesor autorizado por el jefe del departamento académico; considerando la propuesta de la academia, o apreciando la trayectoria profesional de los candidatos sugeridos por la empresa o institución en la cual se desarrolle el trabajo profesional.',
                'El informe técnico del diseño o rediseño, y en su caso el equipo, aparato o maquinaria construido o reconstruido será revisado por una comisión de tres profesores, integrada en el seno de la academia para tal fin, quienes podrán formar parte del jurado calificador.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al jefe del departamento de servicios escolares del instituto tecnológico del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']

        },
        {
            number: 'V',
            text: 'CURSO ESPECIAL DE TITULACIÓN',
            link: '',
            info: []
        },
        {
            number: 'VI',
            text: 'EXAMEN GLOBAL POR ÁREAS DE CONOCIMIENTO',
            link: '',
            info: ['En el examen global por áreas de conocimiento, el egresado sustentará un examen sobre un área del conocimiento específico de su carrera, y preferentemente sobre el módulo de la especialidad elegida, conformada por un conjunto de materias que agrupan contenidos relacionados y que permiten al alumno fortalecer sus conocimientos de acuerdo con el perfil de su carrera. El número de créditos mínimo que deberá cubrirse será de 40.',
                'El área de conocimiento a evaluar, será propuesta por la academia al jefe del departamento académico correspondiente, quien a su vez lo presentará ante el subdirector académico para que sea dictaminado por el comité académico.',
                'El comité académico del instituto tecnológico, en reunión solemne (donde se asienten acuerdos en acta o bitácora), analizará y en caso de que cumpla con los requisitos académicos, recomendará por escrito, el área del conocimiento propuesta ante el director del plantel, quien en su caso emitirá la autorización correspondiente.',
                'Una vez autorizado el examen, el candidato tendrá los asesores autorizados por el jefe del departamento académico, a propuesta de la academia correspondiente.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos.',
                'El egresado contará con un plazo máximo de dos meses a partir de la autorización del examen para la presentación del acto de recepción profesional, el cual consistirá en: Primera etapa: Exposición por escrito de un problema real, en donde el egresado podrá demostrar que con los conocimientos adquiridos a través del grupo de asignaturas seleccionadas, está capacitado para dar o presentar alternativas de solución al problema práctico expuesto, siendo esta etapa evaluada por escrito. Primera etapa: Exposición por escrito de un problema real, en donde el egresado podrá demostrar que con los conocimientos adquiridos a través del grupo de asignaturas seleccionadas, está capacitado para dar o presentar alternativas de solución al problema práctico expuesto, siendo esta etapa evaluada por escrito. Tercera etapa. Protocolo.',
                'El número de sesiones de evaluación, así como el tiempo y porcentaje correspondiente a cada etapa, serán determinados por el jurado.',
                'El jurado emitirá su dictamen, el cual será inapelable,  con base en los resultados obtenidos en las dos etapas previas de la evaluación.',
                'Al jefe del departamento de servicios escolares del instituto del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo, a petición del interesado.']
        },
        {
            number: 'VII',
            text: 'MEMORIA DE EXPERIENCIA PROFESIONAL',
            link: '',
            info: ['La memoria de experiencia profesional consiste en la elaboración de un informe técnico de un proyecto desarrollado para el sector productivo o de servicios, o un resumen de actividades profesionales de innovación de sistemas, aparatos o mejoramiento técnico de algún proceso.',
                'Para presentar una memoria de experiencia profesional, el egresado deberá contar con un mínimo de tres semestres de experiencia en el sector laboral que corresponda a su especialidad, presentando la constancia correspondiente.',
                'El tema de la memoria de experiencia profesional será definido por el candidato, analizado por la academia correspondiente y, en su caso, autorizado por el jefe del departamento académico.',
                'El egresado tendrá un asesor autorizado por el jefe del departamento académico, considerando la propuesta de la academia correspondiente.',
                'La memoria de experiencia profesional será revisada por una comisión integrada en el seno de la academia para tal fin, la cual dictaminará su aceptación o modificaciones, para su impresión.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El candidato sustentará el acto de recepción profesional, consistente en exposición del trabajo desarrollado, examen profesional y protocolo.',
                'Al departamento de servicios escolares del instituto del cual egresó el sustentante corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'VIII',
            text: 'ESCOLARIDAD POR PROMEDIO',
            link: '',
            info: ['Se considera escolaridad por promedio a la condición que cumple el egresado para titularse sin realizar ningún trabajo profesional, al haber obtenido un promedio aritmético de calificaciones sobresaliente.',
                'Para que el candidato tenga derecho a realizar el acto de recepción profesional mediante escolaridad por promedio, deberá haber obtenido un promedio aritmético general mayor o igual a 90 en el total de su carrera, habiendo acreditando cuando menos el 90% de sus asignaturas en curso normal.',
                'Para el caso de egresados cuyo promedio aritmético general sea igual o mayor a 98 en el total de su carrera, habiendo acreditado el 100% de sus asignaturas en curso normal o primer examen global, tendrá derecho a que se le otorgue  MENCIÓN HONORÍFICA.',
                'El departamento de servicios escolares del instituto tecnológico emitirá constancia de promedio del egresado, y someterá el historial académico del candidato a revisión por el jurado correspondiente.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El jurado que presidirá el acto de recepción profesional deberá constatar el cumplimiento de los numerales 2 y 3 de este procedimiento.',
                'El egresado se presentará al acto de recepción profesional, consistente en protocolo, en la fecha y hora designados para tal efecto.',
                'Al departamento de servicios escolares del instituto del cual egresó el sustentante corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'IX',
            text: 'ESCOLARIDAD POR ESTUDIOS DE POSGRADO',
            link: '',
            info: ['Se considera escolaridad por estudios de posgrado a la condición que cumple el egresado para titularse sin efectuar ningún trabajo profesional, al haber concluido los estudios de especialización o parte de una maestría dentro del SNIT o en otra institución de educación superior de prestigio que cuente con reconocimiento oficial de la Dirección General de Profesiones de la SEP.',
                'Podrán titularse por escolaridad por estudios de posgrado los candidatos que cursen una especialización o maestría que aporte conocimientos y habilidades que apoyen el desempeño profesional del egresado en su perfil profesional.',
                'El candidato a sustentar el acto de recepción profesional por esta opción deberá haber acreditado el 100% de los créditos de una especialización o el 40% de créditos no propedéuticos de una maestría, obteniendo una calificación de 80 (ochenta base cien) como mínimo en cada una de las asignaturas.',
                'El departamento de servicios escolares de la institución en la cual cursa o cursó sus estudios el candidato emitirá una constancia de sus calificaciones y una copia del plan de estudios del programa de posgrado.',
                'Cuando los estudios de posgrado se realicen en el extranjero, se presentará certificación de validez de estudios por parte de la Dirección General de Incorporación y Revalidación de la SEP.',
                'El comité académico del instituto tecnológico, en reunión solemne (donde se asienten acuerdos en acta o bitácora), analizará y en caso de que cumpla con los requisitos académicos, recomendará por escrito, la propuesta de titulación del candidato por esta opción ante el director del plantel, quien, en su caso, emitirá la autorización correspondiente.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos.',
                'El egresado sustentará el acto de recepción profesional, consistente en protocolo, en la fecha y hora designados para tal efecto.',
                'Al departamento de servicios escolares del instituto del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo, a solicitud del interesado.']
        },
        {
            number: 'X',
            text: 'MEMORIA DE RESIDENCIA PROFESIONAL',
            link: '',
            info: ['Se denomina memoria de residencia profesional, al informe final que acredita la residencia profesional en la cual, el estudiante analiza y reflexiona sobre la experiencia adquirida y llega a conclusiones relacionadas con su campo de especialidad.']
        }
    ]
    const cards2004 = [
        {
            number: 'I',
            text: 'TESIS PROFESIONAL',
            link: '',
            info: ['Se denomina tesis profesional a la presentación de los resultados obtenidos de una investigación realizada por el (los) candidato (s), que contiene una posición de un tema, fundamentada en un área del conocimiento científico y tecnológico.',
                'El trabajo a desarrollar podrá realizarse en forma individual o por dos candidatos. Cuando las características del trabajo requieran un mayor número de participantes, la academia correspondiente podrá ponderarlo y recomendarlo, previa justificación de los proponentes del tema, ante el jefe del departamento académico correspondiente, quien solicitará la aprobación del director del plantel, considerando aportación, alcance y profundidad del mismo.',
                'El tema de la tesis profesional será definido por el (los) candidato(s) y dictaminado por la academia correspondiente.',
                'El candidato podrá realizar su investigación dentro del instituto tecnológico o en otra institución o empresa que le proporcione los medios necesarios.',
                'El candidato tendrá un asesor para el desarrollo de su trabajo, designado por el jefe del departamento académico considerando la propuesta de la academia correspondiente; o nombrado por la institución externa o empresa en la cual desarrolle su trabajo de tesis, en cuyo caso será ratificado por el jefe del departamento académico.',
                'El trabajo de tesis será revisado por una comisión de tres profesionistas integrada para tal efecto en el seno de la academia, y/o con miembros externos a juicio del jefe de departamento, la cual  dictaminará la aprobación o modificación del mismo.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al jefe del departamento de servicios escolares del instituto del cual egresó el sustentante le corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'III',
            text: 'PROYECTO DE INVESTIGACIÓN',
            link: '',
            info: ['El proyecto de investigación consiste en el procedimiento metodológico a través del cual se obtiene un resultado científico y/o tecnológico, se innova  o adecua una tecnología o parte de un proceso productivo o experimental, etc.; que resulta de utilidad para la humanidad; y cuyo impacto puede ser local, regional, nacional o internacional. El proyecto de  investigación puede ser realizado dentro o fuera del instituto tecnológico.',
                'Los proyectos de investigación presentados en el Concurso Nacional de Creatividad y en el Concurso Nacional de Emprendedores de los institutos tecnológicos pueden ser considerados en esta opción de titulación, así como los proyectos realizados durante la residencia profesional o la práctica profesional y los realizados durante el ejercicio profesional del egresado en cualquier lugar acreditado para ello.',
                'El tema del proyecto a desarrollar será definido por el candidato o asignado por el responsable del mismo y dictaminado por la academia correspondiente y, en su caso, autorizado por el jefe del departamento académico correspondiente.',
                'El candidato comprobará mediante constancia, su participación en un proyecto de investigación realizado en el instituto tecnológico o en otro centro o institución que desarrolle investigación.',
                'El sustentante tendrá como asesor al titular responsable del proyecto de investigación, el cual será autorizado por el jefe del departamento académico correspondiente.',
                'El informe técnico de la investigación será revisado por una comisión de tres profesores, integrada en el seno de la academia para tal efecto, y/o con miembros externos a juicio del jefe de departamento.',
                'El jefe del departamento académico designará al jurado que presidirá el acto de recepción profesional, considerando la propuesta de la academia correspondiente y evaluando los perfiles de los candidatos externos, si existiesen.',
                'El egresado sustentará el acto de recepción profesional, consistente en examen profesional y protocolo, en la fecha y hora designados para tal efecto.',
                'El jurado emitirá su dictamen, el cual será inapelable, con base en la presentación del trabajo por parte del sustentante y las respuestas a las preguntas formuladas.',
                'Al departamento de servicios escolares del instituto del cual egresó el sustentante corresponderá realizar el trámite de la expedición del título y de la cédula profesional del mismo.']
        },
        {
            number: 'III',
            text: 'EXAMEN GLOBAL POR ÁREAS DE CONOCIMIENTO',
            link: '',
            info: []
        },
        {
            number: 'IV',
            text: 'ESCOLARIDAD POR PROMEDIO',
            link: '',
            info: []
        },
        {
            number: 'V',
            text: 'MEMORIA DE RESIDENCIA PROFESIONAL',
            link: '',
            info: []
        }
    ]
    const ShowPopTitulacion = async (title, info, index) => {
        //verificamos si ya lo habia seleccionado antes 
        let card = document.getElementById(index);
        if (card.classList.contains('ubicacion-card')) {
            card.classList.remove('ubicacion-card')
        }
        setInfoPop({ ...infoPop, title: title, info: info, index: index });
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.getElementById('popUp').style.visibility = 'visible'
            document.getElementById('popUp').style.opacity = '1'
        }, 100);
    }
    const ClosePopUp = async () => {
        document.getElementById('popUp').style.visibility = 'hidden'
        document.getElementById('popUp').style.opacity = '0'
        document.getElementById(infoPop.index).scrollIntoView();
        document.getElementById(infoPop.index).classList.add('ubicacion-card');
    }
    const ShowInfoTitulacion = (idBloque, idIcono) => {
        let bloque = document.getElementById(idBloque);
        let icono = document.getElementById(idIcono);
        if (bloque.classList.contains('desplegar')) {
            bloque.classList.remove('desplegar');
            bloque.removeAttribute("style");
            icono.classList.remove('rotar');
        } else {
            const height = bloque.scrollHeight;
            bloque.style.height = height + "px";
            bloque.classList.add('desplegar');
            icono.classList.add('rotar');
        }
    }
    return (
        <div className='contenedor-titulacion'>
            <h3>TITULACIÓN</h3>
            <div className='documento'>
                <a>Programa de Titulación Integral</a>
                <FaEye className='icono-documento' />
            </div>
            <div className='popUp-titulacion' id='popUp'>
                <p>{infoPop.title} <p className='cerrar-pop-titulacion' onClick={() => { ClosePopUp() }}>X</p></p>
                <ul className='contenedor-mas-info'>
                    {
                        infoPop.info.length > 0 &&
                        infoPop.info.map((item, idx) => {
                            return (
                                <ul className='mas-info-titulacion'>
                                    <li key={idx} className='bloque-info-titulacion' onClick={() => { ShowInfoTitulacion(idx + 1 * 100, idx + 10 *100) }}>{idx + 1} <FaChevronDown className='flecha-info-titulacion' id={idx + 10 *100}/></li>
                                    <li className="info-titulacion" id={idx + 1 * 100}>{item}</li>
                                </ul>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='contenedor-plan'>
                <p className='titulacion-titulo'>PLAN 1993</p>
                <p className='descripcion-plan'>Las diez opciones para sustentar el acto de recepción profesional de licenciatura en los institutos tecnológicos y obtener el título de ingeniero o licenciado, son las siguientes:</p>
                {
                    cards.map((card, idx) => {
                        return (
                            <div className='card-titulacion' key={idx} id={idx}>
                                <p className='top-card-titulacion'>{card.number}</p>
                                <p>{card.text}</p>
                                <div className='documento-programa-card' onClick={() => { ShowPopTitulacion(card.text, card.info, idx) }} >
                                    <p>Ver más...</p>
                                    <FaEye className='icono-titulacion-card' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='contenedor-plan'>
                <p className='titulacion-titulo'>PLAN 2004</p>
                {
                    cards2004.map((card, idx) => {
                        return (
                            <div className='card-titulacion' key={idx} id={idx + 1 * 20}>
                                <p className='top-card-titulacion'>{card.number}</p>
                                <p>{card.text}</p>
                                <div className='documento-programa-card' onClick={() => { ShowPopTitulacion(card.text, card.info, idx + 1 * 20) }}>
                                    <p>Ver más...</p>
                                    <FaEye className='icono-titulacion-card' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
