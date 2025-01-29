import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState(["happy-", "cheerful-"]);
  const handleClick = () => {
    // Add
    setTags([...tags, "-exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy-"));

    // Update
    setTags(tags.map((tag) => (tag === "happy-" ? "happiness-" : tag)));
  };
  return (
    <div>
      <h1>Updating Arrays</h1>
      Tags {tags} <br />
      <button onClick={handleClick}>Tags</button>
    </div>
  );
};

export default Tags;
