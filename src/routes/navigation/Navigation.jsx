import styles from "./Navigation.module.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/images/geeky_girl_logo.png";
import Footer from "../../components/Footer/Footer";

const Navigation = () => {
	return (
		<>
			<div className={styles.Navbar}>
				<nav className={styles.nav_menu}>
					<ul className={styles.nav_ul}>
						<li>
							<Link to="/">
								<img
									className={styles.nav_logo}
									src={Logo}
									alt="Company logo of a smiling woman with the word 'codes' as a smile"
								/>
							</Link>
						</li>
						<li>
							<Link to="roadmap">Roadmap</Link>
						</li>
						<li>
							<Link to="interview-preparation">
								Interview Prep
							</Link>
						</li>
						<li>
							<Link to="success-stories">Success Stories</Link>
						</li>
						<li>
							<Link to="resources">Resources</Link>
						</li>
						<li>
							<Link to="team">Meet the Team</Link>
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
