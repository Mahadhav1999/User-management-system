import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [username, setUserName] = React.useState("admin");
  const [password, setPassword] = React.useState("admin");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      toast.success(`Successfully logged in as ${username}`);
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="block-content">
      <div className="flex">
        <div className="w-full md:w-6 p-6 md:p-8">
          <div className="mb-5">
            <img
              src="https://static.thenounproject.com/png/95188-200.png"
              alt="admin"
              height="55"
              className="mb-3"
            />
            <div className="text-900 text-3xl font-medium mb-3">
              Welcome Back Admin
            </div>
            <span className="text-600 font-medium mr-2">Login to continue</span>
            <Link
              to="/auth/user/login"
              className="font-medium no-underline text-blue-500 cursor-pointer"
            >
              Not a admin ?
            </Link>
          </div>
          <form onSubmit={handleAdminLogin}>
            <label htmlFor="email2" className="block text-900 font-medium mb-2">
              Username
            </label>
            <div className="col-12 md:col-12">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <label
              htmlFor="password2"
              className="block text-900 font-medium mb-2"
            >
              Password
            </label>
            <div className="col-12 md:col-12">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-eye"></i>
                </span>
                <InputText
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              aria-label="Sign In"
              className="p-button p-component w-full mt-3"
            >
              <span className="p-button-icon  p-button-icon-left pi pi-user"></span>
              <span className="p-button-label p-c">Sign In admin</span>
              <span role="presentation" className="p-ink"></span>
            </button>
          </form>
        </div>
        <div
          className="hidden md:inline-flex w-6 bg-no-repeat bg-cover"
          style={{
            background:
              "url(https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1678797882~exp=1678798482~hmac=5ba89a40e6b25c062b7477efe7e8b75bb4fb722e329d9da817914509fc53537b)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AdminLogin;
