import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [totalProdutos, setTotalProdutos] = useState(
    cart.reduce((acc, { quantity }) => {
      acc += quantity;
      return acc;
    }, 0)
  );

  useEffect(() => {
    setTotalProdutos(
      cart.reduce((acc, { quantity }) => {
        acc += quantity;
        return acc;
      }, 0)
    );
  }, [cart]);

  const history = useHistory();

  return (
    <Container>
      <div className="headerBox">
        <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
        <div className="menu">
          <button onClick={() => history.push("/cart")}>
            {cart ? totalProdutos : 0} Cart
          </button>
          <button>Login</button>
        </div>
      </div>
    </Container>
  );
};

export { Header };
