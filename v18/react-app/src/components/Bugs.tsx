import { useState } from "react";
import produce from "immer";
const Bug = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1); // draft is a proxy object, imagine it as a copy of the original array (bugs)
        if (bug) bug.fixed = true;
      })
    );
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      <h1>Updating Array of Objects</h1>
      Bugs :{" "}
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}{" "}
        </p>
      ))}
      <br />
      <button onClick={handleClick}>Bugs</button>
    </div>
  );
};

export default Bug;
