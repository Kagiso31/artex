// thumbnail
import teamMember1 from "../assets/about/team1-370x420.jpg";
import teamMember2 from "../assets/about/team2-370x420.jpg";
import teamMember3 from "../assets/about/team3-370x420.jpg";
import teamMember4 from "../assets/about/team4-370x420.jpg";
import teamMember5 from "../assets/about/team5-370x420.jpg";
import teamMember6 from "../assets/about/team6-370x420.jpg";

// img
import team1 from "../assets/team-member/team1.jpg";
import team2 from "../assets/team-member/team2.jpg";
import team3 from "../assets/team-member/team3.jpg";
import team4 from "../assets/team-member/team4.jpg";
import team5 from "../assets/team-member/team5.jpg";
import team6 from "../assets/team-member/team6.jpg";

import { Facebook, Instagram, Pinterest, Twitter } from "./icons";

import { TeamMember } from "./types";

export const teamMembers: TeamMember[] = [
  // team member - 1
  {
    id: 1,
    name: "Harry Osborn",
    thumbnail: teamMember1,
    img: team1,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Founder of Artex",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
    thumbnail: teamMember2,
    img: team2,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Head of Idea",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
    thumbnail: teamMember3,
    img: team3,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Senior Planner",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
    thumbnail: teamMember4,
    img: team4,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Senior Interior",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
    thumbnail: teamMember5,
    img: team5,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Project Manager",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
    thumbnail: teamMember6,
    img: team6,
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
    info: [
      {
        id: 1,
        infoTitle: "Speciality",
        infoValue: "Planning Manager",
      },
      {
        id: 2,
        infoTitle: "Expertise",
        infoValue: "Planning, Strategy",
      },
      {
        id: 3,
        infoTitle: "Experience",
        infoValue: "13 Years",
      },
      {
        id: 4,
        infoTitle: "E-mail",
        infoValue: "info@artex.com",
      },
      {
        id: 5,
        infoTitle: "Phone",
        infoValue: "+7548 845 1285",
      },
    ],
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
