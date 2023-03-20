import styles from "./Team.module.css";
import bossman from "../../assets/images/bossman.jpeg";
import benji from "../../assets/images/benji.jpeg";
import ignas from "../../assets/images/ignus.png";
import rockman from "../../assets/images/rockman.jpeg";
import tindy from "../../assets/images/tindy.jpeg";

const Team = () => {
	const teamMembers = [
		{
			imageSrc: bossman,
			imageAlt: "our fearless leader tom",
			name: "Tom",
			bio: "Hey, I'm Tom! I'm a Junior Full Stack Developer at Commodities Engineering mainly using Java, and I love working with React in my own time.",
			linkUrl: "https://github.com/Tom-Ainsworth",
		},
		{
			imageSrc: tindy,
			imageAlt: "our creative director and the real boss",
			name: "Tindy",
			bio: "Passionate Coder and chinchilla mum! When I'm not coding, you'll find me training Brazilian jujitsu or skydiving - I love a good sweat and adrenaline rush! Always on the lookout for exciting new programming projects!",
			linkUrl: "https://github.com/tindyc",
		},
		{
			imageSrc: rockman,
			imageAlt: "does as it says on the tin he is a rock",
			name: "Roman",
			bio: "Junior Software Developer,Father and a Husband!! I’m currently learning Django 👯 I’m looking to collaborate with other developers 🥅 2022 Goals: Learn more about backend technologies My hobbies are reading, coding and ocassionaly gaming",
			linkUrl: "https://github.com/rockroman",
		},
		{
			imageSrc: benji,
			imageAlt: "the support",
			name: "Benji",
			bio: "Hey, I'm Benji! I'm a student at CI, having fun learning.",
			linkUrl: "https://github.com/ignasvilkas",
		},
		{
			imageSrc: ignas,
			imageAlt: "the man with all the plans",
			name: "Ignas",
			bio: "Hey, I'm Ignas I'm a student at CI, having fun learning",
			linkUrl: "https://github.com/Benjamin-Riordan",
		},
	];

	return (
		<>
			<h1>Meet the Dev Team</h1>
			<div className={styles.container}>
				{teamMembers.map(
					({ imageSrc, imageAlt, name, bio, linkUrl }) => {
						return (
							<div key={name} className={styles.Card}>
								<img
									src={imageSrc}
									alt={imageAlt}
									className={styles.CardImage}
								/>
								<div className={styles.CardText}>
									<h1>{name}</h1>

									<p>{bio}</p>
								</div>
								<a
									href={linkUrl}
									target={"_blank"}
									className={styles.CardIcon}>
									<i className="fa fa-github"></i>
								</a>
							</div>
						);
					}
				)}
			</div>
		</>
	);
};

export default Team;
