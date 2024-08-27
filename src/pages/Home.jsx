import { Navbar } from "../components/index";
import { currentlyReading } from "../data/currentlyReading.js";
import { completedBooks } from "../data/completedBooks.js";
import { toBeRead } from "../data/toBeRead.js";

const Home = () => {
  return (
    <div className="bg-home bg-cover bg-origin-center bg-no-repeat relative min-h-screen min-w-screen">
      <Navbar />
      <div className="py-10 px-5 md:px-10 flex flex-col gap-y-10">
        {/* Intro */}
        <p className="px-8 py-10 bg-white bg-opacity-15 text-white text-2xl rounded-lg italic text-justify">
          Hey! I'm R, a part-time writer and fiction enthusiast. I mainly craft
          spoken word and freestyle poetry, with the occasional short story
          thrown in. I hope you enjoy your time here!
        </p>

        {/* Currently Reading */}
        <div className="px-8 py-10 bg-white bg-opacity-15 text-white text-2xl rounded-lg italic text-justify">
          <p className="mb-5 text-3xl"> Currently Reading : </p>
          {currentlyReading}
        </div>

         {/* Books to be read */}
        <div className="px-8 py-10 bg-white bg-opacity-15 text-white text-2xl rounded-lg italic text-justify">
          <p className="mb-5 text-3xl">To be read :</p>

          <ol className="list-decimal pl-8 flex flex-col gap-y-3">
            {toBeRead.map((book, index) => {
              return <li key={index}>{book}</li>;
            })}
          </ol>
        </div>

        {/* Books completed */}
        <div className="px-8 py-10 bg-white bg-opacity-15 text-white text-2xl rounded-lg italic text-justify">
          <p className="mb-5 text-3xl">Books on the Shelf:</p>

          <ol className="list-decimal pl-8 flex flex-col gap-y-3">
            {completedBooks.map((book, index) => {
              return <li key={index}>{book}</li>;
            })}
          </ol>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
