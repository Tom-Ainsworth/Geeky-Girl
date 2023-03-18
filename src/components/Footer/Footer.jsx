import styles from "./Footer.module.css";
import Logo from "../../assets/images/geeky_girl_logo.png";

const Footer = () => {
	return (
		<footer className={styles.footer_distributed}>
			<div className="footer-left">
				<h3>
					Geeky<span>GIRL</span>
				</h3>

				<p className={styles.footer_links}>
					<a href="#">Link</a>·<a href="#">Link</a>·
					<a href="#">Link</a>·<a href="#">Link</a>·
					<a href="#">Link</a>·<a href="#">Link</a>
				</p>

				<p className={styles.footer_companyName}>
					Tindy and her minions{" "}
				</p>

				<div className={styles.footer_icons}>
					<a href="#">
						<i className="fa fa-github"></i>
					</a>
					<a href="#">
						<i className="fa fa-github"></i>
					</a>
					<a href="#">
						<i className="fa fa-github"></i>
					</a>
					<a href="#">
						<i className="fa fa-github"></i>
					</a>
					<a href="#">
						<i className="fa fa-github"></i>
					</a>
				</div>
			</div>

			<div className={styles.footer_right}>
				<img
					src={Logo}
					alt="Company Logo"
					className={styles.footer_image}
				/>
			</div>
		</footer>
	);
};

export default Footer;
