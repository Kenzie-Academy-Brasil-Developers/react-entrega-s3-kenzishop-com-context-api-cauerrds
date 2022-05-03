import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

const Produto = ({ produto, isRemovable = false }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <img src={produto.img} alt={produto.name} />

      {isRemovable ? (
        <h2>{`${produto.quantity}x ${produto.name}`}</h2>
      ) : (
        <h2>{produto.name}</h2>
      )}
      <p>{`R$ ${produto.price.toFixed(2)}`}</p>
      {isRemovable ? (
        <button onClick={() => removeFromCart(produto)}>
          Remover do Carrinho
        </button>
      ) : (
        <button onClick={() => addToCart(produto)}>
          {" "}
          Adicionar ao Carrinho
        </button>
      )}
    </Container>
  );
};

export { Produto };
