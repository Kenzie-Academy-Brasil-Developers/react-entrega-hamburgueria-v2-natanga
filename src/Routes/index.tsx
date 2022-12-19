import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";


export function RoutePages() {
    return (
        <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to={"/Home"} />}/>
        </Routes>
    )

}