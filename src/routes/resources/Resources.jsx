import styles from "./Resources.module.css";
import reactLogo from "../../assets/images/reactLogo.png";
import djangoLogo from "../../assets/images/djangoLogo.png";
import communitiesLogo from "../../assets/images/communitiesLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import cssLogo from "../../assets/images/cssLogo.png";
import { Fragment } from "react";

const Resources = () => {
	const resourceList = [
		{
			id: 1,
			title: "Free HTML Courses",
			body: "Learning HTML is an important first step in your web development journey and an essential skill for front- and back-end developers.",
			imageUrl:
				htmlLogo,
			links: [
				{
					id: 1,
					url: "https://www.codecademy.com/learn/learn-html",
					title: "CodeCademy - Learn HTML",
				},
				{
					id: 2,
					url: "https://www.w3schools.com/html/",
					title: "w3schools - HTML",
				},
				{
					id: 3,
					url: "https://www.freecodecamp.org/news/learn-html-beginners-course/",
					title: "FreeCodeCamp - Learn HTML",
				},
			],
		},
		
		{
			id: 2,
			title: "Free CSS Courses",
			body: "These courses gives you CSS interactive practice to start adding styles and editing layouts so you can create unique stylized web pages.",
			imageUrl:
				cssLogo,
			links: [
				{
					id: 1,
					url: "https://www.codecademy.com/learn/learn-css",
					title: "CodeCademy - Learn CSS",
				},
				{
					id: 2,
					url: "https://flexboxfroggy.com/",
					title: "FLEXBOX FROGGY",
				},
				{
					id: 3,
					url: "https://cssgridgarden.com/",
					title: "CSS Grid Garden",
				},
			],
		},
		{
			id: 3,
			title: "Free React Courses",
			body: "Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!",
			imageUrl:
				reactLogo,
			links: [
				{
					id: 1,
					url: "https://www.codecademy.com/learn/react-101",
					title: "CodeCademy - Learn React",
				},
				{
					id: 2,
					url: "https://www.udemy.com/course/react-tutorial",
					title: "Udemy - React JS FrontEnd",
				},
				{
					id: 3,
					url: "https://legacy.reactjs.org/docs/getting-started.html",
					title: "React Documentation",
				},
			],
		},
		{
			id: 4,
			title: "Free Django Courses",
			body: "Build & deploy rich web applications and restful APIs using Django. Learn the fundamentals of building a full-featured web site using Django.",
			imageUrl:
				djangoLogo,
			links: [
				{
					id: 1,
					url: "https://www.udemy.com/course/try-django-2-2-python-web-development/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-L4SyP3SNuFBdmE5dcs2ezA&utm_source=aff-campaign&LSNPUBID=JVFxdTr9V80&utm_medium=udemyads",
					title: "Udemy - Try Django",
				},
				{
					id: 2,
					url: "https://www.freecodecamp.org/news/tag/django/",
					title: "FreeCodeCamp - Python Django Web Framework",
				},
				{
					id: 3,
					url: "https://docs.djangoproject.com/en/4.1/",
					title: "Django Documentation",
				},
			],
		},
		
		{
			id: 5,
			title: "Coding Communities",
			body: "Find your favourite platform to collaborate and find solutions with female coders across the globe. Connect with Us now!",
			imageUrl:
				communitiesLogo,
			links: [
				{
					id: 1,
					url: "https://discord.me/server/join/protected/44ac42e0ff",
					title: "Discord - Girls Who Code",
				},
				{
					id: 2,
					url: "https://bit.ly/Ehcslack",
					title: "Slack - Empower Her",
				},
				{
					id: 3,
					url: "https://roadmapcommunity.slack.com/join/shared_invite/zt-tjdar436-klYzFiNFroU_zNvsE9Q2JA?ref=thehiveindex.com&utm_source=thehiveindex.com#/shared-invite/email/expanded-email-form",
					title: "Slack - RoadMap Community",
				},
			],
		},
	];

	return (

		<div>
			<h1>Resources</h1>

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
									return (
										<a key={link.id} href={link.url}>
											{link.title}
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
		</div>
	);
};

export default Resources;
