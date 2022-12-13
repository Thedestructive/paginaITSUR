import React from 'react'
import { FaEye } from 'react-icons/fa'
import './EstilosGeneralesEstudiantes.css'
export const ApoyosEstudiantiles = () => {
    const objetivos = [
        {
            title: 'OBJETIVO GENERAL DEL PROGRAMA',
            list: [{
                title: 'Incrementar la cobertura de la Educación Superior mediante el otorgamiento de becas y mecanismos de apoyo, mejorando así las oportunidades de acceso, a la vez que se promueve la permanencia de los estudiantes.'
            }]
        },
        {
            title: 'Objetivos Específicos',
            list: [{
                title: 'Promover entre los estudiantes los diversos tipos de becas y apoyos económicos que se ofrecen de manera recurrente.'
            },
            {
                title: 'Apoyar a los estudiantes en los trámites requeridos para solicitar una beca.'
            },
            {
                title: 'Difundir entre la comunidad estudiantil todos aquellos apoyos extraordinarios provenientes de Organismos Gubernamentales y no Gubernamentales.'
            }
        ]
        },
        {
            title: 'Tipos de Becas',
            list: [{
                title: 'Con la finalidad de cumplir con el objetivo general del presente programa, el ITSUR ofrece diversas becas y apoyos económicos, los cuales se agrupan de acuerdo con el origen de los fondos económicos, siendo los principales de origen Institucional, Estatal y Federal.'
            }]
        },
        {
            title: 'Cualquier duda o aclaración favor de contactar al encargado de Becas y Apoyos Estudiantiles',
            list: [{
                title: 'Ing. Oscar Manuel Camacho Ortiz'
            },
            {
                title: 'becas@itsur.edu.mx'
            },
            {
                title: 'Tel. (445) 45 774 68 ext. *139.'
            }
        ]
        },
    ]
    return (
        <div className='centroComputo'>
            <h3>APOYOS ESTUDIANTILES</h3>
            <p className='titulo-computo'>PROGRAMA INSTITUCIONAL DE BECAS</p>
            
            <div className='documento'>
                <a>Programa de Titulación Integral</a>
                <FaEye className='icono-documento' />
            </div>
            <p className='titulo-computo'>
                El Programa Institucional de Becas surge como respuesta natural a la necesidad de formalizar,
                estructurar y regular los esfuerzos que se realizan en diversas áreas de la institución, en
                lo referente a la gestión, otorgamiento y seguimiento de los diversos esquemas de becas y apoyos.
            </p>
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
