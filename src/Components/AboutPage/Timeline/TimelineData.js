// timelineData.js
import {
  FaRocket,
  FaBuilding,
  FaChartLine,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

export const timelineData = [
  {
    year: "2015",
    title: "A One-Man Mission",
    description:
      "Md Faruk Khan started as a freelance SEO consultant, helping small Bangladeshi businesses rank on Google’s first page.",
    side: "left",
    icon: FaRocket,
    gradient: "from-blue-500 to-indigo-500",
    lineColor: "bg-blue-500",
  },
  {
    year: "2017",
    title: "Khan IT Is Born",
    description:
      "With three team members and a shared dream, Khan IT opened a small office in Khulna.",
    side: "right",
    icon: FaBuilding,
    gradient: "from-indigo-500 to-purple-500",
    lineColor: "bg-indigo-500",
  },
  {
    year: "2019 – 2021",
    title: "Growth & Recognition",
    description:
      "Grew from 3 to 20 professionals. Added web development and content teams.",
    side: "left",
    icon: FaChartLine,
    gradient: "from-purple-500 to-pink-500",
    lineColor: "bg-purple-500",
  },
  {
    year: "2022 – Present",
    title: "Becoming a Global Brand",
    description:
      "Serving clients across Bangladesh, Singapore, UAE, New Zealand, and USA.",
    side: "right",
    icon: FaGlobe,
    gradient: "from-pink-500 to-rose-500",
    lineColor: "bg-pink-500",
  },
  {
    year: "The Future",
    title: "Smarter Marketing Solutions",
    description:
      "Building an AI-driven marketing ecosystem blending creativity with machine learning.",
    side: "left",
    icon: FaLightbulb,
    gradient: "from-green-400 to-emerald-500",
    lineColor: "bg-green-500",
  },
];
