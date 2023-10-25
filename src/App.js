
import './App.css';
import Candy from './components/Candy/Candy';
import CartContextProvider from './components/store/CartContextProvider';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
       <Candy />
       </CartContextProvider>
    </div>
  );
}

export default App;


