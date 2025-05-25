import Layout from '../components/Layout'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const projectData = [
  {
    title: "Identifying Uninhabitable Regions in South Island New-Zealand",
    //description: ,
    tag: "Spatial Data Science",
    img: "./project1.png",
    link: "https://github.com/Omi-joshi007/Identifying-Uninhabitable-Regions-in-South-Island-New-Zealand"
  },
  {
    title: "Diabetes Prediction Tool",
    //description: "Analytics Summary",
    tag: "Machine Learning",
    img: "./project2.png",
    link: "https://github.com/Omi-joshi007/Diabetes-Prediction-Tool"
  },
  {
    title: "Electricity Prices Forecasting",
    //description: "Analytics Summary",
    tag: "Time Series",
    img: "./project3.png",
    link: "https://github.com/Omi-joshi007/Electricity_Prices_Forecasting_TIme_Series"
  },
]

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-black px-6 py-10">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">My Projects</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projectData.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm"
            >
              <Card
                isHoverable
                className="bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardBody className="p-0">
                  <Image
                    alt={proj.title}
                    src={proj.img}
                    width="100%"
                    className="rounded-t-lg object-cover h-[200px]"
                  />
                </CardBody>

                <CardHeader className="flex flex-col items-start p-4">
                  <p className="text-sm uppercase font-semibold text-gray-600">{proj.tag}</p>
                  <small className="text-gray-500">{proj.description}</small>
                  <h4 className="font-bold text-lg mt-1">{proj.title}</h4>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
