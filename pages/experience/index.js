import MainNavbar from "../../components/MainNavbar.js";
import Header from "../../components/Header";
import Image from "next/image";

const internships = [
  {
    company: "Ivanti",
    position: "SDE Winter Intern",
    dateFrom: "Jan 9, 2023",
    dateTo: "In Progress",
    description: [
      ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
      ["Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
      ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."],
      ["Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ],
    
    Image: "/internships/ivanti.jpg",
    onlineImgURL:
      "https://drive.google.com/file/d/1QJqW_b83osZo05hiL9GzlwU0UgER0KvE/view?usp=share_link",
    certificateLink: "",
  },
  {
    company: "Walmart",
    position: "SDE Summer Intern",
    dateFrom: "May 17, 2022",
    dateTo: "July 15, 2022",
    description:[
      ["Developed various analytical live dashboards in tableau which eliminated the need for manual reporting and helped in better decision making."],
      ["Worked on the integration of Google Secret Manager API in a Big Data project which helped in better security of the data."],
      ["Learned about various Data Engineering tools like Spark, Kafka, etc. Also learned about various Data Engineering concepts like ETL, Data Pipelines, etc."],
    ],
    Image: "/internships/walmart.jpg",
    certificateLink:
      "https://drive.google.com/file/d/1Dq-nxbHyxTZbP5BU65aSkZpND8Q_biHN/view?usp=sharing",
  },
  {
    company: "FuncBox",
    position: "Frontend Developer",
    dateFrom: "Jan 3, 2022",
    dateTo: "March 3, 2022",
    description:[
      "Worked on creation of Various React Functional Components which were used in the creation of various webpages.",
      "Worked on the Integration of various APIs in the frontend of the website.",
      "Created several complicated JS games for primary classes.",
      "Largely worked on fixing the responsiveness of several react components.",
    ],
    Image: "/internships/funcbox.jpg",
    certificateLink:
      "https://drive.google.com/file/d/1RKqTNh7cKR_tcizgx0my8mEwqyGwluS9/view?usp=sharing",
  },
  {
    company: "Protal",
    position: "Frontend Developer",
    dateFrom: "Jan 1, 2022",
    dateTo: "March 31, 2022",
    description:[
      "Worked on creation of Various React Functional Components which were used in the creation of various webpages.",
      "Worked on the Integration of various APIs in the frontend of the website.",
      "Created several complicated JS games for primary classes.",
      "Largely worked on fixing the responsiveness of several react components.",
    ],
    Image: "/internships/protal.jpg",
    certificateLink:
      "https://drive.google.com/file/d/1tN6N2k4YS40-hC1ZRiLcoN6Yv-jNALGE/view?usp=sharing",
  },
  {
    company: "IIT Kanpur",
    position: "Applied Data Science Intern",
    dateFrom: "April 1, 2020",
    dateTo: "June 29, 2020",
    description:
    [
      "Completed the project – “Sentiment analysis of tweets using Natural Language Processing",
      "As part of this project, I had to classify a set of tweets based on their polarity as positive, negative or neutral",
      "Developed skills such as - various techniques for pre-processing text, text representation using word embeddings, etc",
      "My performance was rated as “Excellent” by the mentor of the project"
    ],
    Image: "/internships/IITK.jpg",
    certificateLink:
      "https://drive.google.com/file/d/1gM4M3Q9on_fDn7F-C17tWoBfI_RM78t3/view?usp=sharing",
  },
];

export default function Experience() {
  return (
    <div>
      <MainNavbar activeSection="Experiences" />
      <div className=" flex flex-col justify-center items-center pt-20 px-16">
        <Header name="My Experiences" />
        <div className="flex flex-col gap-y-16 justify-center items-center">
          {internships.map((internship) => (
            <div
              key={internship.name}
              className="flex flex-row bg-[#d1fbf5] p-8 w-[90%] rounded-lg shadow-[0_20px_40px_-15px_#04022fff] justify-center items-center"
            >
              <Image
                src={internship.Image}
                alt={internship.company}
                width={800}
                height={0}
                className="rounded-lg w-72 h-48"
              />
              <div className="flex flex-col justify-center items-start px-8">
                <h2 className="text-3xl font-semibold text-[#EB6440]">
                  {internship.company}
                </h2>
                <h3 className="font-semibold text-xl text-[#4054eb]">
                  {internship.position}
                </h3>
                <p className="font-semibold text-lg text-[#6b22b3]">
                  {internship.dateFrom} - {internship.dateTo}
                </p>
                <p>
                  {internship.description.map((desc) => (
                    <li key="" className="list-disc list-inside">{desc}</li>
                  ))}

                </p>
                <div className="font-semibold text-lg text-[#6b22b3] hover:underline">
                  <a
                    href={internship.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
