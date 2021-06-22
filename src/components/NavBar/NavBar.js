import React from 'react';
import '../../index.css'
import CartWidget from './CartWidget/CartWidget';
import logo from '../../assets/imgs/logo_la_jugueria.svg';

function NavBar() {
  return (
    <nav className="NavBar flex justify-between items-center h-130 text-black relative">
     
      <div>
        <img alt="logo de la empresa" className="logo" src={logo} />
      </div>

      <div className="ml-20 font-bold">
        <h1>La Jugueria</h1>
      </div>

      <div className="ml-20">
        <ul>
          <a href="#Nosotros" className="p-6">Nosotros</a>
          <a href="#Contacto"  className="p-6">Contacto</a>
        </ul>
      </div>

      <div className="pr-20 cursor-pointer">
        <CartWidget />
      </div>

    </nav>
  );
};

export default NavBar;