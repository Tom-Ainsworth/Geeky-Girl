import styles from "./Navigation.module.css";
import { Outlet, NavLink } from "react-router-dom";
import Logo from "../../assets/images/geeky_girl_logo.png";
import Footer from "../../components/Footer/Footer";

const Navigation = () => {
	return (
		<>
			<div className={styles.Navbar}>
				<nav className={styles.nav_menu}>
					<ul className={styles.nav_ul}>
						<li>
							<NavLink to="/">
								<img
									className={styles.nav_logo}
									src={Logo}
									alt="Company logo of a smiling woman with the word 'codes' as a smile"
								/>
							</NavLink>
						</li>
						<li>
							<NavLink to="roadmap">Roadmap</NavLink>
						</li>
						<li>
							<NavLink to="interview-preparation">
								Interview Prep
							</NavLink>
						</li>
						{/* <li>
							<NavLink to="success-stories">
								Success Stories
							</NavLink>
						</li> */}
						<li>
							<NavLink to="resources">Resources</NavLink>
						</li>
						<li>
							<NavLink to="team">Meet the Team</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navigation;
