import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectsSection = ({
  heading,
  paragraph,
  img,
}: {
  heading: string;
  paragraph: string;
  img: string;
}) => {
  return (
    <div className="md:px-20 text-white">
      <h2 className="text-2xl md:text-3xl mb-3 mt-10">{heading}</h2>

      <p className="text-sm md:text-base md:w-[60%] font-normal mb-3">
        {paragraph}
      </p>

      <Button>
        <Link to={"https://rapisurv.com"}>Learn More</Link>
      </Button>

      <img src={img} alt="" className="mt-12 w-full" />
    </div>
  );
};

export default ProjectsSection;
