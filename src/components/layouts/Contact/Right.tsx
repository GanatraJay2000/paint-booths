import { useState } from "react";
import * as yup from "yup";
import CustomForm from "@/components/common/Form";
import { TextField } from "@/components/common/Form/Fields/Input";
import Button from "@material-tailwind/react/components/Button";

function Right({ className }: { className: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [formError, setFormError] = useState("");
  interface FormValues {
    fname: string;
    lname: string;
    company: string;
    email: string;
    contact: (string | undefined)[] | undefined;
    product: (string | undefined)[] | undefined;
    phone?: string | null;
    message?: string;
  }
  const validationSchema = yup.object().shape(
    {
      fname: yup.string().required("First name is required"),
      lname: yup.string().required("Last name is required"),
      company: yup.string().required("Company name is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
      phone: yup
        .string()
        .nullable()
        .notRequired()
        .when("phone", {
          is: (val: string) => val?.length > 0,
          then: (rule) => {
            return rule.matches(
              /^(?:\+\d{1,3}\s?)?(?:\(\d{3}\)\s?|\d{3}(?:[-.\s]?)?)\d{3}(?:[-.\s]?)?\d{4}$/,
              "Enter a valid Phone Number",
            );
          },
        }),
      contact: yup.array().of(yup.string()),
      product: yup.array().of(yup.string()),
      message: yup.string(),
    },
    [["phone", "phone"]],
  );
  // Adding cyclic dependency to the schema phone->phone
  const onSubmit = (data: FormValues) => {
    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
      } else {
        setFormError("Failed to submit the form !!!");
        setFailed(true);
        setSubmitted(true);
      }
    });
  };
  return (
    <div className={`${className} px-10`}>
      <h1 className="mb-10 text-2xl">
        Tell us more about yourself and what you&apos;ve got in mind.
      </h1>
      {!submitted ? (
        <CustomForm<FormValues>
          className="grid grid-cols-2 gap-7"
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          defaultValues={{ contact: ["Email"], product: [] }}
        >
          <TextField name="fname" label="First Name" />
          <TextField name="lname" label="Last Name" />
          <TextField name="company" label="Company" />
          <TextField name="email" label="Email" />
          <TextField name="phone" label="Phone Number" />
          <TextField
            type="checkbox"
            name="contact"
            label="Contact Preference"
            className="col-span-2 text-left"
            options={["Email", "Call"]}
          />
          <TextField
            type="checkbox"
            name="product"
            label="Product of Interest"
            className="col-span-2 text-left"
            fieldClass={["flex flex-wrap"]}
            options={[
              "Booths",
              "Automotive",
              "Industrial",
              "Aerospace",
              "Marine",
              "Rail",
              "Maintenance",
              "Paths",
            ]}
          />
          <TextField
            type="textarea"
            name="message"
            className="col-span-2"
            label="Message"
          />
          <div className="text-left col-span-2 lg:col-span-1">
            <Button
              type="submit"
              size="lg"
              color="deep-orange"
              className="w-full lg:w-auto shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mixShadow px-14"
            >
              Submit
            </Button>
          </div>
        </CustomForm>
      ) : (
        <div className="bg-deep-orange-500/10 border border-deep-orange-500 font-bold text-deep-orange-500 p-4">
          {failed ? formError : "Form submission successfully !!!"}
        </div>
      )}
    </div>
  );
}

export default Right;
