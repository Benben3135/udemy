export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  isTeacher: boolean;
  acronyms: string;
  logIn: boolean;
  headline?: string;
  bio?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  wishlist: [];
}
