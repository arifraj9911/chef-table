import Cooked from "../Cooked/Cooked";

const CurrentlyCooking = ({ currentlyCooking, totalTime, totalCalories }) => {
  return (
    <div>
      <h3 className="text-2xl flex flex-col items-center mt-8">
        Currently Cooking:{currentlyCooking.length}
      </h3>
      <hr className="w-3/4 mx-auto mt-4 mb-6" />
      <div className="flex flex-col items-center">
        <table className="table">
          {/* head */}
          <thead>
            {currentlyCooking.map((cook) => (
              <Cooked key={cook.recipe_id} cook={cook}></Cooked>
            ))}
          </thead>
          <tbody>{/* row 1 */}</tbody>
        </table>
      </div>
      {currentlyCooking.length > 0 && (
        <div>
          <span>Total Time = {totalTime}</span>
          <span>Total Calories = {totalCalories}</span>
        </div>
      )}
    </div>
  );
};

export default CurrentlyCooking;
