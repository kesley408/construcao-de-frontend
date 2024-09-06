import InputPesquisar from "./InputPesquisar";
import Logo from "./Logo";
import Titulo from "./Titulo";

function Cabecalho () {
    return (
        <header>
            <Logo imagem="https://www.svgrepo.com/show/382151/education-graduation-learning-school-study.svg" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online"/>
            <InputPesquisar/>
            <Logo imagem="" Texto=""/>
        </header>
    )
}

export default Cabecalho;