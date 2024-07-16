import Typical from 'react-typical';
import React,{useState} from 'react';
import './Apresentacao.css';
import minhaFoto from './img/eu.jpeg'
// import curriculo from './curriculo.pdf'


export default function Apresentacao(props) {
    
    return(
        <section className='container-md Apresentacao' id='home'>
            <div class="row">
                <div className="col-sm DivFoto">
                    <img src={minhaFoto} alt="Minha Foto" title='Italo Ferreira' className='minhaFt img-fluid'/>
                    <button className='btn Downlaod mt-4'><a  download>Download CV</a></button>
                </div>
                
            </div>
    
                        
        </section>
    )
}