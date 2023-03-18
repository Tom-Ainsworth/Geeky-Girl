import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Roadmap from "./routes/roadmap/Roadmap";
import SuccessStories from "./routes/success-stories/SuccessStories";
import InterviewPrep from "./routes/interview-prep/InterviewPrep";
import Resources from "./routes/resources/Resources";
import Team from "./routes/team/Team";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="roadmap" element={<Roadmap />} />
				<Route path="success-stories" element={<SuccessStories />} />
				<Route
					path="interview-preparation"
					element={<InterviewPrep />}
				/>
				<Route path="resources" element={<Resources />} />
				<Route path="team" element={<Team />} />
			</Route>
		</Routes>
	);
}

export default App;
