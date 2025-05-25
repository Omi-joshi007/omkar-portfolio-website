// import Layout from '../components/Layout';
// import Link from 'next/link';
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// const blogData = [
//   {
//     title: "5 Ways to Use GeoTIFFs in Climate Mapping",
//     tag: "Geospatial",
//     img: "/tech_blogs/tech_blog_1.png",
//     slug: "geoTIFF-in-climate-mapping"
//   },
//   {
//     title: "Deploying Dash Apps with Oceanum PRAX",
//     tag: "Deployment",
//     img: "/tech_blogs/tech_blog_1.png",
//     slug: "deploy-dash-oceanum"
//   }
// ];

// export default function TechBlogs() {
//   return (
//     <Layout>
//       <div className="min-h-screen bg-black px-6 py-10">
//         <h1 className="text-3xl text-white font-bold mb-8 text-center">Tech Blogs</h1>

//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
//           {blogData.map((blog, index) => (
//             <Link key={index} href={`/blog/${blog.slug}`} className="w-full max-w-sm">
//               <Card isHoverable className="bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <CardBody className="p-0">
//                   <Image
//                     alt={blog.title}
//                     src={blog.img}
//                     width="100%"
//                     className="rounded-t-lg object-cover h-[200px]"
//                   />
//                 </CardBody>
//                 <CardHeader className="flex flex-col items-start p-4">
//                   <p className="text-sm uppercase font-semibold text-gray-600">{blog.tag}</p>
//                   <h4 className="font-bold text-lg mt-1">{blog.title}</h4>
//                 </CardHeader>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// }


import Layout from '../components/Layout'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const projectData = [
  {
    title: "Are we outsourcing our mind by depending too much on ChatGPT ?",
    //description: ,
    //tag: "Spatial Data Science",
    img: "/tech_blog_1.png",
    link: "https://medium.com/@joshiomkar869/are-we-outsourcing-our-mind-by-depending-too-much-on-chatgpt-9c8959fea82b"
  },
  {
    title: "Why I love and also hate NetCDF file format ?",
    //description: "Analytics Summary",
    //tag: "Machine Learning",
    img: "/tech_blog_2.png",
    link: "https://medium.com/@joshiomkar869/why-i-love-and-also-hate-netcdf-file-format-fe5ae3c45205"
  },
  
]

export default function TechBlogs() {
  return (
    <Layout>
      <div className="min-h-screen bg-black px-6 py-10">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">My Tech Blogs</h1>

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
