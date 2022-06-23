import React, { useState } from "react";
import { DahboardLayout } from "../../components/DashboardLayout";
import { SMain } from "../../components/DashboardLayout/style";
import Navbar from "../../components/Navbar";
import { Form } from "./style";
import { FaPlusCircle } from 'react-icons/fa';


export default function Pesquisa() {

    const [contador, setContador] = useState(1);
    var obj = new Object;









    return (
        <>
         
            <DahboardLayout>
                <SMain>
                    <Form >
                        <form className="form">
                            <h1>Pesquisa</h1>
                            {
                                contador <= 4 ?
                                    <button type="button" onClick={() => setContador(contador + 1)}>
                                        <span>+</span>
                                    </button>
                                    : <></>
                            }
                            <form >
                                {Array.from(Array(contador), (index) => {
                                    obj = contador
                                    console.log(obj);

                                    return (
                                        <div className="input-group">
                                                <label htmlFor="">{`Pergunta ${obj}`}</label>
                                                <input type="text" />
                                        </div>
                                    )

                                })}
                            </form>
                        </form>
                    </Form>
                </SMain>
            </DahboardLayout>
        </>
    )
}