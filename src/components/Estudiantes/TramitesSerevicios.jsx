import React from 'react'
import './EstilosGeneralesEstudiantes.css'
import './tramitesServicios.css'
import { FaDownload, FaEye } from 'react-icons/fa'
import { Footer } from '../footer/Footer'
export const TramitesSerevicios = () => {
    const tramite = [
        {
            concepto: 'ITSUR INSCRIPCIÓN A LICENCIATURAS SEMESTRAL',
            nombreFormato: [
                { title: 'FORMATO SOLICITUD DE INSCRIPCIÓN' },
                { title: 'FORMATO CONTRATO CON EL ALUMNO(A)' },
                { title: 'PROCEDIMIENTO PARA LA INSCRIPCIÓN' },
                { title: 'PROCEDIMIENTO PARA LA REINSCRIPCIÓN DE ALUMNOS(AS)' }
            ],
            formato: ['', '', '', ''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR CURSO PROPEDÉUTICO',
            nombreFormato: [
                { title: 'PROCEDIMIENTO Y DIAGRAMA DE FLUJO DEL CURSO PROPEDÉUTICO' },
                ],
            formato: [''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR CONS. DE ESTUDIOS Y/O RECONOCIMIENTO FIRMAS TIPO EDUC. SUP',
            nombreFormato: [
                { title: 'PROCEDIMIENTO PARA LA GENERACIÓN DE CONSTANCIA DE ESTUDIOS Y/O RECONOCIMIENTO FIRMAS TIPO EDUCACIÓN SUPERIOR' },
                ],
            formato: [''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR CERTIFICADO PARCIAL O TOTAL DE ESTUDIOS',
            nombreFormato: [
                { title: 'PROCEDIMIENTO PARA LA GENERACIÓN DE CERTIFICADO PARCIAL Ó TOTAL DE ESTUDIOS' },
                ],
            formato: [''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR EXPEDICIÓN DE DOCUMENTACIÓN DEL PROCESO DE TITULACIÓN',
            nombreFormato: [
                { title: 'CALENDARIO DE TITULACIÓN ENERO - JUNIO 2022' },
                {title: 'REQUISITOS PARA TRAMITE DE TITULACIÓN'},
                {title: 'FORMATO DE REQUISITOS PARA TRAMITE DE ACTO RECEPCIONAL'}
                ],
            formato: ['','',''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR CONSTANCIA DE SERVICIO SOCIAL PROFESIONAL',
            nombreFormato: [
                { title: 'PROCEDIMIENTO PARA SERVICIO SOCIAL' }
                ],
            formato: [''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR EXPEDICIÓN DE FICHAS PARA EXAMEN DE SELECCIÓN',
            nombreFormato: [
                { title: 'FORMATO SOLICITUD FICHA PARA EXAMEN DE SELECCIÓN' }
                ],
            formato: [''],
            lugar: 'GUÍA DE PAGOS'
        },
        {
            concepto: 'ITSUR GESTORÍA DEL TRAMITE DE TITULACIÓN',
            nombreFormato: [
                { title: 'CALENDARIO DE TITULACIÓN ENERO - JUNIO 2022' },
                { title: 'REQUISITOS PARA TRAMITE DE TITULACIÓN' },
                { title: 'FORMATO DE REQUISITOS PARA TRAMITE DE ACTO RECEPCIONAL' }
                ],
            formato: ['','',''],
            lugar: 'GUÍA DE PAGOS'
        }
    ];
    const otrosTramites = [
        {
            no: 'ESC-01',
            concepto: 'SOLICITUD DEL ESTUDIANTE PARA EL ANÁLISIS DEL COMITÉ ACADÉMICO',
            nombreFormato: [
                { title: 'FO-CMT-001' }
                ],
            formato: [''],
            lugar: 'COMITÉ ACADÉMICO'
        },
        {
            no: 'ESC-02',
            concepto: 'SOLICITUD DE CARTA DE LIBERACIÓN DE BAJA DEFINITIVA O BAJA TEMPORAL',
            nombreFormato: [
                { title: 'FO-USE-001' }
                ],
            formato: [''],
            lugar: 'SERVICIOS ESCOLARES Y APOYOS ESTUDIANTILES'
        },
        {
            no: 'ESC-03',
            concepto: 'SOLICITUD DE DOCUMENTOS PERSONALES',
            nombreFormato: [
                { title: 'FO-ALU-001' }
                ],
            formato: [''],
            lugar: 'SERVICIOS ESCOLARES Y APOYOS ESTUDIANTILES'
        },
        {
            no: 'ESC-04',
            concepto: 'SOLICITUD DE CARTA RENUNCIA AL SERVICIO EDUCATIVO',
            nombreFormato: [
                { title: 'FO-ALU-002' }
                ],
            formato: [''],
            lugar: 'SERVICIOS ESCOLARES Y APOYOS ESTUDIANTILES'
        },
        {
            no: 'ESC-05',
            concepto: 'SOLICITUD DE BECA DESCUENTO POR ALTO RENDIMIENTO ACADÉMICO',
            nombreFormato: [
                { title: 'FO-BEC-001' }
                ],
            formato: [''],
            lugar: 'APOYO EN BECAS Y SERVICIOS ESTUDIANTILES'
        },
        {
            no: 'ESC-06',
            concepto: 'SOLICITUD DE BECA DESCUENTO POR CONVENIO',
            nombreFormato: [
                { title: 'FO-BEC-002' }
                ],
            formato: [''],
            lugar: 'APOYO EN BECAS Y SERVICIOS ESTUDIANTILES'
        },
        {
            no: 'ESC-07',
            concepto: 'SOLICITUD DE BECA DESCUENTO PARA PERSONAL DEL ITSUR',
            nombreFormato: [
                { title: 'FO-BEC-003' }
                ],
            formato: [''],
            lugar: 'APOYO EN BECAS Y SERVICIOS ESTUDIANTILES'
        },
        {
            no: 'ESC-08',
            concepto: 'SOLICITUD DE BECA DESCUENTO POR EVENTOS ACADÉMICOS Y DE SELECTIVOS',
            nombreFormato: [
                { title: 'FO-BEC-004' }
                ],
            formato: [''],
            lugar: 'APOYO EN BECAS Y SERVICIOS ESTUDIANTILES'
        }
    ]
    return (
        <div className='centroComputo'>
            <h3>MEJORA REGULATORIA</h3>
            <div className='documento'>
                <a>CONSULTA AQUÍ TRÁMITES Y SERVICIOS</a>
                <FaEye className='icono-documento' />
            </div>
            <table className='tabla-contenedor-tramites'>
                <th>NO.</th>
                <th>CONCEPTO</th>
                <th>NOMBRE DE FORMATO</th>
                <th>FORMATO DESCARGABLE</th>
                <th>LUGAR Y FORMA DE PAGO</th>
                {
                    tramite.map((item, index) => {
                        return (
                            <tr key={index} className='tabla-por-concepto'>
                                <td className='item-fila'>{index+1}</td>
                                <td className='item-fila'>{item.concepto}</td>
                                <td>
                                    <ul className='tabla-nombre-formato'>
                                        {
                                            item.nombreFormato.map((nombre, idx) => {
                                                return(
                                                    <li key={idx} className='item-tramite'>{nombre.title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                                <td>
                                    <ul className='tabla-formato-link'>
                                        {
                                            item.formato.map((nombre, idx) => {
                                                return(
                                                    <li key={idx} className='item-tramite'><a><FaDownload className='icono-descarga'/></a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                                <td className='item-fila'>{item.lugar}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <h3>OTROS TRAMITES Y SERVICIOS</h3>
            <table className='tabla-contenedor-tramites'>
                <th>NO.</th>
                <th>CONCEPTO</th>
                <th>NOMBRE DE FORMATO</th>
                <th>FORMATO DESCARGABLE</th>
                <th>LUGAR Y FORMA DE PAGO</th>
                {
                    otrosTramites.map((item, index) => {
                        return (
                            <tr key={index} className='tabla-por-concepto'>
                                <td className='item-fila'>{item.no}</td>
                                <td className='item-fila'>{item.concepto}</td>
                                <td>
                                    <ul className='tabla-nombre-formato'>
                                        {
                                            item.nombreFormato.map((nombre, idx) => {
                                                return(
                                                    <li key={idx} className='item-tramite'>{nombre.title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                                <td>
                                    <ul className='tabla-formato-link'>
                                        {
                                            item.formato.map((nombre, idx) => {
                                                return(
                                                    <li key={idx} className='item-tramite'><a><FaDownload className='icono-descarga'/></a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </td>
                                <td className='item-fila'>{item.lugar}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <Footer/>
        </div>
    )
}
