import "./FormCard.css";

function FormCard(props) {
  const { fields, data, onFieldChange } = props;

  return (
    <div className="form-fields-container">
      {fields.map((field) => (
        <div key={field.key} className="input-group">
          <label>{field.label}</label>

          {field.type === "textarea" ? (
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
  );
}

export default FormCard;
