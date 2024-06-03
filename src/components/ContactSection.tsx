import FlexContent from "./FlexContent";

import lastImg from "../assets/final.svg";

import Button from "./Button";
import { useState } from "react";
import Spinner from "react-spinner-material";

import { ValidationError, useForm } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import SuccessModal from "./SuccessModal";

function ContactSection() {
  const [token, setToken] = useState<string | null>("");
  const [isVerified, setIsVerified] = useState(false);

  const [state, handleSubmit, reset] = useForm("mknajeyo");

  const [, setSubmitted] = useState(true);
  const handleVerify = (data: string | null) => {
    setToken(data);
    setIsVerified(true);
  };
  console.log(token);
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

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500"
            />
          </div>
          <Button
            type="submit"
            disabled={!isVerified}
            className="disabled:bg-slate-400"
          >
            {state.submitting ? (
              <Spinner radius={20} color={"#fff"} stroke={2} visible={true} />
            ) : (
              "Submit"
            )}
          </Button>
          <ValidationError errors={state.errors} className="text-red-500" />

          <div className="mt-9 pb-8">
            <ReCAPTCHA
              sitekey="6LflSu8pAAAAAI7FNgiZs5zHV8zjbHgGurgn8F6N"
              onChange={handleVerify}
            />
          </div>
        </form>
      </div>
      <SuccessModal open={state.succeeded} onClose={() => setSubmitted(false)}>
        <div>
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-gray-900">
            Successfully removed product.
          </p>
          <button
            data-modal-toggle="successModal"
            type="button"
            className="py-2 px-3 text-sm font-medium text-center text-green-500 rounded-lg bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
            onClick={() => {
              reset();

              setSubmitted(false);
            }}
          >
            confirmed
          </button>
        </div>
      </SuccessModal>
    </div>
  );
}

export default ContactSection;
