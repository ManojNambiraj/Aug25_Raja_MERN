import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './Userlist'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

function UserManagement() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UserManagement
