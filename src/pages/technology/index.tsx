import First from "@/component/First/First";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MainBanner from "../../assets/technology/techbanner.png";

function Technologies() {
  const router = useRouter();

  const web = [
    {
      image: "/images/nodejs.svg",
      technologies: "Node.js",
      path: "/technology/nodejs",
    },
    {
      image:
        "/images/technology/ts.webp",
      technologies: "Typescript",
      path: "/technology/typescript",
    },
    {
      image:
        "/images/reactjs.svg",
      technologies: "Typescript",
      path: "/technology/reactjs",
    },
    {
      image:
        "/images/technology/Angular.png",
      technologies: "angular",
      path: "/technology/angular",
    },
    {
      image:
        "/images/technology/next.svg",
      technologies: "Next.js",
      path: "/technology/nextjs",
    },

  ];
  const mobile = [
    {
      image:
        "/images/reactjs.svg",
      technologies: "Node.js",
      path: "/technology/react-native",
    },
    {
      image:
        "/images/flutter.svg",
      technologies: "Flutter",
      path: "/technology/flutter",
    },

  ];
  const Backend = [
    {
      image:
        "/images/technology/node.png",
      technologies: "Node.js",
      path: "/technology/nodejs",
    },
    {
      image:
        "/images/java.svg",
      technologies: "Java",
      path: "/technology",
    },
  ];
  const Database = [
    {
      image:
        "/images/technology/mongodb.png",
      technologies: "Mongodb",
      path: "/technology/mongodb",
    },
    {
      image:
        "/images/technology/mysql.png",
      technologies: "Mysql",
      path: "/technology/mysql",
    },
    {
      image:
        "/images/technology/postgresql.png",
      technologies: "postsql",
      path: "/technology/postgresql",
    },
    {
      image:
        "/images/technology/dynamodb.png",
      technologies: "Dynamodb",
      path: "/technology/aws-dynamodb",
    },
  ];
  const Devops = [
    {
      image:
        "/images/technology/Kubernates.png",
      technologies: "Kubernates",
      path: "/technology/kubernets",
    },
    {
      image:
        "/images/technology/jenkins.webp",
      technologies: "jenkins",
      path: "/technology/jenkins",
    },
    {
      image:
        "/images/technology/docker.png",
      technologies: "docker",
      path: "/technology/docker",
    },
    {
      image:
        "/images/technology/aws.png",
      technologies: "Aws",
      path: "/technology/aws",
    },
  ];
  const Design = [
    {
      image:
        "/images/technology/figma.png",
      technologies: "Figma",
      path: "/technology/figma",
    },
    {
      image:
        "/images/technology/adove-xd.png",
      technologies: "Adobe-xd",
      path: "/technology/adobe-xd",
    },

  ];
  const frontend = [
    {
      image:
        "/images/reactjs.svg",
      technologies: "Typescript",
      path: "/technology/reactjs",
    },
    {
      image:
        "/images/technology/Angular.png",
      technologies: "angular",
      path: "/technology/angular",
    },
    {
      image:
        "/images/technology/next.svg",
      technologies: "Next.js",
      path: "/technology/nextjs",
    },
  ]

  return (
    <>
      <First
        title="Technologies We Use for Industry-Specific Solutions"
        subtitle="Avrut Solutions specializes in robust end-to-end delivery of custom technology solutions for enterprises, start-ups, and small businesses. We build your product using the latest technological advancements and breakthroughs. Whether desktop, mobile, or cross-platform software suite, we'll help you develop a comprehensive solution that perfectly serves your unique needs."
        MainBanner={MainBanner.src}
      />
      <div className="container mx-auto  my-5">
        {/* web devlopment */}
        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center ">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3 ">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 lg:max-w-sm m-auto ">
              {web.map((e) => {
                return (
                  <>
                    <Link href={e.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center shadow">
                        <img src={e.image} alt="" />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Web devlopment
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Web development is the art and science of creating and
                  maintaining websites or web applications. It encompasses a
                  wide range of skills and technologies, including HTML, CSS,
                  and JavaScript for front-end development, as well as
                  server-side languages and databases for back-end
                  functionality. Web developers work to design and build
                  user-friendly, visually appealing, and responsive websites
                  that meet the needs of businesses, organizations, or
                  individuals. They are responsible for ensuring a seamless user
                  experience, optimizing performance, and implementing security
                  measures. With the continuous evolution of technology, web
                  development is a dynamic field that requires staying updated
                  on the latest trends and tools to deliver cutting-edge
                  solutions in the digital landscape.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/reactjs")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile devlopment */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
              {mobile?.map((e) => {
                return (
                  <>
                    <Link href={e.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center">
                        <img src={e.image} alt="" />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Mobile development technologies
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Mobile development technologies refer to the tools,
                  frameworks, and programming languages used to create
                  applications for mobile devices, such as smartphones and
                  tablets. Two major platforms dominate the mobile development
                  landscape: Android, backed by Google, and iOS, developed by
                  Apple. For Android app development, developers commonly use
                  languages like Java or Kotlin, and for iOS, Swift and
                  Objective-C are popular choices. Cross-platform frameworks
                  such as React Native, Flutter, and Xamarin have gained
                  prominence, enabling developers to write code once and deploy
                  it on both Android and iOS platforms.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/flutter")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Backend */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
              {Backend.map((e) => {
                return (
                  <>
                    <Link href={e?.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center">
                        <img src={e.image} alt="" />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Backend
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Backend technologies constitute the server-side components of
                  a web or mobile application, responsible for managing data,
                  business logic, and communication between the server and
                  client. A variety of programming languages and frameworks are
                  employed in backend development, depending on factors like
                  project requirements, scalability, and developer preferences.
                  Popular backend languages include Python, Java, Ruby, PHP, and
                  Node.js. Frameworks such as Django (Python), Spring (Java),
                  Ruby on Rails (Ruby), Laravel (PHP), and Express.js (Node.js)
                  provide developers with pre-built structures and tools,
                  expediting the development process.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/nodejs")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Front-end */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
              {frontend.map((e) => {
                return (
                  <>
                    <Link href={e?.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center">
                        <img src={e.image} alt="" />
                        {/* <div className='my-2 font-medium'>{e?.technologies}</div> */}
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Front-end
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Front-end technologies pertain to the client-side of web or
                  mobile applications, focusing on the user interface and user
                  experience. The primary languages for front-end development
                  are HTML (Hypertext Markup Language), CSS (Cascading Style
                  Sheets), and JavaScript. HTML structures the content of web
                  pages, CSS styles the presentation, and JavaScript adds
                  interactivity and dynamic behavior to the user interface.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/reactjs")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* devops */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3 my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
              {Devops.map((e) => {
                return (
                  <>
                    <Link href={e?.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center">
                        <img src={e.image} alt="" />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  DevOps
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  DevOps, short for Development and Operations, is a set of
                  practices that aims to streamline and integrate the processes
                  of software development and IT operations. DevOps technologies
                  play a crucial role in automating workflows, enhancing
                  collaboration, and fostering a culture of continuous
                  integration and delivery.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/aws")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Database */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 lg:order-1 py-3 my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto ">
              {Database.map((e) => {
                return (
                  <>
                    <Link href={e?.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex flex-col  justify-center items-center">
                        <img src={e.image} alt="" />
                        {/* <div className='my-2 font-medium'>{e?.technologies}</div> */}
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 lg:order-2">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Database
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  Databases are structured repositories that store, organize,
                  and manage data for efficient retrieval and manipulation. They
                  come in various types, including relational databases like
                  MySQL and PostgreSQL, NoSQL databases like MongoDB, and
                  specialized databases for time-series, graph, and in-memory
                  data. Relational databases use tables and enforce data
                  integrity through ACID properties, while NoSQL databases
                  provide flexibility for handling diverse data types.
                  Cloud-based databases, big data technologies, and blockchain
                  databases are also integral components of the modern data
                  landscape. Choosing the right database technology depends on
                  factors such as data structure, scalability, and specific
                  application requirements.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/postgresql")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Design */}

        <div className="lg:mx-auto lg:grid  lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 px-3 items-center">
          <div className="bg-blue-50 md:bg-gradient-to-l from-white to-indigo-100 order-1 py-3  my-3">
            <div className="  grid grid-cols-3 lg:grid-cols-2 gap-4 max-w-sm m-auto">
              {Design.map((e) => {
                return (
                  <>
                    <Link href={e?.path}>
                      <div className="bg-white w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-xl p-4 m-auto flex justify-center items-center">
                        <img src={e.image} alt="" />
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto max-w-xl  lg:mx-0 lg:max-w-none lg:py-4 xl:py-8 lg:px-3 order-">
            <div>
              <div className="mt-6">
                <h2 className="text-5xl font-bold tracking-tight text-black">
                  Design
                </h2>
                <p className="mt-4 text-lg text-[#1e1e1e]">
                  In web and application design, the focus is on creating
                  visually appealing and user-friendly interfaces. This involves
                  the strategic arrangement of elements, intuitive navigation,
                  and a harmonious blend of colors and typography. Responsive
                  design ensures adaptability to various devices, enhancing
                  accessibility. User experience (UX) design emphasizes the
                  user&rsquo;s journey, aiming for efficiency and satisfaction.{" "}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/technology/adobe-xd")}
                    className="inline-flex rounded bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  my-5"></div>
    </>
  );
}

export default Technologies;
