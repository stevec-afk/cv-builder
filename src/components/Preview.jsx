import CanvasEngine from "./CanvasEngine";

function Preview(props) {
  return (
    <div className="preview-column">
      <div className="resume-sheet">
        <CanvasEngine cvData={props.cvData} />
      </div>
    </div>
  );
}

export default Preview;
