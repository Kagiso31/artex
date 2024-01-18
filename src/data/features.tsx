import bgImg1 from "../assets/home/project5-1.jpg";
import bgImg2 from "../assets/home/project6-1.jpg";
import bgImg3 from "../assets/home/project7-1.jpg";

type FeatureItem = {
  id: number;
  heading: string;
  subheading: string;
  bgImg: string;
};

type FeatureBackground = {
  id: number;
  bgImg: string;
};

export const featureItems: FeatureItem[] = [
  {
    id: 1,
    heading: "Commercial",
    subheading: "Interior Design",
    bgImg: bgImg1,
  },
  {
    id: 2,
    heading: "Architecture",
    subheading: "Creative Design",
    bgImg: bgImg2,
  },
  {
    id: 3,
    heading: "Residential",
    subheading: "Exterior Design",
    bgImg: bgImg3,
  },
];

export const featureBackgrounds: FeatureBackground[] = [
  {
    id: 1,
    bgImg: bgImg1,
  },
  {
    id: 2,
    bgImg: bgImg2,
  },
  {
    id: 3,
    bgImg: bgImg3,
  },
];
