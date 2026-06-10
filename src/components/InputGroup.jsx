function InputGroup(props) {
  const { label, name, value } = props;

  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => props.onChange(e.target.name, e.target.value)}
      />
    </div>
  );
}
export default InputGroup;
