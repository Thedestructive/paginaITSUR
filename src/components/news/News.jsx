import React, { createRef } from 'react'
import img from '../../isc.jpg'
import imgNoticia from './img_Noticia.jpg'
import './News.css'
export const News = () => {
    const refNew = createRef();
    const refImage = createRef();
    const refText = createRef();
    let positionUser;
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
    const WatchNew = async (img, text, idNew) => {
        refNew.current.style.visibility = 'visible';
        refImage.current.src = img;
        refText.current.innerHTML = text;
        positionUser = idNew;
        window.scroll(0,0);
        await disableScroll();
    }
    const HiddenPopUp = async () => {
        refNew.current.style.visibility = 'hidden';
        document.getElementById(positionUser).scrollIntoView();
        positionUser = '';
        await enableScroll();
    }
    const disableScroll = async () => {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
    }
    const enableScroll = async () => {
        window.onscroll = null;
    }
    return (
        <section className='noticias'>
            <h1 className='titulo'>Noticias</h1>
            <div className='popUpNews' ref={refNew}>
                <div onClick={() => { HiddenPopUp() }} className='close-popup'><p>X</p></div>
                <div className="papaPopUp"> <img className="imagenPopUp" ref={refImage} /> </div>
                <p className="textoPopUp" ref={refText}>  </p>

            </div>
            <div className='contenedor-noticias'>
                {
                    contenent_news.map((new_item, idx) => {
                        return (
                            <article className='card' key={idx} id = {idx}>
                                <img src={new_item.image} />
                                <p> {new_item.textMuestra} </p>
                                <button className='btn-noticias' onClick={() => { WatchNew(new_item.image, new_item.textPopUp, idx) }}>Ver mas...</button>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
