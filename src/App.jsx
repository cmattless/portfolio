import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PageNotFound from "./Pages/PageNotFound";
import Index from "./Pages/Projects/Index";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/projects" element={<Index />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
