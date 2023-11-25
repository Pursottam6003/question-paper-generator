import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutComponent = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="layout-main">
                {children}
            </div>
            <Footer />

        </>
    )
}

export default LayoutComponent;