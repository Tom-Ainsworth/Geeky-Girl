import styles from "./Footer.module.css";

const Footer = () => {
	return <footer className={styles.footer-distributed}>
		             <div class="footer-left">
    
	<h3>Geeky<span>GIRL</span></h3>

	<p className={styles.footer-links}>
		<a href="#">Link</a>
		·
		<a href="#">Link</a>
		·
		<a href="#">Link</a>
		·
		<a href="#">Link</a>
		·
		<a href="#">Link</a>
		·
		<a href="#">Link</a>
	</p>

	<p className={styles.footer-companyName}>Tindy and her minions </p>

	<div className={styles.footer-icons}>

		<a href="#"><i class="fa fa-github"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>

	</div>

</div>

<div className={styles.footer-right}>

	<div className={styles.foot-img} >
		<img src="images\geeky_girl-removebg-preview_480.png" alt="" style="width:200px; border-radius:50%;"/>
	</div>

</div>


	</footer>;
};

export default Footer;
