import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [deleted, setDelete] = useState(0);

  const [selectedUsers, setSelectedUsers] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  const dt = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
    setLoading(false);
  }, [deleted]);

  let handleDeleteUser = (id, username) => {
    fetch("http://localhost:4000/users/" + id, { method: "DELETE" });
    setDelete(deleted + 1);
    toast.success(`User ${username} deleted successfully with id ${id}`);
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {};

  const createdAt = () => {
    return (
      <div>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Delete"
          icon="pi pi-trash"
          className="p-button p-button-danger p-button-outlined"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedUsers || !selectedUsers.length}
        />
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </div>
    );
  };

  const usernameBodyTemplate = (rowData) => {
    return (
      <div>
        <span>{rowData.username}</span>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          tooltip="Edit User"
          tooltipOptions={{ position: "top" }}
          onClick={() => {
            navigate(`/admin/dashboard/edit/${rowData.id}/user`);
          }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button p-button-danger"
          rounded
          outlined
          severity="danger"
          tooltip="Delete User"
          tooltipOptions={{ position: "top" }}
          onClick={() => handleDeleteUser(rowData.id, rowData.username)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h3 className="m-0">Manage Users</h3>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  return (
    <div>
      <div className="card">
        <Toolbar className="mb-4 mt-3" right={rightToolbarTemplate}></Toolbar>

        <DataTable
          emptyMessage="Oop's No records to display... &#128533;"
          ref={dt}
          value={users}
          selection={selectedUsers}
          onSelectionChange={(e) => setSelectedUsers(e.value)}
          dataKey="id"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={header}
          loading={loading}
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="id"
            header="Id"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="created_at"
            header="Created At"
            sortable
            body={createdAt}
            style={{ minWidth: "9rem" }}
          ></Column>

          <Column
            field="name"
            header="Name"
            body={usernameBodyTemplate}
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="email"
            header="Email"
            sortable
            style={{ minWidth: "14rem" }}
          ></Column>
          <Column
            field="gender"
            header="Gender"
            sortable
            style={{ minWidth: "9rem" }}
          ></Column>
          <Column
            field="age"
            header="Age"
            sortable
            style={{ minWidth: "7rem" }}
          ></Column>
          <Column
            header="Actions"
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default Users;
