import { ServiceCard } from "./";
import { Architect, Planning, Portfolio, Process } from "./icons";

export const services: ServiceCard[] = [
  {
    id: 1,
    heading: "Architecture Portfolio",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum, quisquam similique error earum maiores natus eius blanditiis.",
    icon: <Portfolio className="service__icon" />,
  },
  {
    id: 2,
    heading: "Planning Process",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum, quisquam similique error earum maiores natus eius blanditiis.",
    icon: <Process className="service__icon" />,
  },
  {
    id: 3,
    heading: "Interior Design",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum, quisquam similique error earum maiores natus eius blanditiis.",
    icon: <Architect className="service__icon" />,
  },
  {
    id: 4,
    heading: "Exclusively Planning",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum, quisquam similique error earum maiores natus eius blanditiis.",
    icon: <Planning className="service__icon" />,
  },
];
