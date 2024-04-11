import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CountRedux } from "./components/view/CountRedux";
import { ApiWithModal } from "./components/view/ApiWithModal";

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
          path: "products",
          element: <>Product</>,
        },
        {
          path: "counter-store/",
          element: <CountRedux/>,
        },
        {
          path: "correction",
          element: <ApiWithModal/>
        }
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <div className="root-container">
          <NavBar />
          <div className="outlet">
          {/* <Outlet /> une balise qui appartient à la biblio react-router-dom 
          //       -> à la place de 'outlet' s'affichera les composants liés à nos routes
          //   */}
          <Outlet />
        </div>
        <Footer/>

        </div>
       
        
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
