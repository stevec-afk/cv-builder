function GeneralPreview(props) {
  return (
    <div className="general-view">
      <h1>{props.generalData.fullName}</h1>
      <p>{props.generalData.email}</p>
      <p>{props.generalData.phone}</p>
      <p>{props.generalData.location}</p>
    </div>
  );
}

export default GeneralPreview;
