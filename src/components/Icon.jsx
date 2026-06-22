function Icon(props) {
  const { name } = props;

  if (name === "check") {
    return (
      <svg
        xmlns="http://w3.org"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
      >
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
      </svg>
    );
  }

  if (name === "edit") {
    return (
      <svg
        xmlns="http://w3.org"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
      >
        <path d="M200-200h57l391-391-57-57-391 391v57Zm-60 60v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T818-627L290-140H140Zm600-519-57-57 57 57Zm-152 95-28-29 57 57-29-28Z" />
      </svg>
    );
  }

  return null;
}

export default Icon;
