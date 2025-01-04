const Output = ({ input, setInput }) => {
  return (
    <div className="bg-cyan-very-dark rounded-2xl p-6 flex flex-col gap-6">
      <div className="output flex justify-between">
        <span className="text-white capitalize">tips amount</span>
        <h1 className="text-2xl text-cyan-strong"> {input.tipByPerson}</h1>
      </div>
      <div className="output flex justify-between">
        <span className="text-white capitalize">total</span>
        <h1 className="text-2xl text-cyan-strong"> {input.billByPerson} </h1>
      </div>
      <button
        onClick={() => {
          setInput((prev) => ({
            ...prev,
            tipByPerson: "0.00",
            billByPerson: "0.00",
            reset: true,
          }));
        }}
        className="bg-cyan-strong text-cyan-very-dark py-3 uppercase  rounded-lg"
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

export default Output;
