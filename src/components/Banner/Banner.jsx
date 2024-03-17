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
      <h1 className="text-3xl lg:text-[52px] font-bold lg:leading-[76px] lg:w-3/4">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-sm lg:text-lg font-extralight mx-2 lg:mx-0 lg:w-3/5 mt-4 lg:mt-6 mb-8 lg:mb-10">
      Experience a Symphony of Flavors Crafted by Master Chefs. From Delectable Sushi to Succulent Steaks, We Cater to Every Palate. Immerse Yourself in a Dining Experience Where Ambiance Meets Gastronomy. 
      </p>
      <div className="flex gap-4 lg:gap-[30px]  lg:text-xl font-semibold">
        <button className="px-4 lg:px-5 py-3 lg:py-4 bg-[#7951ff] border-0 hover:bg-none text-white rounded-[50px]">
          Explore now
        </button>
        <button className="px-4 lg:px-5 py-3 lg:py-4 bg-[#FFFFFF] border-0 hover:bg-none text-black rounded-[50px]">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
