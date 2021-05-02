import { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { signOut } from "../../api/auth.js";
import "./SignOut.css";

function SignOut(props) {
  const { history, clearUser, user } = props;

  useEffect(() => {
    signOut(user.userData)
      .then(() => clearUser())
      .catch(console.error)
      .finally(() => history.push("/"));
  });

  return "";
}

export default withRouter(SignOut);
