import { useState } from "react";
import "./App.css";
import Cooking from "./components/Cooking/Cooking";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleSelectedItem = (item, id) => {
    console.log("item selected", item);
    const newItem = [...selectedItem, item];
    const itemSelected = selectedItem.find((i) => i.recipe_id === id);
    if (!itemSelected) {
      setSelectedItem(newItem);
    } else {
      toast("Recipe already added");
    }
  };

  const handleCurrentlyCooking = (item, id, time, calories) => {
    const cookedItem = [...currentlyCooking, item];
    const removeItem = selectedItem.filter((st) => st.recipe_id !== id);

    const newTime = totalTime + time;
    const newCalories = totalCalories + calories;

    setSelectedItem(removeItem);
    setCurrentlyCooking(cookedItem);
    setTotalTime(newTime);
    setTotalCalories(newCalories);
    console.log(currentlyCooking);
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center mt-24 ">
        <h2 className="text-4xl">Our Recipes</h2>
        <p className="w-3/5 text-center mt-6 mb-12 text-[16px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
        <div className="flex gap-6">
          <Recipes handleSelectedItem={handleSelectedItem}></Recipes>
          <Cooking
            selectedItem={selectedItem}
            handleCurrentlyCooking={handleCurrentlyCooking}
            currentlyCooking={currentlyCooking}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Cooking>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
