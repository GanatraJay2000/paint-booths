import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const sticky = true;
  const pages = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Contact Us",
      link: "/contact",
      button: { active: true },
    },
  ];

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((page, index) => {
        if (!page.button)
          return (
            <Typography
              key={index}
              as="li"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href={page.link} className="flex items-center">
                {page.title}
              </a>
            </Typography>
          );
      })}
    </ul>
  );

  return (
    <Navbar
      className={`${
        sticky && "sticky"
      } top-0 z-20 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h3"
          color="deep-orange"
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-extrabold"
        >
          SunStar Equipments
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {pages.map((page, index) => {
            if (page.button)
              return (
                <a href={page.link} key={index}>
                  <Button
                    color="deep-orange"
                    className="hidden lg:inline-block shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-mixShadow"
                  >
                    <span>{page.title}</span>
                  </Button>
                </a>
              );
          })}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {pages.map((page, index) => {
          if (page.button)
            return (
              <a href={page.link} key={index}>
                <Button
                  size="sm"
                  fullWidth
                  className="mb-3 rounded-md !shadow-none"
                  color="deep-orange"
                >
                  <span>{page.title}</span>
                </Button>
              </a>
            );
        })}
      </Collapse>
    </Navbar>
  );
}
