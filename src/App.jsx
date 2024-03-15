import "./App.css";
import Cooking from "./components/Cooking/Cooking";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center mt-24 ">
        <h2 className="text-4xl">Our Recipes</h2>
        <p className="w-3/5 text-center mt-6 mb-12 text-[16px] font-normal">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        <div className="flex gap-6">
          <Recipes></Recipes>
          <Cooking></Cooking>
        </div>
      </div>
    </>
  );
}

export default App;
