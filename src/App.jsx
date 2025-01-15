import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarpage from "./components/HomeFiles/Navbarpage";
import ProudctsList from "./components/ProudctsFiles/ProudctsList";
import About from "./components/HomeFiles/About";
import ProudctInfopage from "./components/ProudctsFiles/ProudctInfopage";
import Catogrey from "./components/CatogryFiles/Catogrey";
import CatItem from "./components/CatogryFiles/CatogreyItems.jsx";
import CartPage from "./components/CartFiles/CartPage";
import GetAllProducts from "./components/Context/GetAllProducts.jsx";
import GetCatogreyName from "./components/Context/GetCatogreyName.jsx";
import GetCatogreyProducts from "./components/CatogryFiles/GetCatogreyProducts.jsx";
import GetPath from "./components/Context/GetPath.jsx";
import AllProducts from "./components/ProudctsFiles/AllProducts.jsx";
import NotFound from "./components/ErrorRoute/NotFound.jsx";
import Hero from "./components/HomeFiles/Hero.jsx";
import Login from "./components/Register/Login.jsx";
import GetComments from "./components/Context/GetComments.jsx";
import Singup from "./components/Register/Singup.jsx";
import GetCart from "./components/Context/GetCart.jsx";

function App() {
  return (
    <>
      <GetAllProducts>
          <GetCart>
            <GetComments>
              <GetCatogreyProducts>
                <GetCatogreyName>
                  <BrowserRouter>
                    <Navbarpage />
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <>
                            <Hero />
                            <AllProducts />
                          </>
                        }
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/singup" element={<Singup />} />
                      <Route path="/cartPage" element={<CartPage />} />
                      <Route path="/products/:catname" element={<CatItem />} />
                      {/* <Route path="/:404" element={<NotFound />} /> */}

                      <Route
                        path="/proudct/:proudctID"
                        element={<ProudctInfopage />}
                      />
                    </Routes>
                  </BrowserRouter>
                </GetCatogreyName>
              </GetCatogreyProducts>
            </GetComments>
          </GetCart>
      </GetAllProducts>
    </>
  );
}

export default App;
