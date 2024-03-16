import { CiClock2 } from "react-icons/ci";
import { BsFire } from "react-icons/bs";

const Recipe = ({ recipe, handleSelectedItem }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_id,
  } = recipe;
  return (
    <div className="flex flex-col p-6 border-2 rounded-2xl">
      <img src={recipe_image} alt="" />
      <h1 className="text-xl mt-6 mb-4 font-semibold">{recipe_name}</h1>
      <p className="text-[16px] text-[#878787]">{short_description}</p>
      <hr className="mt-4 mb-6" />
      <p className="text-lg">
        <span className="text-lg font-normal">Ingredients</span>
        <ul className="pl-8 mt-4">
          {ingredients.map((item, idx) => (
            <li
              className="list-disc font-normal text-lg text-[#878787]"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
      </p>
      <hr className="mt-4 mb-6" />
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <CiClock2 />
          <span className="text-[#282828cc] text-[16px]">
            {preparing_time} minute
          </span>
        </div>
        <div className="flex items-center gap-1">
          <BsFire />
          <span className="text-[#282828cc] text-[16px]">
            {calories} calories
          </span>
        </div>
      </div>
      <button
        onClick={() => handleSelectedItem(recipe, recipe_id)}
        className="px-4 lg:px-5 py-3 lg:py-4 bg-[#7951ff] w-1/2 border-0 hover:bg-none text-white rounded-[50px] mt-8"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
