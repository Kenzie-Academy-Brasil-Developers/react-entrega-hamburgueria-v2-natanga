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
import { Link } from "react-router-dom"
import sopping from "../../assets/icons/sopping.svg"

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
            <section className="logo">
                <div>
                    <StyledTypography tag="h1" classText="Heading1">
                        <span> Nono's</span> Burguer
                    </StyledTypography>
                    <div className="slogan">
                        <figure>
                            <img src={sopping} alt="" />
                        </figure>
                        <StyledTypography tag="p" classText="Body">
                            Onde  comer tem mais sabor
                        </StyledTypography>
                    </div>
                </div>
            </section>
            <section>
                <StyledTypography tag="h3" classText="Heading2">
                    <span> Login</span>
                </StyledTypography>
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