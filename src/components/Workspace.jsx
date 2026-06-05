import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function Workspace(props) {
  return (
    <div className="workspace-column">
      <h1>CV Builder</h1>
      <GeneralForm generalData={props.generalData} onGeneralChange={props.onGeneralChange} />
      <EducationForm
        educationData={props.educationData}
        onEducationChange={props.onEducationChange}
      />
      <ExperienceForm
        experienceData={props.experienceData}
        onExperienceChange={props.onExperienceChange}
      />
    </div>
  );
}

export default Workspace;
