import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

type SliderProps = {
  data: {
    index: number;
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
};

const Nav = ({
  moveToSlide,
  currentIndex,
  noOfSlides,
}: {
  moveToSlide: (e: number) => void;
  currentIndex: number;
  noOfSlides: number;
}) => {
  return (
    <div className="">
      {[...Array(noOfSlides)].map((item, index) => (
        <Button
          color="white"
          key={index}
          onClick={() => moveToSlide(index)}
          className={`p-0 w-5 h-5 mt-5 border-2 box-border ${
            currentIndex == index
              ? "border-deep-orange-500"
              : "border-deep-orange-500 bg-deep-orange-500"
          } mx-1`}
        >
          <></>
        </Button>
      ))}
    </div>
  );
};

const Slider = ({ data }: SliderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [opacities, setOpacities] = useState<any>([]);
  //Autoplay https://codesandbox.io/s/fancy-sky-sm9glm?file=/src/App.js:330-564
  const [sliderRef, slider] = useKeenSlider(
    {
      slides: data.length,
      loop: true,
      renderMode: "performance",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion,
        );
        setOpacities(new_opacities);
      },
    },
    [],
  );

  return (
    <>
      <div ref={sliderRef} className="fader relative h-[650px] ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="fader__slide absolute"
              style={{ opacity: opacities[item.index] }}
            >
              <div className="h-[650px] m-1 p-10 flex items-center">
                <div className="w-6/12 block z-10 -translate-x-10 ">
                  <Card className="mt-5 shadow-xl ">
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {item.title}
                      </Typography>
                      <Typography>{item.description}</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <a href="#" className="inline-block">
                        <Button
                          className="flex items-center gap-2 text-deep-orange-500 shadow-orangeShadow"
                          size="sm"
                          color="deep-orange"
                          variant="outlined"
                        >
                          Learn More <BsArrowRight />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                  <Nav
                    moveToSlide={(num) => slider.current?.moveToIdx(num)}
                    currentIndex={item.index}
                    noOfSlides={data.length}
                  />
                </div>
                <div className="w-6/12">
                  <div className="">
                    <Image
                      src={item.image}
                      alt="Spray Booth"
                      className="scale-125 z-0"
                      width={3000}
                      height={3000}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
