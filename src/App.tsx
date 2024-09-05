import { Routes, Route } from "react-router-dom";
import { DashboardRoute } from "./routes/player/login/dashboard";
import { RootRoute } from "./routes/root";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />
      <Route path="/player/login/dashboard" element={<DashboardRoute />} />
    </Routes>
  );
}
