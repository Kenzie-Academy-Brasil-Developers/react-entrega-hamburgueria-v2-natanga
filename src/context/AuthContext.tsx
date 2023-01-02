import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bodyLogin, IAuthContextValue, IProvider } from "../interface";
import { api } from "../services/api/api";
import { loginApi } from "../services/api/loginApi";
import { saveId } from "../services/localStorage/saveId";
import { saveToken } from "../services/localStorage/saveToken";
import { recoveryToken } from "../services/localStorage/saveToken"


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
            setLoading(true)
            navigate("/Home");
        } else {
            toast.success(`${response.statusText}`);
        }
    }

    const AuthLogin =  () => {
        const token = recoveryToken()
        if (!token) {
            navigate("/")
        }
        api.defaults.headers.Authorization = `Bearer ${token}`
    }

    useEffect(AuthLogin,[])

    return (
        <AuthContext.Provider value={{ user, login, loading, setLoading ,AuthLogin}}>
            {children}
        </AuthContext.Provider>
    )


}