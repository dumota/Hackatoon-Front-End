import { DahboardLayout } from "../../components/DashboardLayout";
import { SMain } from "../../components/DashboardLayout/style";
import Navbar from "../../components/Navbar";
import { Container } from "./style";


export default function Pesquisa() {
    return (
        <>
            <Navbar />
            <DahboardLayout>
                <SMain>
                    <Container>
                        <div className="container">
                            <div className="card">
                                <h1>Pesquisa 1</h1>
                                <div className="content">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam mollitia quo aut! Quos omnis ratione illum,
                                        numquam libero reprehenderit beatae doloremque
                                        temporibus repellat? Repellat deserunt sequi,
                                        odit nostrum quasi eligendi.
                                    </p>
                                    <button>Ver</button>
                                </div>
                            </div>
                            <div className="card">
                                <h1>Pesquisa 1</h1>
                                <div className="content">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam mollitia quo aut! Quos omnis ratione illum,
                                        numquam libero reprehenderit beatae doloremque
                                        temporibus repellat? Repellat deserunt sequi,
                                        odit nostrum quasi eligendi.
                                    </p>
                                    <button>Ver</button>
                                </div>
                            </div>
                            <div className="card">
                                <h1>Pesquisa 1</h1>
                                <div className="content">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam mollitia quo aut! Quos omnis ratione illum,
                                        numquam libero reprehenderit beatae doloremque
                                        temporibus repellat? Repellat deserunt sequi,
                                        odit nostrum quasi eligendi.
                                    </p>
                                    <button>Ver</button>
                                </div>
                            </div>
                        </div>    
                        
                        
                    </Container>
                </SMain>
            </DahboardLayout>
        </>
    )
}