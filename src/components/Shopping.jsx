import { useState } from "react";

const Shopping = () => {
  const [itemName, setItemName] = "";
  const [items, setItems] = [];

  return (
    <form>
      <input type="text" name="Item" placeholder="Enter an item" />
      <button type="submit">Add </button>
    </form>
  );
};
export default Shopping;
