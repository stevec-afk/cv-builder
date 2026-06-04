import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";

function Preview(props) {
  return (
    <div className="preview-column">
      <div className="resume-sheet">
        <GeneralPreview generalData={props.cvData.general} />
        <EducationPreview educationData={props.cvData.education} />
      </div>
    </div>
  );
}

export default Preview;
