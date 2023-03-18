import styles from "./Resources.module.css";

const Resources = () => {
	const resourceList = [
		{
			id: 1,
			title: "Free React Courses",
			body: "Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!",
			imageUrl:
				"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
			links: [
				{
					url: "https://www.codecademy.com/learn/react-101",
					title: "CodeCademy - Learn React",
				},
				{
					url: "https://www.udemy.com/course/react-tutorial",
					title: "Udemy - React JS FrontEnd",
				},
				{
					url: "https://legacy.reactjs.org/docs/getting-started.html",
					title: "React Documentation",
				},
			],
		},
		{
			id: 2,
			title: "Free React Courses",
			body: "Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!",
			imageUrl:
				"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
			links: [
				{
					url: "https://www.codecademy.com/learn/react-101",
					title: "CodeCademy - Learn React",
				},
				{
					url: "https://www.udemy.com/course/react-tutorial",
					title: "Udemy - React JS FrontEnd",
				},
				{
					url: "https://legacy.reactjs.org/docs/getting-started.html",
					title: "React Documentation",
				},
			],
		},
		{
			id: 3,
			title: "Free React Courses",
			body: "Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!",
			imageUrl:
				"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
			links: [
				{
					url: "https://www.codecademy.com/learn/react-101",
					title: "CodeCademy - Learn React",
				},
				{
					url: "https://www.udemy.com/course/react-tutorial",
					title: "Udemy - React JS FrontEnd",
				},
				{
					url: "https://legacy.reactjs.org/docs/getting-started.html",
					title: "React Documentation",
				},
			],
		},
	];

	return (
		<div className={styles.resources}>
			{resourceList.map((resource) => (
				<div key={resource.id} className={styles.card}>
					<img
						src={resource.imageUrl}
						className={styles.card_image}
					/>

					<div className={styles.card_content}>
						<h2 className={styles.card_title}>{resource.title}</h2>
						<p className={styles.card_text}>{resource.body}</p>

						<div className={styles.dropdown}>
							<span>Links</span>
							<div className={styles.dropdown_content}>
								{resource.links.map((link) => {
									return <a href={link.url}>{link.title}</a>;
								})}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Resources;
