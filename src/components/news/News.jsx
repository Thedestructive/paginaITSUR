import React, { createRef } from 'react'
import img from '../../isc.jpg'
import imgNoticia from './img_Noticia.jpg'
import './News.css'
export const News = () => {
    const refNew = createRef();
    const refImage = createRef();
    const refText = createRef();
    const contenent_news = [
        {
            image: imgNoticia,
            new: 0,
            textMuestra: "CAPACÍTATE Y CERTIFÍCATE",
            textPopUp: "CAPACÍTATE Y CERTIFÍCATE INTERNACIONALMENTE EN LAS TECNOLOGÍAS DE INGENIERÍA WWW.XPERTCAD.COM"
        },
        {
            image: img,
            new: 1,
            textMuestra: "",
            textPopUp: ""
        },
        {
            image: img,
            new: 2,
            textMuestra: "",
            textPopUp: ""
        }
    ]
    const WatchNew = async(img, text) =>  {
        refNew.current.style.visibility = 'visible';
        refImage.current.src = img;
        refText.current.innerHTML = text;
        
    } 
    const HiddenPopUp = async() => {
        refNew.current.style.visibility = 'hidden';
    }
    return (
        <section className='noticias'>
            <h1 className='titulo'>Noticias</h1>
            <div className='popUpNews' ref={refNew}>
                <div onClick={()=>{HiddenPopUp()}} className='close-popup'><p>X</p></div>
                <div className = "papaPopUp"> <img className = "imagenPopUp" ref={refImage}/> </div>
                <p className = "textoPopUp" ref={refText}>  </p>
                
            </div>
            {
                contenent_news.map((new_item, idx) => { return (
                    <article className='articulo' key={idx}>
                        <img src={new_item.image}/>
                        <p className = "textoPopUp"> {new_item.textMuestra} </p>
                        <button className='btn-noticias' onClick={()=>{WatchNew(new_item.image, new_item.textPopUp)}}>Ver mas...</button>
                    </article>
                )})
            }
        </section>
    )
}
