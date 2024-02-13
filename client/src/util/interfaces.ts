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
  isTeacher: boolean;
  acronyms: string;
  logIn: boolean;
  img?: string;
  headline?: string;
  bio?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
}
