import { useState } from "react";

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
      {props.educationData.map((edu) => {
        return (
          <div className="education-form-group" key={edu.id}>
            <div className="input-group">
              <label>School / University</label>
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(event) =>
                  props.onEducationChange(
                    edu.id,
                    event.target.name,
                    event.target.value,
                  )
                }
              />
            </div>

            <div className="input-group">
              <label>Degree / Certificate</label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(event) =>
                  props.onEducationChange(
                    edu.id,
                    event.target.name,
                    event.target.value,
                  )
                }
              />
            </div>

            <div className="input-group">
              <label>Start Year</label>
              <input
                type="text"
                name="dateFrom"
                value={edu.dateFrom}
                onChange={(event) =>
                  props.onEducationChange(
                    edu.id,
                    event.target.name,
                    event.target.value,
                  )
                }
              />
            </div>

            <div className="input-group">
              <label>End Year</label>
              <input
                type="text"
                name="dateTo"
                value={edu.dateTo}
                onChange={(event) =>
                  props.onEducationChange(
                    edu.id,
                    event.target.name,
                    event.target.value,
                  )
                }
              />
            </div>
          </div>
        );
      })}

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
