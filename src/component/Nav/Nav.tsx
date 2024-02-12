import React, { useEffect, useRef } from "react";
import { BsChevronDown, BsList, BsPlus, BsPlusCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { gsap, Power3 } from "gsap";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuActive, setmenuActive] = React.useState("");
  const [open, setOpen] = React.useState<any>();
  const router = useRouter();

  const menuItems = [
    {
      name: "Technologies",
      path1: "/technology",
      submenu: [{
        name: "Web Development Technology",
        "submenu": [
          {
            name: "React JS Development",
            path: "/technology/reactjs"
          },
          {
            name: "Node JS Development",
            path: "/technology/nodejs"
          },
          {
            name: "Typescript Development",
            path: "/technology/typescript"
          },
          {
            name: " Angular JS Development",
            path: "/technology/angular"
          },
          {
            name: "Next JS Development",
            path: "/technology/nextjs"
          },
        ]
      },
      {
        name: "Mobile development technology",
        "submenu": [
          {
            name: "Flutter Development",
            path: "/technology/flutter"
          },
          {
            name: "React Native Development",
            path: "/technology/react-native"
          },
        ]
      },
      {
        name: "DevOps Development",
        "submenu": [
          {
            name: "Docker",
            path: "/technology/docker"
          },
          {
            name: "Jenkins",
            path: "/technology/jenkins"
          },
          {
            name: "Kubernetes",
            path: "/technology/kubernets"
          },
          {
            name: "AWS",
            path: "/technology/aws"
          },
        ]
      },
      {
        name: "Database Development",
        "submenu": [
          {
            name: "PostgreSQL",
            path: "/technology/postgresql"
          },
          {
            name: "MySQL",
            path: "/technology/mysql"
          },
          {
            name: "MongoDB",
            path: "/technology/mongodb"
          },
          {
            name: "DynamoDB",
            path: "/technology/aws-dynamodb"
          },
        ]
      },
      {
        name: "Design",
        "submenu": [
          {
            name: "Adobe XD",
            path: "/technology/adobe-xd"
          },
          {
            name: "Figma",
            path: "/technology/figma"
          },
        ]
      },
      ]

    },
    {
      name: "Services",
      path1: "/services",
      submenu: [{
        name: "Digital Product Design",
        "path": "/services/digital-product-design"
      },
      {
        name: "Software Architecture",
        "path": "/services/software-architecture"
      },
      {
        name: "Engineering & DevOps",
        "path": "/services/engineering"
      },
      {
        name: "Mobile App Development",
        "path": "/services/mobile-app-development"
      },
      {
        name: "Staff Augmentation",
        "path": "/services/staff-augmentation"
      },

      ]
    },
    {
      name: "Industries",
      path1: "/industries",
      submenu: [{
        name: "Healthcare",
        "path": "industries/healthcare"
      },
      {
        name: "Education",
        "path": "/industries/education"
      },
      {
        name: "E-commerce",
        "path": "/industries/e-commerce"
      },
      {
        name: "Digital Banking",
        "path": "/industries/digital-banking"
      },
      {
        name: "Entertainment",
        "path": "/industries/entertainment"
      },
      {
        name: "Fintech",
        "path": "/services/fintech"
      },

      ]
    },
    {
      name: "Career",
      path: "/career",
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    // },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpen = (index: any) => {
    if (open === index) {
      setOpen(null)
    } else {
      setOpen(index)

    }
  }






  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="inline-flex items-center space-x-2">
              <img
                className="w-[130px] h-[80px] object-cover"
                src="/images/assets/logo2.png"
                alt=""
              />
            </div>
          </Link>
          <div className="hidden lg:flex">
            <ul className="ml-12 flex space-x-8">
              {menuItems.map((item) => (
                <>
                  <li
                    className={item?.path ? "py-4" : "py-4 group"}
                    key={item.name}
                  >
                    <a
                      href={item?.path || item?.path1}
                      onMouseOver={() => setmenuActive(item.name)}
                      className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-primary duration-300"
                    >
                      {item.name}

                      {item.path ? (
                        ""
                      ) : (
                        <span>
                          <BsChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 duration-300" />
                        </span>
                      )}
                    </a>
                    <div className="hidden group-hover:block absolute top-[80px]  left-0 h-max overflow-y-auto  bg-white z-20 border shadow-md   w-[100%] p-10 py-10">
                      {menuActive === "Technologies" && (
                        <div className="h-full">
                          <div className="flex  h-full ">
                            <div className="h-full border-r px-10">
                              <h1 className="text-2xl font-medium w-max">
                                Our Technologies
                              </h1>
                            </div>
                            <div className="h-full w-full px-5">
                              <div className="flex  justify-center gap-8 2xl:gap-20">
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    Web Development Technology
                                  </h1>
                                  <div className=" gap-4 mt-2">
                                    <ul className="">
                                      <li
                                        className="cursor-pointer text-[14px] pb-1  text-gray1 hover:text-primary duration-300"
                                        onClick={() => {
                                          router.push("/technology/reactjs");
                                        }}
                                      >
                                        • React JS Development
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/nodejs")
                                        }
                                      >
                                        • Node JS Development
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/typescript")
                                        }
                                      >
                                        • Typescript Development
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/angular")
                                        }
                                      >
                                        • Angular JS Development
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/nextjs")
                                        }
                                      >
                                        • Next JS Development
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    Mobile Development Technology
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/flutter")
                                        }
                                      >
                                        • Flutter Development
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push(
                                            "/technology/react-native"
                                          )
                                        }
                                      >
                                        • React Native Development
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    DevOps Development
                                  </h1>
                                  <div className=" gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/docker")
                                        }
                                      >
                                        • Docker
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/jenkins")
                                        }
                                      >
                                        • Jenkins
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/kubernets")
                                        }
                                      >
                                        • Kubernetes
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/aws")
                                        }
                                      >
                                        • AWS
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    Database Development
                                  </h1>
                                  <div className=" mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/postgresql")
                                        }
                                      >
                                        • PostgreSQL
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/mysql")
                                        }
                                      >
                                        • MySQL
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/mongodb")
                                        }
                                      >
                                        • MongoDB
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push(
                                            "/technology/aws-dynamodb"
                                          )
                                        }
                                      >
                                        • DynamoDB
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">Design</h1>
                                  <div className=" mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300 whitespace-nowrap"
                                        onClick={() =>
                                          router.push("/technology/adobe-xd")
                                        }
                                      >
                                        • Adobe XD
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:text-primary duration-300"
                                        onClick={() =>
                                          router.push("/technology/figma")
                                        }
                                      >
                                        • Figma
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {menuActive === "Services" && (
                        <div className="h-full">
                          <div className="flex  h-full justify-between">
                            <div className="h-full border-r px-10">
                              <h1 className="text-2xl font-medium w-max">
                                Our Services
                              </h1>
                            </div>
                            <div className="h-full w-full px-10 ">
                              <div className="grid grid-cols-3 ">
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push(
                                      "/services/digital-product-design"
                                    )
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Digital Product Design
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li className="cursor-pointer text-[14px] pb-2  text-gray1">
                                        interfaces for digital products,
                                        integrating research, usability testing,
                                        and iterative design to enhance overall
                                        user experience.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push(
                                      "/services/software-architecture"
                                    )
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Software Architecture
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"

                                      >
                                        Architects create scalable software
                                        solution with modularity and core
                                        strength
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/services/engineering")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Engineering & DevOps
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push("/services/engineering")
                                        }
                                      >
                                        Engineering and DevOps involve the
                                        integration of development and
                                        operations practices to streamline
                                        software delivery and enhance
                                        collaboration.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push(
                                      "/services/mobile-app-development"
                                    )
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Mobile App Development
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push(
                                            "/services/mobile-app-development"
                                          )
                                        }
                                      >
                                        Mobile app development is the process of
                                        creating software applications
                                        specifically designed for smartphones
                                        and tablets, encompassing stages like
                                        planning, design, coding, testing, and
                                        deployment.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/services/staff-augmentation")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Staff Augmentation
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push(
                                            "/services/staff-augmentation"
                                          )
                                        }
                                      >
                                        Overall, staff augmentation offers
                                        businesses a strategic and agile
                                        approach to workforce management,
                                        enabling them to adapt to changing
                                        project requirements, reduce costs, and
                                        access specialized skills as needed.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {menuActive === "Industries" && (
                        <div className="h-full">
                          <div className="flex  h-full justify-between">
                            <div className="h-full border-r px-10">
                              <h1 className="text-2xl font-medium w-max">
                                Our Industries
                              </h1>
                            </div>
                            <div className="h-full w-full px-16 ">
                              <div className="grid grid-cols-3 ">
                                <div
                                  className="flex p-5 flex-col hover:bg-primary/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/healthcare")
                                  }
                                >
                                  <h1 className="font-semibold">Healthcare</h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li className="cursor-pointer text-[14px] pb-2  text-gray1">
                                        The healthcare industry is a
                                        multifaceted ecosystem encompassing a
                                        diverse range of services, technologies,
                                        and entities committed to the well-being
                                        of individuals.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/education")
                                  }
                                >
                                  <h1 className="font-semibold">Education</h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push("/industries/education")
                                        }
                                      >
                                        The education industry is a dynamic
                                        sector focused on facilitating learning
                                        and skill development.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/e-commerce")
                                  }
                                >
                                  <h1 className="font-semibold">E-commerce</h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push("/industries/e-commerce")
                                        }
                                      >
                                        E-commerce, short for electronic
                                        commerce, refers to the buying and
                                        selling of goods and services over the
                                        internet.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/digital-banking")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Digital Banking
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push(
                                            "/industries/digital-banking"
                                          )
                                        }
                                      >
                                        Digital banking represents a
                                        transformative shift in the financial
                                        landscape, redefining how individuals
                                        and businesses manage their finances.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/entertainment")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Entertainment
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push(
                                            "/industries/entertainment"
                                          )
                                        }
                                      >
                                        The entertainment industry is a vast and
                                        dynamic sector that encompasses a
                                        diverse range of activities and forms of
                                        content designed to captivate, amuse,
                                        and engage audiences.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-navbg/10 cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/fintech")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Fintech
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push(
                                            "/industries/fintech"
                                          )
                                        }
                                      >
                                        A cutting-edge Fintech service that seamlessly merges innovative technology with financial expertise, empowering users to efficiently manage, invest, and transact in the rapidly evolving digital economy.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <Link
              href="/contact"
              className="rounded border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </Link>
          </div>
          <div className="lg:hidden">
            <BsList onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="fixed inset-x-0 top-0 z-50 origin-top-right transform  transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-screen overflow-y-auto">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <img
                        className="h-10 w-10"
                        src="images/assets/logo1.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <AiOutlineClose
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item, index) => (
                        <>
                          <div className="flex justify-between items-center">
                            <div>
                              <a
                                href={item?.path || item?.path1}
                                key={item.name}
                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 group"
                              >
                                <span className="text-base  text-gray-900 hover:text-primary font-semibold">
                                  {item.name}
                                </span>
                              </a>
                            </div>
                            {item?.submenu &&
                              <div>
                                <button className=" rounded-full  text-xl cursor-pointer" onClick={() => { handleOpen(index) }}><BsPlusCircle /></button>
                              </div>
                            }
                          </div>

                          {open === index &&
                            <div className="ml-2">
                              {item?.submenu?.map((e: any) =>
                              (
                                <div className="mb-2">
                                  {e?.submenu ? <>
                                    <span className="mb-2 font-semibold">{e.name}</span>
                                    < ul className="ml-2">
                                      {e?.submenu?.map((item: any) => (
                                        <li>{item?.name}</li>
                                      ))}

                                    </ul></> : <>
                                    {e?.path &&
                                      <div className="mb-2 font-medium cursor-pointer" onClick={() => { router.push(e?.path); setIsMenuOpen(!isMenuOpen) }}>
                                        {e?.name}
                                      </div>}
                                  </>
                                  }
                                </div>
                              )
                              )}
                            </div >
                          }
                        </>
                      ))}
                    </nav >
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
}

export default Nav;
