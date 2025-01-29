import { FormEvent, useState } from "react";

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  //   const person = { name: "", age: 0 };

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // if (nameRef.current) person.name = nameRef.current.value;
    // if (ageRef.current) person.age = ageRef.current.valueAsNumber;
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          value={person.age}
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary mt-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
