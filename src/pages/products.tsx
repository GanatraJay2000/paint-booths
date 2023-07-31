import Contact from "@/components/layouts/Common/Contact";
import Section, { SectionTitle } from "@/components/layouts/Common/Section";
import { ProductTabs } from "@/components/layouts/Products/Tabs";

export default function Products() {
  return (
    <>
      <Section className="!mt-16">
        <SectionTitle title="Products" className="text-center" />
        <div className="pb-6">{process.env.DB_HOST}</div>
        <ProductTabs />
      </Section>
      <div className="pb-16"></div>
      <Contact />
      <div className="pb-24"></div>
    </>
  );
}
