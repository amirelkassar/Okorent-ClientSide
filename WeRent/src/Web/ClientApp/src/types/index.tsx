export type AuthResponse = {
  //userId: string;
 userFirstName: string;
  //userLastName: string;
  userEmail: string;
  userRole: "Administrator" | "Client";
} | null;
