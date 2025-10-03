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
    description: "Discussed about my on-campus selection process for Ivanti company.",
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
      "Discussed about various scenarios in which we should use different sorting algorithms.",
    link: "https://medium.com/@kaustubhdwivedi1729/when-to-use-which-sorting-algorithm-125897e40295",
  },
  {
    title: "Reverse a Linked List recursively",
    date: "Dec 22, 2021",
    description: "Discussed about reversing a linked list recursively.",
    link: "https://medium.com/@kaustubhdwivedi1729/reversing-a-linked-list-recursively-7f150debb37b",
  },
  {
    title: "Finding loop in a Linked List",
    date: "Dec 14, 2021",
    description: "Discussed about finding a loop in a linked list.",
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
      <div className="flex flex-col justify-center items-center pt-20 px-4 sm:px-8">
        <Header name="My Blogs" />

        {/* Grid: 3 columns on sm+, 1 on mobile */}
        <div
          className="my-8 sm:my-12 grid sm:grid-cols-3 grid-cols-1 gap-8 sm:gap-12 justify-items-center"
          style={{ gridAutoRows: "1fr" }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="card flex flex-col justify-between rounded-lg shadow-lg hover:shadow-xl p-6 bg-white dark:bg-[#1f1f2e] h-full w-full max-w-[380px]"
            >
              <h1 className="text-[#8925a8] font-medium text-sm mb-3">
                {blog.date}
              </h1>
              <h2 className="cardtitle text-[#EB6440] sm:text-xl text-lg font-semibold mb-3">
                {blog.title}
              </h2>
              <p className="cardtext text-[#4054eb] text-sm mb-4 flex-1">
                {blog.description}{" "}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8925a8] font-semibold hover:underline ml-1"
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
            href="https://medium.com/@kaustubhdwivedi1729"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lg text-[#8925a8] decoration-solid hover:underline ml-2 flex items-center"
          >
            <AiFillMediumCircle
              color="#171515"
              className="ml-2 text-5xl bg-white rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}