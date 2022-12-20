import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .required("o E-mail  e Obrigatorio")
    .min(3, "E-mail invalido")
    .email("e nessesario um email valido"),
  password: yup
    .string()
    .required("o Senha e Obrigatorio")
    .min(6, "o Senha precisa ter pelo mesmos 8 caracteres"),
});