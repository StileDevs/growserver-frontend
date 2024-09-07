import { useState } from "react";
import { LoginDashboard } from "./LoginDashboard";
import { RegisterDashboard } from "./RegisterDashboard";
import "./styles.css";

export function DashboardRoute() {
  // Check state if login opened then register closed
  const [openState, setStateOpen] = useState("none");
  return (
    <>
      <div className="m-auto w-[300px] mt-10 mb-[8vh]">
        <img src="/banner.png" loading="lazy" />
      </div>

      <div className="flex flex-col sm:flex-row h-[18vh]">
        <div className="m-auto" onClick={() => setStateOpen("login")}>
          <LoginDashboard state={openState} />
        </div>
        <div className="m-auto pb-12" onClick={() => setStateOpen("register")}>
          <RegisterDashboard state={openState} />
        </div>
      </div>
    </>
  );
}
