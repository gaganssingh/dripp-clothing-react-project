import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionTitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";

function CollectionPreview(props) {
  const { title, items, history, match, routeName } = props;

  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </CollectionTitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);
