import { StylederrosInputs } from "./style"

interface IerrosInputs {
    children: string|undefined
}

export const ErrosInputs = ({ children }:IerrosInputs) => {
    return (
        <>
            <StylederrosInputs>{children}</StylederrosInputs>
        </>
    )
}