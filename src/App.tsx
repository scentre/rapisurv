import CardSection from "./components/CardSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import OurProducts from "./components/OurProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeoHe8pAAAAAFFSwuy2GMd8IzF2Q_mdzYexe-Lr">
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
    </GoogleReCaptchaProvider>
  );
}

export default App;
