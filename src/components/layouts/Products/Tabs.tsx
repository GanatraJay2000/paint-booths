import { CardsItem } from "@/components/common/Cards";
import useIsMobile from "@/utils/helpers/useIsMobile";
import { useState } from "react";

export function ProductTabs() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("spray-booth");

  const products = [
    {
      title: "Tez-70",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
    {
      title: "Tez-90",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
    {
      title: "Tez-110",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
  ];
  const products2 = [
    {
      title: "Tez-20",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
    {
      title: "Tez-30",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
    {
      title: "Tez-40",
      description: "Tez-20 is a new generation of the Tezos blockchain.",
      image:
        "https://media.istockphoto.com/id/916226534/photo/spray-paint-cabinet-in-a-car-repair-station-auto-service-concept-high-quality-painting-of.jpg?s=612x612&w=0&k=20&c=-aF-XfY5wCvfOJXGTowzlATs3cZOL_MA2mjJjUHVsFk=",
      link: "/contact",
    },
  ];
  const data = [
    {
      label: "Spray Booth",
      value: "spray-booth",
      products: products2,
    },
    {
      label: "Column Lift",
      value: "lift",
      products: products,
    },
    {
      label: "Tools",
      value: "tools",
      products: products,
    },
    {
      label: "Tire Repair Machine",
      value: "tire-repair-machine",
      products: products2,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-5">
      {isMobile ? (
        <div className="col-span-5">
          <select
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full col-span-1 bg-white shadow-lg px-5 py-3 border-b-4 border-deep-orange-500 text-deep-orange-500 font-bold"
          >
            {data.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="col-span-1 ">
          {data.map(({ label, value }) => (
            <div
              onClick={() => setActiveTab(value)}
              key={value}
              className={`cursor-pointer mb-7 bg-white shadow-lg px-5 py-3 ${
                activeTab === value
                  ? "border-b-4 border-deep-orange-500 text-deep-orange-500 font-bold"
                  : "border-b-4 border-transparent"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      )}
      <div
        className={`${
          isMobile ? "col-span-5" : "col-span-4"
        } grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 justify-items-center xl:justify-items-start`}
      >
        {data
          .find(({ value }) => value === activeTab)
          ?.products.map((prod, idx) => {
            return (
              <div key={idx} className="mb-7 2xl:mb-16">
                <CardsItem {...prod} anchors />
              </div>
            );
          })}
      </div>
    </div>
  );
}
