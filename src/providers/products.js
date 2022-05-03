import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Mew",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SM10/SM10_PT-BR_76.png",
      price: 60,
      id: 1,
    },
    {
      name: "Sandslash de Alola",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM127.png",
      price: 120,
      id: 2,
    },
    {
      name: "Pikachu do Ash",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM109.png",
      price: 70,
      id: 3,
    },
    {
      name: "Mimikyu",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM29.png",
      price: 70,
      id: 4,
    },
    {
      name: "Flareon",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM186.png",
      price: 110,
      id: 5,
    },
    {
      name: "Psyduck",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM199.png",
      price: 70,
      id: 6,
    },
    {
      name: "Scyther",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMA/SMA_PT-BR_SV1.png",
      price: 70,
      id: 7,
    },
    {
      name: "Phione",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMP/SMP_PT-BR_SM220.png",
      price: 70,
      id: 8,
    },
    {
      name: "Vulpix de Alola",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMA/SMA_PT-BR_SV8.png",
      price: 60,
      id: 9,
    },
    {
      name: "Eevee",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SMA/SMA_PT-BR_SV41.png",
      price: 60,
      id: 10,
    },
    {
      name: "Luxray",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH023.png",
      price: 160,
      id: 11,
    },
    {
      name: "Snorlax",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH032.png",
      price: 150,
      id: 12,
    },
    {
      name: "Lapras",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH051.png",
      price: 130,
      id: 13,
    },
    {
      name: "Gengar",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH052.png",
      price: 110,
      id: 14,
    },
    {
      name: "Charizard",
      img: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH066.png",
      price: 170,
      id: 15,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
