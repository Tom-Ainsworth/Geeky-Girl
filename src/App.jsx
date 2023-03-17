import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Roadmap from "./routes/roadmap/Roadmap";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="roadmap" element={<Roadmap />} />
			</Route>
		</Routes>
	);
}

export default App;
