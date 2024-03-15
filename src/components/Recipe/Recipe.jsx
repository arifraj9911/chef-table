const Recipe = ({ recipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="flex flex-col p-6 border-2 rounded-2xl">
      <img src={recipe_image} alt="" />
      <h1 className="text-2xl mt-6 mb-4">{recipe_name}</h1>
      <p className="text-[16px]">{short_description}</p>
      <hr className="mt-4 mb-6" />
      <p className="text-lg">
        <span>Ingredients</span>
        <ul className="pl-8 mt-4">
          {ingredients.map((item, idx) => (
            <li className="list-disc" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </p>
      <hr className="mt-4 mb-6" />
      <div className="flex justify-between">
        <span>{preparing_time} minute</span>
        <span>{calories} calories</span>
      </div>
      <button className="btn btn-accent mt-12">Want to Cook</button>
    </div>
  );
};

export default Recipe;
