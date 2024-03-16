const Cooked = ({ cook }) => {
  const { recipe_name, preparing_time, calories } = cook;
  // console.log(idx);
  return (
    <tr className="text-[#878787] text-[16px] font-normal bg-[#28282808]">
      <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <th></th>
      </tr>
  );
};

export default Cooked;
