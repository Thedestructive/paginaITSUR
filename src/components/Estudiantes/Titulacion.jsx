import React from 'react'
import './titulacion.css'
import { FaEye } from 'react-icons/fa'
export const Titulacion = () => {
    const cards = [
        {
            number: 'I',
            text: 'TESIS PROFESIONAL',
            link: ''
        },
        {
            number: 'II',
            text: 'LIBROS DE TEXTO O PROTOTIPOS DIDÁCTICOS',
            link: ''
        },
        {
            number: 'III',
            text: 'PROYECTO DE INVESTIGACIÓN',
            link: ''
        },
        {
            number: 'IV',
            text: 'DISEÑO O REDISEÑO DE EQUIPO, APARATO O MAQUINARIA',
            link: ''
        },
        {
            number: 'V',
            text: 'CURSO ESPECIAL DE TITULACIÓN',
            link: ''
        },
        {
            number: 'VI',
            text: 'EXAMEN GLOBAL POR ÁREAS DE CONOCIMIENTO',
            link: ''
        },
        {
            number: 'VII',
            text: 'MEMORIA DE EXPERIENCIA PROFESIONAL',
            link: ''
        },
        {
            number: 'VIII',
            text: 'ESCOLARIDAD POR PROMEDIO',
            link: ''
        },
        {
            number: 'IX',
            text: 'ESCOLARIDAD POR ESTUDIOS DE POSGRADO',
            link: ''
        },
        {
            number: 'X',
            text: 'MEMORIA DE RESIDENCIA PROFESIONAL',
            link: ''
        }
    ]
    return (
        <div className='contenedor-titulacion'>
            <p className='titulacion-titulo'>TITULACIÓN</p>
            <div className='documento-programa'>
                <a>Programa de Titulación Integral</a>
                <FaEye className='icono-titulacion' />
            </div>
            <div className='contenedor-plan'>
                <p className='titulacion-titulo'>PLAN 1993</p>
                <p className='descripcion-plan'>Las diez opciones para sustentar el acto de recepción profesional de licenciatura en los institutos tecnológicos y obtener el título de ingeniero o licenciado, son las siguientes:</p>
                {
                    cards.map((card, idx) => {
                        return (
                            <div className='card-titulacion' key={idx}>
                                <p className='top-card-titulacion'>{card.number}</p>
                                <p>{card.text}</p>
                                <div className='documento-programa-card'>
                                    <a>Ver más...</a>
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
