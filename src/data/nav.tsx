import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from "./icons";

type NavLink = {
  id: number;
  title: string;
  url: string;
};

export const navList: NavLink[] = [
  {
    id: 1,
    title: "Home",
    url: "/artex",
  },
  {
    id: 2,
    title: "About Us",
    url: "/artex/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/artex/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/artex/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/artex/contact",
  },
  {
    id: 6,
    title: "FAQ",
    url: "/artex/faq",
  },
];

type SocialLink = {
  id: number;
  title: string;
  url: string;
  icon: JSX.Element;
};
export const socialList: SocialLink[] = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com",
    icon: <Facebook className="menu__social-icon" />,
  },
  {
    id: 2,
    title: "twitter",
    url: "https://www.twitter.com",
    icon: <Twitter className="menu__social-icon" />,
  },
  {
    id: 3,
    title: "linkedin",
    url: "https://www.linkedin.com",
    icon: <LinkedIn className="menu__social-icon" />,
  },
  {
    id: 4,
    title: "pinterest",
    url: "https://www.pinterest.com",
    icon: <Pinterest className="menu__social-icon" />,
  },
  {
    id: 5,
    title: "instagram",
    url: "https://www.instagram.com",
    icon: <Instagram className="menu__social-icon" />,
  },
];
