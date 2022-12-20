import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";


export function RoutePages() {
    return (
        <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to={"/Home"} />}/>
        </Routes>
    )

}