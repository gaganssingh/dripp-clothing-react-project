import { withRouter } from "react-router-dom";
import "./MenuItem.styles.scss";

const MenuItem = (props) => {
  console.log(props);
  const { title, imageUrl, size, linkUrl, history, match } = props;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
