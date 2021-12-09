import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.styles.scss";

export default function CollectionPreview(props) {
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
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
