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


export const TermsAndConditions = [
  {
    Title: "YOUR AGREEMENT",
    Content:
      "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.",
  },
  {
    Title: "PRIVACY",
    Content:
      "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.",
  },
  {
    Title: "LINKED SITES",
    Content:
      'This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.',
  },
  {
    Title: "FORWARD LOOKING STATEMENTS",
    Content:
      "All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.",
  },
  {
    Title: "DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY",
    Content:
      'A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.\nB. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.',
  },
  {
    Title: "EXCLUSIONS AND LIMITATIONS",
    Content:
      "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.",
  },
  {
    Title: "OUR PROPRIETARY RIGHTS",
    Content:
      'This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party\'s intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.\nThe framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.',
  },
  {
    Title: "INDEMNITY",
    Content:
      "By using the Site web sites you agree to indemnify us and affiliated entities (collectively \"Indemnities\") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.",
  },
  {
    Title: "COPYRIGHT AND TRADEMARK NOTICE",
    Content:
      "Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved",
  },
  {
    Title: "INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS",
    Content:
      'It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:\n\ngenerator.lorem-ipsum.info\n126 Electricov St.\nKiev, Kiev 04176\nUkraine\ncontact@lorem-ipsum.info',
  },
  {
    Title: "PLACE OF PERFORMANCE",
    Content:
      "This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws.",
  },
  {
    Title: "GENERAL",
    Content:
      "A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders.\nB. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use.",
  },
];
