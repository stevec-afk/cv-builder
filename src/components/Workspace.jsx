import { useState } from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

function Workspace(props) {
  const { cvData } = props;
  const [currentView, setCurrentView] = useState("editing");

  return (
    <div className="workspace-column">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <MainPanel
        cvData={cvData}
        onFormChange={props.onFormChange}
        currentView={currentView}
        onViewChange={setCurrentView}
        onSaveForm={() => setCurrentView("summary")}
      />
    </div>
  );
}

export default Workspace;
