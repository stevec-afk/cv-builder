function ExperiencePreview(props) {
  return (
    <div className="experience-view-section">
      <h2>Professional Experience</h2>

      {props.experienceData.map((exp) => {
        return (
          <div className="experience-item" key={exp.id}>
            <h3>
              {exp.position} - {exp.company}
            </h3>
            <p>
              {exp.dateFrom} - {exp.dateTo}
            </p>
            <p>{exp.responsibilities}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExperiencePreview;
