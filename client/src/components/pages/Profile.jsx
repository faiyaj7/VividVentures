import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loader from "../Loader";
import useDocumentTitle from "../ComponentTitle";

const Profile = () => {
  useDocumentTitle("VividVentures | Profile");
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
  if (isLoading) return <Loader />;
  return <div>fs</div>;
};

export default Profile;
