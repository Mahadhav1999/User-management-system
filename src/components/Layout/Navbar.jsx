import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Dashboard",
      command: () => navigate("/admin/dashboard"),
    },
    {
      label: "Add User",
      icon: "pi pi-fw pi-plus",
      command: () => navigate("/admin/dashboard/add/user"),
    },
    {
      label: "Users List",
      icon: "pi pi-fw pi-user",
      command: () => navigate("/admin/dashboard/lists/user"),
    },
  ];

  const handleLogout = () => {
    navigate("/");
    toast.success("Logged out successfully");
  };

  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="mr-4">
      <Button
        label="Logout"
        icon="pi pi-power-off"
        className="p-button-raised"
        onClick={handleLogout}
      />
    </div>
  );

  return (
    <div>
      <div className="">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};
export default Navbar;
