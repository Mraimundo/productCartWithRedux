import styled from "styled-components";
import { darken } from "polished";

export const CatalogItemContainer = styled.div`
  ul {
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      margin-bottom: 20px;

      strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        height: 32px;
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: background 0.2s;

        &:hover {
          background: ${darken(0.06, "#7159c1")};
        }
      }
    }
  }
`;
