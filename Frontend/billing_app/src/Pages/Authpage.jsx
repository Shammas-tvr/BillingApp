import { useState } from "react";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm
        mode={mode}
        onSwitch={() =>
          setMode((prev) =>
            prev === "login" ? "signup" : "login"
          )
        }
      />
    </div>
  );
};

export default AuthPage;
