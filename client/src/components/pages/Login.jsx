import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineUser } from "react-icons/ai";
import useDocumentTitle from "../ComponentTitle";
const Login = () => {
  useDocumentTitle("VividVentures | Login");
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="text-xs flexContainer gap-2"
      onClick={() => loginWithRedirect()}
    >
      <AiOutlineUser size={20} /> SignIn
    </button>
  );
};

export default Login;
