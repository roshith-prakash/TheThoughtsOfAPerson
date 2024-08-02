function App() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute z-10 top-0 left-0 h-full w-full flex flex-col py-20 xs:pb-40 justify-between font-medium text-white text-4xl italic">
        <p className="text-center -ml-5 animate-pulse">
          The Thoughts of A Person
        </p>
      </div>
      <img
        className="object-cover h-full w-full"
        src="https://res.cloudinary.com/do8rpl9l4/image/upload/v1722595996/The_Moon_mrsvdx.jpg"
      />
    </div>
  );
}

export default App;
