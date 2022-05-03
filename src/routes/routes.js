import { Switch, Route } from "react-router";
import { Cart } from "../pages/Carrinho";
import { Landing } from "../pages/Landing";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
export { Routes };
