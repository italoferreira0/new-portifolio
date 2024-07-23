import React, { useState } from 'react';
import './Apresentacao.css';
import minhaFoto from './img/eu.jpeg'
import curriculo from './curriculo.pdf'


export default function Apresentacao(props) {

    return (
        <div className='container mb-5' id='home'>
            <div className="row align-items-center mt-1">
                <div className="col-sm-12 col-md-6 text-center text-md-left">
                    <img src={minhaFoto} alt="Minha Foto" title='Italo Ferreira' className='minhaFt img-fluid mt-5' />
                    <a href={curriculo} download><button className='btn Downlaod mt-2'>Download CV</button></a>
                </div>
                <div className="col-sm-12 col-md-6 text-center text-md-left mt-5">
                    <h3>Ola, eu sou Italo.</h3>
                    <h3>Bem-vindo ao meu portifólio.</h3>
                </div>
            </div>
            <br />
        </div>


    )
}