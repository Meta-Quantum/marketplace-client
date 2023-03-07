import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundRoute } from "./notFound/NotFoundRoute";
import { PageTypes } from "./PageTypes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {PageTypes.map((page) => {
          const Component = page.component;
          console.log(page.path);

          return <Route key={page.type} path={page.path} element={<Component />} />;
        })}
        <Route path="*" element={<NotFoundRoute.Component />} />
      </Routes>
    </>
  );
};
