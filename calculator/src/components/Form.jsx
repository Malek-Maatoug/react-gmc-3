const Form = ({ setInput, input }) => {
  const hundleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: parseFloat(e.target.value.replace("%", "")),
    }));
  };
  const hundleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(input);
    setInput((prev) => ({
      ...prev,
      tipByPerson: (input.bill * input.tip) / (100 * input.people),
      billByPerson: input.bill / input.people,
    }));
  };
  return (
    <form onSubmit={hundleSubmit}>
      <div className="flex flex-col gap-3">
        <label htmlFor="bill"> Bill </label>
        <input type="text" onChange={hundleChange} name="bill" />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="tips">select tips %</label>
        <div className="grid grid-cols-3">
          <input value={"5%"} type="button" name="tip" onClick={hundleChange} />
          <input
            value={"10%"}
            type="button"
            name="tip"
            onClick={hundleChange}
          />
          <input
            value={"15%"}
            type="button"
            name="tip"
            onClick={hundleChange}
          />
          <input
            value={"25%"}
            type="button"
            name="tip"
            onClick={hundleChange}
          />
          <input
            value={"50%"}
            type="button"
            name="tip"
            onClick={hundleChange}
          />

          <input
            type="text"
            placeholder="Custom"
            name="tip"
            onChange={hundleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="number">Number of people</label>
        <input type="text" name="people" onChange={hundleChange} />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default Form;
