const Practice = (jimmy) => {
  const address = {
    forename: "Jimmy",
    surname: "David",
    line1: "The moon",
  };

  return (
    <div>
      <h1>{address.forename}</h1>
      <h1>{address.surname}</h1>
      <h1>{address.line1}</h1>
      <h1>{address.line2}</h1>
      <h1>{address.city}</h1>
      <h1>{address.zip}</h1>
    </div>
  );
};

Practice();

export default Practice;
