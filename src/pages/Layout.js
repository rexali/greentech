import React from "react";
import { Outlet } from "react-router-dom";

import '../App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Sidebar from "../components/Sidebar";
import FloatingPoint from "../components/FloatingPoint";

const Layout = () => {

    return (
        <div className="body">
            <Header />
            <main className="main">

                <div className="row">

                    <div className="col-3 col-s-3 menu">
                        <Sidebar />
                    </div>

                    <div className="col-6 col-s-9">
                        <Outlet />
                    </div>

                    <div className="col-3 col-s-12">
                        <Aside />
                    </div>

                </div>

            </main>

            <Footer />
            <FloatingPoint />
        </div>
    )
};

export default Layout;