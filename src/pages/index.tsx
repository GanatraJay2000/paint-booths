import Products from "@/components/layouts/Home/Products";
import BannerCarousel from "@/components/layouts/Home/Carousel";
import Booths from "@/components/layouts/Home/Booths";
import Contact from "@/components/layouts/Common/Contact";

export default function Home() {
  return (
    <div className="">
      <BannerCarousel />
      <Products />
      <div className="pb-16"></div>
      <Booths />
      <div className="pb-16"></div>
      <Contact />
      <div className="pb-20 md:pb-32 lg:pb-40"></div>
    </div>
  );
}
