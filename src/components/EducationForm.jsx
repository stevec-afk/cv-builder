import { useState } from "react";

function EducationForm(props) {
  const [isEditing, setIsEditing] = useState(true);
  useState;
  return (
    <div className="form-card">
      <h2>Education Experience</h2>

      {isEditing ? (
        <EducationFormEdit
          educationData={props.educationData}
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
      {props.educationData.map((edu) => {
        return (
          <div className="education-form-group" key={edu.id}>
            <div className="input-group">
              <label>School / University</label>
              <input type="text" value={edu.school} readOnly />
            </div>

            <div className="input-group">
              <label>Degree / Certificate</label>
              <input type="text" value={edu.degree} readOnly />
            </div>

            <div className="input-group">
              <label>Start Year</label>
              <input type="text" value={edu.dateFrom} readOnly />
            </div>

            <div className="input-group">
              <label>End Year</label>
              <input type="text" value={edu.dateTo} readOnly />
            </div>
            <hr />
          </div>
        );
      })}

      <button type="button" onClick={props.onSubmit}>
        Submit
      </button>
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
            <hr />
          </div>
        );
      })}

      <button type="button" onClick={props.onEdit}>
        Edit
      </button>
    </div>
  );
}

export default EducationForm;
