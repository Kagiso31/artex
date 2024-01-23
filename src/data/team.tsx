import teamMember1 from "../assets/about/team1-370x420.jpg";
import teamMember2 from "../assets/about/team2-370x420.jpg";
import teamMember3 from "../assets/about/team3-370x420.jpg";
import teamMember4 from "../assets/about/team4-370x420.jpg";
import teamMember5 from "../assets/about/team5-370x420.jpg";
import teamMember6 from "../assets/about/team6-370x420.jpg";
import { Facebook, Instagram, Pinterest, Twitter } from "./icons";

type TeamMember = {
  id: number;
  name: string;
  img: string;
  link: string;
  socials: {
    id: number;
    title: string;
    link: string;
    icon: JSX.Element;
  }[];
  speciality: string;
  expertise: string;
  experience: string;
  email: string;
  phone: string;
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

export const teamMembers: TeamMember[] = [
  // team member - 1
  {
    id: 1,
    name: "Harry Osborn",
    img: teamMember1,
    link: "/artex/team/1",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Founder of Artex",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
  // team member - 2
  {
    id: 2,
    name: "Gwen Stacy",
    img: teamMember2,
    link: "/artex/team/2",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Head of Idea",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
  // team member - 3
  {
    id: 3,
    name: "Peter Parker",
    img: teamMember3,
    link: "/artex/team/3",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Senior Planner",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
  // team member - 4
  {
    id: 4,
    name: "Miles Morales",
    img: teamMember4,
    link: "/artex/team/4",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Senior Interior",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
  // team member - 5
  {
    id: 5,
    name: "Edward Brock",
    img: teamMember5,
    link: "/artex/team/5",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Project Manager",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
  // team member - 6
  {
    id: 6,
    name: "Cassandra Webb",
    img: teamMember6,
    link: "/artex/team/6",
    socials: [
      {
        id: 1,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: <Facebook className="team-card__icon" />,
      },
      {
        id: 2,
        title: "Twitter",
        link: "https://www.twitter.com",
        icon: <Twitter className="team-card__icon" />,
      },
      {
        id: 3,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: <Instagram className="team-card__icon" />,
      },
      {
        id: 4,
        title: "Pinterest",
        link: "https://www.pinterest.com",
        icon: <Pinterest className="team-card__icon" />,
      },
    ],
    speciality: "Planning Manager",
    expertise: "Planning, Strategy",
    experience: "13 Years",
    email: "info@artex.com",
    phone: "+7548 845 1285",
    // biography
    bio1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto consequatur doloremque reprehenderit. Fuga nobis molestiae eum fugit, iusto deserunt error, sint repellendus ratione sequi mollitia tempora at explicabo distinctio. Eaque inventore labore quibusdam dignissimos et eos neque voluptas. Fugit minima fugiat aliquid quibusdam fuga, odit assumenda eum placeat inventore vitae! Quod molestias corrupti similique, modi voluptatibus laborum cum corporis totam ut? Expedita sed illum temporibus sequi aliquid quaerat nam beatae optio autem! Ducimus voluptates modi rem. Nesciunt eveniet ipsam consequuntur assumenda fugit inventore quos perspiciatis est, labore quae quibusdam dolorum! Nesciunt natus in architecto libero.",
    bio2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam molestiae ipsum? Vero quae officia, rem necessitatibus maiores error qui libero velit quod doloremque, molestiae enim illo odio architecto, hic excepturi nostrum voluptate dignissimos neque. Atque nesciunt a voluptatibus libero consectetur aliquid aperiam, totam corporis commodi.",
    // professional skills
    skills: [
      {
        id: 1,
        title: "Interior Design",
        progress: "85%",
      },
      {
        id: 2,
        title: "Lighting",
        progress: "94%",
      },
      {
        id: 3,
        title: "Traffic Law",
        progress: "65%",
      },
      {
        id: 4,
        title: "Property Law",
        progress: "73%",
      },
    ],
    // diversity of experience
    bio3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi quo facilis repellat numquam explicabo blanditiis placeat minima velit exercitationem dolorum? Iusto eaque ullam perspiciatis expedita voluptatibus! Fuga minus architecto explicabo deleniti quasi, veritatis error veniam? Ex ipsum numquam laboriosam nesciunt harum, saepe provident.",
    bio4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, repellat accusamus ipsa, blanditiis magni autem mollitia, est id soluta quis veniam error voluptatem voluptate totam laboriosam.", // 26 words
  },
];
