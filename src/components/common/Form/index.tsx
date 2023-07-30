import { yupResolver } from "@hookform/resolvers/yup";
import { Children, ReactElement, ReactNode, createElement } from "react";
import { DefaultValues, useForm } from "react-hook-form";
import { ObjectSchema, AnyObject } from "yup";

interface CustomFormProps<T extends AnyObject> {
  defaultValues?: DefaultValues<T>;
  onSubmit: (data: T) => void;
  validationSchema: ObjectSchema<T>;
  children: ReactNode;
  className?: string;
}

export default function CustomForm<T extends AnyObject>({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
  className,
}: CustomFormProps<T>) {
  const resolver = yupResolver(validationSchema);
  const methods = useForm({ resolver, defaultValues });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${className}`}>
        {Children.map(children as ReactElement, (child: ReactElement) => {
          return child?.props?.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  formControl: register(child.props.name),
                  key: child.props.name,
                  error: errors[child.props.name],
                },
              })
            : child;
        })}
      </div>
    </form>
  );
}

CustomForm.defaultProps = { defaultValues: {}, className: "" };
