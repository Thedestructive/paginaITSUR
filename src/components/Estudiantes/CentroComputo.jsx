import React from 'react'
import './EstilosColumnasEstudiantes.css'
export const CentroComputo = () => {
    const objetivos = [
        {
            title: 'Objetivo general',
            list: [{
                title: 'Brindar a la plantilla estudiantil las herramientas de vanguardia que les permitirán fortalecer su formación académica y enaltecer su futura actividad laboral.'
            }]
        },
        {
            title: 'Objetivos específicos',
            list: [
                {
                    title: 'Mantener los equipos en óptimas condiciones de funcionamiento.'
                },
                {
                    title: 'Prestar servicio oportuno y amable de asesoría en el uso de los equipos.'
                },
                {
                    title: 'Establecer normas y políticas para asegurar la correcta utilización y durabilidad de los equipos de cómputo.'
                },
                {
                    title: 'Incorporar y administrar productos tecnológicos de software, de acuerdo a la estrategia académica de la Institución.'
                },
                {
                    title: 'Detectar y recoger necesidades académicas, definiendo configuraciones de hardware y software adecuadas para satisfacerlas.'
                }
            ]
        },
        {
            title: 'Horario de atención',
            list: [{
                title: 'El Centro de Cómputo brinda servicio continuo, de lunes a viernes en un horario de 7:00 a 19:00 horas.'
            }
            ]
        },
        {
            title: 'Servicios del Centro de Cómputo',
            list: [{
                title: 'Uso de equipo de cómputo con acceso a Internet'
            },
            {
                title: 'Asesoría en el uso del equipo de cómputo'
            },
            {
                title: 'Impresiones'
            },
            {
                title: 'Escáner'
            },
            {
                title: 'Asignación de cuenta de correo electrónico institucional'
            },
            {
                title: 'Credencialización'
            }
            ]
        },
        {
            title: 'Software disponible en el Centro de Cómputo',
            list: [
                { title: 'Microsoft Office 2010' },
                { title: 'Microsoft Visio 2010' },
                { title: 'Microsoft Project Manager 2007' },
                { title: 'Microsoft Visual Studio 2010' },
                { title: 'Acrobat Reader X' },
                { title: 'Eclipse SDK android' },
                { title: 'Netbeans 7.3.1' },
                { title: 'StarUML' },
                { title: 'Xmind' },
                { title: 'Freemind' },
                { title: 'PostgreSQL' },
                { title: 'MySQL' },
                { title: 'S.O. Windows 7' }]
        },
        {
            title: 'Equipos disponibles en el Centro de Cómputo',
            list: [
                {title:'Procesador Core 2 duo a 2.66.0 GHz.'},
                {title:'Disco Duro de 160 GB.'},
                {title:'Memoria RAM de 2 GB.'},
                {title:'Monitor LCD de 17 pulgadas.'}
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
                                            <ol key={index} className='info-seccion'>{list.title}</ol>
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
