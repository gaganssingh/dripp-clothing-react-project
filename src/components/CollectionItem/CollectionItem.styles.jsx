import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

export const AddToCartBtnContainer = styled(CustomButton)`
  position: absolute;
  width: 80%;
  opacity: 0.7;
  top: 255px;
  display: none;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;
