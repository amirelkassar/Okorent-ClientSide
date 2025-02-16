export type AuthResponse = {
  //userId: string;
  userFirstName: string;
  //userLastName: string;
  userEmail: string;
  userID: string;
  userRole: "Administrator" | "Client" | "User";
} | null;

export interface EventData {
  id: string;
  title: string;
  start: string;
  end: string;
  display: string;
  groupId: string;
  interactive: boolean;
  extendedProps: {
    status: string;
    image: any;
    productName: string;
    payment: string;
    rentalPeriod: string;
    country: string;
    sourceId: string;
  };
}
export interface OrderResource {
  id: string;
  title: string;
  productType: string;
  img: any;
  code: string;
}
