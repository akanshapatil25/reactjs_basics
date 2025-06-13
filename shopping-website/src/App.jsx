import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CategoryProduct, ProductSingle, CartPage, Search } from "./pages";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <Sidebar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductSingle />} />
              <Route path="/category/:category" element={<CategoryProduct />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
