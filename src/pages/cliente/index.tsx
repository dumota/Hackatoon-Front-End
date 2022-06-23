import { useEffect, useState } from "react";
import { DahboardLayout } from "../../components/DashboardLayout";
import { SMain } from "../../components/DashboardLayout/style";
import Navbar from "../../components/Navbar";
import { BtnTop, ContainerCircleButton, NavigationButton, Table } from "./style";
import {BsFillTrash2Fill, BsPencilSquare} from 'react-icons/bs'
import {IoEyeSharp} from 'react-icons/io5';
import Modal from "../../components/Modal";
import Link from "next/link";




export default function Cliente() {

    const [itens, setItens] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Math.ceil(itens.length / itensPerPage);

    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = itens.slice(startIndex, endIndex);

    const [showModal, setShowModal] = useState<boolean>(false);




    useEffect(() => {
        const fetchData = async () => {

            const result = await fetch('api/cliente/')
                .then(response => response.json())
                .then(data => data)
            setItens(result);

        }
        fetchData();
        console.log(itens);




    }, []);



    return (

        <>
            <Navbar />
            <DahboardLayout>
                <SMain>
                    <BtnTop>
                        <button>
                        <Link href={'/pesquisa'}>Adicioinar Novo</Link>
                        </button>
                        
                        <button>Adicionar Pesquisa</button>
                    </BtnTop>
                    <Table>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Endereço</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            {currentItens.map(item => {
                                return <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.telefone}</td>
                                        <td>{item.endereco}</td>
                                        <td>
                                            <ContainerCircleButton>
                                                <button className="btn-edit" ><BsPencilSquare/></button>
                                                <button><BsFillTrash2Fill/></button>
                                                <button className="btn-view" onClick={()=> setShowModal(true)}><IoEyeSharp/></button>
                                            </ContainerCircleButton>
                                        </td>
                                    </tr>
                                </tbody>
                            })}

                        </table>
                        <NavigationButton>
                            {Array.from(Array(pages), (item, index) => {
                                return (
                                    <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                                )
                            })}
                        </NavigationButton>

                    </Table>
                    <Modal show={showModal} onClose={()=> setShowModal(false)}>
                       
                    </Modal>

                </SMain>
            </DahboardLayout>

        </>

    )
}

