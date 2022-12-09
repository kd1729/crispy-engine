import { AiFillMediumCircle } from "react-icons/ai";
import NavBar from "../../components/navbar";
import Header from "../../components/Header";

const blogs = [
  {
    title: "My Interview Experience at Ivanti",
    date: "16 Sept, 2022",
    description:
      "In this article I discussed about my on-campus selection process for Ivanti company.",
    link: "https://www.geeksforgeeks.org/ivanti-interview-experience-on-campus-2022/",
  },
  {
    title: "Implementing Upper-Lower Bounds from Scratch",
    date: "April 30, 2022",
    description:
      "In this article I discussed the implementations of both upper and lower bounds from scratch (using binary search algorithm).",
    link: "https://medium.com/@kaustubhdwivedi1729/implementing-upper-bound-and-lower-bound-from-binary-search-9595a0a0534",
  },
  {
    title: "When to use which Sorting Algorithm",
    date: "Dec 22, 2021",
    description:
      "In this article I discussed about various scenarios in which we should use different sorting algorithms. ",
    link: "https://medium.com/@kaustubhdwivedi1729/when-to-use-which-sorting-algorithm-125897e40295",
  },
  {
    title: "Reverse a Linked List recursively",
    date: "Dec 22, 2021",
    description:
      "In this article I discussed about reversing a linked list recursively.",
    link: "https://medium.com/@kaustubhdwivedi1729/reversing-a-linked-list-recursively-7f150debb37b",
  },
  {
    title: "Finding loop in a Linked List",
    date: "Dec 14, 2021",
    description:
      "In this article I discussed about finding a loop in a linked list.",
    link: "https://medium.com/@kaustubhdwivedi1729/finding-loop-cycle-in-a-linked-list-96786f64ca77",
  },
  {
    title: "Beginner's guide to Binary Search !",
    date: "Dec 26, 2020",
    description:
      "In this article I discussed about the basics of binary search and its implementation in C++.",
    link: "https://medium.com/student-technical-community-vit-vellore/welcome-to-binary-search-baa38162959a",
  },
  {
    title: "A Brief Introduction to Reinforcement Learning !",
    date: "Dec 14, 2020",
    description:
      "In this article I discussed about the basics of reinforcement learning and its types.",
    link: "https://medium.com/student-technical-community-vit-vellore/a-brief-introduction-to-reinforcement-learning-6a74f5a61834",
  },
  {
    title: "Outliers Analysis in Machine Learning",
    date: "Nov 23, 2020",
    description:
      "In this article I discussed about the basics of outliers and its analysis in machine learning.",
    link: "https://medium.com/student-technical-community-vit-vellore/outliers-analysis-in-machine-learning-fd0c60c10931",
  },
  {
    title: "Longest Odd Even Subsequence",
    date: "Oct 11, 2020",
    description:
      "In this article I discussed about the basics of longest odd even subsequence and its implementation in C++.",
    link: "https://medium.com/@kaustubhdwivedi1729/longest-odd-even-subsequence-7b32578b9f08",
  },
];

export default function Blogs() {
  return (
    <div>
      <NavBar activeSection="Blogs" />
      <div className=" flex flex-col justify-center items-center pt-20">
        <Header name="My Blogs" />
        <div className="grid grid-cols-3 grid-rows-3 gap-12 justify-center items-center px-32">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="flex flex-col justify-center items-center bg-[#d7edf1] rounded-lg  text-justify  
              shadow-[0_20px_40px_-15px_#04022fff] hover:shadow-[0_15px_60px_-15px_#4b4b7dff] relative pb-4"
            >
              <h1 className="text-[#8925a8] font-medium self-start absolute top-0 left-2 pb-4">
                {blog.date}
              </h1>
              <h1 className="text-xl text-center text-[#EB6440] pt-8 font-semibold px-4">
                {blog.title}
              </h1>
              <p className="text-[#4054eb] my-2 px-8 font-semibold">
                {blog.description}...
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8925a8] text-base my-2 font-semibold hover:underline"
                >
                  read more
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="text-white text-3xl my-12 flex justify-center items-center">
          <div>Check out my Medium for all blogs.</div>
          <a
            href="github.com/onlykingKD"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lg text-[#8925a8] decoration-solid hover:underline"
          >
            <AiFillMediumCircle
              color="#171515"
              className="ml-4 text-5xl bg-white rounded-[50%]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
