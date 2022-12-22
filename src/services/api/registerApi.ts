
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Iregister } from "../../interface"
import { api } from "./api";

export async function registerApi(data: Iregister) {
    try {
        const navigate = useNavigate();
        const reponse = await api.post("/users", data)
        console.log(reponse.statusText);
        toast.success("Usuario criado com Sucesso")
        navigate("/")
    } catch(err) {
        console.log(err);
        
        toast.error(`${err.response.data}`)
    }

}