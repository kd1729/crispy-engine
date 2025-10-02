import MainNavbar from "../../components/MainNavbar.js";
import Header from "../../components/Header";
import Image from "next/image";

const internships = [
  {
    company: "Google",
    position: "Software Engineer",
    dateFrom: "Dec 2024",
    dateTo: "Present",
    description:[
      "Optimized Conversion Accuracy: Improved the accuracy of conversion tracking by identifying and correcting \\\nduplicate entries in the data processing pipeline, resulting in more reliable reporting.",
      "Expanded Conversion Tracking: Expanded the scope of conversion tracking to include new user actions, \\\nenabling a more comprehensive understanding of user behavior.",
      "Engineered Robust Data Pipelines: Developed and optimized data pipelines to ensure reliability and \\\nscalability, using automated testing and monitoring to maintain system performance.",
      "Enhanced Conversion Infrastructure: Proactively improved the performance and reliability of the conversion \\\ntracking infrastructure by analyzing data with SQL queries and creating data visualizations."
    ],
    Image: "/internships/google.jpg",
    certificateLink: "#",
  },
  {
    company: "Ivanti",
    position: "Associate SWE + SWE Winter Intern",
    dateFrom: "Jan 9, 2023",
    dateTo: "Dec 2024",
    description: [
  "Migrated the product build environment from Visual Studio 2019 to Visual Studio 2022, enhancing development \
efficiency (completed this project during my internship period Jan’23 - June’23)",
 "Achieved a 20% reduction in package size for customer shipments, optimizing product delivery.",
 "Orchestrated and executed major feature rollouts for high-profile clients including Microsoft, Telefonica, and \
GovTech; ensured seamless integration, driving customer satisfaction and increasing product value",
"Spearheaded the enhancement of HostChecker component for VPN client, serving as primary point of contact for \
bug fixes and feature implementation, resulting in a 30% reduction in user-reported issues",
"Addressed numerous customer-reported issues and worked on several critical internal defects over the last 10 months."
    ],
    Image: "/internships/ivanti.jpg",
    onlineImgURL:
      "https://drive.google.com/file/d/1QJqW_b83osZo05hiL9GzlwU0UgER0KvE/view?usp=share_link",
    certificateLink:
      "https://drive.google.com/file/d/1BoTSyW7JHYPKf7m6aJdgTKmnYjDZJdZe/view?usp=sharing",
  },
  {
    company: "Walmart",
    position: "SDE Summer Intern",
    dateFrom: "May 17, 2022",
    dateTo: "July 15, 2022",
    description:[
      "Designed and implemented analytical live dashboards using Tableau, eliminating manual efforts and enhancing \
data-driven decision-making",
      "Incorporated Google Secret Manager API into a Big Data project, contributing to improved security and data \
management practices",
      "Gained proficiency in Data Engineering tools such as Hadoop, Spark, and Kafka, alongside hands-on experience with \
ETL and Data Pipelines",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <MainNavbar activeSection="Experiences" />
      <div className=" flex flex-col justify-center items-center pt-20 sm:px-16 px-8 pb-8">
        <Header name="My Experiences" />
        <div className="flex flex-col gap-y-16 justify-center items-center">
          {internships.map((internship) => (
            <div
            key={internship.name}
            className="flex sm:flex-row flex-col bg-white/80 backdrop-blur-sm sm:p-8 p-4 sm:w-[90%] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 justify-center items-center group hover:scale-[1.02] overflow-hidden"
          >
            <div className="sm:w-72 sm:h-48 w-full h-48 flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src={internship.Image}
                alt={internship.company}
                width={288}
                height={192}
                className="w-full h-full object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
              />
            </div>
              <div className="flex flex-col justify-center items-start sm:px-8">
                <h2 className="sm:text-3xl text-2xl font-bold text-slate-800 sm:pt-0 pt-4 group-hover:text-blue-600 transition-colors duration-300">
                  {internship.company}
                </h2>
                <h3 className="font-semibold sm:text-xl text-lg text-blue-600 mt-1">
                  {internship.position}
                </h3>
                <div className="flex items-center mt-2 mb-4">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <p className="font-medium sm:text-base text-sm text-slate-600">
                  {internship.dateFrom} - {internship.dateTo}
                  </p>
                </div>
                <div className="space-y-2">
                  {internship.description.map((desc) => (
                    <li key="" className="text-slate-700 leading-relaxed text-justify flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-md">
                  <a
                    href={internship.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>View Certificate</span>
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
