import "./CustomButton.styles.scss";

export default function CustomButton(props) {
  const { children, ...remainingProps } = props;
  return (
    <button className="custom-button" {...remainingProps}>
      {children}
    </button>
  );
}
