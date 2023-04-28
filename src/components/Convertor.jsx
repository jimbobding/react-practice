import { useState } from "react";

const Convertor = () => {
  const [miles, setMiles] = useState(0);
  const [kms, setKms] = useState(0);
  const changeMiles = (e) => {
    const newMiles = e.target.value;
    setMiles(newMiles);
    setKms(newMiles * 1.6);
  };
  const changeKms = (e) => {
    const newKms = e.target.value;
    setKms(newKms);
    setMiles(newKms / 1.6);
  };

  return (
    <>
      <label>Miles</label>
      <input value={miles} onChange={changeMiles} />
      <label>Kms</label>
      <input value={kms} onChange={changeKms} />
    </>
  );
};

export default Convertor;
