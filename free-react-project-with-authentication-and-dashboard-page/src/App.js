// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Router from "./routes"
import Footer from "./components/footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
