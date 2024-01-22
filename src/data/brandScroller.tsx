import company1 from "../assets/shared/brands/logo1.png";
import company2 from "../assets/shared/brands/logo2.png";
import company3 from "../assets/shared/brands/logo3.png";
import company4 from "../assets/shared/brands/logo1.png";
import company5 from "../assets/shared/brands/logo5.png";
import company6 from "../assets/shared/brands/logo6.png";
import company7 from "../assets/shared/brands/logo7.png";

type Brand = {
  id: number;
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  {
    id: 1,
    name: "Company 1",
    logo: company1,
  },
  {
    id: 2,
    name: "Company 2",
    logo: company2,
  },
  {
    id: 3,
    name: "Company 3",
    logo: company3,
  },
  {
    id: 4,
    name: "Company 4",
    logo: company4,
  },
  {
    id: 5,
    name: "Company 5",
    logo: company5,
  },
  {
    id: 6,
    name: "Company 6",
    logo: company6,
  },
  {
    id: 7,
    name: "Company 7",
    logo: company7,
  },
];
