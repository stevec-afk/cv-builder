function GeneralForm(props) {
  return (
    <div className="form-card">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={props.generalData.fullName}
          onChange={(event) =>
            props.onGeneralChange(event.target.name, event.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={props.generalData.email}
          onChange={(event) =>
            props.onGeneralChange(event.target.name, event.target.value)
          }
        />
        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={props.generalData.phone}
            onChange={(event) =>
              props.onGeneralChange(event.target.name, event.target.value)
            }
          />
        </div>
        <div className="input-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={props.generalData.location}
            onChange={(event) =>
              props.onGeneralChange(event.target.name, event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralForm;
