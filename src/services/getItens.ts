import { api } from "./api";


export async function getItens(){
    try{
        const response = await api.get('products')
        return response
    }catch(erro){
        console.log(erro);
    }
}