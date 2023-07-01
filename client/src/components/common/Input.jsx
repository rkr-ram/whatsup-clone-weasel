import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex flex-col gap-1">
      <div>
        {label && (
          <label htmlFor={name} className="text-teal-light text-lg px-1">
            {name}
          </label>
        )}
      </div>
      <div>
        <input
          type="text"
          className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
