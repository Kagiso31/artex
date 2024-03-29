export type IconProps = {
  className: string;
};

export type HeroSlide = {
  id: number;
  img: string;
  heading: string;
  body: string;
};

export type ServicesItem = {
  id: number;
  heading: string;
  body: string;
  icon: JSX.Element;
};

export type PortfolioItem = {
  /* shared props */
  id: number;
  name: string;
  location: string;
  summary: string;
  link: string;
  thumbnail: string;
  cardImg?: string;
  /* individual portfolio */
  projectDetails: {
    id: number;
    detailTitle: string;
    detailValue: string;
  }[];
  socials: {
    id: number;
    title: string;
    link: string;
    icon: JSX.Element;
  }[];
  description1: string;
  description2: string;
  description3: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
};

export type BlogPost = {
  id: number;
  url: string;
  title: string;
  date: string;
  category: string[];
  author: string;
  summary: string;
  quote: {
    id: number;
    body: string;
    author: string;
    occupation: string;
  };
  body: string;
  body2: string;
  body3: string;
  bodyHeading: string;
  body4: string;
  bodyList: string[];
  body5: string;
  tags: string[];
  listImg: string;
  postImg: string;
  cardImg?: string;
  sidebarImg?: string;
  comments?: {
    id: number;
    profileImg: string;
    author: string;
    date: string;
    body: string;
  }[];
};

export type TeamMember = {
  id: number;
  name: string;
  thumbnail: string;
  img: string;
  link: string;
  socials: {
    id: number;
    title: string;
    link: string;
    icon: JSX.Element;
  }[];
  info: {
    id: number;
    infoTitle: string;
    infoValue: string;
  }[];
  bio1: string; // 96 words
  bio2: string; // 46 words
  skills: {
    id: number;
    title: string;
    progress: string;
  }[];
  bio3: string; // 44 words
  bio4: string; // 26 words
};

export type FaqAccordionItem = {
  id: number;
  title: string;
  body: string;
};
