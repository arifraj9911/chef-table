import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import SelectMenu from "../SelectMenu/SelectMenu";

const Cooking = ({
  selectedItem,
  handleCurrentlyCooking,
  currentlyCooking,
  totalTime,
  totalCalories
}) => {

  return (
    <div className="w-2/5 border-2 rounded-2xl">
      <h3 className="text-2xl flex flex-col items-center mt-8">
        Want to Cook:{selectedItem.length}
      </h3>
      <hr className="w-3/4 mx-auto mt-4 mb-6" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            {selectedItem.map((item) => (
              <SelectMenu
                key={item.id}
                item={item}
                handleCurrentlyCooking={handleCurrentlyCooking}
               
              ></SelectMenu>
            ))}
          </thead>
          <tbody>{/* row 1 */}</tbody>
        </table>
      </div>
      <CurrentlyCooking currentlyCooking={currentlyCooking} totalTime={totalTime} totalCalories={totalCalories}></CurrentlyCooking>
    </div>
  );
};

export default Cooking;
