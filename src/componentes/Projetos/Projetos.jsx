import './Projetos.css';
// import imc from './img/imc.png';

export default function Projetos(props) {
    return (
        <div className='container text-center mt-5' id='projetos'>
            <br />
            <h3 className='mt-5'>Projetos</h3>
            <div className="row justify-content-center mt-4">
                <div className="col-md-4 Projeto" id='ProjetoIMC'>
                 
                   <div className="button-group">
                       <button type="button" className="btn btn-dark"><a href="">Deploy</a></button>
                       <button type="button" className="btn btn-dark"><a href="">Github</a></button>
                   </div>
                </div>

                <div className="col-md-4 Projeto">
                    <h3>Em breve...</h3>
                </div>
                <div className="col-md-4 Projeto">
                    <h3>Em breve...</h3>               
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4 Projeto">
                   <h3>Em breve...</h3>
                </div>

                <div className="col-md-4 Projeto">
                    <h3>Em breve...</h3>
                </div>
                <div className="col-md-4 Projeto">
                    <h3>Em breve...</h3>               
                </div>
            </div>
        </div>
    );
}
