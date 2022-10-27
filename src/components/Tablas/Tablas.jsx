import React from 'react'


export const Tablas = ({ fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9 }) => {
    return (
        <table className="tabla">
            <tbody>
                <tr className="fila-horario-header">
                    <td>Semestre 1</td>
                    <td>Semestre 2</td>
                    <td>Semestre 3</td>
                    <td>Semestre 4</td>
                    <td>Semestre 5</td>
                    <td>Semestre 6</td>
                    <td>Semestre 7</td>
                    <td>Semestre 8</td>
                    <td>Semestre 9</td>
                </tr>
                <tr>
                    {
                        fila1.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila2.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila3.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila4.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila5.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila6.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila7.length > 1 &&
                        fila7.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila8.length > 1 &&
                        fila8.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    {
                        fila9.length > 1 &&
                        fila9.map((fila, idx) => {
                            return (
                                <td key={idx} className="columna-horario">{fila}</td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}
