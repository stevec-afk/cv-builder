import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";

function Workspace(props) {
  return (
    <div className="workspace-column">
      <h1>CV Builder</h1>
      <GeneralForm
        generalData={props.generalData}
        onGeneralChange={props.onGeneralChange}
      />
      <EducationForm educationData={props.educationData} />
    </div>
  );
}

export default Workspace;
