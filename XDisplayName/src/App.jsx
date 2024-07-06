// import { useState } from "react";

// function App() {
//   const [fullname, setFullName] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleFullname = (e) => {
//     e.preventDefault();
//     setFullName(`${firstName} ${lastName}`);
//     setFirstName("");
//     setLastName("");
//   };
//   return (
//     <div>
//       <form onSubmit={handleFullname}>
//         <h1>Full Name Display</h1>
//         <div>
//           <label htmlFor="fname">First Name : </label>
//           <input
//             type="text"
//             id="fname"
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="lname">Last Name : </label>
//           <input
//             type="text"
//             id="lname"
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div>Full Name: {fullname}</div>
//     </div>
//   );
// }

// export default App;
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
    setFullName(`${firstName} ${lastName}`);
    setFirstName(""); // Clear first name field
    setLastName(""); // Clear last name field
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
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {fullName && <div>Full Name :{fullName}</div>}
    </div>
  );
}

export default App;
