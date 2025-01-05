import React, { useState } from "react";

function Todo() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  function handleFomo(event) {
    setNewEntry(event.target.value);
  }

  function addEntry() {
    if (newEntry.trim() !== "") {
      setEntries((e) => [...e, newEntry]);
      setNewEntry("");
    }
  }

  function deleteEntry(index) {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  }

  function entryUp(index) {
    if (index > 0) {
      const updatedEntries = [...entries];
      const temp = updatedEntries[index];
      updatedEntries[index] = updatedEntries[index - 1];
      updatedEntries[index - 1] = temp;
      setEntries(updatedEntries);
    }
  }

  function entryDown(index) {
    if (index < entries.length - 1) {
      const updatedEntries = [...entries];
      const temp = updatedEntries[index];
      updatedEntries[index] = updatedEntries[index + 1];
      updatedEntries[index + 1] = temp;
      setEntries(updatedEntries);
    }
  }

  return (
    <div>
      <h1 className="text-justify text-pink-500 focus:outline-none mb-4">To-Do List</h1>
      <div>
        <input
          type="text"
          className="bg-pink-200 rounded-full rounded-l-none"
          placeholder="Enter the task..."
          value={newEntry}
          onChange={handleFomo}
        />
        <button
          className="hover:bg-yellow-300 focus:outline-none shadow-xl border-amber-800 transition-colors duration-200 ease-in-out delay-100"
          onClick={addEntry}
        >
          Add
        </button>
      </div>
      <ol>
        {entries.map((entry, index) => (
          <li key={index}>
            <span className="text-pretty text-rose-400 border border-t-0 border-r-0 border-yellow-400 text-xl p-1 align-middle">
              {entry}
            </span>
            <div className="text-white mt-3 mb-1">
              <button
                className="bg-cyan-400 rounded-2xl mx-1 hover:bg-yellow-300 focus:outline-none shadow-xl border-amber-800 transition-colors duration-200 ease-in-out delay-100"
                onClick={() => deleteEntry(index)}
              >
                Delete
              </button>
              <button
                className="bg-orange-400 rounded-2xl mx-1 hover:bg-yellow-300 focus:outline-none shadow-xl border-amber-800 transition-colors duration-200 ease-in-out delay-100"
                onClick={() => entryUp(index)}
              >
                Up
              </button>
              <button
                className="bg-orange-400 rounded-2xl mx-1 hover:bg-yellow-300 focus:outline-none shadow-xl border-amber-800 transition-colors duration-200 ease-in-out delay-100"
                onClick={() => entryDown(index)}
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
