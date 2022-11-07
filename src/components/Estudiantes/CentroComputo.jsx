import React from 'react'
import './Tutorias.css'
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
                            <div key={idx} className='seccion-info-computo'>
                                <p className='tutorias-titulo-computo'>{item.title}</p>
                                {
                                    item.list.map((list, index) => {
                                        return (
                                            <ol key={index} className='computo-info'>{list}</ol>
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
