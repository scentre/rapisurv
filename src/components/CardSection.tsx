import img2 from "../assets/Group (1).svg";
import img1 from "../assets/Group.svg";
import img3 from "../assets/Vector.svg";

function CardSection() {
  const cardContent = [
    {
      img: img1,
      h2: "Digital Transformation Initiative",
      p: `We support your digital transformation by modernizing processes and
        recommending tools, including third-party solutions, to keep you
        competitive.`,
    },
    {
      img: img2,
      h2: "Government Infrastructure",
      p: `Government departments can benefit greatly from our solutions. We offer easy-to-deploy tools that maximize taxpayer benefits and enhance transparency on public projects. Our AI tool is perfect for long-term project planning`,
    },
    {
      img: img3,
      h2: "Landscape transformation.",
      p: `Worried about your technology budget or size? We can level the playing field. Our experts help you compete with bigger companies, no matter your size`,
    },
  ];
  return (
    <>
      <div className="flex justify-center pt-20 px-4 bg-[#D0EFEB] mt-[120px] md:mt-[200px]  rounded-t-3xl md:rounded-t-[80px]">
        <div className="md:max-w-[773px]">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">
            Transforming Construction with Innovative Solutions
          </h1>
          <p className="font-normal text-sm md:text-[18px] text-center text-[#343535]">
            Boost Your Projects with the Latest Technology and Expert Support
          </p>
        </div>
      </div>

      <div className="bg-[#D0EFEB] pt-11 px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-5 pb-24 md:pb-48">
        {cardContent.map((each) => (
          <div className="bg-white py-16 px-3">
            <img src={each.img} alt="" className="pb-6" />
            <h2 className="pb-3 text-[#010203] text-[24px]">{each.h2}</h2>
            <p className="text-[14px] text-[#343535]">{each.p}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardSection;
