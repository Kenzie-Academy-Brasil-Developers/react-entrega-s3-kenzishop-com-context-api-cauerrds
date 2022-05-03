import { useContext } from "react";
import { ListaProdutos } from "../../components/ListaProdutos";
import { CartContext } from "../../providers/cart";
import { Container } from "./styles";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <ListaProdutos dataProdutos={cart} isRemovable />
    </Container>
  );
};
export { Cart };
