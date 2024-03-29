import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CountRedux } from "./components/view/CountRedux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <>Homepage</>,
        },
        {
          path: "products/",
          element: <>Product</>,
        },
        {
          path: "counter-store/",
          element: <CountRedux/>,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <div className="root-container">
          <NavBar />
        </div>
        <div className="outlet">
          {/* <Outlet /> une balise qui appartient à la biblio react-router-dom 
          //       -> à la place de 'outlet' s'affichera les composants liés à nos routes
          //   */}
          <Outlet />
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
