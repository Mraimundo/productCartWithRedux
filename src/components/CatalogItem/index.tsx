import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../../modules/cart/actions";

import { IProduct } from "../../modules/cart/types";
import { IState } from "../../util/store";
import * as S from "./styles";

interface CatalogItemProps {
  product: IProduct;
}

const Catalog: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStock = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(Number(product.id));
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <S.CatalogItemContainer>
      <ul>
        <li>
          <strong>{product.title}</strong> {"-"}
          <span>{product.price}</span> {"-"}
          <button type="button" onClick={handleAddProductToCart}>
            Comprar
          </button>
          {hasFailedStock && (
            <span style={{ color: "red" }}>Falta de estoque</span>
          )}
        </li>
      </ul>
    </S.CatalogItemContainer>
  );
};

export default Catalog;
