import React from 'react'
import { Slider } from '../Inicio/slider/Slider'
import { Footer } from '../footer/Footer.jsx'
export const Convocatorias = () => {
    const images = [
        './RecursosConvocatoriaEstudiante/1_Convocatoria_para_profesores_Verano_Cientifico.jpg',
        './RecursosConvocatoriaEstudiante/2_Convocatoria_para_estudiantes_Verano_Cientifico.jpg',
        './RecursosConvocatoriaEstudiante/3_Convocatoria_3_Minutos_sobre_mi_Verano.jpg',
        './RecursosConvocatoriaEstudiante/4_Convocatoria_Congreso_Verano.jpg',
        './RecursosConvocatoriaEstudiante/convocatoria_+GTO_en_el_mundo.jpg',
        './RecursosConvocatoriaEstudiante/convocatoria_apoyo_a_madres_mexicanas.jpg',
        './RecursosConvocatoriaEstudiante/Convocatoria_Ignacio_Padilla.jpg',
        './RecursosConvocatoriaEstudiante/CONVOCATORIA_PREMIO_ESTATAL_INNOVACION_JUVENIL_ESTUDIANTIL.jpg',
        './RecursosConvocatoriaEstudiante/CONVOCATORIA_TALEN-TIC_2022_cuarta_Edicion.jpg',
        './RecursosConvocatoriaEstudiante/juventudes_x_la_pacificacion.jpg',
        './RecursosConvocatoriaEstudiante/techstars_Startup_Weekend.jpg',

    ]
    return (
        <div style={{margin: 'auto'}}>
            <Slider images={images}/>
            <Footer/>
        </div>
    )
}
