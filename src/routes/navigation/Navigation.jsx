import styles from "./Navigation.module.css";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<div className={styles.Navbar}>Navbar Code</div>
			<Outlet />
		</>
	);
};

export default Navigation;
