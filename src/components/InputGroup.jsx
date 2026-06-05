function InputGroup({ label, type = "text", name, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />
    </div>
  );
}
export default InputGroup;
