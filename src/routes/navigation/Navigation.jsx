import styles from "./Navigation.module.css";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<div className={styles.Navbar}>

				<nav className={styles.nav_menu}>
					
					<ul className={styles.nav_ul}>
						{/* <li><img className={styles.nav_logo} scr="" alt="our company logo a smiling woman with html elemets for eye and the word code as a smile"></img></li> */}
						<li><a href="#home"></a>home</li>
						<li><a href="#roadmap"></a>roadmap</li>
						<li><a href="#interview"></a>interview</li>
						<li><a href="#success stories"></a>success stories</li>
						<li><a href="#resources"></a>resources</li>
						<li><a href="#biuld team"></a>biuld team</li>
					</ul>





				</nav>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
