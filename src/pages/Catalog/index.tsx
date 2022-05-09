import { useState, useEffect } from "react";
import CatalogItem from "../../components/CatalogItem";
import { IProduct } from "../../modules/cart/types";
import { api } from "../../services/api";

import * as S from "./styles";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <S.ProductContainer>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </S.ProductContainer>
  );
};

export default Catalog;
