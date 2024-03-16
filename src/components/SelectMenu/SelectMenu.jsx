const SelectMenu = ({ item, handleCurrentlyCooking, idx }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = item;
  return (
    <tr className="text-[#878787] text-[16px] font-normal bg-[#28282808]">
      <th>{idx + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <th>
        <button
          onClick={() =>
            handleCurrentlyCooking(item, recipe_id, preparing_time, calories)
          }
          className="px-4 lg:px-5 py-3 lg:py-4 bg-[#7951ff] border-0 hover:bg-none text-white rounded-[50px]"
        >
          Preparing
        </button>
      </th>
    </tr>
  );
};

export default SelectMenu;
