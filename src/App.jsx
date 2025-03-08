import Main from "./Components/Main/Main";
import { CartProvider } from "./Context/CartProvider";

function App() {
  return (
    <>

    <CartProvider>
        <Main />
      </CartProvider>
     
    </>
  );
}

export default App;
