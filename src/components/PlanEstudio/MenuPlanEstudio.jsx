import React, { createRef, useState } from 'react'
import './MenuPlanEstudio.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { PerfilIngreso } from './PerfilIngreso';
import { AreaConocimiento } from './AreaConocimiento';
import { Mision } from './Mision';
import { Vision } from './Vision';
import { AtributosEgreso } from './AtributosEgreso';
import { PerfilEgreso } from './PerfilEgreso';
import { ObjetivosEducacionales } from './ObjetivosEducacionales';
import { PerfilProfesional } from './PerfilProfesional';
import { CamposLaborales } from './CamposLaborales';
import { Contacto } from './Contacto';
export const MenuPlanEstudio = ({ perfilIngreso, areaConocimiento, mision, vision, atributosEgreso, perfilEgreso, objetivosEducacionales, perfilProfesional, camposLaborales, contacto }) => {
    const title = ['PERFIL DE INGRESO',
        'AREA DE CONOCIMIENTOS',
        'MISION', 'VISION',
        'RETICULA REMEDIAL',
        'ATRIBUTOS DE EGRESO',
        'PERFIL DE EGRESO',
        'OBJETIVOS EDUCACIONALES',
        'PERFIL PROFESIONAL',
        'CAMPOS LABORALES',
        'CONTACTO',
        'PAGINAS DE INTERES'];
    //STATE PARA SABER QUE CLICKEO EL USUARIO 
    const [selected, setSelected] = useState({ title: '', index: -1 });
    //REFERENCIA PARA MOSTRAR LA INFORMACION DE LA OPCION SELECCIONADA
    let showInformation = createRef();
    //OBTENER LA POSICION DEL USUARIO AL DAR CLICK EN PANTALLA MOVIL
    const [positionUser, setPositionUser] = useState('');
    //CAMBIAMOS LA INFORMACION PRESENTADA
    const selectedOption = async (item, idx) => {
        await changeOpacity();
        setTimeout(() => {
            //SI ESTAMOS EN LA VENTANA MOVIL 
            if (window.screen.width < 500) {
                showInformation.current.style.visibility = 'visible';
                setPositionUser(idx);
                window.scroll(0, 0);
            }
            //LE CAMBIAMOS EL ESTADO DEL TITULO DEL MENU Y LA POSICION
            setSelected({ ...selected, title: item, index: idx });
            showInformation.current.style.opacity = '1';
        }, 500);
    }
    //CAMBIAMOS LA OPACIDAD PARA EL EFECTO DE CAMBIO DE INFORMACION
    const changeOpacity = async () => {
        showInformation.current.style.opacity = '0';
        showInformation.current.style.transition = 'all 1s';

    }
    const ClosePopUpPlan = async () => {
        await changeOpacity();
        //CAMBIO DE VISIBILIDAD DE CONTENEDOR DE INFORMACION Y RETORNO DE SCROLL
        showInformation.current.style.visibility = 'hidden';
        document.getElementById(positionUser).scrollIntoView();
        setPositionUser('');
    }
    return (
        <div className='conteiner-menu-plan'>
            <div className='menu-plan'>
                <ul>
                    {
                        title.map((item, idx) => {
                            return (
                                <li key={idx} onClick={() => { selectedOption(item, idx) }} id={idx}>
                                    {item} <FaArrowAltCircleRight className='icon-arrow-right' />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div ref={showInformation} className='planInformation'>
                <p className='titulo-plan'>{selected.title} {window.screen.width < 500 && <p onClick={() => { ClosePopUpPlan() }} className='close-popUp-plan'>X</p>}</p>
                {
                    selected.index === 0 &&
                    <PerfilIngreso perfilIngreso={perfilIngreso} />
                }
                {
                    selected.index === 1 &&
                    <AreaConocimiento areaConocimiento={areaConocimiento} />
                }
                {
                    selected.index === 2 &&
                    <Mision mision={mision} />
                }
                {
                    selected.index === 3 &&
                    <Vision vision={vision} />
                }
                {
                    selected.index === 5 &&
                    <AtributosEgreso atributosEgreso={atributosEgreso} />
                }
                {
                    selected.index === 6 &&
                    <PerfilEgreso perfilEgreso={perfilEgreso} />
                }
                {
                    selected.index === 7 &&
                    <ObjetivosEducacionales objetivosEducacionales={objetivosEducacionales} />
                }
                {
                    selected.index === 8 &&
                    <PerfilProfesional perfilProfesional={perfilProfesional} />
                }
                {
                    selected.index === 9 &&
                    <CamposLaborales camposLaborales={camposLaborales}/>
                }
                {
                    selected.index === 10 &&
                    <Contacto contacto={contacto}/> 
                }
            </div>
        </div>
    )
}
