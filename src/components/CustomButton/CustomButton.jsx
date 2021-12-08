import "./CustomButton.styles.scss";

export default function CustomButton(props) {
  const { children, customClass, inverted, ...remainingProps } = props;
  return (
    <button
      className={`custom-button ${customClass} {inverted && "inverted"}`}
      {...remainingProps}
    >
      {children}
    </button>
  );
}
