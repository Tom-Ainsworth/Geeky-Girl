import styles from "./Navigation.module.css";
import { Outlet, NavLink } from "react-router-dom";
import Logo from "../../assets/images/geeky_girl_logo.png";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const Navigation = () => {
	const [open, setOpen] = useState(false);

	const showMenu = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className={styles.NavBar}>
				<div className={styles.menuIcon}>
					<i
						className={`${styles.menu} fas fa-bars`}
						onClick={showMenu}></i>
				</div>

				<nav
					className={
						open
							? `${styles.slider} ${styles.open} `
							: `${styles.slider}`
					}>
					<ul>
						<div className={styles.closed}>
							<i
								className={`${styles.close} fas fa-times`}
								onClick={showMenu}></i>
						</div>
						<li>
							<NavLink to="/">
								<img
									className={styles.navLogo}
									src={Logo}
									alt="Company logo of a smiling woman with the word 'codes' as a smile"
									onClick={() => setOpen(false)}
								/>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="roadmap"
								onClick={() => setOpen(false)}>
								Roadmap
							</NavLink>
						</li>
						<li>
							<NavLink
								to="interview-preparation"
								onClick={() => setOpen(false)}>
								Interview Prep
							</NavLink>
						</li>

						<li>
							<NavLink
								to="resources"
								onClick={() => setOpen(false)}>
								Resources
							</NavLink>
						</li>
						<li>
							<NavLink to="team" onClick={() => setOpen(false)}>
								Meet the Team
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.Main}>
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default Navigation;
