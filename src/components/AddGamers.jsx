const AddGamers = ({ newPlayer, handleAdd, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter name:" onChange={newPlayer} />
      <button type="button" onClick={handleAdd}>
        {" "}
        Add Player{" "}
      </button>
    </form>
  );
};
export default AddGamers;
