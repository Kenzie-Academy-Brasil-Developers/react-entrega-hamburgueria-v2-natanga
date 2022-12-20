
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../Inputs"
import { Iregister } from "../../interface"
import { StyledButtons } from "../../styles/Buttons"
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api/api"
import { registerSchema } from "./registerSchema"

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Iregister>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema),
    })
    const SubmtRegister: SubmitHandler<Iregister> = async (data) => {
        const reponse = await api.post("/users", data)
    }

    return (
        <main>
            <section>
                <div>
                    <form onSubmit={handleSubmit(SubmtRegister)}>
                        <Input id="email" label="E-mail" type="text" placeholder="insira seu e-mail" register={register} />
                        {errors.email && <p>{errors.email}</p>}
                        <Input id="password" label="Senha" type="password" placeholder="insira sua senha" register={register} />
                        {errors.password && <p>{errors.password}</p>}
                        <Input id="passwordConfirm" label="Senha" type="password" placeholder="insira a mesma senha" register={register} />
                        {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
                        <Input id="name" label="Nome de Usuario" type="text" placeholder="Nome de Usuarios" register={register} />
                        {errors.name && <p>{errors.name}</p>}
                        <StyledButtons nameButtons="bntOne">Entrar</StyledButtons>
                    </form>
                </div>
            </section>
            <section>
                <div></div>
            </section>
        </main>
    )
}

export default RegisterPage