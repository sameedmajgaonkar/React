import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "Tom",
    address: {
      city: "Riyadh",
      zipCode: 94111,
    },
  });
  // In JavaScript, the spread operator (...) creates a shallow copy when used to copy objects or arrays.
  // This means it only copies the top-level elements, not nested objects or arrays
  // Here in the example both the customers will reference to the same address object
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 415612 },
    });
  };
  return (
    <div>
      <h1>Updating Nested Objects</h1>
      Customer Details : Name : {customer.name} :: Address:{" "}
      {customer.address.city} :: ZipCode : {customer.address.zipCode}
      <br />
      <button onClick={handleClick}> Click to See Customer</button>
    </div>
  );
};

export default Customer;
