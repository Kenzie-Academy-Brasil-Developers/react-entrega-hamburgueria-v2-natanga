import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("o email e Obrigatorio")
    .min(3, "E-mail invalido")
    .email("e nessesario um email valido"),
  password: yup
    .string()
    .required("o Senha e Obrigatorio")
    .matches(/(?=.*?[A-Z])/, "e nessesario pelo menos uma letra maiuscula")
    .matches(/(?=.*?[a-z])/, "e nessesario pelo menos uma letra minuscula")
    .matches(/(?=.*?[0-9])/, "e nessesario pelo menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "e nessesario pelo menos um o caractere Especial #?!@$%^&*-]"
    )
    .min(8, "o Senha precisa ter pelo mesmos 8 caracteres"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "A Senha não Confere"),
});