const Cooked = ({ cook }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = cook;
  return (
    <div className="flex flex-col items-center">
      <tr>
        <th>{recipe_id}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </div>
  );
};

export default Cooked;
