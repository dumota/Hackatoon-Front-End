
import Link from 'next/link';
import { Container } from './style';


export default function Login() {
    return (
        <>
            <Container>
                <div>
                    <div>

                        <h1>Bem Vindo</h1>
                      

                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input id='email' placeholder='Digite seu Email' type="text" />


                            <label htmlFor="senha">Senha</label>
                            <input id='senha' placeholder='Digite sua senha' type="password" />

                            <button>
                                
                                Logar
                            </button>
                            <Link href={"/dashboard"}>LOgin</Link>
                        </form>

                    </div>
                </div>
            </Container>
        </>


    )
}