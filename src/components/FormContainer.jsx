import FormSection from "./FormSection";

function FormContainer(props) {
  const { cvData, onFormChange, onAddEducation, onAddExperience, onDeleteItem } = props;
  const { general, education, experience } = cvData;

  // Centralized definitions of form fields
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
      {/* Personal details */}
      <div className="section-group">
        <h2>Personal Details</h2>
        <FormSection
          title="Personal Details"
          fields={personalFields}
          data={general}
          onFieldChange={(fieldName, newText) =>
            onFormChange("general", fieldName, newText)
          }
        />
      </div>

      {/* Experience section */}
      <div className="section-group">
        <h2>Professional Experience</h2>
        {experience.map((exp) => (
          <FormSection
            key={exp.id}
            title={exp.company || "New Experience Entry"}
            fields={experienceFields}
            data={exp}
            onFieldChange={(fieldName, newText) =>
              onFormChange("experience", fieldName, newText, exp.id)
            }
            onDelete={() => onDeleteItem("experience", exp.id)}
          />
        ))}
        <button type="button" onClick={onAddExperience} className="add-btn">
          + Add Experience
        </button>
      </div>

      {/* Education Section */}
      <div className="section-group">
        <h2>Education</h2>
        {education.map((edu) => (
          <FormSection
            key={edu.id}
            title={edu.school || "New Education Entry"}
            fields={educationFields}
            data={edu}
            onFieldChange={(fieldName, newText) =>
              onFormChange("education", fieldName, newText, edu.id)
            }
            onDelete={() => onDeleteItem("education", edu.id)}
          />
        ))}
        <button type="button" onClick={onAddEducation} className="add-btn">
          + Add Education
        </button>
      </div>
    </div>
  );
}

export default FormContainer;
