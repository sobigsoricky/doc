import React, { useState } from "react";
import Home from "../screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../common";

const Controller = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)

    const handleUserAuth = () => {
        setIsLogin(!isLogin)

        if (!isLogin) {
            setOpen(true)
        }
    }

    const baseUrl = "/api/v1/";
    return (
        <>
            <Header handleUserAuth={handleUserAuth} isLogin={isLogin} setOpen={setOpen} open={open} />
            <Router>
                <div className="main-container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home isLogin={isLogin} baseUrl={baseUrl} />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default Controller;
