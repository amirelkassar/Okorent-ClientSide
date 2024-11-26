import avatar from "@/src/assets/images/1.png";
import house from "@/src/assets/images/house1.png";
import house2 from "@/src/assets/images/house2.png";
import phoneImg from "@/src/assets/images/phone.png";
import ElectronicsIcon from "../assets/icons/electronics";
import ToolsIcon from "../assets/icons/tools";
import SportIcon from "../assets/icons/sport";
import HomeIcon from "../assets/icons/home";
import BusIcon from "../assets/icons/bus";
import PartyIcon from "../assets/icons/party";
import FilmIcon from "../assets/icons/film";
import OthersIcon from "../assets/icons/others";
import { StaticImageData } from "next/image";

export const UserData = [
  {
    id: 50,
    name: "sayed Mohamed",
    package: "Essential Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    img: avatar,
    verified: true,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },

  {
    id: 2,
    name: "Ahmed Mohamed",
    package: "Pro Package",
    period: "1 Year",
    payment: 250,
    rating: 5,
    img: avatar,
    verified: false,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },
  {
    id: 3,
    name: "zhmed Mohamed",
    package: "Essential Package",
    period: "1 Year",
    payment: 100,
    rating: 1,
    img: avatar,
    verified: true,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    package: "Pro Package",
    period: "1 Year",
    payment: 355,
    rating: 4.52,
    img: avatar,
    verified: false,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },
  {
    id: 5,
    name: "farouk Mohamed",
    package: "Premium Package",
    period: "1 Year",
    payment: 100,
    rating: 4,
    img: avatar,
    verified: true,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },
  {
    id: 6,
    name: "Ahmed Mohamed",
    package: "Premium Package",
    period: "1 Year",
    payment: 100,
    rating: 4.52,
    img: avatar,
    verified: true,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
  },
  {
    id: 7,
    name: "zhmed Mohamed",
    package: "Pro Package",
    period: "1 Year",
    payment: 100,
    rating: 1,
    img: avatar,
    verified: false,
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
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
  {
    id: 6,
    price: 600,
    title: "Set of plants",
    state: "Two days ago",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house2,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 7,
    price: 600,
    title: "Set of plants",
    state: "Two days ago",
    location: "England, United Kingdom",
    locationDetails: "PX8X - V4 New York, United States",
    img: house2,
    details: "For rent luxury villa,315 Meter , 3 Floors",
  },
  {
    id: 8,
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

export const ListingsData = [
  {
    id: 1,
    phone: "Iphone 15 Pro",
    quantity: 100,
    status: true,
    inStock: 100,
    rented: 5,
    rentalCost: 100,
  },
  {
    id: 2,
    phone: "Samsung Galaxy S23",
    quantity: 200,
    status: false,
    inStock: 250,
    rented: 0,
    rentalCost: 100,
  },
  {
    id: 3,
    phone: "Google Pixel 7",
    quantity: 150,
    status: true,
    inStock: 150,
    rented: 6,
    rentalCost: 100,
  },
];

export const RentalsData = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    phone: "Iphone 15 Pro",
    start: "3 August 2024",
    end: "3 August 2024",
    quantity: 100,
    status: "Ongoing",
    payment: 100,
    paymentStatus: "Pending",
    img: avatar,
  },
  {
    id: 2,
    name: "Fatma Ali",
    phone: "Samsung Galaxy S23",
    start: "5 August 2024",
    end: "10 August 2024",
    quantity: 200,
    status: "Declined",
    payment: 250,
    paymentStatus: "Completed",
    img: avatar,
  },
  {
    id: 3,
    name: "Mohamed Ibrahim",
    phone: "Google Pixel 7",
    start: "1 August 2024",
    end: "3 August 2024",
    quantity: 150,
    status: "Completed",
    payment: 150,
    paymentStatus: "Canceled",
    img: avatar,
  },
  {
    id: 4,
    name: "Sara Youssef",
    phone: "OnePlus 11",
    start: "12 August 2024",
    end: "15 August 2024",
    quantity: 50,
    status: "Ongoing",
    payment: 50,
    paymentStatus: "Pending",
    img: avatar,
  },
  {
    id: 5,
    name: "Omar Hassan",
    phone: "Xiaomi Mi 13",
    start: "7 August 2024",
    end: "9 August 2024",
    quantity: 300,
    status: "Upcoming",
    payment: 300,
    paymentStatus: "Completed",
    img: avatar,
  },
];

interface RequestData {
  id: number;
  name: string;
  phone: string;
  memberSince: string;
  statusUser: string;
  status: string;
  quantity: number;
  rating: number;
  rentedItems: number;
  leasedItems: number;
  product: string;
  payment: string;
  paymentStatus: string;
  rentalPeriod: number;
  startDate: string;
  endDate: string;
  country: string;
  action: string;
  imgUser: StaticImageData;
  imgHome: StaticImageData;
}

export const RequestsData: RequestData[] = [
  {
    id: 1,
    name: "Ahmed Mohamed Badr",
    phone: "Iphone 15 Pro",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "new",
    quantity: 100,
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Accept",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 2,
    name: "Fatma Ali",
    phone: "Samsung Galaxy S23",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "Ongoing",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    paymentStatus: "Completed",
    quantity: 200,
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Decline",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 3,
    name: "Mohamed Ibrahim",
    phone: "Google Pixel 7",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "Declined",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 150,
    paymentStatus: "Canceled",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Decline",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 4,
    name: "Omar Hassan",
    phone: "Xiaomi Mi 13",
    memberSince: "March, 2026",
    statusUser: "Available",
    status: "Completed",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Decline",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 5,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "Completed",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Accept",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 6,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "declined",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "upcoming",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 7,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "new",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "upcoming",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 8,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "new",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Ongoing",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 9,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "new",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Ongoing",
    imgUser: avatar,
    imgHome: house,
  },
  {
    id: 10,
    name: "Ahmed Mohamed Badr",
    phone: "OnePlus 11",
    memberSince: "March, 2024",
    statusUser: "Available",
    status: "new",
    rating: 4.52,
    rentedItems: 320,
    leasedItems: 320,
    product: "Apple Laptop",
    payment: "100$",
    quantity: 50,
    paymentStatus: "Pending",
    rentalPeriod: 5,
    startDate: "11-10-2024",
    endDate: "20-8-2024",
    country: "Netherlands",
    action: "Ongoing",
    imgUser: avatar,
    imgHome: house,
  },
];

export const ListingsDataAdmin = [
  {
    id: 1,
    phone: "Iphone 15 Pro",
    ProductImage: phoneImg,
    user: "Ahmed Mohamed",
    avatar: avatar,
    category: "Electronics",
    status: true,
    rentalCost: 100,
    location: "Eastern Warehouse",
  },
  {
    id: 2,
    phone: "Samsung Galaxy S23",
    ProductImage: phoneImg,
    user: "Ahmed Mohamed",
    avatar: avatar,
    category: "Electronics",
    status: false,
    rentalCost: 100,
    location: "Eastern Warehouse",
  },
  {
    id: 3,
    phone: "Google Pixel 7",
    ProductImage: phoneImg,
    user: "Ahmed Mohamed",
    avatar: avatar,
    category: "Electronics",
    status: true,
    rentalCost: 100,
    location: "Eastern Warehouse",
  },
  {
    id: 4,
    phone: "Iphone 15 Pro",
    ProductImage: phoneImg,
    user: "Ahmed Mohamed",
    avatar: avatar,
    category: "Electronics",
    status: true,
    rentalCost: 100,
    location: "Eastern Warehouse",
  },
  {
    id: 5,
    phone: "Google Pixel 7",
    ProductImage: phoneImg,
    user: "Ahmed Mohamed",
    avatar: avatar,
    category: "Electronics",
    status: true,
    rentalCost: 100,
    location: "Eastern Warehouse",
  },
];

interface Ticket {
  id: number;
  name: string;
  avatar: StaticImageData;
  assignee: string;
  avatarAssignee: StaticImageData;
  category: string;
  status: string;
  description: string;
  date: string;
}

export const TICKETS: Ticket[] = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Un Assigned",
    status: "In Progress",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 2,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Sales",
    status: "New",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 3,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Technical",
    status: "Solved",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Feedback",
    status: "New",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 5,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Un Assigned",
    status: "New",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 6,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Feedback",
    status: "New",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
  {
    id: 7,
    name: "Ahmed Mohamed",
    avatar: avatar,
    assignee: "Mark James",
    avatarAssignee: avatar,
    category: "Un Assigned",
    status: "New",
    description: "I want help in adjusting my listings",
    date: "Today | 05:30 PM",
  },
];

interface BookingsAdminData {
  id:number,
  renter: string;
  lessor: string;
  product: string;
  startDate: string;
  endingDate: string;
  quantity: number;
  status: string;
  payment: string;
  lessorImg: StaticImageData;
  renterImg: StaticImageData;
  productImg: StaticImageData;
}

export const BOOKINGS_ADMIN: BookingsAdminData[] = [
  {
    id:1,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "3 August 2024",
    endingDate: "3 August 2024",
    quantity: 21,
    status: "New",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:2,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "4 August 2024",
    endingDate: "4 August 2024",
    quantity: 2505,
    status: "Out for delivery",
    payment: "250$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:3,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "5 August 2024",
    endingDate: "5 August 2024",
    quantity: 1005,
    status: "Reserved",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:4,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "6 August 2024",
    endingDate: "6 August 2024",
    quantity: 1005,
    status: "Ongoing",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:5,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "7 August 2024",
    endingDate: "7 August 2024",
    quantity: 1005,
    status: "Rejected",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:6,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "8 August 2024",
    endingDate: "8 August 2024",
    quantity: 1005,
    status: "Cancelled",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
  {
    id:7,
    renter: "Ahmed Mohamed",
    lessor:'Ahmed Ali',
    product: "iPhone 15 Pro",
    startDate: "9 August 2024",
    endingDate: "9 August 2024",
    quantity: 1005,
    status: "Request for returned",
    payment: "100$",
    lessorImg: avatar, // Link to user 1 image
    renterImg: avatar, // Link to user 1 image
    productImg: phoneImg, // Link to product image
  },
];
