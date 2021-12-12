import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import MenuItem from "../MenuItem/MenuItem";
import { DirectoryContainer } from "./Directory.styles";

function Directory({ sections }) {
  return (
    <DirectoryContainer className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </DirectoryContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
