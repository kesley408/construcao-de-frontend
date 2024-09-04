import BotaoSubmit from "../components/BotaoSubmit";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Rodape from "../components/Rodape";
import Titulo from "../components/Titulo";

function Login() {
    return (
        <>
        <main>
            <Logo/>
            <Titulo/>
            <InputEmail/>
            <InputSenha/>
            <BotaoSubmit/>
            <Link/>
        </main>
        <Rodape/>
        </>
    )
}

export default Login;