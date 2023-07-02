import "../src/styles/main.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/details/Details";
import AboutPage from "./pages/about/About";
import OrderPage from "./pages/order/Order";
import LoginPage from "./pages/login/Login";
import BuildPage from "./pages/build/Build";
import NoPage from "./pages/errors/404";
import HomePage from "./pages/home/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/build/*" element={<BuildPage />} />
						<Route path="/*/details/" element={<DetailsPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/order/*" element={<OrderPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<LoginPage />} />
						<Route path="*" element={<NoPage />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
