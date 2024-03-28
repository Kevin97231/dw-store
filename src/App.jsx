import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./components/view/Product";

function App() {
    return(
      <>
      <div className="root-container">
        <NavBar />
        <div className="outlet">
          {/* <Outlet /> une balise qui appartient à la biblio react-router-dom 
          -> à la place de 'outlet' s'affichera les composants liés à nos routes
      */}
           <BrowserRouter>
            <Routes>
              <Route path='/' element={<>Homepage</>}/>
              <Route path='/products' element={<Product/>}/>
              </Routes>
          </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </>



    );
}

export default App;
