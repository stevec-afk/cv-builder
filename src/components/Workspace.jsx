import GeneralForm from "./GeneralForm";

function Workspace(props) {
  return (
    <div className="workspace-column">
      <h1>CV Builder</h1>
      <GeneralForm
        generalData={props.generalData}
        onGeneralChange={props.onGeneralChange}
      />
    </div>
  );
}

export default Workspace;
