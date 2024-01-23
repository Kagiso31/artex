import { Concept, Execution, Idea, Prototyping } from "./icons";

type OperationItem = {
  id: number;
  title: string;
  body: string;
  icon: JSX.Element;
};

export const operations: OperationItem[] = [
  {
    id: 1,
    title: "Concept Ready",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos?",
    icon: <Concept className="operations-card__icon" />,
  },
  {
    id: 2,
    title: "Idea Works!",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, delectus!",
    icon: <Idea className="operations-card__icon" />,
  },
  {
    id: 3,
    title: "Prototyping Ideas",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, explicabo!",
    icon: <Prototyping className="operations-card__icon" />,
  },
  {
    id: 4,
    title: "Excecution",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quisquam!",
    icon: <Execution className="operations-card__icon" />,
  },
];
