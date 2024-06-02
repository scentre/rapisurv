import ProjectsSection from "./ProjectsSection";
import dashboard from "../assets/dashboard.svg";

function OurProducts() {
  return (
    <div
      className="flex flex-col justify-center pt-20 px-4 bg-[#083832]  rounded-t-3xl md:rounded-t-[80px] -mt-6 md:-mt-14 md:pb-52 pb-20 "
      id="#products"
    >
      <div className="md:max-w-[773px] md:mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 text-white">
          Our Products
        </h1>
        <p className="font-normal text-sm md:text-[18px] text-center text-white">
          Innovative Tools for All Things Construction with Project Management,
          Contract Management, Procurement, Labour, Financial Management and
          Enhanced Collaboration.
        </p>
      </div>

      <ProjectsSection
        heading="Rapisurv"
        paragraph=" Rapisurv is an industry-specific enterprise system for successful
          construction and infrastructure project delivery. It provides
          end-to-end solutions with integrated applications for owners and
          contractors, saving time and money while enhancing cross-functional
          collaboration and real-time insight."
        img={dashboard}
      />
      <ProjectsSection
        heading="Rapisurv Ai"
        paragraph="Rapisurv ai is an industry-specific predictive and generative artificial intelligence solution that helps construction and infrastructure project planners achieve better results, we want your project to succeed by giving you tools that can help you see further into the future before the you start. This can help estimators see further ahead and help initiatives planners to decide on which initiative should go forward. "
        img={dashboard}
      />
    </div>
  );
}

export default OurProducts;
