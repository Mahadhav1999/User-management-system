import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Home/Dashboard';
import Navbar from '../../Layout/Navbar';
import AddUsers from './AddUsers';
import EditUser from './EditUser';
import Users from './Users'

const UserHome = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/dashboard/add/user' element={<AddUsers />} />
        <Route path='/admin/dashboard/edit/:id/user' element={<EditUser />} />
        <Route path='/admin/dashboard/lists/user' element={<Users />} />
      </Routes>
    </>
  )
}

export default UserHome;