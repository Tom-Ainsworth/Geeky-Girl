import styles from "./Footer.module.css";
import Logo from "../../assets/images/geeky_girl_logo.png";

const Footer = () => {
	return (
		<footer className={styles.footer_distributed}>
			<div className="footer-left">
				<h3>
					Geeky<span>GIRL</span>
				</h3>



				<p className={styles.footer_companyName}>
					Tindy and her minions{" "}
				</p>

				<div className={styles.footer_icons}>
					<a href="https://github.com/tindyc" target='_blank' >
						<i className="fa fa-github"></i>
					</a>
					<a href="https://github.com/Benjamin-Riordan" target='_blank'>
						<i className="fa fa-github"></i>
					</a>
					<a href="https://github.com/Tom-Ainsworth" target='_blank' >
						<i className="fa fa-github"></i>
					</a>
					<a href="https://github.com/rockroman" target='_blank'>
						<i className="fa fa-github"></i>
					</a>
					<a href="https://github.com/ignasvilkas" target='_blank'>
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
