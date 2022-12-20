import { api } from "./api";


export async function getItens(){
    try{
        const response = await api.get('products')
        return response.data
    }catch(erro){
        console.log(erro);
    }
}