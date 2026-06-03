import GeneralPreview from "./GeneralPreview";

function Preview(props) {
  return (
    <div className="preview-column">
      <div className="resume-sheet">
        <GeneralPreview generalData={props.cvData.general} />
      </div>
    </div>
  );
}

export default Preview;
