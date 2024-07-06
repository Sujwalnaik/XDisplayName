import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted without reloading");
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }
    setFullName(`${firstName} ${lastName}`);
    // Do not clear input fields after submission
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
        <h1>Full Name Display</h1>
        <div>
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            id="fname"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;
