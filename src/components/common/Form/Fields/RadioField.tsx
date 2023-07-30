import { Checkbox, Radio } from "@material-tailwind/react";
import { FieldError } from "react-hook-form";
import { GrCircleAlert } from "react-icons/gr";
import { AnyObject } from "yup";

interface RFprops {
  fieldClass?: string | string[];
  checks?: boolean;
  error?: FieldError;
  label: string;
  options?: string[];
  props: AnyObject;
}

RadioField.defaultProps = {
  fieldClass: "",
  checks: false,
  error: null,
  label: "",
  options: [],
  props: null,
};

export function RadioField({
  fieldClass,
  checks,
  error,
  label,
  options,
  props,
}: RFprops) {
  return (
    <div className="">
      <span
        className={`${error ? "text-red-500 flex items-center gap-2" : ""}`}
      >
        {error ? error.message : label}
        {error && <GrCircleAlert className="error-icon" />}
      </span>
      <div
        className={
          (typeof fieldClass == "string" ? fieldClass : fieldClass?.[0]) ??
          "flex flex-col md:flex-row gap-x-10 flex-wrap"
        }
      >
        {options?.map((option, i) => {
          return (
            <div key={i} className={`${fieldClass?.[1]} inline-block`}>
              {checks ? (
                <Checkbox
                  className={fieldClass?.[2]}
                  {...props}
                  value={option}
                  label={option}
                  ripple={false}
                />
              ) : (
                <Radio
                  className={fieldClass?.[2]}
                  {...props}
                  value={option}
                  label={option}
                  ripple={false}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
