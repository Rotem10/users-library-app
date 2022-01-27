import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddUser from "../components/AddUser";
import UsersList from "../components/UsersList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route component={UsersList} path='/' />
            <Route component={AddUser} path='/add' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
