import React, { useState } from "react";
import { DahboardLayout } from "../../components/DashboardLayout";
import { SMain } from "../../components/DashboardLayout/style";
import Navbar from "../../components/Navbar";


export default function Pesquisa(){

    const [contador, setContador] = useState(0);


    return(
        <>
            <Navbar />
            <DahboardLayout>
                <SMain>
                  
                    <div>
                        {
                            contador <= 4 ?
                            <button onClick={()=> setContador(contador +1)}>
                                Adicionar Nova pergunta
                            </button>
                            :<button>Adicionar Nova pergunta</button>
                        }
                      
                       <div>
                       {Array.from(Array(contador), (index) => {
                          return(
                            <input></input>
                          )
                        })}
                       </div>
                    </div>
                </SMain>
            </DahboardLayout>
        </>
    )
}