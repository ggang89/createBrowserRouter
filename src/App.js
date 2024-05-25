import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        홈!!!!
        <div>
          <Link to="/about">어바웃으로</Link>
        </div>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        about
        <div>
          <Link to="/">home</Link>
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
