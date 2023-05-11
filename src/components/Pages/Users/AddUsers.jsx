import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  let username = React.useRef();
  let email = React.useRef();
  const [gender, setGender] = useState("");
  let age = React.useRef();
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    let newUser = {
      username: username.current.value,
      email: email.current.value,
      gender: gender,
      age: age.current.value,
    };
    console.log(newUser);
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    toast.success(`User ${newUser.username} added successfully`);
    navigate("/admin/dashboard/lists/user");
  };

  return (
    <div className=" flex justify-content-center align-items-center">
      <div className="px-4 py-8 md:px-6 lg:px-8 lg:w-9">
        <div className="text-900 font-medium text-900 text-xl mb-3">
          Add New User
        </div>
        <div className="surface-card p-4 shadow-2 border-round p-fluid">
          <form className="grid formgrid" onSubmit={handleAddUser}>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="user" className="font-medium text-900">
                User Name
              </label>
              <input
                required
                type="text"
                ref={username}
                className="p-inputtext p-component"
                placeholder="Enter username"
              />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="email" className="font-medium text-900">
                Email
              </label>
              <input
                required
                type="email"
                ref={email}
                className="p-inputtext p-component"
                placeholder="Enter email"
              />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="gender" className="font-medium text-900">
                Gender
              </label>
              <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                  <RadioButton
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Male"}
                  />
                  <label htmlFor="gender" className="ml-2">
                    Male
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Female"}
                  />
                  <label htmlFor="ingredient1" className="ml-2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="age" className="font-medium text-900">
                Age
              </label>
              <input
                required
                ref={age}
                type="number"
                max="99"
                min="18"
                className="p-inputtext p-component"
                placeholder="Enter age"
              />
            </div>

            <div className="surface-border border-top-1 opacity-50 mb-2 col-12"></div>
            <div className="flex flex-wrap justify-content-start gap-3">
              <button
                aria-label="Add User"
                className="p-button p-component w-auto"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-plus"></span>
                <span className="p-button-label p-c">Add User</span>
                <span role="presentation" className="p-ink"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
