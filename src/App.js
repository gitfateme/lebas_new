import "./styles/App.scss";
import NoPage from "./NoPage";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
