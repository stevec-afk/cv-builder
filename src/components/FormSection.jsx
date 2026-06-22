import { useState } from "react";
import Icon from "./Icon";

function FormSection(props) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

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
          {isOpen ? <Icon name="check" /> : <Icon name="edit" />}
        </button>
      </div>

      {isOpen && <div className="category-content-stack">{children}</div>}
    </div>
  );
}

export default FormSection;
