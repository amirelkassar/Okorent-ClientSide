import avatar from "@/src/assets/images/1.png";
import house from "@/src/assets/images/house1.png";
import house2 from "@/src/assets/images/house2.png";
import phoneImg from "@/src/assets/images/phone.png";
import { StaticImageData } from "next/image";
import avatarUser from "@/src/assets/images/avatar.png";
import bannerImg from "@/src/assets/images/offer.png";

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
  {
    id: 11,
    name: "Ahmed Mohamed Badr 11",
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

type MembershipsDataProps = {
  id: number;
  name: string;
  date: string;
  email: string;
  package: string;
  payment: string;
  endingDate: string;
  status: string;
  image: StaticImageData;
};

export const MembershipsData: MembershipsDataProps[] = [
  {
    id: 0,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Essential Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Trial",
    image: avatar,
  },
  {
    id: 1,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Pro Package",
    payment: "250$",
    endingDate: "15/10/2025",
    status: "Active",
    image: avatar,
  },
  {
    id: 2,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Premium Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Canceled",
    image: avatar,
  },
  {
    id: 3,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Pro Package",
    payment: "35$",
    endingDate: "15/10/2025",
    status: "Expired",
    image: avatar,
  },
  {
    id: 4,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Premium Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Past Due",
    image: avatar,
  },
  {
    id: 5,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Pro Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Active",
    image: avatar,
  },
  {
    id: 6,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Essential Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Active",
    image: avatar,
  },
  {
    id: 7,
    name: "Ahmed Mohamed",
    date: "15/8/2024",
    email: "marchmanx@gmail.com",
    package: "Essential Package",
    payment: "100$",
    endingDate: "15/10/2025",
    status: "Active",
    image: avatar,
  },
];

interface ChatsDataProps {
  id: number;
  name: string;
  date: string;
  time: string;
  identifier: number;
  image: StaticImageData;
}

export const ChatsData: ChatsDataProps[] = [
  {
    id: 1,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
  {
    id: 2,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatarUser,
  },
  {
    id: 3,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatarUser,
  },
  {
    id: 4,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
  {
    id: 5,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
  {
    id: 6,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatarUser,
  },
  {
    id: 7,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatarUser,
  },
  {
    id: 8,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
  {
    id: 9,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatarUser,
  },
  {
    id: 10,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
  {
    id: 11,
    name: "Ahmed Mohamed Badr",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatarUser,
  },
];
export const ChatsGroupData: ChatsDataProps[] = [
  {
    id: 154,
    name: "All Users ",
    date: "Today",
    time: "05:30 PM",
    identifier: 1,
    image: avatar,
  },
  {
    id: 240,
    name: "ًWork",
    date: "Today",
    time: "05:30 PM",
    identifier: 0,
    image: avatar,
  },
];

interface BannerProps {
  id: number;
  title: string;
  link: string;
  status: string;
  bannerImage: StaticImageData;
}
export const BannersData: BannerProps[] = [
  {
    id: 1,
    title: "Special offer on electronic devices",
    link: "https://www.example.com/special-offer",
    status: "Visible",
    bannerImage: bannerImg,
  },
  {
    id: 2,
    title: "Best Sellers",
    link: "https://www.example.com/special-offer",
    status: "Visible",
    bannerImage: bannerImg,
  },
  {
    id: 3,
    title: "Special offer on electronic devices",
    link: "https://www.example.com/special-offer",
    status: "Hide",
    bannerImage: bannerImg,
  },
  {
    id: 4,
    title: "On Sale",
    link: "https://www.example.com/special-offer",
    status: "Hide",
    bannerImage: bannerImg,
  },
];

interface AdsDataProps {
  id: number;
  product: string;
  user: string;
  startDate: string;
  endDate: string;
  price: string;
  status: string;
  userImg: StaticImageData;
  productImg: StaticImageData;
}
export const AdsData: AdsDataProps[] = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "3 August 2024",
    endDate: "3 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Suspend",
  },
  {
    id: 2,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "4 August 2024",
    endDate: "4 August 2024",
    price: "250$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Suspend",
  },
  {
    id: 3,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "5 August 2024",
    endDate: "5 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Suspend",
  },
  {
    id: 4,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "5 August 2024",
    endDate: "5 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Suspend",
  },
  {
    id: 5,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "7 August 2024",
    endDate: "7 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Activate",
  },
  {
    id: 6,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "8 August 2024",
    endDate: "8 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Suspend",
  },
  {
    id: 7,
    product: "iPhone 15 Pro",
    user: "Ahmed Mohamed",
    startDate: "9 August 2024",
    endDate: "9 August 2024",
    price: "100$",
    userImg: avatar,
    productImg: phoneImg,
    status: "Activate",
  },
];
interface LanguageProps {
  label: string;
  value: string;
}
export const Language: LanguageProps[] = [
  {
    label: "English",
    value: "1",
  },
  {
    label: "German",
    value: "2",
  },
  {
    label: "French",
    value: "3",
  },
  {
    label: "Spanish",
    value: "4",
  },
];

interface WorkingDaysProps {
  label: string;
  value: string;
}
export const WorkingDays: WorkingDaysProps[] = [
  {
    label: "Sunday",
    value: "0",
  },
  {
    label: "Monday",
    value: "1",
  },
  {
    label: "Tuesday",
    value: "2",
  },
  {
    label: "Wednesday",
    value: "3",
  },
  {
    label: "Thursday",
    value: "4",
  },
  {
    label: "Friday",
    value: "5",
  },
  {
    label: "Saturday",
    value: "6",
  },
];

export const STYLE_ICON = "w-3 md:w-4 h-auto";
