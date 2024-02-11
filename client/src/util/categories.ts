// Importing images
import developmentImage from "../../public/images/categoriesImges/development.jpg";
import businessImage from "../../public/images/categoriesImges/business.jpg";
import itAndSoftwareImage from "../../public/images/categoriesImges/it-and-software.jpg";
import marketingImage from "../../public/images/categoriesImges/marketing.jpg";
import personalDevelopmentImage from "../../public/images/categoriesImges/personal-development.jpg";
import photographyImage from "../../public/images/categoriesImges/photography.jpg";
import DesignImage from "../../public/images/categoriesImges/design.jpg";
import musicImage from "../../public/images/categoriesImges/music.jpg";


// Categories data
const categoryImagesData = [
  {
    category: "Development",
    imagePath: developmentImage,
  },
  {
    category: "Business",
    imagePath: businessImage,
  },
  {
    category: "Design",
    imagePath: DesignImage,
  },
  {
    category: "IT and Software",
    imagePath: itAndSoftwareImage,
  },
  {
    category: "Marketing",
    imagePath: marketingImage,
  },
  {
    category: "Personal Development",
    imagePath: personalDevelopmentImage,
  },
  {
    category: "Photography",
    imagePath: photographyImage,
  },
  {
    category: "music",
    imagePath: musicImage,
  },
];

// Other category lists
export const categories = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT and Software",
  "Office productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
];

export const categoriesNavBar = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT and Software",
  "Office productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
];

export const categoriesTab = [
  "Development",
  "Business",
  "Design",
  "Marketing",
  "Lifestyle",
  "Finance & Accounting",
  "Music",
];

export const termsCategories = [
  {
    name: "Terms of Use",
    href: "terms",
  },
  {
    name: "Privacy Policy",
    href: "privacy",
  },
  {
    name: "Intellectual Property Policy",
    href: "copyright",
  },
  {
    name: "Instructor Terms",
    href: "instructor",
  },
  {
    name: "Affiliate Terms & Conditions",
    href: "affiliate",
  },
  {
    name: "Launch Services",
    href: "launch-services",
  },
];

export default categoryImagesData;
