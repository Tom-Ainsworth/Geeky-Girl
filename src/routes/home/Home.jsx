import styles from "./Home.module.css";
import hero from "../../assets/images/hero.png";
import SuccessStories from "../success-stories/SuccessStories";
const Home = () => {
	const industryStateCards = [
		{
			title: "A current look at woman in the industry",
			content:
				"As of 2023, women hold 26.7% of technology jobs. Taking 	a closer look, we see that of the 141,038 women who work in the tech industry, 56% or 79,163 are women of color. Mid-size tech-sector companies led the way in promoting workplace diversity, boasting more than 53% of the	industry's leading employers.",
		},
		{
			title: "Pay Disparity",
			content:
				"Its overall national mean gender pay gap is 15.4pc, while its median is 13.8pc. Like a lot of companies on	this list, HPE said the gap is skewed in favour of men because of the low representation of women in higher-paid jobs.",
		},
		{
			title: "Lack of Female Role Models in Tech",
			content:
				"Lack of role models is one of the main challenges women in tech confront. In tech firms, women are frequently underrepresented in executive roles. According to Finances Online, Women hold less than 20 % of all leadership positions in technology.For women, this might make it challenging to develop in their jobs and accomplish their objectives.Lack of role models can sometimes cause a person to feel alone and discouraged. It's simple to believe you don't belong or are incapable of succeeding when you don't see someone relatable in a leadership role.",
		},
	];

	return (
		<div className={styles.Home}>
			<div className={styles.hero_image_outer}>
				<img
					className={styles.hero_img}
					src={hero}
					alt="geeky girl home page main images inside there is some text"
				/>
			</div>
			<div className={styles.container}>
				{industryStateCards.map(({ title, content }) => {
					return (
						<div className={styles.Card}>
							<h3>{title}</h3>
							<p>{content}</p>
						</div>
					);
				})}
			</div>
			<SuccessStories />
		</div>
	);
};

export default Home;
