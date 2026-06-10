import { formatLabel } from "../utils/helpers";

function DashboardView({ cvData, onViewChange }) {
  return (
    <div className="dashboard-view-surface">
      <div className="dashboard-card action-header">
        <h2>CV Overview</h2>
        <button type="button" onClick={() => onViewChange("editing")}>
          Edit Profile
        </button>
      </div>

      <div className="dashboard-card">
        <h3>Personal Details</h3>
        <div className="summary-list">
          {Object.entries(cvData.general).map(([key, value]) => {
            if (key === "isVisible") return null;
            return (
              <p key={key}>
                <strong>{formatLabel(key)}:</strong> {value}
              </p>
            );
          })}
        </div>
      </div>

      <div className="dashboard-card">
        <h3>Work Experience</h3>
        {Object.values(cvData.experience).map((exp) => (
          <div className="summary-row" key={exp.id}>
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p>
              <strong>Position:</strong> {exp.position}
            </p>
            <p>
              <strong>Dates:</strong> {exp.dateFrom} - {exp.dateTo}
            </p>
            <hr />
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <h3>Education History</h3>
        {Object.values(cvData.education).map((edu) => (
          <div className="summary-row" key={edu.id}>
            <p>
              <strong>Institution:</strong> {edu.school}
            </p>
            <p>
              <strong>Degree:</strong> {edu.degree}
            </p>
            <p>
              <strong>Dates:</strong> {edu.dateFrom} - {edu.dateTo}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardView;
