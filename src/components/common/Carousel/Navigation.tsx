import { IconButton } from "@material-tailwind/react";
import { Dispatch, SetStateAction } from "react";

type PrevArrowProps = { handlePrev: () => void };
type NextArrowProps = { handleNext: () => void };
type DotsProps = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  activeIndex: number;
  length: number;
};

export const PrevArrow = ({ handlePrev }: PrevArrowProps) => (
  <IconButton
    variant="text"
    color="white"
    size="lg"
    onClick={handlePrev}
    className="!absolute bottom-6 left-1/4 lg:left-auto -translate-x-2/4 lg:translate-x-0 lg:right-20 rounded-none lg:bg-white lg:text-gray-600 hover:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </IconButton>
);

export const NextArrow = ({ handleNext }: NextArrowProps) => (
  <IconButton
    variant="text"
    color="white"
    size="lg"
    onClick={handleNext}
    className="!absolute bottom-6 left-3/4 -translate-x-2/4 lg:left-auto lg:translate-x-0 lg:right-6 rounded-none lg:bg-white lg:text-gray-600 hover:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  </IconButton>
);

export const Dots = ({ setActiveIndex, activeIndex, length }: DotsProps) => (
  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
    {new Array(length).fill("").map((_, i) => (
      <span
        key={i}
        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
        }`}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </div>
);
