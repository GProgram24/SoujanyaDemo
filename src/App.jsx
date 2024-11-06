import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  const getHeaderComponent = () => {
    const headerRoutes = ["/", "/active-pharmaceutical-ingredients"];

    if (headerRoutes.includes(location.pathname)) {
      return <Header />;
    }
    return null; // In case there's no matching route, return null or a default header
  };

  return (
    <div className="w-full custom-scroll h-screen overflow-y-auto overflow-x-hidden">
      {getHeaderComponent()}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
