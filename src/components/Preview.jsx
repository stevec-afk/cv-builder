import "./Preview.css";

function Preview(props) {
  const { cvData } = props;
  const { general, education, experience } = cvData;

  return (
    <div className="preview-column">
      {/* General information */}
      <div className="preview-header-block">
        <h1>{general.fullName || "Your Name"}</h1>
        <div className="contact-details-row">
          <span>{general.email}</span>
          <span>{general.phone}</span>
          <span>{general.location}</span>
        </div>
      </div>

      {/* Professional experience */}
      <div className="preview-section">
        <h2>Professional Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="preview-item-row">
            <div className="meta-date-column">
              <span>
                {exp.dateFrom} - {exp.dateTo}
              </span>
            </div>
            <div className="content-details-column">
              <h3>{exp.company || "Company / Organization"}</h3>
              <p className="sub-title-text">{exp.position}</p>
              <p className="description-text">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education history */}
      <div className="preview-section">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="preview-item-row">
            <div className="meta-date-column">
              <span>
                {edu.dateFrom} - {edu.dateTo}
              </span>
            </div>
            <div className="content-details-column">
              <h3>{edu.school || "School / University"}</h3>
              <p className="sub-title-text">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
