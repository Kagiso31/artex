import { BlogPost } from "./";

import blog1cardimg from "../assets/home/blog10-690x440.jpg";
import blog1listimg from "../assets/blog/blog10.jpg";
import blog1postimg from "../assets/blog/blog10.jpg";

import blog2cardimg from "../assets/home/blog7-690x440.jpg";
import blog2listimg from "../assets/blog/blog7.jpg";
import blog2postimg from "../assets/blog/blog7.jpg";

import blog3listimg from "../assets/blog/blog3.jpg";
import blog3postimg from "../assets/blog/blog3.jpg";

import blog4listimg from "../assets/blog/blog6.jpg";
import blog4postimg from "../assets/blog/blog6.jpg";

import blog5listimg from "../assets/blog/blog8.jpg";
import blog5postimg from "../assets/blog/blog8.jpg";

import blog6listimg from "../assets/blog/blog9.jpg";
import blog6postimg from "../assets/blog/blog9.jpg";

import blog7listimg from "../assets/blog/blog18.jpg";
import blog7postimg from "../assets/blog/blog18.jpg";

import blog8listimg from "../assets/blog/blog11.jpg";
import blog8postimg from "../assets/blog/blog11.jpg";

import blog9listimg from "../assets/blog/blog12.jpg";
import blog9postimg from "../assets/blog/blog12.jpg";

import blog10listimg from "../assets/blog/blog13.jpg";
import blog10postimg from "../assets/blog/blog13.jpg";

import blog11listimg from "../assets/blog/blog14.jpg";
import blog11postimg from "../assets/blog/blog14.jpg";

import blog12listimg from "../assets/blog/blog15.jpg";
import blog12postimg from "../assets/blog/blog15.jpg";

import blog13listimg from "../assets/blog/blog16.jpg";
import blog13postimg from "../assets/blog/blog16.jpg";

import blo14listimg from "../assets/blog/blog17.jpg";
import blo14postimg from "../assets/blog/blog17.jpg";

import profileImg from "../assets/blog/single-blog/profile-pic.png";

export const blogPosts: BlogPost[] = [
  /* post 1 */
  {
    id: 1,
    url: "/artex/blog/1",
    title: "Minimalist Furniture Concepts by Miles",
    date: "20 February 2024",
    category: ["Commercial"],
    author: "Miles Morales",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Innovation"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    cardImg: blog1cardimg,
    listImg: blog1listimg,
    postImg: blog1postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "Aaron Davis",
        date: "21 February 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 2 */
  {
    id: 2,
    url: "/artex/blog/2",
    title: "No Alternate Without Interior Decoration",
    date: "1 March 2024",
    category: ["Interior"],
    author: "Peter Parker",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    cardImg: blog2cardimg,
    listImg: blog2listimg,
    postImg: blog2postimg,
  },
  /* post 3 */
  {
    id: 3,
    url: "/artex/blog/3",
    title: "Tips to Help You Design",
    date: "8 March 2024",
    category: ["Decoration"],
    author: "Edward Brock",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog3listimg,
    postImg: blog3postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "Cletus Kasady",
        date: "9 March 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
      {
        id: 2,
        profileImg: profileImg,
        author: "Donna Diego",
        date: "10 March 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 4 */
  {
    id: 4,
    url: "/artex/blog/4",
    title: "Trust Looking For Innovative Decoration Apartment",
    date: "15 April 2024",
    category: ["Decoration"],
    author: "Flash Thompson",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog4listimg,
    postImg: blog4postimg,
  },
  /* post 5 */
  {
    id: 5,
    url: "/artex/blog/5",
    title: "Customisation Solutions for Your Space",
    date: "30 May 2024",
    category: ["Interior"],
    author: "Elizabeth Allan",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog5listimg,
    postImg: blog5postimg,
  },
  /* post 6 */
  {
    id: 6,
    url: "/artex/blog/6",
    title: "People Accept Interior Design",
    date: "2 June 2024",
    category: ["Infrastucture"],
    author: "Benjamin Reilly",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog6listimg,
    postImg: blog6postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "May Parker",
        date: "3 June 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 7 */
  {
    id: 7,
    url: "/artex/blog/7",
    title: "New UK Government Regulation for Residence",
    date: "14 July 2024",
    category: ["Infrastucture"],
    author: "Miguel O'Hara",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog7listimg,
    postImg: blog7postimg,
  },
  /* post 8 */
  {
    id: 8,
    url: "/artex/blog/8",
    title: "Consumers' Most Voted Design",
    date: "18 July 2024",
    category: ["Infrastucture"],
    author: "Hailey Cooper",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["House", "Awards", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog8listimg,
    postImg: blog8postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "Miles Morales",
        date: "19 July 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 9 */
  {
    id: 9,
    url: "/artex/blog/9",
    title: "Best Projects at Event in Paris",
    date: "22 August 2024",
    category: ["Architecture"],
    author: "Adrian Toomes",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Awards", "Interior", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog9listimg,
    postImg: blog9postimg,
  },
  /* post 10 */
  {
    id: 10,
    url: "/artex/blog/10",
    title: "Light Solutions for Interior Design in Living Room",
    date: "24 August 2024",
    category: ["Architecture"],
    author: "Curtis Connors",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Awards", "Lifestyle"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog10listimg,
    postImg: blog10postimg,
  },
  /* post 11 */
  {
    id: 11,
    url: "/artex/blog/11",
    title: "Work Place Decoration Suggestions",
    date: "26 September 2024",
    category: ["Architecture"],
    author: "Sergei Kravinoff",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Exterior", "Innovation", "Interior"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog11listimg,
    postImg: blog11postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "Calypso Ezili",
        date: "30 September 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 12 */
  {
    id: 12,
    url: "/artex/blog/12",
    title: "The Many Variations of Design",
    date: "1 October 2024",
    category: ["Architecture"],
    author: "Wilson Fisk",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Design", "Exterior"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog12listimg,
    postImg: blog12postimg,
  },
  /* post 13 */
  {
    id: 13,
    url: "/artex/blog/13",
    title: "Top 10 Projects at Artex Event 2024 in Italy",
    date: "28 October 2024",
    category: ["Architecture"],
    author: "Rio Morales",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Artex", "Design", "Interior"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blog13listimg,
    postImg: blog13postimg,
    comments: [
      {
        id: 1,
        profileImg: profileImg,
        author: "Jefferson Davis",
        date: "29 October 2024",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate asperiores sunt corrupti consectetur ut? Aliquid, consectetur voluptatum distinctio aspernatur enim fugiat. Consequuntur.",
      },
    ],
  },
  /* post 14 */
  {
    id: 14,
    url: "/artex/blog/14",
    title: "Providing Bespoke Solutions for Every Space",
    date: "31 October 2024",
    category: ["Architecture"],
    author: "Martin Lee",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla aperiam quae obcaecati repudiandae. Doloremque at possimus repudiandae dolore et ullam corporis inventore voluptates quos facilis, nisi ea. Consequatur provident quo suscipit adipisci mollitia, debitis quae quibusdam id.",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam repudiandae deserunt quod, fugiat non quos ipsum atque incidunt quis nesciunt ea officiis possimus assumenda adipisci! Nihil ex ipsum labore facilis. Harum in, labore illo sequi dolor ipsum molestias ut cumque atque repudiandae ipsa beatae earum sint asperiores mollitia sit.",
    body2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates optio, et reiciendis quisquam ipsa doloribus corrupti minima voluptate, odit placeat ducimus magni iusto quam rerum.",
    body3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit corrupti ratione vero itaque sint dicta quisquam odio et alias ullam, fugiat excepturi cupiditate facere in minima provident repellat facilis.",
    bodyHeading: "Defaulting To Mindness",
    body4:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illo facilis et laboriosam quas eos magnam consectetur voluptate placeat consequuntur fugit, impedit aliquid delectus ipsum optio! Laboriosam nostrum esse beatae.",
    bodyList: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores necessitatibus quod?",
    ],
    body5:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam ea et vitae pariatur ipsa ducimus, repudiandae consequuntur cupiditate, sed voluptatum impedit eligendi, mollitia magnam rem quos quae laborum perspiciatis molestiae explicabo voluptas doloribus. Tempore, incidunt. Sunt id quibusdam maxime eos perspiciatis cumque ut deleniti fuga et omnis!",
    tags: ["Common", "Exterior"],
    quote: {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus quos hic dolor eos nihil odio quo nam!",
      author: "Stan Lee",
      occupation: "CEO",
    },
    listImg: blo14listimg,
    postImg: blo14postimg,
  },
];
