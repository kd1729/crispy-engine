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
    certificateLink: "",
  },
  {
    company: "FuncBox",
    position: "Frontend Developer",
    dateFrom: "Jan 3, 2022",
    dateTo: "March 3, 2022",
    description:
      "Cillum consequat occaecat enim mollit eu aute laborum fugiat amet in occaecat excepteur magna esse. Voluptate ea mollit laboris non consectetur non Lorem ipsum commodo ut aute. Sit mollit officia duis dolor reprehenderit non labore sit nisi duis aute aute. Nulla irure commodo officia magna laborum nulla sunt cupidatat enim. Aute Lorem ex eu voluptate pariatur ea eiusmod exercitation ipsum Lorem cillum tempor quis ad. Sint qui amet qui aute reprehenderit do ut dolore sit velit eiusmod adipisicing minim.",
    Image: "/funcbox.png",
    certificateLink: "",
  },
  {
    company: "Protal",
    position: "Frontend Developer",
    dateFrom: "Jan 1, 2022",
    dateTo: "March 31, 2022",
    description:
      "Non cupidatat aliqua pariatur et in non ullamco id minim quis consequat sint. Nostrud incididunt cupidatat et non. Do officia anim consequat magna cupidatat ea commodo do aliqua dolor consequat incididunt. Irure reprehenderit ad elit tempor sunt mollit anim laborum. Ullamco in nulla officia eu veniam commodo consequat. Ex anim ex reprehenderit laborum incididunt laborum.",
    Image: "/protal.png",
    certificateLink: "",
  },
  {
    company: "IIT Kanpur",
    position: "Applied Data Science Intern",
    dateFrom: "Date 1",
    dateTo: "Date 2",
    description:
      "Fugiat amet reprehenderit labore pariatur ut. Est reprehenderit id laborum anim elit proident aliqua ad laboris fugiat irure excepteur. Magna sunt in excepteur sunt ut. Ullamco consectetur dolor cupidatat excepteur excepteur ullamco. Est esse aute irure eu non dolor nisi in reprehenderit anim. Enim enim voluptate cupidatat non proident cupidatat officia ipsum magna sint veniam nostrud do.",
    Image: "/IITK.png",
    certificateLink: "",
  },
];

export default function Experience() {
  return (
    <div>
      <NavBar activeSection="Experiences" />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-5xl text-emerald-600 my-8">My Internships</h1>
        <div className="flex flex-col justify-center items-center bg-slate-700">
          {internships.map((internship) => (
            <div
              key={internship.name}
              className="flex flex-row bg-green-200 p-4"
            >
              <Image
                src={internship.Image}
                alt={internship.company}
                width={300}
                height={0}
              />
              <div className="flex flex-col">
                <h2>{internship.company}</h2>
                <p>
                  {internship.dateFrom} - {internship.dateTo}
                </p>
                <h3>{internship.position}</h3>
                <p>{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
