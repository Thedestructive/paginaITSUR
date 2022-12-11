import React, { useState } from 'react'
import './Slider.css'

export const Slider = ({images}) => {
    
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);
    //indice en donde estamos, arreglo de imagenes y si vamos a la siguiente o hacia atras
    const selectNewImage = async (next) => {
        setLoaded(false);
        setTimeout(() => {
            //depende si va hacia adelante o no, tendra su condicion de paro
            const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
            //si va hacia adelante entonces entra al parentesis 
            const nextIndex = next ? (condition ? selectIndex + 1 : 0) : condition ? selectIndex - 1 : images.length - 1;
            setSelectImg(images[nextIndex]);
            setSelectIndex(nextIndex);
        }, 700)
    }
    const previus = async () => {
        selectNewImage(false);
    }
    const next = async () => {
        selectNewImage(true);
    }
    return (
        <div className='contenedor-slider '>
            <img src={require(`${selectImg}`)} alt='nd' className={loaded ? 'loaded' : 'notLoaded'} onLoad={() => { setLoaded(true) }}>
            </img>
            <button onClick={previus} className='btn-izq'>{'<'}</button>
            <button onClick={next} className='btn-dere'>{'>'}</button>
        </div>
    )
}
