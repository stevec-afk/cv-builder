import { useState } from "react";
import Icon from "./Icons";
import "./FormSection.css";

function FormSection(props) {
  const { title, children, defaultOpen = false } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="section-group">
      <div className="category-header-row">
        <h2>{title}</h2>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="collapse-toggle-btn"
          aria-label={isOpen ? "Close section" : "Open section"}
        >
          {isOpen ? (
            <>
              <Icon name="check" />
              <span>Save</span>
            </>
          ) : (
            <>
              <Icon name="edit" />
              <span>Edit</span>
            </>
          )}
        </button>
      </div>

      {isOpen && <div className="category-content-stack">{children}</div>}
    </div>
  );
}

export default FormSection;
