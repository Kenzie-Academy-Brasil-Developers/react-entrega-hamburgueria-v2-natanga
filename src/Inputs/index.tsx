import { IIputProps } from "../interface";
import { StylesInput } from "./style";



export function Input({ id, label, type, placeholder, register }:IIputProps) {
    return (
        <StylesInput>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder}  {...register(`${id}`)}/>
        </StylesInput>
    )
}