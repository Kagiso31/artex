import testimonial1 from "../assets/home/testimonial1.jpg";
import testimonial2 from "../assets/home/testimonial2.jpg";
import testimonial3 from "../assets/home/testimonial3.jpg";

type TestimonialItem = {
  id: number;
  img: string;
  name: string;
  occupation: string;
  comment: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    img: testimonial1,
    name: "Robbie Robertson",
    occupation: "Architect",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deleniti eaque explicabo cumque, omnis error sed illo. Iusto.",
  },
  {
    id: 2,
    img: testimonial2,
    name: "Jessica Drew",
    occupation: "Architect",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo nam consequuntur rem incidunt iusto accusantium totam illo.",
  },
  {
    id: 3,
    img: testimonial3,
    name: "Betty Brant",
    occupation: "Architect",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas a quas sequi deserunt quidem adipisci soluta aperiam voluptate!",
  },
];
