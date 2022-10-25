import React, { useState} from 'react';
import { PlanEstudiElectronica, PlanEstudioAmbiental, PlanEstudioAutomotriz, PlanEstudioGastro, PlanEstudioGestion, PlanEstudioIndustrial, PlanEstudioSistemas } from '../PlanEstudio/PlanEstudio'

export const ComboEstudios = () => {
    const [carrera, setCarrera] = useState({
        carrera: '',
        bool: false
    })
    const selectCarrera = async (e) => {
        switch (e.target.value) {
            case 'Electronica':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Ambiental':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Automotriz':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Gastronomía':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Gestión':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Industrial':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                break;
            case 'Sistemas':
                setCarrera({ ...carrera, carrera: e.target.value, bool: true });
                console.log(carrera)
                break;
            default:
                setCarrera({ ...carrera, carrera: '', bool: false });
                console.log('a');
                break;
        }
    }
    return (
        <div>
            <select onChange={selectCarrera}>
                <option>--Elije una Carrera--</option>
                <option>Electronica</option>
                <option>Ambiental</option>
                <option>Automotriz</option>
                <option>Gastronomía</option>
                <option>Gestión</option>
                <option>Industrial</option>
                <option>Sistemas</option>
            </select>
            {
                (carrera.carrera === 'Electronica' && carrera.bool) &&
                <PlanEstudiElectronica />
            }
            {
                (carrera.carrera === 'Ambiental' && carrera.bool) &&
                <PlanEstudioAmbiental />
            }
            {
                (carrera.carrera === 'Automotriz' && carrera.bool) &&
                <PlanEstudioAutomotriz />
            }
            {
                (carrera.carrera === 'Gastronomía' && carrera.bool) &&
                <PlanEstudioGastro />
            }
            {
                (carrera.carrera === 'Gestión' && carrera.bool) &&
                <PlanEstudioGestion />
            }
            {
                (carrera.carrera === 'Industrial' && carrera.bool) &&
                <PlanEstudioIndustrial />
            }
            {
                (carrera.carrera === 'Sistemas' && carrera.bool) &&
                <PlanEstudioSistemas />
            }
        </div>
    )

}