import { Input, Textarea } from "@material-tailwind/react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { GrCircleAlert } from "react-icons/gr";
import { AnyObject } from "yup";
import { RadioField } from "./RadioField";

interface TextFieldProps {
  options?: string[];
  type?: "input" | "textarea" | "radio" | "checkbox";
  name?: string;
  label: string;
  className?: string;
  fieldClass?: string | string[];
  formControl?: Partial<ControllerRenderProps>;
  disabled?: boolean;
  error?: FieldError;
}

TextField.defaultProps = {
  options: [],
  type: "input",
  name: "",
  label: "",
  className: "",
  fieldClass: "",
  formControl: null,
  disabled: false,
  error: null,
};

export function TextField({
  options,
  type,
  label,
  className,
  fieldClass,
  formControl,
  disabled,
  error,
}: TextFieldProps) {
  let props: AnyObject = {
    disabled: disabled,
    label: label,
    color: "deep-orange",
    ...formControl,
  };
  const errorProps: AnyObject = {
    label: error?.message,
    error: true,
    icon: <GrCircleAlert className="error-icon" />,
  };
  if (error) props = { ...props, ...errorProps };

  const fields = {
    input: <Input {...props} className={fieldClass as string} />,
    textarea: <Textarea {...props} className={fieldClass as string} />,
    radio: (
      <RadioField
        error={error}
        label={label}
        options={options}
        props={props}
        fieldClass={fieldClass}
      />
    ),
    checkbox: (
      <RadioField
        fieldClass={fieldClass}
        error={error}
        label={label}
        options={options}
        props={props}
        checks
      />
    ),
  };

  return <div className={`${className}`}>{fields[type ?? "input"]}</div>;
}
