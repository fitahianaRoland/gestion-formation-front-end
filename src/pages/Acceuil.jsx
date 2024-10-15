import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Acceuil = () => {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acceuil;
