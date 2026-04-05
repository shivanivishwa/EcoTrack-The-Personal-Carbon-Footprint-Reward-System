import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  // 🔹 State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Handle submit
  {/*const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // You can send this to backend later
  };*/}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Point this to your Spring Boot Login Endpoint
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();

        // 2. Save the ID returned from MySQL so the Input page can use it
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);

        console.log("Login successful! Redirecting...");
        navigate("/input"); // Navigate to your Footprint page
      } else {
        const errorMessage = await response.text();
        alert(errorMessage || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Backend is not responding. Is Spring Boot running?");
    }
  };


  return (
    <div className="relative w-[1540px] h-[1024px] bg-[rgba(74,123,36,0.71)]">

      {/* Rectangle */}
      <div className="absolute w-[1174px] h-[804px] left-[153px] top-[118px] bg-[#DFF7D0] opacity-75 border border-[#3F6A0A] rounded-[40px] shadow-md"></div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="absolute w-[281px] h-[188px] left-[490px] top-[135px]"
      />

      {/* Login Title */}
      <p className="absolute left-[685px] top-[175px] text-[68px] font-bold text-[#22611D]">
        Login
      </p>

      {/* 🔹 FORM START */}
      <form onSubmit={handleSubmit}>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="absolute w-[635px] h-[78px] left-[447px] top-[323px] bg-[#F5F5F5] opacity-80 rounded-[75px] px-6 text-lg outline-none"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="absolute w-[635px] h-[78px] left-[447px] top-[442px] bg-[#F5F5F5] opacity-80 rounded-[75px] px-6 text-lg outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="absolute w-[349px] h-[88px] left-[586px] top-[573px] bg-[#3F6A0A] text-white text-[32px] font-bold rounded-[75px]"
        >
          Start Exploring
        </button>

      </form>
      {/* 🔹 FORM END */}

      {/* OR */}
      <p className="absolute left-[735px] top-[661px] text-[30px] font-bold text-white">
        or
      </p>

<button
  onClick={() => {
    console.log("Google login clicked");
  }}
  className="absolute w-[635px] h-[78px] left-[447px] top-[714px] 
             bg-[#DFF7D0] border border-[#3E6B08] rounded-[75px] 
             flex items-center px-8 gap-5 hover:shadow-lg"
>
  <img
    src="/image.png"
    alt="google"
    className="w-[140px] h-[90px] object-contain"
  />

  <span className="text-[26px] text-black">
    Continue with Google
  </span>
</button>
      {/* Signup Redirect */}
      <p className="absolute left-[600px] top-[820px] text-[20px]">
        Don’t have an account?{" "}
        <span
          className="text-green-800 font-semibold cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign up 
        </span>
      </p>
<p className="absolute left-[890px] top-[820px] text-[20px] font-semibold text-black">
        here
      </p>
    </div>
  );
}

export default Login;