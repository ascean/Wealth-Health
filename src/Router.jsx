import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import ListEmployees from "./pages/listEmployees/ListEmployees";
import NewEmployee from "./pages/newEmployee/NewEmployee";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<NewEmployee />} />
                <Route path="list" element={ <ListEmployees /> } />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
