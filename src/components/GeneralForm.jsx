import { useState } from "react";

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
        <GeneralFormView generalData={props.generalData} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}

function GeneralFormEdit(props) {
  return (
    <div className="form-inputs">
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={props.generalData.fullName}
          onChange={(event) => props.onGeneralChange(event.target.name, event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={props.generalData.email}
          onChange={(event) => props.onGeneralChange(event.target.name, event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={props.generalData.phone}
          onChange={(event) => props.onGeneralChange(event.target.name, event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={props.generalData.location}
          onChange={(event) => props.onGeneralChange(event.target.name, event.target.value)}
        />
      </div>

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
