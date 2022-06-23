import { DahboardLayout } from "../../components/DashboardLayout";
import { SMain } from "../../components/DashboardLayout/style";
import Navbar from "../../components/Navbar";
import { Form } from "./style";


export default function Cliente() {
    return (
        <>
            
            <DahboardLayout>
                <SMain>
                    <Form>
                        <div className="form">
                            <form>

                                <div className="form-header">
                                    <div className="title"><h1>Cadatro de Clientes</h1></div>
                                </div>

                                <div className="input-group">
                                    <div className="input-box">
                                        <label htmlFor="">Nome</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">E-mail</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">Telefone</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">CPF</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">Cidade</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">Endereço</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">Bairro</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">Numero</label>
                                        <input type="text" />
                                    </div>

                                </div>

                                <div className="continue-button">
                                        <button>Salvar</button>
                                 </div>

                            </form>
                        </div>
                    </Form>
                </SMain>
            </DahboardLayout>
        </>
    )
}