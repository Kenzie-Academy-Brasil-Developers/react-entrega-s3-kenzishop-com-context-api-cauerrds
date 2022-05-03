import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

const Resumo = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <h1>Resumo do Pedido</h1>
      <div className="resumoBox">
        <p>{cart.reduce((acc, el) => acc + el.quantity, 0)} Produtos</p>
        <p>
          R${" "}
          {cart.reduce((acc, el) => {
            const total = el.price * el.quantity;
            acc += total;
            return acc;
          }, 0)}
        </p>
      </div>
      <button disabled>Finalizar Pedido</button>
    </Container>
  );
};

export { Resumo };
