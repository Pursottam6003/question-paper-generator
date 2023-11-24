import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutComponent = ({ children }) => {

    return (
        <>
            <Navbar />
            <h1>{children}</h1>
            <Footer />

        </>
    )
}

export default LayoutComponent;