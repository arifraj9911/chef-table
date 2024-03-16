import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import SelectMenu from "../SelectMenu/SelectMenu";

const Cooking = ({
  selectedItem,
  handleCurrentlyCooking,
  currentlyCooking,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-full lg:w-2/5 border-2 rounded-2xl">
      <h3 className="text-2xl font-semibold flex flex-col items-center mt-8">
        Want to Cook:{selectedItem.length}
      </h3>
      <hr className="w-3/4 mx-auto mt-4 mb-6" />
      <div className="overflow-x-auto">
        <table className="table">
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
            {selectedItem.map((item, idx) => (
              <SelectMenu
                key={item.id}
                item={item}
                handleCurrentlyCooking={handleCurrentlyCooking}
                idx={idx}
              ></SelectMenu>
            ))}
          </tbody>
        </table>
      </div>
      <CurrentlyCooking
        currentlyCooking={currentlyCooking}
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></CurrentlyCooking>
    </div>
  );
};

export default Cooking;
