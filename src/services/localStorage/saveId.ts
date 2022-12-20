import { IIdUser } from "../../interface";


export function saveId(id: IIdUser) {
  localStorage.getItem("@USERID");
  const idSave = JSON.stringify(id);
  localStorage.setItem("@USERID", idSave);
  return true;
}
export function recoveryId() {
  const id = localStorage.getItem("@USERID");
  const idUser = JSON.parse(id);
  return idUser;
}
export function removeId() {
  const id = localStorage.removeItem("@USERID");
}