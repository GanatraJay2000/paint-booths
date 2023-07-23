import { Button, Typography } from "@material-tailwind/react";
import Section from "./Section";
import Link from "next/link";

const Contact = () => {
  return (
    <Section className="text-center">
      <Typography
        as="h1"
        color="deep-orange"
        className="mt-3 text-md text-5xl font-extrabold text-center mb-7"
      >
        Looking for a painting solution?
      </Typography>
      <Typography className="mt-3 text-md text-xl text-center w-4/6 mx-auto mb-7">
        Lorem ipsum dolor sit amet consectetur. Interdum volutpat varius tellus
        dolor quis sagittis sed. Imperdiet viverra tempor nisi augue
        consectetur. Gravida risus est eget urna diam ultricies libero. Mattis
        ullamcorper diam turpis ut ut vel leo.
      </Typography>
      <div className="text-center ">
        <Link href="/contact">
          <Button
            className="text-deep-orange-500 shadow-orangeShadow px-12 !outline-0 !focus:outline-0"
            size="lg"
            color="deep-orange"
            variant="outlined"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default Contact;
