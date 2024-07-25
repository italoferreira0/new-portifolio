import './Projetos.css';
// import imc from './img/imc.png';

export default function Projetos(props) {
    return (
        <div className='container text-center mt-5' id='projetos'>
        <br />
            <h1 className='mt-5'>Projetos...</h1>
            <br />
            <div className="row justify-content-center ">
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4" id='ProjetoIMC'>
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2">
                            <a href="https://imc-react-eight.vercel.app/" target="_blank" rel="noopener noreferrer">Deploy</a>
                        </button>
                        <button type="button" className="btn btn-dark">
                            <a href="https://github.com/italoferreira0/imc-react" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4" id='ProjetoOEE'>
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2">
                            <a href="https://simulador-oee.vercel.app/" target="_blank" rel="noopener noreferrer">Deploy</a>
                        </button>
                        <button type="button" className="btn btn-dark">
                            <a href="https://github.com/italoferreira0/simuladorOEE" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4 SemProjeto">
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2"><a href="#">Deploy</a></button>
                        <button type="button" className="btn btn-dark"><a href="#">Github</a></button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4 SemProjeto">
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2"><a href="#">Deploy</a></button>
                        <button type="button" className="btn btn-dark"><a href="#">Github</a></button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4 SemProjeto">
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2"><a href="#">Deploy</a></button>
                        <button type="button" className="btn btn-dark"><a href="#">Github</a></button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 Projeto mb-4 SemProjeto">
                    <div className="button-group">
                        <button type="button" className="btn btn-dark mb-2"><a href="#">Deploy</a></button>
                        <button type="button" className="btn btn-dark"><a href="#">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
