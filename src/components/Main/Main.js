import './Main.css';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
    <div className="Main">
      <NavBar />
      <ItemListContainer prop="Greetings"/>
    </div>
  );
}

export default Main;

