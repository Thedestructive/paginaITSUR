import React from 'react'
import './directorio.css'
import './filosofia.css'
import itsur from './about.jpg'
import { FaCheck } from 'react-icons/fa'
export const Filosofia = () => {
    const valores = ['Compromiso', 'Disciplina', 'Respeto', 'Equidad de género', 'Inclusión', 'Entorno cultural y ecológico', 'Benedicencia']
    return (
        <div className='contenedor-filosofia'>
            <h3>Filosofía Institucional</h3>
            <div className='contendor-imagen-filo'>
                <img src={itsur}/>
                <div className='contenedor-mision'>
                    <h3>Misión</h3>
                    <p>Contribuir a la formación integral de personas y egresar profesionistas competentes y éticos para crear, emprender e innovar a través del proceso educativo de calidad, comprometidos con el medio ambiente y desarrollo sustentable de la región.</p>
                    <h3>Visión</h3>
                    <p>Para el 2024, ser una de las instituciones tecnológicas de nivel superior con mayor prestigio a nivel nacional, por la formación integral de sus estudiantes y el compromiso de sus egresados con el desarrollo sustentable; así como por la innovación que aporta con los programas educativos acreditados y de posgrado.</p>
                </div>
            </div>
            <div className='contenedor-valores'>
                <h3>Valores</h3>
                <ul className='contenedor-valores-lista'>
                {
                    valores.map((valor, index) => { return (
                        <li key={index} className='valor'><FaCheck className='icono-valor'/> {valor}</li>
                    )})
                }
                </ul>
            </div>
        </div>
    )
}
