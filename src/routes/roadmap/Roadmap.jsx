import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
	const roadmapData = [
		{
			id: 1,
			title: "Learning HTML",
			subtitle: "Step 1",
			contentIntro:
				"Foundations are important in any industry, and tech is no different. By learning the core concepts of web development, you will be able to apply the basics to all aspects of web development.",
			contentAction:
				"Checkout this free course from Codecademy. It will teach you how to write modern, clean HTML. Ignore the timings on the course completion times by the way. It's not a race, take as much time as you need to understand the topics covered, it's worth investing time now, to reap the rewards later.",
			linkUrl: "https://www.codecademy.com/learn/learn-html",
			linkText: "Learn It Here",
		},
		{
			id: 2,
			title: "Learning CSS",
			subtitle: "Step 2",
			contentIntro:
				"Now that you've learned HTML, it's time to make it look good! CSS, or Cascading Style Sheet is another fundamental language used in web development.",
			contentAction:
				"Checkout this free course from Codecademy. It will teach you the basics of CSS, so that you can add some style to your web pages. Once you have the basics down, have a look at our resources page for some extras on grid and flexbox",
			linkUrl: "https://www.codecademy.com/learn/learn-css",
			linkText: "Learn It Here",
		},
		{
			id: 3,
			title: "Let's Build!",
			subtitle: "Step 3",
			contentIntro:
				"Okay, so we've learnt some HTML to add WHAT we want, and some CSS to add HOW it looks. Now we want to test those skills by making a static website (a site that doesn't have any interaction)",
			contentAction:
				"For this, you should think of an idea to make a page on. If you have any friends that want a website, you could build a basic one for them, or if you're feeling ambitios, try and replicate a web page that you like the look of. It doesn't have to be perfect, but getting used to making things from scratch without following a tutorial will help you to internalise everything you've learnt so far, good luck!",
		},
		{
			id: 4,
			title: "Deploy your site",
			subtitle: "Step 4",
			contentIntro:
				"So now you have a working website, it's time to show it to the world. There are a lot of ways to do this, but Github and Github Pages is a really nice way to get started",
			contentAction:
				"Here's another course from Codecademy. We really like this site as you can tell. It can be difficult to narrow down good and bad resources online, and it can be overwhelming at first. While this is just an example, if you don't like it, try and find a site that works for your learning style, and find an equivalent course to work through.",
			linkUrl: "https://www.codecademy.com/learn/deploy-a-website",
			linkText: "Learn It Here",
		},
		{
			id: 5,
			title: "Make a Choice",
			subtitle: "Step 5",
			contentIntro:
				"At this point we advise two options. If you don't feel confident in your CSS and HTML, go back over the courses, and try to build some more projects. If you're happy, then it's time to learn Javascript!",
			contentAction:
				"Javascript is the final MAIN web development language. There are plenty of others, but HTML, CSS and JS are the core languages. Here you'll learn how to manipulate the elements that you've already created. You can make them appear and disappear, add clickable elements that perform an action once pressed, and lots more. Javascript is very powerful, and it constantly gets better. Take your time with this one, it can be difficult to get your head around. Be patient with yourself, and remember that everyone struggled with this at first. I know we did!",
			linkUrl:
				"https://www.codecademy.com/learn/introduction-to-javascript",
			linkText: "Learn It Here",
		},
		{
			id: 6,
			title: "Lets Build!",
			subtitle: "Step 6",
			contentIntro:
				"You might notice a theme developing... After learning a new major skill, it's always worth building something using that skill. JS is no different. Spend some time adding functionality to your existing projects, or feel free to add a new one from scratch.",
			contentAction:
				"Once you've built it, remember to deploy it on Github Pages so everyone can see your awesome work! As mentioned before, Javascript has a lot to it. You could stay on this step for a while to understand the core concepts, it's important to have a solid grasp on JS basics. When you're happy, move on.",
			linkUrl:
				"https://www.codecademy.com/learn/introduction-to-javascript",
			linkText: "Learn It Here",
		},
		{
			id: 7,
			title: "Learn React",
			subtitle: "Step 7",
			contentIntro:
				"React is a popular JS library used to build front end applications quickly. So far that's exactly what you've been doing, maybe not quickly, but that will come with practise!",
			contentAction:
				"React uses a syntax called JSX, which looks similar to HTML elements, but is written in Javascript. We're now onto the intermediate content, so like always, take your time and go back over anything you're unsure of.",
			linkUrl: "https://www.codecademy.com/learn/react-101",
			linkText: "Learn It Here",
		},
		{
			id: 8,
			title: "Lets Build!",
			subtitle: "Step 8",
			contentIntro:
				"You know the drill. It's time to build something using React. If you're out of ideas, refactor your existing projects to use React, or make a new repository and start from scratch on something new!",
			contentAction:
				"We've linked in another React course here for some inspiration. Scrimba is another amazing resource for learning, and their React course lets you replicate AirBnb and other modern websites. Now you have the basics, you may find the early parts of this course easy, in which case feel free to skip ahead. If not, no stress, just cement those foundations again, and check the React documentation if you're stuck",
			linkUrl: "https://scrimba.com/learn/learnreact",
			linkText: "Learn It Here",
		},
		{
			id: 9,
			title: "Make a Choice",
			subtitle: "Step 9",
			contentIntro:
				"At this point you've acquired some amazing skills that professional developers all over the world are using on a daily basis. The choice to make is whether you feel comfortable applying for jobs, or whether you want to keep learning.",
			contentAction:
				"If you want to keep learning, next up learning some backend development. This will include making a database to store your data, working with APIs and making your sites even better. If you're ready to start applying for jobs, check out this page from Gabriela De Luca. It's full of amazing advice from writing a CV and cover letter, to aceing your interviews.",
			linkUrl:
				"https://blush-pixie-9dd.notion.site/For-Job-Seekers-675ba42e81504839877d027384679fa1",
			linkText: "Get ready here",
		},
		{
			id: 10,
			title: "Learn backend",
			subtitle: "Step 10",
			contentIntro:
				"Up until now, everything we've covered is frontend based, or in other words what the end user sees on their we browser. Now it's time to go a bit deeper and learn what happens behind the scenes of a webpage.",
			contentAction:
				"This course will teach you the basics of Node.js is a runtime environment, and is growing in popularity for how companies built out the server-side code. You will need to understand the javascript we've covered so far to get the most out of this step, but you've come this far, so I'm sure you've got this! Good luck",
			linkUrl: "https://www.codecademy.com/learn/learn-node-js",
			linkText: "Learn It Here",
		},
		{
			id: 11,
			title: "Keep Learning!",
			subtitle: "Step 11",
			contentIntro:
				"There is no end to technology, and though you can't possibly learn it all, you've hopefully got an idea what you enjoy working on. Feel free to explore other languages like Python, or Java/C#.",
			contentAction:
				"As you look for jobs, pay attention to the tech stacks that are coming up frequently. The industry moves from time to time, and new technologies come in and out of popularity. The more you know, the more employable you will be. We've attached a link to a great portfolio review, to give you an idea of what to be aiming for with your projects. It is very well made, so please don't feel dishearted. You can absolutely get a job with less, but if you aim high, employers will notice.",
			linkUrl: "https://youtu.be/VjiWpGR82t0",
			linkText: "Check out a professional  portfolio",
		},
	];

	return (
		<div className={styles.roadmap}>
			<h1>
				Get ahead of the curve with our <span>Path into Tech</span>
			</h1>
			<VerticalTimeline lineColor="#5f6368">
				{roadmapData.map(
					({
						id,
						title,
						subtitle,
						contentIntro,
						contentAction,
						linkUrl,
						linkText,
					}) => {
						return (
							<VerticalTimelineElement
								key={id}
								className={styles.Card}
								contentStyle={{
									background: "#f2d5d1",
									color: "rgb(63, 68, 73)",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(63, 68, 73)",
								}}
								iconStyle={{
									background: "#f2d4d1",
									color: "#fffdfdc1",
								}}>
								<h4>{subtitle}</h4>
								<h3>{title}</h3>
								<p>{contentIntro}</p>
								<p>{contentAction}</p>
								<a
									className={styles.cardLink}
									href={linkUrl}
									target="_blank"
									referrerPolicy="no-referrer">
									{linkText}
								</a>
							</VerticalTimelineElement>
						);
					}
				)}

				<VerticalTimelineElement
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Roadmap;
