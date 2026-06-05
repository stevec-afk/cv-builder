import { useState } from "react";

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
            <div className="input-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(event) =>
                  props.onExperienceChange(exp.id, event.target.name, event.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label>Position Title</label>
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(event) =>
                  props.onExperienceChange(exp.id, event.target.name, event.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label>Start Year</label>
              <input
                type="text"
                name="dateFrom"
                value={exp.dateFrom}
                onChange={(event) =>
                  props.onExperienceChange(exp.id, event.target.name, event.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label>End Year</label>
              <input
                type="text"
                name="dateTo"
                value={exp.dateTo}
                onChange={(event) =>
                  props.onExperienceChange(exp.id, event.target.name, event.target.value)
                }
              />
            </div>

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
