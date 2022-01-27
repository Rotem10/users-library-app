import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AddUser from "../components/AddUser";
import UsersList from "../components/UsersList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/list' element={<UsersList />}></Route>
        <Route path='/add' element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
