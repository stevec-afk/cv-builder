function EducationPreview(props) {
  return (
    <div className="education-view-section">
      <h2>Education</h2>

      {props.educationData.map((edu) => {
        return (
          <div className="education-item">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>
              {edu.dateFrom} - {edu.dateTo}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationPreview;
