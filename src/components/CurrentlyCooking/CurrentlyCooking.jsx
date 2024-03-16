import Cooked from "../Cooked/Cooked";

const CurrentlyCooking = ({ currentlyCooking, totalTime, totalCalories }) => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-semibold flex flex-col items-center mt-8">
        Currently Cooking:{currentlyCooking.length}
      </h3>
      <hr className="w-3/4 mx-auto mt-4 mb-6" />
      <div className=" overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
          <tr className="text-[#878787] text-[16px] font-normal">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {currentlyCooking.map((cook,idx) => (
              <Cooked key={cook.recipe_id} cook={cook} idx={idx}></Cooked>
            ))}
          </tbody>
          <tfoot>
          {currentlyCooking.length > 0 && (
        <tr className="">
          <th></th>
          <th></th>
          <th>Total Time = <span className="block"></span> {totalTime} minutes</th>
          <th>Total Calories = <span className="block"></span> {totalCalories} calories</th>
        </tr>
      )}
          </tfoot>
        </table>
      </div>
     
    </div>
  );
};

export default CurrentlyCooking;
