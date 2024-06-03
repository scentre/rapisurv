import CardSection from "./components/CardSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import OurProducts from "./components/OurProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HeroSection />

      <MainContent />
      <CardSection />
      <OurProducts />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
