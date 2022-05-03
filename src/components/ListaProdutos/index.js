import { Container } from "./styles";
import { Produto } from "../Produto";

const ListaProdutos = ({ dataProdutos, isRemovable }) => {
  return (
    <Container>
      {dataProdutos.map((produto, i) => {
        return (
          <Produto key={i * 2} produto={produto} isRemovable={isRemovable} />
        );
      })}
    </Container>
  );
};
export { ListaProdutos };
