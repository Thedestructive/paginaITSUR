import React from 'react'
import './Tutorias.css'
export const Tutorias = () => {
    const infoTutotias = [
        {
            title: '¿Qué son las tutorías?',
            info: ['Tutoría es el proceso de acompañamiento personalizado que un académico (docente - tutor) realiza a un alumno principalmente durante el primer año de su trayectoria escolar, a fin de coadyuvar al logro de los objetivos educativos establecidos en el programa académico en que está inscrito y ayudarle perfilar su proyecto de vida. El alumno y su tutor estarín en comunicación constante para prever problemas de tipo académico y orientar la vida estudiantil hacia una vida profesional a través del desarrollo de hábitos de estudio, la reflexión participativa y la práctica de los valores éticos que desencadenan en una convivencia social armoniosa.']
        },
        {
            title: 'Objetivos de la tutoría.',
            info: ['Objetivo general: “Elevar la calidad del proceso educativo a través de la atención personalizada de los problemas que influyen en el desempeño y rendimiento escolar del estudiante, con el fin de mejorar las condiciones de aprendizaje y desarrollo de valores, actitudes y hábitos que contribuyan a la integridad de su formación profesional y humana”. Objetivos particulares:'],
            subInfo: ['Asesorar a los alumnos de primero, segundo y becarios PRONABES en su desarrollo académico, profesional y personal, durante su permanencia en la institución.', 'Apoyar a las distintas áreas del ITSUR (coordinaciones de carrera, subdirección académica, etc.) con la finalidad de disminuir los índices de reprobación, deserción, aprovechamiento y eficiencia terminal de los alumnos.', 'Agilizar y hacer más eficiente el trabajo de tutorías donde cada área y responsable cumpla en tiempo y forma la parte que le corresponde.']
        },
        {
            title: '¿Cuáles son las modalidades del trabajo tutorial?',
            info: ['Individual. Es la que se lleva a cabo entre el profesor-tutor y el alumno con el fin de identificar la problemática y potencial que puede repercutir en su desempeño académico. Grupal. Esta modalidad hace referencia a la interacción entre el profesor - tutor y un grupo de estudiantes, orientándose a la identificación de problemas o riesgos comunes e incidir en ellos a través de la orientación y la enseñanza. Asesoría entre pares. Consiste en la ayuda mutua que se otorgan los alumnos en temas y materias académicas a fin de realizar un trabajo colaborativo.']
        },
        {
            title: '¿Quiénes reciben este servicio?',
            info: ['Alumnos de primero y segundo semestre de todas las carreras. En este caso las tutorías tienen 2 créditos de validez (un crédito por semestre).',
                'Becarios PRONABES.', 'Cualquier alumno del ITSUR que solicite el servicio en caso de considerarlo necesario.',
                'Para alumnos de primero, segundo y becarios PRONABES tiene un carácter de OBLIGATORIEDAD.']
        },
        {
            title: 'Documentos en los que se basa la tutoría del ITSUR.',
            info: ['Disposiciones establecidas por la ANUIIES.', 'Disposiciones académicas y administrativas para la tutoría al interior del ITSUR (Es nuestro documento rector, ya que en él se encuentran tanto los derechos como obligaciones de tutores, tutorados, coordinador de tutoría y demás miembros de la institución).',
                'El proceso de tutorías del ITSUR (aplica para coordinador y tutores).',
                'Políticas y reglas de operación de PRONABES. En este se encuentran los requisitos mínimos indispensables para solicitar y conservar el beneficio de la beca.',
                'El PIT (Plan Institucional de Tutorías).', 'El PAT (Plan de Acción Tutorial).', 'El PTT (Plan de Trabajo Tutorial). Éste es presentado por cada tutor al inicio de semestre por lo que es necesario que el tutorado pida a su tutor le muestre en lo que se estará trabajando a lo largo del semestre.']
        },
        {
            title: '¿Quién puede ser tutor?',
            info: ['Cualquier docente de la institución que esté interesado en participar en el programa y que haya cumplido con los requisitos de selección entre los que se incluye el de “capacitación continua”.',
                'Documentos importantes:'],
            subDocumentos: [
                {
                    title: 'Documentos importantes:',
                    info: [
                        {
                            text: 'Políticas y acciones de los programas Institucionales de tutorías de las Instituciones de Educación Superior (IES) del Estado de Guanajuato',
                            link: 'http://www.itsur.edu.mx/documentos_publicados/tutorias/2013/Politicas_y_acciones_2012_V3.0.pdf'
                        },
                        {
                            text: 'Regras de operación 2012',
                            link: 'http://www.itsur.edu.mx/documentos_publicados/tutorias/2013/PRONABES_v2_REGLAS_DE_OPERACION_2012_RENOVADO.pdf'
                        },
                        {
                            text: 'Acreditacion Tutorías - becas',
                            link: 'http://www.itsur.edu.mx/documentos_publicados/tutorias/2013/Acreditacion_Tutorias_BECAS.pdf'
                        },
                        {
                            text: 'Solicitud de suspensión de beca',
                            link: 'http://www.itsur.edu.mx/documentos_publicados/tutorias/2013/Flujo_de_solicitud_suspension_beca.pdf'
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <div className='tutorias'>
            <h3>TUTORÍAS</h3>
            <p className='titulo-tutorias'>SERVICIO DE TUTORÍAS EN EL ITSUR ¡La ayuda que muchos quisimos tener!</p>
            <div className='seccion-tutorias'>
                {
                    infoTutotias.map((item, idx) => {
                        return (
                            <div className='seccion-info-tutotias'>
                                <p className='tutorias-titulo-info'>{idx + 1} {item.title}</p>
                                {
                                    item.info.map((list, ind) => { return (
                                        <p className='tutorias-info' key={ind}>{list}</p>
                                    )})
                                }
                                {
                                    item.subInfo &&
                                    item.subInfo.map((sub, index) => {
                                        return (
                                            <ol>{index + 1} {sub}</ol>
                                        )
                                    })
                                }
                                {
                                    item.subDocumentos &&
                                    item.subDocumentos.map((sub, index) => {
                                        return (
                                            <div className='contendor-documentos-tutorias'>
                                                <p key={index}>{sub.title}</p>
                                                {
                                                    sub.info.map((link, ind) => {
                                                        return (
                                                            <a href={link.link} key={ind} target='_blank'>{link.text}</a>
                                                        )
                                                    })}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
