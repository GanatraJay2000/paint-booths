import { Typography } from "@material-tailwind/react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};
type SectionTitleProps = {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <Typography
      variant="h1"
      color="deep-orange"
      className={`${className} lg:mb-4 text-3xl md:text-4xl lg:text-5xl lg:font-extrabold`}
    >
      {title}
    </Typography>
  );
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={`${className} mt-16 md:mt-20 lg:mt-24 xl:mt-32 text-center lg:text-left px-5 lg:px-0 lg:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto`}
    >
      {children}
    </div>
  );
};

export default Section;
