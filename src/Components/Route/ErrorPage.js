// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="center">
      <h1>Oops!</h1>
      <p>Perdón, a ocurrido un error inesperado</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  )
}
