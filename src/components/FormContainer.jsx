import FormSection from "./FormSection";
import FormCard from "./FormCard";
import Icon from "./Icons";
import "./FormContainer.css";

function FormContainer(props) {
  const { cvData, onFormChange, onAddEducation, onAddExperience, onDeleteItem } = props;
  const { general, education, experience } = cvData;

  const personalFields = [
    { label: "Full Name", key: "fullName" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Location", key: "location" },
  ];

  const educationFields = [
    { label: "School / University", key: "school" },
    { label: "Degree", key: "degree" },
    { label: "Start Date", key: "dateFrom" },
    { label: "End Date", key: "dateTo" },
  ];

  const experienceFields = [
    { label: "Company", key: "company" },
    { label: "Position", key: "position" },
    { label: "Start Date", key: "dateFrom" },
    { label: "End Date", key: "dateTo" },
    { label: "Description", key: "description", type: "textarea" },
  ];

  return (
    <div className="form-container-column">
      {/*Personal Details section */}
      <FormSection title="Personal Details">
        <FormCard
          fields={personalFields}
          data={general}
          onFieldChange={(fieldName, newText) =>
            onFormChange("general", fieldName, newText)
          }
        />
      </FormSection>
      {/*Experience Section*/}
      <FormSection title="Professional Experience">
        {experience.map((exp) => (
          <div key={exp.id} className="nested-row-item-card">
            <div className="nested-card-header">
              <h3>{exp.company || "New Experience Entry"}</h3>
              <button
                type="button"
                onClick={() => onDeleteItem("experience", exp.id)}
                className="delete-btn"
                aria-label="Delete entry"
              >
                <Icon name="trash" />
              </button>
            </div>
            <FormCard
              fields={experienceFields}
              data={exp}
              onFieldChange={(fieldName, newText) =>
                onFormChange("experience", fieldName, newText, exp.id)
              }
            />
          </div>
        ))}
        <button type="button" onClick={onAddExperience} className="add-btn">
          + Add Experience
        </button>
      </FormSection>
      {/*Education Section*/}
      <FormSection title="Education">
        {education.map((edu) => (
          <div key={edu.id} className="nested-row-item-card">
            <div className="nested-card-header">
              <h3>{edu.school || "New Education Entry"}</h3>
              <button
                type="button"
                onClick={() => onDeleteItem("experience", edu.id)}
                className="delete-btn"
                aria-label="Delete entry"
              >
                <Icon name="trash" />
              </button>
            </div>
            <FormCard
              fields={educationFields}
              data={edu}
              onFieldChange={(fieldName, newText) =>
                onFormChange("education", fieldName, newText, edu.id)
              }
            />
          </div>
        ))}
        <button type="button" onClick={onAddEducation} className="add-btn">
          + Add Education
        </button>
      </FormSection>
    </div>
  );
}

export default FormContainer;
