import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

function Preview(props) {
  return (
    <div className="preview-column">
      <div className="resume-sheet">
        <GeneralPreview generalData={props.cvData.general} />
        <EducationPreview educationData={props.cvData.education} />
        <ExperiencePreview experienceData={props.cvData.experience} />
      </div>
    </div>
  );
}

export default Preview;
