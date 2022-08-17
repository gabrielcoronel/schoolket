import "../styles/forms.css";

const Button = ({ label, ...props }) => {
  return (
    <button
      className="Button"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;