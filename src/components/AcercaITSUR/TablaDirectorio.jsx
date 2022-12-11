import React, { useEffect } from 'react'
import './tablaDirectorio.css'
export const TablaDirectorio = ({ titulo, subtitulo, subtituloDos, direccion }) => {

    return (
        <table className='tabla-directorio'>
            <th className='titulo-directorio'>{titulo}</th>
            <tr>
                <td></td>
                <td className='encabezado-directorio'>{subtitulo}</td>
                <td className='encabezado-directorio'>{subtituloDos}</td>
            </tr>
            {
                direccion.map((direccion, index) => {
                    return (
                        <tr className='fila-directorio' key={index}>
                            <td className='columna-directorio'>{direccion.campo1}</td>
                            <td className='columna-directorio'><a href={`mailto:${direccion.campo2}`}>{direccion.campo2}</a></td>
                            <td className='columna-directorio'>{direccion.campo3}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
