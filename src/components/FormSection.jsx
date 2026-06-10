import { useState } from "react";
import InputGroup from "./InputGroup";
import { formatLabel } from "../utils/helpers";

function FormSection({ title, sectionName, sectionData, onFormChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const entriesList =
    sectionName === "general" ? [sectionData] : Object.values(sectionData);
  return (
    <div className="form-card">
      <div className="card-header">
        <h2>{title}</h2>
        <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? " Expand ⌄" : " Collapse ⌃"}
        </button>
      </div>
      {!isCollapsed && (
        <div className="card-body">
          {entriesList.map((entry) => (
            <div className="entry-row" key={entry.id || "general-row"}>
              {Object.keys(entry).map((fieldName) => {
                if (fieldName === "id") return null;
                if (fieldName === "isVisible") {
                  return (
                    <button
                      key={fieldName}
                      type="button"
                      className="visibility-toggle-btn"
                      onClick={() =>
                        onFormChange(
                          sectionName,
                          "isVisible",
                          !entry.isVisible,
                          entry.id,
                        )
                      }
                    >
                      {entry.isVisible
                        ? "👁️ Visible on CV"
                        : "🙈 Hidden from CV"}
                    </button>
                  );
                }
                return (
                  <InputGroup
                    key={fieldName}
                    label={formatLabel(fieldName)}
                    name={fieldName}
                    value={entry[fieldName]}
                    onChange={(name, val) =>
                      onFormChange(sectionName, name, val, entry.id)
                    }
                  />
                );
              })}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormSection;
