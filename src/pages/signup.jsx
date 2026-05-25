import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // later: send to backend
  };

  return (
    <div className="relative w-[1540px] h-[1024px] bg-[rgba(74,123,36,0.71)]">

      {/* Background */}
      <div className="absolute w-[1174px] h-[804px] left-[153px] top-[118px] bg-[#DFF7D0] opacity-75 border border-[#3F6A0A] rounded-[40px] shadow-md"></div>

      {/* Logo */}
      <img src="/logo.png" className="absolute w-[235px] h-[157px] left-[525px] top-[135px]" />

      {/* Title */}
      <p className="absolute left-[682px] top-[160px] text-[48px] font-bold text-[#22611D]">
        Sign Up
      </p>

      {/* 🔹 FORM START */}
      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="absolute w-[437px] h-[63px] left-[323px] top-[274px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="absolute w-[437px] h-[63px] left-[801px] top-[274px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          className="absolute w-[437px] h-[56px] left-[323px] top-[364px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="absolute w-[437px] h-[63px] left-[801px] top-[360px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="absolute w-[913px] h-[63px] left-[325px] top-[450px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="absolute w-[915px] h-[63px] left-[323px] top-[543px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="absolute w-[437px] h-[56px] left-[323px] top-[632px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="absolute w-[437px] h-[56px] left-[801px] top-[632px] bg-[#F5F5F5]/80 rounded-[75px] px-6"
        />

        {/* Checkbox */}
        <div className="absolute left-[348px] top-[720px] flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-[20px]">I agree to Terms & Conditions</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="absolute w-[200px] h-[62px] left-[665px] top-[768px] 
                     bg-[#3F6A0A] text-white rounded-[90px] text-[22px] font-bold
                     hover:bg-[#2e5207]"
        >
          Sign Up
        </button>

      </form>
      {/* 🔹 FORM END */}

      {/* Login Redirect */}
      <p className="absolute left-[630px] top-[850px] text-[20px]">
        Already have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Login
        </span>
      </p>

    </div>
  );
}

export default Signup;