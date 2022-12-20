import { bodyLogin } from "../../interface";
import { api } from "./api";


export async function loginApi(data: bodyLogin) {
    try {
        const response = await api.post("login", data)
        return response.data
    } catch (erro) {
        return erro
    }
}