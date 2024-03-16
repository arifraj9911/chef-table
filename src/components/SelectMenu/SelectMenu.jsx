const SelectMenu = ({ item, handleCurrentlyCooking }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = item;
  return (
    <div className="flex flex-col items-center">
      <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button
            onClick={() => handleCurrentlyCooking(item, recipe_id,preparing_time,calories)}
            className="btn btn-accent"
          >
            Preparing
          </button>
        </td>
      </tr>
    </div>
  );
};

export default SelectMenu;
