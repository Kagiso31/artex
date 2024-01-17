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
  heading: string;
  subheading: string;
  summary: string;
  link: string;
  thumbnail: string;
  cardImg?: string;
  /* individual portfolio */
  client: string;
  architects: string;
  projectType: string;
  completion: string;
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
  comments?: {
    id: number;
    profileImg: string;
    author: string;
    date: string;
    body: string;
  }[];
};
