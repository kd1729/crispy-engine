import { AiFillMediumCircle } from "react-icons/ai";
import MainNavbar from "../../components/MainNavbar.js";
import Header from "../../components/Header";

const blogs = [
  {
    title: "My Google Interview Experience for SWE-2 (L3) Position",
    date: "Sept 28, 2025",
    description:
      "Detailed my preparation journey, interview process, and final selection at Google for the SWE-2 (L3) position.",
    link: "https://medium.com/@kaustubhdwivedi1729/google-interview-experience-for-swe-2-l3-position-selected-ea71270c8133",
  },
  {
    title: "Converting Epoch Time to System Local Time",
    date: "04 April, 2024",
    description: 
      "Discussed about Converting Epoch Time to System Local Time based on the user’s locale settings.",
    link: "https://medium.com/@kaustubhdwivedi1729/converting-epoch-time-to-system-local-time-based-on-the-users-locale-settings-f1653671b49f",
  },
  {
    title: "My Interview Experience at Ivanti",
    date: "16 Sept, 2022",
    description:
      "Discussed about my on-campus selection process for Ivanti company.",
    link: "https://www.geeksforgeeks.org/ivanti-interview-experience-on-campus-2022/",
  },
  {
    title: "Implementing Upper-Lower Bounds from Scratch",
    date: "April 30, 2022",
    description:
      "Discussed about the implementations of both upper and lower bounds from scratch.",
    link: "https://medium.com/@kaustubhdwivedi1729/implementing-upper-bound-and-lower-bound-from-binary-search-9595a0a0534",
  },
  {
    title: "When to use which Sorting Algorithm",
    date: "Dec 22, 2021",
    description:
      "Discussed about various scenarios in which we should use different sorting algorithms. ",
    link: "https://medium.com/@kaustubhdwivedi1729/when-to-use-which-sorting-algorithm-125897e40295",
  },
  {
    title: "Reverse a Linked List recursively",
    date: "Dec 22, 2021",
    description:
      "Discussed about reversing a linked list recursively.",
    link: "https://medium.com/@kaustubhdwivedi1729/reversing-a-linked-list-recursively-7f150debb37b",
  },
  {
    title: "Finding loop in a Linked List",
    date: "Dec 14, 2021",
    description:
      "Discussed about finding a loop in a linked list.",
    link: "https://medium.com/@kaustubhdwivedi1729/finding-loop-cycle-in-a-linked-list-96786f64ca77",
  },
  {
    title: "Beginner's guide to Binary Search",
    date: "Dec 26, 2020",
    description:
      "Discussed about the basics of binary search and its implementation in C++.",
    link: "https://medium.com/student-technical-community-vit-vellore/welcome-to-binary-search-baa38162959a",
  },
  {
    title: "A Brief Introduction to Reinforcement Learning",
    date: "Dec 14, 2020",
    description:
      "Discussed about the basics of reinforcement learning and its types.",
    link: "https://medium.com/student-technical-community-vit-vellore/a-brief-introduction-to-reinforcement-learning-6a74f5a61834",
  },
  {
    title: "Outliers Analysis in Machine Learning",
    date: "Nov 23, 2020",
    description:
      "Discussed about the basics of outliers and its analysis in machine learning.",
    link: "https://medium.com/student-technical-community-vit-vellore/outliers-analysis-in-machine-learning-fd0c60c10931",
  },
  {
    title: "Longest Odd Even Subsequence",
    date: "Oct 11, 2020",
    description:
      "Discussed about the basics of longest odd even subsequence and its implementation in C++.",
    link: "https://medium.com/@kaustubhdwivedi1729/longest-odd-even-subsequence-7b32578b9f08",
  },
];

export default function Blogs() {
  return (
    <div>
      <MainNavbar activeSection="Blogs" />
      <div className=" flex flex-col justify-center items-center pt-20">
        <Header name="My Blogs" />
        <div className="sm:my-10 my-6 grid sm:grid-cols-2 grid-cols-1 sm:gap-24 gap-12 justify-center items-center">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className=" card sm:w-[32rem] w-[20rem] h-[12rem] flex flex-col justify-center items-center rounded-lg  text-justify  
              shadow-[0_20px_40px_-15px_#04022fff] hover:shadow-[0_15px_60px_-15px_#4b4b7dff] relative pb-4"
            >
              <h1 className="text-[#8925a8] font-medium self-start absolute top-0 left-2 pb-4">
                {blog.date}
              </h1>
              <h1 className=" cardtitle sm:text-xl text-lg text-center text-[#EB6440] pt-8 font-semibold px-4">
                {blog.title}
              </h1>
              <p className="cardtext text-[#4054eb] my-2 sm:px-8 px-4 font-semibold">
                {blog.description}...
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8925a8] text-base font-semibold hover:underline"
                >
                  read more
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="text-white sm:text-3xl text-2xl sm:px-0 px-6 sm:my-12 my-4 flex justify-center items-center">
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
