import { useState } from "react";
import InputGroup from "./InputGroup";

function EducationForm(props) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="form-card">
      <h2>Education Experience</h2>

      {isEditing ? (
        <EducationFormEdit
          educationData={props.educationData}
          onEducationChange={props.onEducationChange}
          onSubmit={() => setIsEditing(false)}
        />
      ) : (
        <EducationFormView
          educationData={props.educationData}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}

function EducationFormEdit(props) {
  return (
    <div className="form-inputs">
      {props.educationData.map((edu) => (
        <div className="education-form-group" key={edu.id}>
          <InputGroup
            label="School / University"
            name="school"
            value={edu.school}
            onChange={(name, val) => props.onEducationChange(edu.id, name, val)}
          />
          <InputGroup
            label="Degree / Certificate"
            name="degree"
            value={edu.degree}
            onChange={(name, val) => props.onEducationChange(edu.id, name, val)}
          />
          <InputGroup
            label="Start Year"
            name="dateFrom"
            value={edu.dateFrom}
            onChange={(name, val) => props.onEducationChange(edu.id, name, val)}
          />
          <InputGroup
            label="End Year"
            name="dateTo"
            value={edu.dateTo}
            onChange={(name, val) => props.onEducationChange(edu.id, name, val)}
          />
          <hr />
        </div>
      ))}

      <button type="button" onClick={props.onSubmit}>
        Submit
      </button>
      <hr />
    </div>
  );
}

function EducationFormView(props) {
  return (
    <div className="form-locked-view">
      {props.educationData.map((edu) => {
        return (
          <div className="education-view-item" key={edu.id}>
            <p>
              <strong>School:</strong> {edu.school}
            </p>
            <p>
              <strong>Degree:</strong> {edu.degree}
            </p>
            <p>
              <strong>Dates:</strong> {edu.dateFrom} - {edu.dateTo}
            </p>
          </div>
        );
      })}

      <button type="button" onClick={props.onEdit}>
        Edit
      </button>
      <hr />
    </div>
  );
}

export default EducationForm;
