import { useState } from "react";

function App() {
  const [fullname, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFullname = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={handleFullname}>
        <h1>Full Name Display</h1>
        <div>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            id="fname"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            id="lname"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>Full Name: {fullname}</div>
    </div>
  );
}

export default App;
