import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteError
          ? "Page Not Found"
          : "Sorry, an unexpected error has occurred!"}
      </p>
    </>
  );
};

export default ErrorPage;
