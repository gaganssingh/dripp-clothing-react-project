import { withRouter } from "react-router-dom";
import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  Subtitle,
  Title,
} from "./MenuItem.styles";

const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl, history, match } = props;
  return (
    <MenuItemContainer
      className={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <Title>{title}</Title>
        <Subtitle>SHOP</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
