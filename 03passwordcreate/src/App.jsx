import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [password, setpassword] = useState("");
  const [number, numberallow] = useState(false);
  const [charrr, charallow] = useState(false);
  const [length, setlength] = useState(8);
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) strr += "1234567890";
    if (charrr) strr += "!@#$%^&*(){}[]/.,';:'<>\|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strr.length);
      pass += strr.charAt(char);
    }
    setpassword(pass);
  }, [number, charrr, length]);

  const copytoclipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charrr, number]);

  return (
    <>
      <div className='w-full mx-auto max-w-md px-4 my-8 py-3 shadow-lg rounded-lg bg-red-600 text-black-600'>
        <h1 className="text-white text-xl mb-4">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full px-3 py-1"
            ref={passwordref}
            readOnly
          />
          <button
            className="bg-blue-500 px-3 py-0.5 shrink-0 outline-none text-white"
            onClick={copytoclipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-6'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              value={length}
              min={8}
              max={100}
              className='cursor-pointer'
              onChange={(evt) => setlength(evt.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex gap-x-1'>
            <input
              type="checkbox"
              checked={number}
              onChange={() => numberallow(prev => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type='checkbox'
              checked={charrr}
              onChange={() => charallow(prev => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;