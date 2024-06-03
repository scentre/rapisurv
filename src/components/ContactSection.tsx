import FlexContent from "./FlexContent";

import lastImg from "../assets/final.svg";

import Button from "./Button";

// import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { ValidationError, useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactSection() {
  const [state, handleSubmit] = useForm("mknajeyo", {
    data: { "g-recaptcha-response": "" },
  });

  const handleVerify = (data: unknown) => {
    console.log(data);
  };
  // const [token, setToken] = useState<null | unknown>(null);
  // const [isVerified, setIsVerified] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const handleSubmit = async () => {
  //   if (!isVerified) {
  //     alert("Please complete the reCAPTCHA verification.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://formspree.io/f/mknajeyo", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name: "test@email.com", // Replace with form data
  //         email: "test@email.com", // Replace with form data
  //         message: "Hello world!",
  //         "g-recaptcha-response": token,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error submitting form: ${response.statusText}`);
  //     }

  //     alert("Form submitted successfully!");
  //     setLoading(false);
  //     setIsVerified(false); // Reset verification state for next submission
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while submitting the form.");
  //   }
  // };

  // function onChange(value: unknown) {
  //   console.log("Captcha value:", value);
  //   setIsVerified(true);
  //   setToken(value);
  // }
  return (
    <div className="bg-white pt-10">
      <FlexContent
        heading="Why Choose Us"
        paragraph="Our road map is your roadmap. You and your industry are not an afterthought for us, we are in the construction and infrastructure business. Our research and development are focused on the built environment and how to make difficult things easy for all people, businesses and governments that are doing construction projects. Choose us as your partner and you will be better for it"
        image={lastImg}
        className="md:flex-row"
      />

      <div
        className="bg-[#D0EFEB]  md:mx-8 px-10 py-11 md:py-0  mt-44 rounded-[40px] md:pt-14 md:flex"
        id="contact"
      >
        <div className="flex-1 ">
          <h2 className="text-[40px]">Get in Touch</h2>
          <p className="text-lg font-normal text-[#343535]">
            We're here to help. Reach out to us with any questions or to learn
            more about our services.
          </p>
        </div>

        <form className="flex-1" method="post" onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="name" className="text-[#343535]">
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 mt-1"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className="my-4">
            <label htmlFor="email" className="text-[#343535]">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-2 mt-1"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <div className=" my-4">
            <label htmlFor="message" className="text-[#343535]">
              Message
            </label>

            <textarea
              className="w-full p-4 mt-1"
              id="message"
              name="message"
              required
            ></textarea>

            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500"
            /> */}
          </div>
          <Button type="submit">submit</Button>
          {/* <ValidationError errors={state.errors} className="text-red-500" /> */}

          <div className="mt-9 pb-8">
            <ReCAPTCHA
              sitekey="6LeoHe8pAAAAAFFSwuy2GMd8IzF2Q_mdzYexe-Lr"
              onChange={handleVerify}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
