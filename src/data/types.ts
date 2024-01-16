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
  id: number
  heading: string
  subheading: string
  summary: string
  link: string
  thumbnail: string
  cardImg?: string
  /* individual portfolio */
  client: string
  architects: string
  projectType: string
  completion: string
  description1: string
  description2: string
  description3: string
  img1: string
  img2: string
  img3: string
  img4: string
  img5: string
}
