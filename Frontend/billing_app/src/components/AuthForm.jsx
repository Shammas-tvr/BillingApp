import { useState } from "react";
import InputField from "./InputFields";
import { loginFields, signupFields } from "../Config/AuthFields";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSwitch }) => {
  const navigate = useNavigate()
  const isSignup = mode === "signup";
  const fields = isSignup ? signupFields : loginFields;

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isSignup &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    console.log("Submitted Data:", formData);
    if (isSignup){
        setFormData({})
        onSwitch()

    }else{
        navigate('/invoice-genator')
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isSignup ? "Create Account" : "Login"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <InputField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <span
          onClick={onSwitch}
          className="text-blue-600 cursor-pointer font-semibold ml-1 hover:underline"
        >
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
