import React from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";

const UserLogin = () => {
  const [username, setUserName] = React.useState("user");
  const [password, setPassword] = React.useState("");

  const handleUserLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div class="block-content">
      <div class="flex">
        <div class="surface-section w-full md:w-6 p-6 md:p-8">
          <div class="mb-5">
            <img
              src="https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png"
              alt="user"
              height="55"
              class="mb-3"
            />
            <div class="text-900 text-3xl font-medium mb-3">
              Welcome Back User
            </div>
            <span class="text-600 font-medium mr-2">Login to continue</span>
            <Link
              to="/auth/admin/login"
              class="font-medium no-underline text-blue-500 cursor-pointer"
            >
              Not a user ?
            </Link>
          </div>
          <form onSubmit={handleUserLogin}>
            <label for="email2" class="block text-900 font-medium mb-2">
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
            <label for="password2" class="block text-900 font-medium mb-2">
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
              class="p-button p-component w-full mt-3"
            >
              <span class="p-button-icon p-c p-button-icon-left pi pi-user"></span>
              <span class="p-button-label p-c">Sign in user</span>
              <span role="presentation" class="p-ink"></span>
            </button>
          </form>
        </div>
        <div
          class="hidden md:inline-flex w-6 bg-no-repeat bg-cover"
          style={{
            background:
              "url(https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?w=740&t=st=1675104221~exp=1675104821~hmac=31aebe594f9ba67f8bb4ac860cb6b62c39665d54d3f326aa0bb7fd3af1003cde)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default UserLogin;
