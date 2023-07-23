import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export function CardsItem({ image, title, description, link }: CardProps) {
  return (
    <Card className="basis-1/3 max-w-[24rem] overflow-hidden shadow-orangeShadow border border-deep-orange-500 transition-all">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          src={image}
          alt={title}
          className="h-60 object-cover"
          width={3000}
          height={5000}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal text-md"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <a href={link}>
          <Button
            className="text-deep-orange-500 flex gap-5"
            color="deep-orange"
            variant="text"
          >
            Read More <BsArrowRight />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

const Cards = ({ data }: { data: CardProps[] }) => {
  return (
    <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-start lg:justify-between my-10">
      {data.map((item, index) => (
        <CardsItem key={index} {...item} />
      ))}
    </div>
  );
};
export default Cards;
