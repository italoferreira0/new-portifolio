import './Tecnologias.css';

export default function Tecnologias(props) {
    
    function setDescription(description) {
        document.querySelector('#descricao').innerHTML = description;
    }

    return(
        <section className='container text-center DivTec' id='conhecimentos'>
            <br /><h1>Tecnologias</h1><br />
            <div className='row justify-content-center'>
                <div className="col-md-6 DivTecnologias d-flex flex-wrap justify-content-center align-items-center">
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' 
                    onClick={() => 
                    setDescription('HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.')} id='iconHTML' className='Icon m-2' alt="HTML" />
                   
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' 
                    onClick={() => 
                    setDescription('CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style.')} id='iconCSS' className='Icon m-2' alt="CSS" />
                    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
                    onClick={() => 
                    setDescription('JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.')} id='iconJS' className='Icon m-2' alt="JavaScript" />
                   
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' 
                    onClick={() => 
                    setDescription('O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.')} id='iconREACT' className='Icon m-2' alt="React" />
                   
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' 
                    onClick={() => 
                    setDescription('Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, melhorando a experiência do usuário em um site amigável e responsivo.')} id='iconBootStrap' className='Icon m-4' alt="Bootstrap" />
                    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' 
                    onClick={() => 
                    setDescription('Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.')} id='iconPython' className='Icon m-4' alt="Python" />
                    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' 
                    onClick={() => 
                    setDescription('Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.')} id='iconGit' className='Icon m-4' alt="Git" />
                    
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' 
                    onClick={() => 
                    setDescription('Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o núcleo Linux.')} id='iconLinux' className='Icon m-4' alt="Linux" />
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
                    onClick={() => 
                    setDescription('MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto. Desenvolvido inicialmente pela empresa sueca MySQL AB, que foi adquirida pela Sun Microsystems e posteriormente pela Oracle Corporation')} id='iconLinux' className='Icon m-4' alt="Mysql" />
                
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <h1 id='descricao' className='Descricao '>Clique em uma skill</h1>
                </div>
            </div>
        </section>
    );
}
