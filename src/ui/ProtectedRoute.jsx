import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FullPage from "./FullPage";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { fetchStatus, isLoading, isAuthenticated } = useUser();

  //3. if there is NO authenticated user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && fetchStatus !== "fetching")
        navigate("/login");
    },
    [isAuthenticated, isLoading, navigate, fetchStatus]
  );

  // 2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. if there IS a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
