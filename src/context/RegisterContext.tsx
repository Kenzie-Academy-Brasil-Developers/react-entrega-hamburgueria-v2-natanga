import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProvider, IregisterApi,IRegisterContext } from "../interface"
import { api } from "../services/api/api";

export const RegisterContext = createContext({} as IRegisterContext)


function RegisterProvider({ children }: IProvider) {
    const navigate = useNavigate();

    const registerApi = async (data: IregisterApi) => {
        try {
            const reponse = await api.post("/users", data)
            toast.success("Usuario criado com Sucesso")
            navigate("/")
        } catch (error) {
            toast.error(`algo esta errado`)
        }
    } 
    return (
        <RegisterContext.Provider value={{registerApi}}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider