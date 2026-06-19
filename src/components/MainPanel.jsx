import FormContainer from "./FormContainer";
import DashboardView from "./DashboardView";
import DesignSettings from "./DesignSettings";

function MainPanel(props) {
  const { currentView, cvData, onFormChange } = props;

  switch (currentView) {
    case "layout-config":
      return <DesignSettings cvData={cvData} />;
    case "editing":
      return <FormContainer cvData={cvData} onFormChange={onFormChange} />;
    default: // Default to summary view
      return <DashboardView cvData={props.cvData} onViewChange={props.onViewChange} />;
  }
}

export default MainPanel;
