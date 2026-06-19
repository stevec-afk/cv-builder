function FormContainer(props) {
  const { cvData, onFormChange } = props;
  const { general, education, experience } = cvData;

  return (
    <div className="form-sections-stack">
      {/* PERSONAL SECTION */}
      <div className="form-section-card">
        <h2>Personal Details</h2>
        <div className="form-fields-grid">
          {Object.keys(general).map((key) => (
            <div key={key} className="input-group">
              <label>{key}</label>
              <input
                type="text"
                value={general[key] || ""}
                onChange={(e) => onFormChange("general", key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="form-section-card">
        <h2>Education</h2>
        <div className="repeating-rows-list">
          {Object.values(education || {}).map((edu) => (
            <div key={edu.id} className="row-item-summary">
              <span>{edu.schoolName || "New Education Entry"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="form-section-card">
        <h2>Professional Experience</h2>
        <div className="repeating-rows-list">
          {Object.values(experience || {}).map((exp) => (
            <div key={exp.id} className="row-item-summary">
              <span>{exp.companyName || "New Experience Entry"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
