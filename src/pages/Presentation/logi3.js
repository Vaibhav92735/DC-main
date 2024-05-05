import React, { useState, useEffect } from "react";
import { auth, provider } from "./sections/fire.js";
import { signInWithPopup } from "firebase/auth";
import Form from "./Home4.js";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

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
      {showForm && <Form isVisible={true} />}
    </div>
  );
}

export default LoginForm;
