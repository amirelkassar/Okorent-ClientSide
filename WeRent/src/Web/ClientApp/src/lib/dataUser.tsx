import avatar from "@/src/assets/images/1.png";
import house from "@/src/assets/images/house1.png";
import house2 from "@/src/assets/images/house2.png";
import ElectronicsIcon from "../assets/icons/electronics";
import ToolsIcon from "../assets/icons/tools";
import SportIcon from "../assets/icons/sport";
import HomeIcon from "../assets/icons/home";
import BusIcon from "../assets/icons/bus";
import PartyIcon from "../assets/icons/party";
import FilmIcon from "../assets/icons/film";
import OthersIcon from "../assets/icons/others";

export const UserData = [
  {
    id: 1,
    name: "sayed Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Pro Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
  {
    id: 2,
    name: "Ahmed Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Pro Plus Package",
    period: "1 Year",
    payment: 250,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
  {
    id: 3,
    name: "zhmed Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Pro Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Starter Package",
    period: "1 Year",
    payment: 355,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
  {
    id: 5,
    name: "farouk Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Pro Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
  {
    id: 6,
    name: "Ahmed Mohamed",
    email: "ahmed5badr5@gmail.com",
    package: "Pro Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 310,
    img: avatar,
  },
];

export const OneUserData = {
  id: 1,
  name: "Ahmed Mohamed Badr",
  since: " March, 2024",
  available: true,
  email: "ahmed5badr5@gmail.com",
  package: "Pro Package",
  period: "1 Year",
  payment: 100,
  rating: 4.52,
  rentedItems: 320,
  leasedItems: 310,
  img: avatar,
};
export const Rentals = [
  {
    id: 1,
    price: 5800,
    title: "Luxury Villa",
    state: "New",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 2,
    price: 600,
    title: "Set of plants",
    state: "Two days ago",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house2,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 3,
    price: 5800,
    title: "Luxury Villa",
    state: "Two days ago",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 4,
    price: 600,
    title: "Set of plants",
    state: "New",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house2,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 5,
    price: 600,
    title: "Set of plants",
    state: "Two days ago",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house2,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
];
export const CategoriesData = [
  {
    id: 1,
    title: "Electronics",
    img: <ElectronicsIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 2,
    title: "Tools",
    img: <ToolsIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 3,
    title: "Hobbies & Sports",
    img: <SportIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 4,
    title: "Home & Garden",
    img: <HomeIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 5,
    title: "Vehicle",
    img: <BusIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 6,
    title: "Party",
    img: <PartyIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 7,
    title: "Film & Photography",
    img: <FilmIcon className={"h-[30px] w-auto"} />,
  },
  {
    id: 8,
    title: "Others",
    img: <OthersIcon className={"h-[30px] w-auto"} />,
  },
];
