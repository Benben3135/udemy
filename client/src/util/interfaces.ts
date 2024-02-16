export // interface User {
//     uid: string;
//     name: string;
//     email: string;
//     img: string;
//     acronyms: string;
//     logIn: boolean;
//     isTeacher: Boolean;
//   }
interface User {
  uid: string;
  name: string;
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
