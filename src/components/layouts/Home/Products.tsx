import Section, { SectionTitle } from "@/components/layouts/Common/Section";
import Cards from "../../common/Cards";
import { Typography } from "@material-tailwind/react";
import { cardsData } from "@/utils/data/homeData";

const Products = () => {
  return (
    <Section>
      <div className="flex justify-between items-center lg:items-end">
        <SectionTitle title="Products" />
        <Typography
          as="a"
          href="/products"
          color="deep-orange"
          className="text-md text-xl font-bold"
        >
          Explore All
        </Typography>
      </div>
      <Cards data={cardsData} />
    </Section>
  );
};

export default Products;
