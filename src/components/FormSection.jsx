import { useState } from "react";

function FormSection(props) {
  const { title, fields, data, onFieldChange, onDelete } = props;
  const [isSubmitted, setIsSubmitted] = useState(true);

  return (
    <div className="form-section-card">
      <div className="form-section-header">
        <h3>{title}</h3>
        <button
          type="button"
          onClick={() => setIsSubmitted(!isSubmitted)}
          className="toggle-mode-btn"
        >
          {isSubmitted ? "Edit" : "Submit"}
        </button>
        {onDelete && (
          <button type="button" onClick={onDelete} className="delete-btn">
            Delete
          </button>
        )}
      </div>

      <div className="form-fields-container">
        {fields.map((field) => (
          <div key={field.key} className="input-group">
            <label>{field.label}</label>

            {isSubmitted ? (
              <p className="read-only-text">
                {data[field.key] || `No ${field.label.toLowerCase()} entered`}
              </p>
            ) : field.type === "textarea" ? (
              <textarea
                value={data[field.key] || ""}
                onChange={(e) => onFieldChange(field.key, e.target.value)}
              />
            ) : (
              <input
                type="text"
                value={data[field.key] || ""}
                onChange={(e) => onFieldChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormSection;
