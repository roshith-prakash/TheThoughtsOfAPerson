import { CTAButton } from "../components";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="font-inter bg-[#1D0D30] pb-32 relative- dark:bg-darkbg text-darkmodetext">
      {/* Hero Section*/}
      <section
        data-aos="fade-up"
        className="lg:flex lg:flex-row-reverse min-h-[80vh] lg:pt-20 pb-32"
      >
        <article className="w-full lg:flex-1 flex flex-col justify-center px-5">
          <h1 className="text-5xl font-semibold font-dmSans text-center">
            Hey, I am Roshith!
            <span className="text-hovercta dark:text-darkmodeCTA"> </span>
          </h1>
          <p className="h-10 text-3xl mt-5 font-semibold font-dmSans   text-center">
            <Typewriter
              typeSpeed={80}
              loop
              words={["Poet.", "Storyteller.", "Idiot."]}
            />
          </p>
          {/* <div className="mt-8 flex justify-center">
            <CTAButton
              onClick={() => {
                navigate("/about");
              }}
              text="Discover More About Me"
            />
          </div> */}
        </article>
        <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1738996888/cropped_image_opx2pq.png"
            }
            alt="Programmer"
            className="w-[70%] pointer-events-none rounded-full border-4 border-white"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
