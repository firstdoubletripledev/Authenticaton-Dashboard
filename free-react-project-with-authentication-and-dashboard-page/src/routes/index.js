import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage";

export default () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    );
}