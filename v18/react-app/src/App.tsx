import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/";
import Button from "./components/Button";
import Like from "./components/Like";
import Message from "./components/Message";
import Drink from "./components/Drink";
import Customer from "./components/Customer";
import Tags from "./components/Tags";
import Bugs from "./components/Bugs";
import NavBar from "./components/ShoppingCart/NavBar";
import Cart from "./components/ShoppingCart/Cart";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import ExCart from "./components/ExCart";
import ExpandableText from "./components/ExpandableText";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const items = ["Palestine", "South Africa", "Kuwait", "Saudi Arabia"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span> World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        primary
      </Button>
      <br />
      <br />
      <FaReact color="#00a2ff" size="100" />
      <br />
      <br />
      <Like onClick={() => console.log("Clicked")} />

      <div>
        {" "}
        <h1> Impure Function</h1>
      </div>

      <Message />

      <Drink />

      <Customer />

      <Tags />

      <Bugs />

      <hr />
      <hr />
      {/* To make components share the same state we need to lift the state to the closest parent and pass the data via props */}
      {/* and to make changes to data the child component can raise events via props */}
      <NavBar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <hr />
      <Game />
      <hr />
      <Pizza />
      <hr />
      <ExCart />
      <hr />
      <ExpandableText maxChars={100}>Lorem ipsum?</ExpandableText>
    </div>
  );
}

export default App;
