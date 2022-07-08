import "./App.css";
import { store } from "./features/store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToastContainer/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
