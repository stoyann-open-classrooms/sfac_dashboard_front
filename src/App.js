import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Product from "./Containers/Product/Product";
import Fournisseur from "./Containers/Fournisseur/Fournisseur";
import Demande from "./Containers/Demande/Demande";
import Commande from "./Containers/Commande/Commande";
import Kanban from "./Containers/Kanban/Kanban";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import DemandeFormContainer from "./Components/DemandeFormContainer/DemandeFormContainer";
import ProductDetails from "./Containers/ProductDetails/ProductDetails";
import ErrorPage from "./Containers/ErrorPage/ErrorPage";
import FournisseurDetails from "./Containers/FournisseurDetails/FournisseurDetails";
import Login from "./Containers/Login/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produit" element={<Product />} />
        <Route path="/produitDetails/:id" element={<ProductDetails />} />
        <Route path="/fournisseur" element={<Fournisseur />} />
        <Route
          path="/fournisseurDetails/:id"
          element={<FournisseurDetails />}
        />
        <Route path="/commande" element={<Commande />} />
        <Route path="/commande/:slug" element={<DemandeFormContainer />} />
        <Route path="/demmande" element={<Demande />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
