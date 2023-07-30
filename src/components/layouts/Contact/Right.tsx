import * as yup from "yup";
import CustomForm from "@/components/common/Form";
import { TextField } from "@/components/common/Form/Fields/Input";
import Button from "@material-tailwind/react/components/Button";

function Right({ className }: { className: string }) {
  interface FormValues {
    // fname: string;
    // message: string;
    laugh: string[];
  }
  const validationSchema = yup.object().shape({
    fname: yup.string().required("First Name is required"),
    laugh: yup
      .array()
      .min(1, "Please select atleast 1 option!")
      .required("Required!"),
    message: yup.string().required("Extra is required"),
  });
  // Adding cyclic dependency to the schema phone->phone
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className={`${className}  px-10 my-rounded-xl`}>
      <h1 className="mb-10 text-2xl">
        Tell us more about yourself and what you&apos;ve got in mind.
      </h1>
      <CustomForm<FormValues>
        className="grid grid-cols-2 gap-7"
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        defaultValues={{ laugh: [] }}
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
          options={["Call", "Email", "Text"]}
        />
        <TextField
          type="checkbox"
          name="product"
          label="Product of Interest"
          className="col-span-2 text-left"
          fieldClass={["flex flex-wrap"]}
          options={[
            "Automotive",
            "Industrial",
            "Aerospace",
            "Marine",
            "Rail",
            "Maintenance",
            "Booths",
            "Paths",
            "Marine",
            "Rail",
            "Maintenance",
            "Booths",
            "Paths",
          ]}
        />
        <TextField
          type="textarea"
          name="message"
          className="col-span-2"
          label="Extra Message"
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
    </div>
  );
}

export default Right;
