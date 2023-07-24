import { Button, Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Dots, NextArrow, PrevArrow } from "./Navigation";

type carouselItemProps = {
  index: number;
  image: string;
  title: string;
  description: string;
  button: string;
  buttonLink: string;
};

export const CarouselItem = ({
  index,
  image,
  title,
  description,
  button,
  buttonLink,
}: carouselItemProps) => {
  const height = "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]";

  return (
    <div key={index} className={`relative ${height} w-full`}>
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 h-full w-full bg-black/75">
        <div className="m-8 sm:16 md:m-24 text-left">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-7xl"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 w-10/12"
          >
            {description}
          </Typography>
          <div className="flex gap-2">
            <a href={buttonLink}>
              <Button
                // className="text-deep-orange-500 px-12 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-orangeShadow"
                className="bg-white hover:bg-white text-deep-orange-500 shadow-orangeShadow px-12 !outline-0 !focus:outline-0"
                size="lg"
                color="deep-orange"
                variant="outlined"
              >
                {button}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DashboardCarousel({
  data,
}: {
  data: carouselItemProps[];
}) {
  return (
    <>
      {data.length > 1 ? (
        <Carousel
          className="rounded-none"
          transition={{ duration: 1 }}
          loop={true}
          autoplay={true}
          prevArrow={({ handlePrev }) => PrevArrow({ handlePrev })}
          nextArrow={({ handleNext }) => NextArrow({ handleNext })}
          navigation={({ setActiveIndex, activeIndex, length }) =>
            Dots({ setActiveIndex, activeIndex, length })
          }
        >
          {data.map((item) => (
            <CarouselItem key={item.index} {...item} />
          ))}
        </Carousel>
      ) : (
        <CarouselItem {...data[0]} />
      )}
    </>
  );
}
