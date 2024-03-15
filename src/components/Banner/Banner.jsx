import banner from "../../assets/Images/banner.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0.00deg, rgba(21, 11, 43, 0.9),rgba(21, 11, 43, 0) 100%),url(${banner})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="rounded-2xl text-white flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl w-3/5">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-lg font-normal w-3/5 mt-6 mb-10">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex gap-8">
        <button className="btn btn-accent rounded-[50px]">Explore now</button>
        <button className="btn rounded-[50px]">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
