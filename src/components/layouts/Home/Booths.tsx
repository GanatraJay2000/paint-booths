import Slider from "@/components/common/Slider";
import Section, { SectionTitle } from "../Common/Section";
import { boothsData } from "@/utils/data/homeData";

const Booths = () => {
  return (
    <Section>
      <SectionTitle title="Spray Booths" />
      <Slider data={boothsData} />
    </Section>
  );
};

export default Booths;
