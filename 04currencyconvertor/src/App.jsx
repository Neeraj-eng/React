import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConverted(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(converted);
    setConverted(amount);
  };

  return (
    <div
      className="w-full h-screen flex items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/6266774/pexels-photo-6266774.jpeg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-700 rounded-lg p-5 backdrop-blur-sm bg-black/35">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                currencychange={(currency) => setFrom(currency)}
                selectcurrency={from}
                amountchange={(amt) => setAmount(amt)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyoptions={options}
                currencychange={(currency) => setTo(currency)}
                selectcurrency={to}
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
