import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { videos } from "../data/videos";

// @ts-expect-error import error
import dp from "../assets/dp.jpeg";

const Home = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1D0D30] to-[#2D1B40] text-white font-body">
      {/* Hero Section */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className=" mx-auto max-w-4xl px-4 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="relative mx-auto mb-8 h-48 w-48 md:h-64 md:w-64">
            <img
              src={dp || "/placeholder.svg"}
              alt="Roshith"
              className="h-full w-full rounded-full border-4 border-purple-300 object-cover shadow-lg shadow-purple-900/30"
            />
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hey, I am <span className="font-title">Roshith!</span>
          </h1>

          <div className="flex h-16 items-center justify-center">
            <h2 className="text-2xl font-medium text-purple-100 md:text-4xl">
              <Typewriter
                typeSpeed={80}
                loop
                words={["Poet.", "Storyteller.", "Idiot."]}
              />
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100/80 md:text-xl">
            Crafting stories that resonate, poems that inspire, and moments that
            last forever.
          </p>

          <button
            onClick={scrollToContent}
            className="mx-auto cursor-pointer mt-8 flex items-center gap-2 rounded-lg border-2 border-purple-400 bg-purple-900/30 px-6 py-3 text-purple-100 transition-all duration-300 hover:bg-purple-800/50"
          >
            Explore My Work
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-lg bg-purple-900/30 p-1">
            {["videos", "poems", "stories"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md cursor-pointer px-6 py-2 capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-purple-700 text-white"
                    : "text-purple-200 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "videos" && (
          <div className="space-y-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <h2 className="mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
              Featured Videos
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {videos?.map((video, index) => (
                <iframe
                  loading="lazy"
                  key={video?.videoSrc}
                  src={video?.videoSrc}
                  className="w-full max-w-[95%] rounded-xl md:max-w-xl aspect-video max-h-96"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </div>
        )}

        {activeTab === "poems" && (
          <div className="text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <h2 className="mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              My Poems
            </h2>
            <div className="mx-auto max-w-2xl">
              <div className="rounded-lg border border-purple-700/30 bg-purple-900/20 p-8">
                <p className="mb-4 text-xl text-purple-100/80">
                  Coming soon...
                </p>
                <p className="text-purple-300/70">
                  A collection of heartfelt verses and poetic expressions that
                  capture the essence of human experience.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stories" && (
          <div className="text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <h2 className="mb-8 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              My Stories
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos
                ?.filter((video) => video?.type == "story")
                ?.map((video, index) => (
                  <iframe
                    loading="lazy"
                    key={video?.videoSrc}
                    src={video?.videoSrc}
                    className="w-full max-w-[95%] rounded-xl md:max-w-xl aspect-video max-h-96"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ))}
            </div>
          </div>
        )}
      </section>

      {/* Quote Section */}
      <section className="bg-purple-900/20 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-[fadeInUp_0.8s_ease-out_forwards]">
            <h2 className="mb-6 text-2xl font-light italic text-purple-100 md:text-3xl">
              "We read and write poetry because we are members of the human
              race. And the human race is filled with passion. And medicine,
              law, business, engineering, these are noble pursuits and necessary
              to sustain life. But poetry, beauty, romance, love, these are what
              we stay alive for."
            </h2>
            <p className="text-lg text-purple-300">— Dead Poets Society</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
        <div className=" animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Let's Connect
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-purple-100/80 md:text-xl">
            Interested in collaborations or just want to say hello? Reach out!
          </p>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/thethoughtsofaperson",
                "_blank"
              )
            }
            className="rounded-lg cursor-pointer bg-purple-700 px-8 py-3 text-white transition-all duration-300 hover:bg-purple-600 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#150A20] px-4 py-8 text-center text-purple-300/70">
        <p>© {new Date().getFullYear()} Roshith. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-6 right-6  flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg transition-all duration-300 hover:bg-purple-600"
          aria-label="Scroll to top"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
};

export default Home;
