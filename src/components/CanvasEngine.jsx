// Helper function for the header
function ContactHeader(props) {
  const { email, phone, location, fullName } = props.data;
  return (
    <div className="resume-header">
      <h1>{fullName}</h1>
      <div className="contact-strip">
        {email && <span>{email}</span>}
        {phone && <span>{phone}</span>}
        {location && <span>{location}</span>}
      </div>
    </div>
  );
}
// Helper function to create resume sections
function ResumeSection({ title, items }) {
  const visibleItems = Object.values(items).filter((item) => item.isVisible);
  if (visibleItems.length === 0) return null;

  return (
    <div className="resume-section">
      <h2>{title}</h2>
      <hr className="section-divider" />

      {visibleItems.map((item) => (
        <div className="resume-item" key={item.id}>
          <div className="item-row-header">
            <h3>{item.school || item.company}</h3>
            <span className="date-badge">
              {item.dateFrom} - {item.dateTo}
            </span>
          </div>
          <h4>{item.degree || item.position}</h4>
          {item.description && <p className="item-description">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}

function CanvasEngine({ cvData }) {
  return (
    <div className="canvas-engine-document">
      <ContactHeader data={cvData.general} />
      <ResumeSection title="Professional Experience" items={cvData.experience} />
      <ResumeSection title="Education" items={cvData.education} />
    </div>
  );
}

export default CanvasEngine;
