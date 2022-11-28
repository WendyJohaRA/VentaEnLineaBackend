import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Catalog from "../Components/Paginas/Catalog";
import Inicio from "../Components/Paginas/Inicio";
import LoginForm from  "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm"
import Categoria from  "../Components/Paginas/Categoria";
import Ofertas from "../Components/Paginas/Ofertas";
import Checkout from "../ChekoutPage/Checkout"; 


export const router = createBrowserRouter(
    createRoutesFromElements(
      [
      <Route path="/" element={<App/>}>,
        <Route index element={<Inicio/>}/>,
        <Route path="/Inicio" element={<Inicio/>}/>,
        <Route path="/Catalog" element={<Catalog/>}/>,
        <Route path="/Ofertas" element={<Ofertas/>}/>,
        <Route path="/Categoria" element={<Categoria/>}/>,
        <Route path="/Register" element={<RegisterForm/>}/>,
        <Route path="/Login" element={<LoginForm/>}/>,
        <Route path="/Checkout" element={<Checkout/>}/>,
      </Route>
      ]
    )
  )