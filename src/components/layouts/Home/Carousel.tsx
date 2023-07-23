import DashboardCarousel from "@/components/common/Carousel";
import { carouselItems } from "@/utils/data/homeData";

const BannerCarousel = () => {
  return <DashboardCarousel data={carouselItems} />;
};

export default BannerCarousel;
