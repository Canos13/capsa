import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Facturacion from "./page/Facturacion";
import History from "./page/History";
import Proyecto from "./page/Proyecto";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/history" element={<History />} />
                <Route path="/project" element={<Proyecto />} />
                <Route path="/billing" element={<Facturacion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
