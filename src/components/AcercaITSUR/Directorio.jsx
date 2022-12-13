import React from 'react'
import './directorio.css'
import { TablaDirectorio } from './TablaDirectorio'
export const Directorio = () => {
    const direccion = [
        {
            campo1: 'Dirección General',
            campo2: 'direccion@itsur.edu.mx',
            campo3: '*102'
        },
        {
            campo1: 'Jurídico',
            campo2: 'juridico@itsur.edu.mx',
            campo3: '*138'
        }
    ];
    const academica = [
        {
            campo1: 'Dirección Académica',
            campo2: 'dir_academica@itsur.edu.mx',
            campo3: '*106'
        },
        {
            campo1: 'Subdirección de Posgrado e Investigación',
            campo2: 'investigacion@itsur.edu.mx',
            campo3: '*111'
        },
        {
            campo1: 'Departamento de Posgrado e Investigación',
            campo2: 'dpto_investigacion@itsur.edu.mx',
            campo3: '*134'
        },
        {
            campo1: 'Subdirección Académica',
            campo2: 'sub_academica@itsur.edu.mx',
            campo3: '*105'
        },
        {
            campo1: 'Departamento de Desarrollo Académico',
            campo2: 'd_academico@itsur.edu.mx',
            campo3: '*135'
        },
        {
            campo1: 'Coordinación de Tutorías',
            campo2: 'tutorias@itsur.edu.mx',
            campo3: '*117'
        },
        {
            campo1: 'División de Gastronomía',
            campo2: 'gastronomia@itsur.edu.mx',
            campo3: '*104'
        },
        {
            campo1: 'División de Ingeniería en Sistemas Computacionales',
            campo2: 'sistemas@itsur.edu.mx',
            campo3: '*107'
        },
        {
            campo1: 'División de Ingeniería Industrial',
            campo2: 'industrial@itsur.edu.mx',
            campo3: '*103'
        },
        {
            campo1: 'División de Ingeniería Electrónica',
            campo2: 'electronica@itsur.edu.mx',
            campo3: '*137'
        },
        {
            campo1: 'División de Ingeniería En Sistemas Automotrices',
            campo2: 'automotrices@itsur.edu.mx',
            campo3: '*144'
        },
        {
            campo1: 'División de Ingeniería en Gestión Empresarial',
            campo2: 'gempresarial@itsur.edu.mx',
            campo3: '*109'
        },
        {
            campo1: 'División de Ingeniería Ambiental',
            campo2: 'ambiental@itsur.edu.mx',
            campo3: '*108'
        }
    ]
    return (
        <div className='contenedor-directorio'>
            <h3>DIRECTORIO DEL ITSUR</h3>
            <TablaDirectorio
                titulo={'DIRECCIÓN GENERAL'}
                subtitulo={'TITULAR'}
                subtituloDos={'EXTENSIÓN'}
                direccion={direccion} />

            <TablaDirectorio
                titulo={'DIRECCIÓN ACADÉMICA'}
                subtitulo={'TITULAR'}
                subtituloDos={'EXTENSIÓN'}
                direccion={academica} />
        </div>
    )
}
