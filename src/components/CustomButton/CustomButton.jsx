import "./CustomButton.styles.scss";

export default function CustomButton(props) {
  const { children, customClass, ...remainingProps } = props;
  return (
    <button className={`custom-button ${customClass}`} {...remainingProps}>
      {children}
    </button>
  );
}
