import { useState } from "react";
import "./App.css";
import Cooking from "./components/Cooking/Cooking";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

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
      toast(`${item.recipe_name} already added`);
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
        <h2 className="text-3xl lg:text-[40px] font-semibold">Our Recipes</h2>
        <p className="lg:w-3/5 text-center mt-3 lg:mt-6 mb-12 text-sm lg:text-[16px] font-normal text-[#150b2b99]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-6 lg:items-start">
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
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
