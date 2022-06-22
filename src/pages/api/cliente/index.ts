import { NextApiRequest, NextApiResponse } from "next";

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {


    if(req.method === 'GET') {

        return res.status(200).json(
            [{"id":2,"nome":"api do next","tipo":"admin","email":"admin@gmail.com","telefone":"7894561265","cpf":null,"endereco":null,"bairro":null,"numero":null},
            {"id":7,"nome":"Thiago Matteus Alves","tipo":"admin","email":"thialves@gmail.com","telefone":"444444444","cpf":"445633334444","endereco":"teste","bairro":"Zona I","numero":"1000"},
            {"id":11,"nome":"Bruno Gabriel da Silva","tipo":"admin","email":"bruno@gmail.com","telefone":"44988138899","cpf":"432423423","endereco":"mei do mato","bairro":"Douradina","numero":"543"},{"id":9,"nome":"Andrey Diógenes Lima da Silva","tipo":"admin","email":"dedeidiogenes14@gmail.com","telefone":"44984365263","cpf":"0000000000","endereco":"Rua Amaro Tavares","bairro":"Alphaville","numero":"2933"},
            {"id":19,"nome":"Joás Vieira","tipo":"admin","email":"joas.vieira@gmail.com","telefone":"44988884444","cpf":"73483871101","endereco":"","bairro":"","numero":""},
            {"id":20,"nome":"anderson matheus","tipo":"colaborador","email":"andersonnanni@outlook.com","telefone":"44991370290","cpf":"123413213","endereco":"awdawd","bairro":"dawdwad","numero":"2342"}]
        )
    }

    return res.status(404).json({erro: 'pagina nao encontrada'});
    
}
