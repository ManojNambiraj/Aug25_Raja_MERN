import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './Userlist'

function UserManagement() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default UserManagement
