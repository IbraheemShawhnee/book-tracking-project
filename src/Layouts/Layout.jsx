import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import MobileMenu from "../Components/MobileMenu";
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<MobileMenu />
			<Footer />
		</>
	);
};

export default Layout;
