import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import PageContainer from "./containers/page-container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
