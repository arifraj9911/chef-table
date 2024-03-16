import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleSelectedItem }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="lg:w-3/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleSelectedItem={handleSelectedItem}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
