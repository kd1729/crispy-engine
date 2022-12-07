import NavBar from "../../components/NavBar";
import Image from "next/image";

const internships = [
  {
  company: 'Ivanti',
  position: 'SDE Winter Intern',
  dateFrom: 'Date 1',
  dateTo: 'Date 2',
  description: 'Description 1',
},
{
  company: 'Walmart',
  position: 'SDE Summer Intern',
  dateFrom: 'Date 1',
  dateTo: 'Date 2',
  description: 'Description 2',
},
{
  company: 'Company 3',
  position: 'Frontend Intern',
  dateFrom: 'Date 1',
  dateTo: 'Date 2',
  description: 'Description 3',
},
{
  company: 'Funcbox',
  position: 'Fontend Intern',
  dateFrom: 'Date 1',
  dateTo: 'Date 2',
  description: 'Description 3',
},
  {
    company: 'Ivanti',
    position: 'SDE Winter Intern',
    dateFrom: 'Date 1',
    dateTo: 'Date 2',
    description: 'Description 1',
  },
  {
    company: 'Walmart',
    position: 'SDE Summer Intern',
    dateFrom: 'Date 1',
    dateTo: 'Date 2',
    description: 'Description 2',
  },
  {
    company: 'Company 3',
    position: 'Frontend Intern',
    dateFrom: 'Date 1',
    dateTo: 'Date 2',
    description: 'Description 3',
  },
  {
    company: 'Funcbox',
    position: 'Fontend Intern',
    dateFrom: 'Date 1',
    dateTo: 'Date 2',
    description: 'Description 3',
  },
];

export default function Experience() {
  return (
    <div>
      <NavBar activeSection="Experiences" />
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-5xl text-emerald-600 my-8">My Internships</h1>
        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-x-20 gap-y-12 bg-slate-700">
          {internships.map((internship) => (
            <div key={internship.name} className="bg-green-200 p-4" >
              <Image src="/pfp.jpg" alt={internship.company} 
              height={300} width={300} 
              />
              <h3>{internship.position}</h3>
              <p>{internship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
