import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Ops!!</h1>
      <p>Sorry something went wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}