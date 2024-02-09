import { useLocation, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  return (
    <div className="bg-blue-300 min-h-screen">
      <div className="flex flex-col items-center space-y-3 py-10">
        <h1 className="text-red-500 text-5xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          May be the Page is{" "}
          <span className="font-bold">Under construction or</span>
        </p>

        <button
          onClick={() => navigate(from, { replace: true })}
          className="btn btn-secondary"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
