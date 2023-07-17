import { Blog } from "@/types/blog";

const blogData: Blog[] = [
 {
    id: 1,
    title: "Empowering African Youth Through Education",
    paragraph:
      "Discover how education is transforming the lives of African youth, providing them with opportunities for a brighter future.",
    image: "/images/blog/education.jpg",
    author: {
      name: "Dennis Mwangi",
      image: "/images/blog/education.jpg",
      designation: "Teacher",
    },
    tags: ["Education"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Sustainable Farming Practices in Africa: Building a Greener Future",
    paragraph:
      "Explore innovative and eco-friendly farming methods being implemented across Africa to promote sustainable agriculture and ensure food security.",
    image: "/images/blog/farming.jpg",
    author: {
      name: "Daniel Ngotho",
      image: "/images/blog/author-02.png",
      designation: "Farmer",
    },
    tags: ["Agriculture"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Entrepreneurship in Africa: Inspiring Success Stories",
    paragraph:
      "Learn from the inspiring journeys of African entrepreneurs who are making a difference, driving innovation, and creating sustainable businesses.",
    image: "/images/blog/stories.png",
    author: {
      name: "Kuria Waweru",
      image: "/images/blog/author-03.png",
      designation: "Entrepreneur",
    },
    tags: ["Entrepreneurship"],
    publishDate: "2023",
  },
];
export default blogData;
