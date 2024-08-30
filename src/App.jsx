import { useState } from "react";
import { toppings } from "./data";

function App() {
  const [total, setTotal] = useState(0);

  const hdlChange = (e, price) => {
    setTotal((prevTotal) =>
      Math.max(0, prevTotal + (e.target.checked ? price : -price))
    );
  };
  return (
    <div className="flex flex-col gap-4 mx-auto items-center m-2 p-2">
      <h1 className="text-4xl font-bold text-pink-500">Select Topping</h1>
      <div className="border rounded-lg w-2/4">
        {toppings.map((el) => (
          <div key={el.name} className="flex gap-2 items-center mb-2 m-2">
            <input
              type="checkbox"
              id={el.name}
              className=""
              onChange={(e) => hdlChange(e, el.price)}
            />
            <label
              htmlFor={el.name}
              className="ml-2 text-sm flex-grow font-medium flex justify-between"
            >
              <p>{el.name}</p>
              <p>{`฿${el.price.toFixed(2)}`}</p>
            </label>
          </div>
        ))}
        <hr />
        <div className="m-2 flex flex-col gap-1">
          <p className="text-xl font-semibold text-center text-gray-700">
            Total: {`฿${total.toFixed(2)}`}
          </p>
          <div className="flex justify-center">
            <button
              className="border-black rounded-md bg-pink-200 p-1"
              onClick={() => setCheckout("")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
