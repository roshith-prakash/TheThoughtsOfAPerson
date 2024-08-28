import { Navbar } from "../components/index";
import { currentlyReading } from "../data/currentlyReading.js";
import { completedBooks } from "../data/completedBooks.js";
import { toBeRead } from "../data/toBeRead.js";

const Home = () => {
  return (
    <div className="bg-home bg-cover bg-origin-center bg-no-repeat relative overflow-y-scroll h-screen min-w-screen">
      <Navbar />
      <div className="py-10 px-5 md:px-10 flex flex-col gap-y-10 text-xl md:text-2xl text-justify font-medium">
        {/* Intro */}
        <p className="px-8 py-10 bg-black bg-opacity-20 shadow text-white rounded-lg italic">
          Hey! I'm R, a part-time writer and fiction enthusiast. I mainly craft
          spoken word and freestyle poetry, with the occasional short story
          thrown in. I hope you enjoy your time here!
        </p>

        {/* Currently Reading */}
        <div className="px-8 py-10 bg-black bg-opacity-20 shadow text-white rounded-lg italic">
          <p className="mb-8 text-3xl"> Currently Reading : </p>
          {currentlyReading}
        </div>

        {/* Books to be read */}
        <div className="px-8 py-10 bg-black bg-opacity-20 shadow text-white rounded-lg italic">
          <p className="mb-8 text-3xl">To be read :</p>

          <ol className="flex flex-col gap-y-3 divide-y-2">
            {toBeRead.map((book, index) => {
              return (
                <li className="py-4 text-center" key={index}>
                  {book}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Books completed */}
        <div className="px-8 py-10 bg-black bg-opacity-20 shadow text-white rounded-lg italic">
          <p className="mb-8 text-3xl">Books on the Shelf:</p>

          <ol className=" flex flex-col gap-y-3 divide-y-2">
            {completedBooks.map((book, index) => {
              return (
                <li className="py-4 text-center" key={index}>
                  {book}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
