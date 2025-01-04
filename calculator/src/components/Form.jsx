import { useState, useEffect } from "react";

const Form = ({ setInput, input }) => {
  const [local, setLocal] = useState({
    bill: "",
    tips: "",
    people: "",
  });
  useEffect(() => {
    console.log(input);

    if (input.reset == true) {
      console.log(input);
      setLocal({ bill: "", tips: "", people: "" });
    }
  }, [input.reset]);

  const hundleChange = (e) => {
    setLocal((prev) => ({
      ...prev,
      [e.target.name]: parseFloat(e.target.value.replace("%", "")),
    }));
  };
  const hundleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setInput((prev) => ({
      ...prev,
      tipByPerson: (local.bill * local.tips) / (100 * local.people),
      billByPerson: local.bill / local.people,
    }));
  };
  return (
    <form onSubmit={hundleSubmit}>
      <div className="flex flex-col gap-3">
        <label className="text-cyan-dark-grayish " htmlFor="bill">
          {" "}
          Bill{" "}
        </label>
        <input
          className="bg-cyan-light-grayish bg-[url('/src/assets/images/icon-dollar.svg')] p-2 bg-left-12 rounded-md bg-no-repeat text-cyan-dark-grayish"
          type="text"
          onChange={hundleChange}
          name="bill"
          value={local.bill}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-cyan-dark-grayish " htmlFor="tips">
          select tips %
        </label>
        <div className="grid grid-cols-3 gap-2">
          <input
            className="bg-cyan-light-grayish text-cyan-dark-grayish"
            value={"5%"}
            type="button"
            name="tips"
            onClick={hundleChange}
          />
          <input
            className="bg-cyan-light-grayish text-cyan-dark-grayish"
            value={"10%"}
            type="button"
            name="tips"
            onClick={hundleChange}
          />
          <input
            className="bg-cyan-light-grayish text-cyan-strong"
            value={"15%"}
            type="button"
            name="tips"
            onClick={hundleChange}
          />
          <input
            className="bg-cyan-light-grayish text-cyan-strong"
            value={"25%"}
            type="button"
            name="tips"
            onClick={hundleChange}
          />
          <input
            className="bg-cyan-light-grayish text-cyan-strong"
            value={"50%"}
            type="button"
            name="tips"
            onClick={hundleChange}
          />

          <input
            className="bg-cyan-light-grayish text-cyan-strong"
            type="text"
            placeholder="Custom"
            value={local.tips}
            name="tips"
            onChange={hundleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-cyan-strong " htmlFor="number">
          Number of people
        </label>
        <input
          className="bg-cyan-light-grayish bg-[url('/src/assets/images/icon-person.svg')] p-2 bg-left-12 rounded-md bg-no-repeat text-cyan-dark-grayish"
          type="text"
          name="people"
          onChange={hundleChange}
          value={local.people}
        />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default Form;
