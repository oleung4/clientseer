import React from "react";
import Clients from "../clients/Clients";
import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  // we want to load the clients and sidebar in the dashboard
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
