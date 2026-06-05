import { useState } from "react";
import InputGroup from "./InputGroup";

function GeneralForm(props) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="form-card">
      <h2>Personal Details</h2>
      {isEditing ? (
        /* --- LAYOUT A: EDITING MODE --- */
        <GeneralFormEdit
          generalData={props.generalData}
          onGeneralChange={props.onGeneralChange}
          onSubmit={() => setIsEditing(false)}
        />
      ) : (
        /* --- LAYOUT B: LOCKED SUBMITTED MODE --- */
        <GeneralFormView
          generalData={props.generalData}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}

function GeneralFormEdit(props) {
  return (
    <div className="form-inputs">
      <InputGroup
        label="Full Name"
        name="fullName"
        value={props.generalData.fullName}
        onChange={props.onGeneralChange}
      />

      <InputGroup
        label="Email"
        type="email"
        name="email"
        value={props.generalData.email}
        onChange={props.onGeneralChange}
      />

      <InputGroup
        label="Phone Number"
        type="tel"
        name="phone"
        value={props.generalData.phone}
        onChange={props.onGeneralChange}
      />

      <InputGroup
        label="Location"
        name="location"
        value={props.generalData.location}
        onChange={props.onGeneralChange}
      />

      <button type="button" onClick={props.onSubmit}>
        Submit
      </button>
    </div>
  );
}

function GeneralFormView(props) {
  return (
    <div className="form-locked-view">
      <p>
        <strong>Name:</strong> {props.generalData.fullName}
      </p>
      <p>
        <strong>Email:</strong> {props.generalData.email}
      </p>
      <p>
        <strong>Phone:</strong> {props.generalData.phone}
      </p>
      <p>
        <strong>Location:</strong> {props.generalData.location}
      </p>

      <button type="button" onClick={props.onEdit}>
        Edit
      </button>
    </div>
  );
}

export default GeneralForm;
