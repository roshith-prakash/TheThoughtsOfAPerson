import { Typewriter } from "react-simple-typewriter";
import { videos } from "@/data/videos";

// @ts-expect-error image import
import dp from "../assets/dp.jpeg";

const Home = () => {
  return (
    <main className="font-body bg-[#1D0D30] pb-32 relative- dark:bg-darkbg text-darkmodetext">
      {/* Hero Section*/}
      <section
        data-aos="fade-up"
        className="lg:flex py-16 lg:flex-row-reverse min-h-[80vh] lg:pt-20 pb-32"
      >
        <article className="w-full lg:flex-1 flex flex-col justify-center px-5">
          <h1 className="text-5xl font-semibold font-dmSans leading-16 text-center">
            Hey, I am <span className="font-title font-normal">Roshith!</span>
          </h1>
          <p className="h-10 text-3xl mt-5 font-semibold font-dmSans   text-center">
            <Typewriter
              typeSpeed={80}
              loop
              words={["Poet.", "Storyteller.", "Idiot."]}
            />
          </p>
        </article>
        <div className="w-full pt-14 lg:pt-0 lg:flex-1 flex justify-center items-center">
          <img
            src={dp}
            alt="Programmer"
            className="w-[70%] pointer-events-none rounded-full border-4 border-white"
          />
        </div>
      </section>

      {/* Videos */}
      <section data-aos="fade-up">
        <p className="px-5 md:px-10 text-4xl font-semibold">Videos</p>
        <div className="py-10 px-4 flex flex-wrap justify-center gap-5 items-center">
          {videos?.map((videoSrc: string) => {
            return (
              <iframe
                key={videoSrc}
                src={videoSrc}
                className="w-full max-w-[95%] rounded-xl md:max-w-xl aspect-video max-h-96"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
