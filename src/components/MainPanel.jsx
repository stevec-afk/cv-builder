import FormFactory from "./FormFactory";
import DashboardView from "./DashboardView";
import DesignSettings from "./DesignSettings";

function MainPanel(props) {
  switch (props.currentView) {
    case "layout-config":
      return <DesignSettings cvData={props.cvData} />;
    case "editing":
      return <FormFactory cvData={props.cvData} onFormChange={props.onFormChange} />;
    default: // Default to summary view
      return <DashboardView cvData={props.cvData} onViewChange={props.onViewChange} />;
  }
}

export default MainPanel;
