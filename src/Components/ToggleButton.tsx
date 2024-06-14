import "./ToggleButton.css";
type Props = {
  label: String;
  isActive: Boolean;
  onClick: () => void;
};

const ToggleButton = (props: Props) => {
  return (
    <button
      className={props.isActive ? "active" : "inactive"}
      onClick={() => props.onClick()}
    >
      {props.label}
    </button>
  );
};

export default ToggleButton;
