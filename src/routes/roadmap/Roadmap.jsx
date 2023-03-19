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
				"Checkout this free course from Codecademy. It will teach you how to write modern, clean HTML",
			linkUrl: "https://www.codecademy.com/learn/learn-html",
			linkText: "Learn HTML",
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
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(33, 150, 243)",
								}}
								date={subtitle}
								iconStyle={{
									background: "#f2d4d1",
									color: "#fffdfdc1",
								}}>
								<h4 className={styles.cardSubtitle}>
									{subtitle}
								</h4>
								<h3 className={styles.cardTitle}>{title}</h3>
								<p className={styles.cardContentIntro}>
									{contentIntro}
								</p>
								<p className={styles.cardContentAction}>
									{contentAction}
								</p>
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
