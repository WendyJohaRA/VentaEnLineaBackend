import React from "react";
import { Link } from "react-router-dom";
import logo from "./../Assest/logo.png";
import { NavItems } from "./NavItems";

const NavBar = () => {
  const navItems = [
    { ruta: "/Inicio", icono: "logo", texto: "" },
    { ruta: "/Cuenta", icono: "bi bi-house", texto: "Cuenta" },
    { ruta: "/Catalog", icono: "", texto: " Catalog" },
    { ruta: "/Ofertas", icono: "", texto: "Ofertas" },
    { ruta: "/Categoria", icono: "", texto: "Categoria" },
  ];

  const navItemsRight = [
    { ruta: "/Register", icono: "bi bi-door-open", texto: "Register" },
    { ruta: "/Login", icono: "bi bi-r-square", texto: "Login" },
  ];

  const navItemsCkeckout = [
    { ruta: "/Checkout", icono: "bi bi-cart-plus", texto: "" },
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light  " >
        <div className="container-fluid " style={{ justifyContent: "right" }} >
        
          <Link aria-current="page" to="/Inicio" >
            
            <img src={logo} width="70" alt="LOGO" />
           
          </Link >
          <button
            className="navbar-toggler "
            type="button "
            data-bs-toggle="collapse "
            data-bs-target="#navbarNav "
            aria-controls="navbarNav "
            aria-expanded="false"
            aria-label="Toggle navigation "
         
            
          >
            <span className="navbar-toggler-icon "></span>
          </button>
         
          <div className="collapse navbar-collapse  " id="navbarNav ">
            <ul className="navbar-nav  ">
              <NavItems navItems={navItems} />
            </ul>
          </div>
          <div
            className="collapse navbar-collapse" style={{ justifyContent: "end" }} >
            <ul className="navbar-nav  ">
              <NavItems navItems = { navItemsRight } />
            </ul>
          </div>
          <box-icon name="cart-plus">
          <div
            className="collapse navbar-collapse" style={{ justifyContent: "end" }}>
            <ul className="navbar-nav" >
              <NavItems navItems = { navItemsCkeckout  } />
            </ul>
          </div>
          </box-icon>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
