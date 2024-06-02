import FlexContent from "./FlexContent";
import firstImg from "../assets/first-image.svg";
import secondImg from "../assets/second-image.svg";
import thirdImg from "../assets/third-image.svg";
import fourthImg from "../assets/fourth-image.svg";

const MainContent = () => {
  return (
    <>
      <div className="flex justify-center pt-20 px-4">
        <div className="md:max-w-[773px]">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">
            Empowering Every Role in Construction
          </h1>
          <p className="font-normal text-sm md:text-[18px] text-center text-[#343535]">
            At Isekit Technologies, we understand the challenges in
            construction. Our easily adaptable solutions for owners,
            contractors, consultants, and quantity surveyors boost productivity,
            teamwork and project success.
          </p>
        </div>
      </div>

      <FlexContent
        heading="Project Owners"
        paragraph=" Our tools give owners real-time insights, easy project management, and
          deep collaboration with contractors and consultants. Stay on top of
          every risk and opportunities to make sure that projects are finished
          on time and within budget."
        image={firstImg}
      />
      <FlexContent
        heading="Contractors"
        paragraph="Isekit’s software solutions make project planning and execution easier with superior ability to coordinate back-office operations and on-site construction management. Boost your efficiency and get better results with our powerful end-to-end integrated tools. "
        image={secondImg}
        className="md:flex-row-reverse"
      />

      <FlexContent
        heading="Quantity Surveyors"
        paragraph="Our software provides a single source of truth for quantity surveyors, managing contracts from start to finish. Seamlessly handle takeoff, tendering, estimating, cost planning, valuations, and more. Enjoy deep real-time collaboration with project owners, contractors, and consultants."
        image={thirdImg}
        className="md:flex-row"
      />

      <FlexContent
        heading="Consultant"
        paragraph="Our tools provide comprehensive solutions for management consultants in the construction and heavy engineering space, with applications for quality f, documentation, planning and reporting. You can do much more and faster with easy-to-use software applications that are seamlessly integrated to give you speed and accuracy"
        image={fourthImg}
        className="md:flex-row-reverse"
      />
    </>
  );
};

export default MainContent;
