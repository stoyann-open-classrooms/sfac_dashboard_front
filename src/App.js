import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Product from "./Containers/Product/Product";
import Fournisseur from "./Containers/Fournisseur/Fournisseur";
import Demande from "./Containers/Demande/Demande";
import Commande from "./Containers/Commande/Commande";
import Kanban from "./Containers/Kanban/Kanban";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={<Product />} />
        <Route path="/fournisseur" element={<Fournisseur />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/demmande" element={<Demande />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </div>
  );
}

export default App;
