import { Routes, Route, Navigate } from "react-router-dom";
import RegisterProvider from "../context/RegisterContext";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";


export function RoutePages() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Register" element={
                <RegisterProvider>
                    <RegisterPage />
                </RegisterProvider>
            } />
            <Route path="*" element={<Navigate to={"/Home"} />} />
        </Routes>
    )

}