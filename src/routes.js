import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./components/Menu";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobremim" element={<SobreMim/>} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;