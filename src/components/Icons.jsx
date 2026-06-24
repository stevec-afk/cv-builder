import CheckIcon from "../assets/icons/check.svg?react";
import EditIcon from "../assets/icons/edit.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";

function Icon(props) {
  const { name } = props;

  if (name === "check") {
    return <CheckIcon className="icon-svg" style={{ width: "20px", height: "20px" }} />;
  }

  if (name === "edit") {
    return <EditIcon className="icon-svg" style={{ width: "20px", height: "20px" }} />;
  }

  if (name === "trash") {
    return <TrashIcon className="icon-svg" style={{ width: "20px", height: "20px" }} />;
  }

  return null;
}

export default Icon;
