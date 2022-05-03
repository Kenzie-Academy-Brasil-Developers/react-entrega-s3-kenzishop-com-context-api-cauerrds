import { ListaProdutos } from "../../components/ListaProdutos";
import { Container } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

const Landing = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Container>
      <ListaProdutos dataProdutos={products} isRemovable={false} />
    </Container>
  );
};
export { Landing };
