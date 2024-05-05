// // import React, { useState, useEffect } from "react";
// // import { auth, provider } from "./sections/fire.js";
// // import { signInWithPopup } from "firebase/auth";
// // import Form from "./Home.js";

// // function LoginForm() {
// //   const [value, setValue] = useState("");
// //   const [showForm, setShowForm] = useState(false);
// //   const [showMain, setMainForm] = useState(false);
// //   const toggleForm = () => {
// //     setShowForm(!showForm);
// //   };
// //   const handleForm = () => {
// //     setMainForm(!showMain)
// //   }

// //   const handleLogin = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const userEmail = result.user.email;

// //       // Check if the logged-in user is an admin
// //       const isAdmin = await checkIfUserIsAdmin(userEmail);
// //       console.log('Is Admin:', isAdmin);

// //       if (isAdmin) {
// //         setValue(userEmail);
// //         localStorage.setItem("email", userEmail);
// //       } else {
// //         // Handle non-admin access
// //         alert("Access denied. You are not an admin.");
// //       }
// //     } catch (error) {
// //       // Handle authentication errors
// //       console.error("Authentication error:", error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     const storedEmail = localStorage.getItem("email");
// //     console.log('Stored Email:', storedEmail);
// //     setValue(storedEmail);
// //   }, []);

// //   // Function to check if the user is an admin
// //   const checkIfUserIsAdmin = async (email) => {
// //     // Implement logic to check if the user is an admin
// //     // You might query your Firebase database or use some other method
// //     // For simplicity, let's assume there's an 'admins' collection with admin emails
// //     const admins = ["b22cs058@iitj.ac.in", "admin2@example.com"];
// //     return admins.includes(email);
// //   };

// //   console.log('Rendering LoginForm with value:', value);

// //   return (
// //     <div>
// //       {value ? (
// //         <button onClick={toggleForm}>Toggle Form</button>
// //       ) : (
// //         <button onClick={handleLogin}>Sign In</button>
// //       )}
// //       <button isVisible={showForm} onClick={handleForm} style={{ padding: '10px', display: 'block' }}>Add Details</button>
// //       <Form isVisible={showMain}/>
// //     </div>
// //   );
// // }

// // export default LoginForm;

// import React, { useState, useEffect } from "react";
// import { auth, provider } from "./sections/fire.js";
// import { signInWithPopup } from "firebase/auth";
// import Form from "./Home.js";

// function LoginForm() {
//   const [userEmail, setUserEmail] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const email = result.user.email;

//       // Check if the logged-in user is an admin
//       const isAdmin = await checkIfUserIsAdmin(email);

//       if (isAdmin) {
//         setUserEmail(email);
//         localStorage.setItem("email", email);
//         // Form visibility is toggled here
//         setShowForm((prevShowForm) => !prevShowForm);
//       } else {
//         // Handle non-admin access
//         alert("Access denied. You are not an admin.");
//       }
//     } catch (error) {
//       // Handle authentication errors
//       console.error("Authentication error:", error.message);
//     }
//   };

//   const checkIfUserIsAdmin = async (email) => {
//     // Implement logic to check if the user is an admin
//     const admins = ["b22cs058@iitj.ac.in", "admin2@example.com"];
//     return admins.includes(email);
//   };

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("email");
//     setUserEmail(storedEmail);
//     setShowForm(false); // Form is initially hidden
//   }, []);

//   return (
//     <div>
//       {userEmail ? (
//         <button onClick={handleLogin}>
//           {showForm ? "Hide Form" : "Add Details"}
//         </button>
//       ) : (
//         <button onClick={handleLogin}>Sign In</button>
//       )}
//       {showForm && <Form isVisible={true} />}
//     </div>
//   );
// }

// export default LoginForm;
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { auth, provider } from "./sections/fire.js";
import { signInWithPopup } from "firebase/auth";
import Form from "./Home.js";

function LoginForm({ val }) {
  const [userEmail, setUserEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  console.log(val);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      // Check if the logged-in user is an admin
      const isAdmin = await checkIfUserIsAdmin(email);

      if (isAdmin) {
        setUserEmail(email);
        localStorage.setItem("email", email);
        // Form visibility is toggled here
        setShowForm((prevShowForm) => !prevShowForm);
      } else {
        // Handle non-admin access
        alert("Access denied. You are not an admin.");
      }
    } catch (error) {
      // Handle authentication errors
      console.error("Authentication error:", error.message);
    }
  };

  const checkIfUserIsAdmin = async (email) => {
    // Implement logic to check if the user is an admin
    const admins = ["b22cs058@iitj.ac.in", "admin2@example.com"];
    return admins.includes(email);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setUserEmail(storedEmail);
    setShowForm(false); // Form is initially hidden
  }, []);

  return (
    <div>
      {userEmail ? (
        <button onClick={handleLogin}>
          {showForm ? "Hide Form" : "Add Details"}
        </button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      {showForm && <Form isVisible={true} val={val} />} {/* Pass val to Form */}
    </div>
  );
}

LoginForm.propTypes = {
  val: PropTypes.number.isRequired,
};

export default LoginForm;
