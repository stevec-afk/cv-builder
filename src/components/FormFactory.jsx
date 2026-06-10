import FormSection from "./FormSection";

function FormFactory(props) {
  return (
    <div className="form-factory-surface">
      <FormSection
        title="Personal Details"
        sectionName="general"
        sectionData={props.cvData.general}
        onFormChange={props.onFormChange}
      />
      <FormSection
        title="Experience"
        sectionName="experience"
        sectionData={props.cvData.experience}
        onFormChange={props.onFormChange}
      />
      <FormSection
        title="Education"
        sectionName="education"
        sectionData={props.cvData.education}
        onFormChange={props.onFormChange}
      />
      <button className="global-save-btn" type="button" onClick={props.onSave}>
        Save Changes
      </button>
    </div>
  );
}

export default FormFactory;
