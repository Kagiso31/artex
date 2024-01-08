import logo from "../assets/shared/arex-logo-light.png";

import project8 from "../assets/shared/footer/project8-150x150.jpg";
import project9 from "../assets/shared/footer/project9-150x150.jpg";
import project10 from "../assets/shared/footer/project10-150x150.jpg";
import project11 from "../assets/shared/footer/project11-150x150.jpg";
import project12 from "../assets/shared/footer/project12-150x150.jpg";
import project13 from "../assets/shared/footer/project13-150x150.jpg";

import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from "./icons";

// social links
type FooterSocial = {
  id: number;
  title: string;
  url: string;
  icon: JSX.Element;
};

const footerSocials: FooterSocial[] = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com",
    icon: <Facebook className="footer__social-icon" />,
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://www.twitter.com",
    icon: <Twitter className="footer__social-icon" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <LinkedIn className="footer__social-icon" />,
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://www.instagram.com",
    icon: <Instagram className="footer__social-icon" />,
  },
  {
    id: 5,
    title: "Pinterest",
    url: "https://www.pinterest.com",
    icon: <Pinterest className="footer__social-icon" />,
  },
];

// Company Info
export const companyInfo = {
  logo: logo,
  desc: "There are many variations of as the passages Lorem Ipsum that and available majority.",
  socials: footerSocials,
};

// Our Address
export const contact = {
  address: "54B, Tailstoi Town 5238 MT, La city, IA 522364, USA",
  tel: {
    title: "+ 7548 845 1285",
    telNumber: "+75488451285",
  },
  email: "info@yourdomain.com",
};

// Quick Links
type Link = {
  id: number;
  title: string;
  url: string;
};

export const quickLinks: Link[] = [
  {
    id: 1,
    title: "About Us",
    url: "/artex/about",
  },
  {
    id: 2,
    title: "Our Recent Work",
    url: "/artex/portfolio",
  },
  {
    id: 3,
    title: "Our blog",
    url: "/artex/blog",
  },
  {
    id: 4,
    title: "Frequently Asked Questions",
    url: "/artex/faq",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/artex/contact",
  },
];

//  Our Gallery
type GalleryProject = {
  id: number;
  title: string;
  url: string;
  img: string;
};

export const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: "Project 8",
    url: "/artex/portfolio/project8",
    img: project8,
  },
  {
    id: 2,
    title: "Project 9",
    url: "/artex/portfolio/project9",
    img: project9,
  },
  {
    id: 3,
    title: "Project 10",
    url: "/artex/portfolio/project10",
    img: project10,
  },
  {
    id: 4,
    title: "Project 11",
    url: "/artex/portfolio/project11",
    img: project11,
  },
  {
    id: 5,
    title: "Project 12",
    url: "/artex/portfolio/project12",
    img: project12,
  },
  {
    id: 6,
    title: "Project 13",
    url: "/artex/portfolio/project13",
    img: project13,
  },
];
