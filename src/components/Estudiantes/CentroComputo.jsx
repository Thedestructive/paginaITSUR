import React from 'react'
import './EstilosColumnasEstudiantes.css'
export const CentroComputo = () => {
    const objetivos = [
        {
            title: 'Objetivo general',
            list: ['Brindar a la plantilla estudiantil las herramientas de vanguardia que les permitirán fortalecer su formación académica y enaltecer su futura actividad laboral.']
        },
        {
            title: 'Objetivos específicos',
            list: ['Mantener los equipos en óptimas condiciones de funcionamiento.',
                'Prestar servicio oportuno y amable de asesoría en el uso de los equipos.',
                'Establecer normas y políticas para asegurar la correcta utilización y durabilidad de los equipos de cómputo.',
                'Incorporar y administrar productos tecnológicos de software, de acuerdo a la estrategia académica de la Institución.',
                'Detectar y recoger necesidades académicas, definiendo configuraciones de hardware y software adecuadas para satisfacerlas.']
        },
        {
            title: 'Horario de atención',
            list: ['El Centro de Cómputo brinda servicio continuo, de lunes a viernes en un horario de 7:00 a 19:00 horas.']
        },
        {
            title: 'Servicios del Centro de Cómputo',
            list: ['Uso de equipo de cómputo con acceso a Internet',
                'Asesoría en el uso del equipo de cómputo', 'Impresiones', 'Escáner', 'Asignación de cuenta de correo electrónico institucional', 'Credencialización']
        },
        {
            title: 'Software disponible en el Centro de Cómputo',
            list: [
                'Microsoft Office 2010',
                'Microsoft Visio 2010',
                'Microsoft Project Manager 2007',
                'Microsoft Visual Studio 2010',
                'Acrobat Reader X',
                'Eclipse SDK android',
                'Netbeans 7.3.1',
                'StarUML',
                'Xmind',
                'Freemind',
                'PostgreSQL',
                'MySQL',
                'S.O. Windows 7']
        },
        {
            title: 'Equipos disponibles en el Centro de Cómputo',
            list: [
                'Procesador Core 2 duo a 2.66.0 GHz.',
                'Disco Duro de 160 GB.',
                'Memoria RAM de 2 GB.',
                'Monitor LCD de 17 pulgadas.'
            ]
        }
    ]
    return (
        <div className='centroComputo'>
            <h3>CENTRO DE CÓMPUTO</h3>
            <p className='titulo-computo'>Área del departamento de planeación que ofrece a las y los estudiantes servicios tecnológicos con la finalidad de apoyar y reforzar sus actividades académicas.</p>
            <div className='seccion-computo'>
                {
                    objetivos.map((item, idx) => {
                        return (
                            <div key={idx} className='seccion-info'>
                                <p className='titulo-seccion-info'>{item.title}</p>
                                {
                                    item.list.map((list, index) => {
                                        return (
                                            <ol key={index} className='info-seccion'>{list}</ol>
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
