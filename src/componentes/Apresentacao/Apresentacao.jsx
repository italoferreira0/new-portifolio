import React,{useState} from 'react';
import './Apresentacao.css';
import minhaFoto from './img/eu.jpeg'
import curriculo from './curriculo.pdf'


export default function Apresentacao(props) {
    
    return(
        <section className='container-md Apresentacao' id='home'>
            <div class="row">
                <div className="col-sm DivFoto">
                    <img src={minhaFoto} alt="Minha Foto" title='Italo Ferreira' className='minhaFt img-fluid'/>
                    
                    <button className='btn Downlaod mt-4'><a href={curriculo} download>Download CV</a></button>
                    
                </div>
                
                <div class="col-sm DivSaudacao">
                    <div >
                        <br/><br />
                        <h3>Ola, eu sou Italo.</h3>
                        
                        <h3>Bem-vindo ao meu portifólio.</h3>
                
                    </div>
                </div>
                
            </div>
    
                        
        </section>
    )
}