import { Itoken } from "../../interface";

export function saveToken(token: Itoken) {
    localStorage.getItem("@TOKEN");
    const tokenSave = JSON.stringify(token);
    localStorage.setItem("@TOKEN", tokenSave);
    return true;
}
export function recoveryToken() {
    const token = localStorage.getItem("@TOKEN");
    const tokenUser = JSON.parse(token);
    return tokenUser;
}

export function removeToken() {
    localStorage.removeItem("@TOKEN");
}
