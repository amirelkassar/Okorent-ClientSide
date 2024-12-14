export type AuthResponse = {
  //userId: string;
 userFirstName: string;
  //userLastName: string;
  userEmail: string;
  userID:string;
  userRole: "Administrator" | "Client"|'User';
} | null;
