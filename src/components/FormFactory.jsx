import FormSection from "./FormSection";

function FormFactory(props) {
  const { general, experience, education } = props.cvData;

  return (
    <div className="form-factory-surface">
      <FormSection
        title="Personal Details"
        sectionName="general"
        sectionData={general}
        onFormChange={props.onFormChange}
      />
      <FormSection
        title="Experience"
        sectionName="experience"
        sectionData={experience}
        onFormChange={props.onFormChange}
      />
      <FormSection
        title="Education"
        sectionName="education"
        sectionData={education}
        onFormChange={props.onFormChange}
      />
      <button className="global-save-btn" type="button" onClick={props.onSave}>
        Save Changes
      </button>
    </div>
  );
}

export default FormFactory;
