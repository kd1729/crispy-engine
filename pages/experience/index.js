import NavBar from "../../components/NavBar";
import Image from "next/image";

const internships = [
  {
    company: "Ivanti",
    position: "SDE Winter Intern",
    dateFrom: "Jan 9, 2023",
    dateTo: "July 7, 2023",
    description:
      "Excepteur ad minim exercitation culpa laboris. Enim aute eu aliquip laboris culpa nisi aliqua est ut pariatur labore commodo ad sint. Adipisicing excepteur et ea velit sint consectetur ut. Fugiat esse eu Lorem minim duis culpa eiusmod sunt Lorem sint magna anim consequat. Laboris sunt qui magna eu quis amet nisi.",
    Image: "/ivanti.png",
    certificateLink: "",
  },
  {
    company: "Walmart",
    position: "SDE Summer Intern",
    dateFrom: "May 17, 2022",
    dateTo: "July 15, 2022",
    description:
      "Magna pariatur commodo dolore laboris. Fugiat irure incididunt aliquip voluptate enim minim sit exercitation eu occaecat veniam fugiat. Excepteur dolore aliquip fugiat do eiusmod exercitation. Tempor ad minim Lorem non labore reprehenderit deserunt irure minim. Dolore in eiusmod consectetur sit labore ipsum nisi duis eiusmod id est aute enim. Eiusmod officia laborum pariatur cupidatat aliqua excepteur. Labore ea velit consectetur fugiat id ullamco cupidatat.",
    Image: "/walmart.png",
    certificateLink:
      "https://drive.google.com/file/d/1Dq-nxbHyxTZbP5BU65aSkZpND8Q_biHN/view?usp=sharing",
  },
  {
    company: "FuncBox",
    position: "Frontend Developer",
    dateFrom: "Jan 3, 2022",
    dateTo: "March 3, 2022",
    description:
      "Cillum consequat occaecat enim mollit eu aute laborum fugiat amet in occaecat excepteur magna esse. Voluptate ea mollit laboris non consectetur non Lorem ipsum commodo ut aute. Sit mollit officia duis dolor reprehenderit non labore sit nisi duis aute aute. Nulla irure commodo officia magna laborum nulla sunt cupidatat enim. Aute Lorem ex eu voluptate pariatur ea eiusmod exercitation ipsum Lorem cillum tempor quis ad. Sint qui amet qui aute reprehenderit do ut dolore sit velit eiusmod adipisicing minim.",
    Image: "/funcbox.png",
    certificateLink:
      "https://drive.google.com/file/d/1RKqTNh7cKR_tcizgx0my8mEwqyGwluS9/view?usp=sharing",
  },
  {
    company: "Protal",
    position: "Frontend Developer",
    dateFrom: "Jan 1, 2022",
    dateTo: "March 31, 2022",
    description:
      "Non cupidatat aliqua pariatur et in non ullamco id minim quis consequat sint. Nostrud incididunt cupidatat et non. Do officia anim consequat magna cupidatat ea commodo do aliqua dolor consequat incididunt. Irure reprehenderit ad elit tempor sunt mollit anim laborum. Ullamco in nulla officia eu veniam commodo consequat. Ex anim ex reprehenderit laborum incididunt laborum.",
    Image: "/protal.png",
    certificateLink:
      "https://drive.google.com/file/d/1tN6N2k4YS40-hC1ZRiLcoN6Yv-jNALGE/view?usp=sharing",
  },
  {
    company: "IIT Kanpur",
    position: "Applied Data Science Intern",
    dateFrom: "April 1, 2020",
    dateTo: "June 29, 2020",
    description:
      "Fugiat amet reprehenderit labore pariatur ut. Est reprehenderit id laborum anim elit proident aliqua ad laboris fugiat irure excepteur. Magna sunt in excepteur sunt ut. Ullamco consectetur dolor cupidatat excepteur excepteur ullamco. Est esse aute irure eu non dolor nisi in reprehenderit anim. Enim enim voluptate cupidatat non proident cupidatat officia ipsum magna sint veniam nostrud do.",
    Image: "/IITK.png",
    certificateLink:
      "https://drive.google.com/file/d/1gM4M3Q9on_fDn7F-C17tWoBfI_RM78t3/view?usp=sharing",
  },
];

export default function Experience() {
  return (
    <div>
      <NavBar activeSection="Experiences" />
      <div className=" flex flex-col justify-center items-center pt-28 pb-16">
        <h1 className="text-5xl text-[#F7F7F7] mb-12 font-semibold">
          My Internships
        </h1>
        <div className="flex flex-col gap-y-16 justify-center items-center">
          {internships.map((internship) => (
            <div
              key={internship.name}
              className="flex flex-row bg-[#d1fbf5] p-8 mx-20 rounded-lg shadow-[0_20px_40px_-15px_#04022fff]"
            >
              <Image
                src={internship.Image}
                alt={internship.company}
                width={300}
                height={0}
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
                <p>{internship.description}</p>
                <div className="font-semibold text-lg text-[#6b22b3] hover:underline">
                  <a href={internship.certificateLink} target="_blank" rel="noreferrer">Certificate Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
