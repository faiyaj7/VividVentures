import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = ({ item }) => {
  const { logout } = useAuth0();

  return (
    <button
      key={item.name}
      href={item.href}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="-m-3 flex items-center w-full rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">
        {item.icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900 tracking-wider">
          {item.name}
        </p>
      </div>
    </button>
  );
};

export default LogoutButton;
