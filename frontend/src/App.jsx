import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ReviewAnalysis from "./pages/ReviewAnalysis";
import BusinessRecommendation from "./pages/BusinessRecommendation";
import FriendRecommendation from "./pages/FriendRecommendation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/analysis" element={<ReviewAnalysis />} />
          <Route path="/business" element={<BusinessRecommendation />} />
          <Route path="/friends" element={<FriendRecommendation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
