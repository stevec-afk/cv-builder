import { useState } from "react";
import InputGroup from "./InputGroup";

function ExperienceForm(props) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="form-card">
      <h2>Work Experience</h2>

      {isEditing ? (
        <ExperienceFormEdit
          experienceData={props.experienceData}
          onExperienceChange={props.onExperienceChange}
          onSubmit={() => setIsEditing(false)}
        />
      ) : (
        <ExperienceFormView
          experienceData={props.experienceData}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}

function ExperienceFormEdit(props) {
  return (
    <div className="form-inputs">
      {props.experienceData.map((exp) => {
        return (
          <div className="experience-form-group" key={exp.id}>
            <InputGroup
              label="Company Name"
              name="company"
              value={exp.company}
              onChange={(name, value) => props.onExperienceChange(exp.id, name, value)}
            />
            <InputGroup
              label="Position Title"
              name="position"
              value={exp.position}
              onChange={(name, value) => props.onExperienceChange(exp.id, name, value)}
            />
            <InputGroup
              label="Start Year"
              name="dateFrom"
              value={exp.dateFrom}
              onChange={(name, value) => props.onExperienceChange(exp.id, name, value)}
            />
            <InputGroup
              label="End Year"
              name="dateTo"
              value={exp.dateTo}
              onChange={(name, value) => props.onExperienceChange(exp.id, name, value)}
            />
            <div className="input-group">
              <label>Responsibilities</label>
              <textarea
                name="responsibilities"
                value={exp.responsibilities}
                onChange={(event) =>
                  props.onExperienceChange(exp.id, event.target.name, event.target.value)
                }
              />
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

function ExperienceFormView(props) {
  return (
    <div className="form-locked-view">
      {props.experienceData.map((exp) => {
        return (
          <div className="experience-view-item" key={exp.id}>
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p>
              <strong>Position:</strong> {exp.position}
            </p>
            <p>
              <strong>Dates:</strong> {exp.dateFrom} - {exp.dateTo}
            </p>
            <p>
              <strong>Responsibilities:</strong> {exp.responsibilities}
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

export default ExperienceForm;
