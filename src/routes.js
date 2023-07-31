import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="Sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

    {/* 
      Na Rota '/', a estrutura a ser renderizada é :

      <PAginaPAdrao>
        <Inicio/>
      <PaginaPadrao />

      Na rota '/sobremim', a estrutura a ser renderizada é:

      <PaginaPadrao>
       <Inicio/>
      <PaginaPadrao />
    
    */}

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
