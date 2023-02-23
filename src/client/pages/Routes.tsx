import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./authSingUp/SignUp";
import { HomePage } from "./home/HomePage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
