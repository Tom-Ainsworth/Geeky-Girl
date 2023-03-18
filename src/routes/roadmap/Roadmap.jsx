import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
	return (
		<div className={styles.roadmap}>
			<h1>
				Get ahead of the curve with our <span>Path into Tech</span>
			</h1>
			<VerticalTimeline lineColor="pink">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(33, 150, 243)",
					}}
					date="2011 - present"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}>
					<h3 className="vertical-timeline-element-title">
						Creative Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Miami, FL
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design,
						Project Management, Team Leading
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(33, 150, 243)",
					}}
					date="2011 - present"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}>
					<h3 className="vertical-timeline-element-title">
						Creative Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Miami, FL
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design,
						Project Management, Team Leading
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(33, 150, 243)",
					}}
					date="2011 - present"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}>
					<h3 className="vertical-timeline-element-title">
						Creative Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Miami, FL
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design,
						Project Management, Team Leading
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Roadmap;
