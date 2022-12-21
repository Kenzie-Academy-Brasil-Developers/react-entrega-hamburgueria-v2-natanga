import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../context/AuthContext"
import { Input } from "../../Inputs"
import { IPerson } from "../../interface"
import { StyledButtons } from "../../styles/Buttons"
import { loginSchema } from "./loginSchema"
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types"
import { StyledLoginPage } from "./style"
import { StyledTypography } from "../../components/BaseTypography/style"
import { Link, Navigate } from "react-router-dom"

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<IPerson>({
        mode: "onBlur",
        resolver: yupResolver(loginSchema),
    })

    const { login } = useContext(AuthContext)

    const SubmtLogin: SubmitHandler<IPerson> = (data) => {
        login(data)
    }
    return (
        <StyledLoginPage>
            <section>
                <div>
                    <StyledTypography tag="h1" classText="Heading1">
                        <span> Nono's</span> Burguer
                    </StyledTypography>
                </div>
            </section>
            <section>
                <div>
                    <form onSubmit={handleSubmit(SubmtLogin)}>
                        <Input id="email" label="E-mail" type="text" placeholder="insira seu e-mail" register={register} />
                        {errors.email && <p>{errors.email.message}</p>}
                        <Input id="password" label="Senha" type="password" placeholder="insira sua senha" register={register} />
                        {errors.password && <p>{errors.password.message}</p>}
                        <StyledButtons nameButtons="bntOne">Entrar</StyledButtons>
                    </form>
                    <Link to="/Register">Cadastrar</Link>
                </div>
            </section>
        </StyledLoginPage>
    )
}

export default LoginPage