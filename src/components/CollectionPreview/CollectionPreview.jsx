import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.styles.scss";

function CollectionPreview(props) {
  const { title, items, history, match, routeName } = props;
  console.log(props);
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);
