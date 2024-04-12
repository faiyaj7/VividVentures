import React from "react";
import { useNavigate } from "react-router-dom";
const handleTheNavigation = (to, replace = false) => {
  const navigate = useNavigate();

  startTransition(() => {
    if (replace) {
      navigate(to, { replace: true });
    } else {
      navigate(to);
    }
  });
};

export default handleTheNavigation;
