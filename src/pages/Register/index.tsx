
import { SubmitHandler, useForm } from "react-hook-form"
import { Iregister } from "../../interface"
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api/api"
import { registerSchema } from "./registerSchema"
import { StyledRegisterPage } from "./style"
import { Input } from "../../Inputs";
import { StyledButtons } from "../../styles/Buttons";
import { StyledTypography } from "../../components/BaseTypography/style";
import { Link } from "react-router-dom";
import { ErrosInputs } from "../../components/errosInputs";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Iregister>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema),
    })
    const SubmtRegister: SubmitHandler<Iregister> = async (data) => {
        const reponse = await api.post("/users", data)
    }

    return (
        <StyledRegisterPage>
            <section>
                <StyledTypography classText="Heading2" tag="h2">
                    Cadastro
                </StyledTypography>
                <div>
                    <form onSubmit={handleSubmit(SubmtRegister)}>
                        <Input id="email" label="E-mail" type="text" placeholder="insira seu e-mail" register={register} />
                        {errors.email && <ErrosInputs>{errors.email.message}</ErrosInputs>}
                        <Input id="password" label="Senha" type="password" placeholder="insira sua senha" register={register} />
                        {errors.password && <ErrosInputs>{errors.password.message}</ErrosInputs>}
                        <Input id="passwordConfirm" label="Senha" type="password" placeholder="insira a mesma senha" register={register} />
                        {errors.passwordConfirm && <ErrosInputs>{errors.passwordConfirm.message}</ErrosInputs>}
                        <Input id="name" label="Nome de Usuario" type="text" placeholder="Nome de Usuarios" register={register} />
                        {errors.name && <ErrosInputs>{errors.name.message}</ErrosInputs>}
                        <StyledButtons nameButtons="bntOne">Cadastrar</StyledButtons>
                    </form>
                <Link to="/">Login</Link>
                </div>
            </section>
        </StyledRegisterPage>
    )
}

export default RegisterPage