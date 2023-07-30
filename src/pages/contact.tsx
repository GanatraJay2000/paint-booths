import Section from "@/components/layouts/Common/Section";
import Left from "@/components/layouts/Contact/Left";
import Right from "@/components/layouts/Contact/Right";

export default function Contact() {
  return (
    <>
      <Section className="!mt-16">
        <div className="flex flex-col lg:flex-row">
          <Left className="lg:w-6/12" />
          <div className="pb-40 lg:pb-0"></div>
          <Right className="lg:w-6/12" />
        </div>
      </Section>
      <div className="pb-20 md:pb-32 lg:pb-40"></div>
    </>
  );
}
