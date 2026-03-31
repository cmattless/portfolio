import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";


import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
