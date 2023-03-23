import styles from "./SuccessStories.module.css";

const SuccessStories = () => {
	return (
		<div className={styles.testimonial}>
			<figure className={styles.successCard}>
				<figcaption>
					<blockquote>
						<p>
							"Geeky Girl empowered me to pursue a career in tech.
							I'm grateful for their resources and commitment to
							supporting women in the industry.
						</p>
					</blockquote>
					<h3>Sarah Ravenside</h3>
					<h4>Delloite</h4>
				</figcaption>
			</figure>
			<figure className={styles.successCard}>
				<figcaption>
					<blockquote>
						<p>
							Geeky Girl played a crucial role in helping me
							launch my tech career. Their dedication to
							empowering women in the field is truly admirable."
						</p>
					</blockquote>
					<h3>Ursula Muller</h3>
					<h4>Facebook</h4>
				</figcaption>
			</figure>
		</div>
	);
};

export default SuccessStories;
