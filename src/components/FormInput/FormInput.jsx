import { FormGroupContainer, Input, Label } from "./FormInput.styles";

export default function FormInput(props) {
  const { handleChange, label, ...remainingProps } = props;
  return (
    <FormGroupContainer className="group">
      <Input
        className="form-input"
        onChange={handleChange}
        {...remainingProps}
      />
      {label && (
        <Label className={`${remainingProps.value.length && "shrink"}`}>
          {label}
        </Label>
      )}
    </FormGroupContainer>
  );
}
