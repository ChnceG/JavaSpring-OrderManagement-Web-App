import Navbar from "./components/Navbar";
import MainContentWrapper from "./components/ContentWrapper";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import { AuthProvider } from "./contexts/AuthProvider";

export default function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <MainContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </MainContentWrapper>
      </Router>
    </AuthProvider>
  )
}