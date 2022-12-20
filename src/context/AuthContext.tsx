import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bodyLogin, IAuthContextValue, IAuthProvider } from "../interface";
import { api } from "../services/api/api";
import { loginApi } from "../services/api/loginApi";
import { saveId } from "../services/localStorage/saveId";
import { saveToken } from "../services/localStorage/saveToken";


export const AuthContext = createContext({} as IAuthContextValue)

export function AuthProvider({ children }: IProvider) {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (data: bodyLogin) => {
        const response = await loginApi(data)
        if (response.accessToken) {
            const { accessToken, user } = response;
            saveToken(accessToken)
            saveId(user)
            api.defaults.headers.Authorization = `Bearer ${accessToken}`;
            toast.success("Seja Bem Vindo Novamente");
            setUser(user)
            navigate("/Home");
            setLoading(true)
        } else {
            toast.success(`${response.statusText}`);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )


}