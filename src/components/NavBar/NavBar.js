import './NavBar.css';
import logo from '../../assets/imgs/logo_la_jugueria.svg';
function NavBar() {
  return (
    <nav className="NavBar flex justify-between items-center h-130 bg-orange-500 text-black relative shadow-sm">
      <img alt="logo de la empresa" className="logo" src={logo} />
      <ul>
        <a href="#Nosotros" className="p-10">Nosotros</a>
        <a href="#Productos"  className="p-10">Productos</a>
        <a href="#Carrito"  className="p-10">Carrito</a>
        <a href="#Contacto"  className="pr-20 pl-10 py-10">Contacto</a>
      </ul>
    </nav>
  );
}

export default NavBar;