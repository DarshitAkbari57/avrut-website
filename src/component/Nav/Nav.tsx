import React from "react";
import { BsChevronDown, BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuActive, setmenuActive] = React.useState("");
  const router = useRouter();

  const menuItems = [
    {
      name: "Technologies",
      path1: "/technology",
    },
    {
      name: "Services",
      path1: "/services",
    },
    {
      name: "Industries",
      path1: "/industries",
    },
    {
      name: "Career",
      path: "/careers",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/home">
            <div className="inline-flex items-center space-x-2">
              <img
                className="w-[130px] h-[80px] object-cover"
                src="/images/assets/logo2.png"
                alt=""
              />
            </div>
          </Link>
          <div className="hidden lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <>
                  <li
                    className={item?.path ? "py-4" : "py-4 group"}
                    key={item.name}
                  >
                    <a
                      href={item?.path || item?.path1}
                      onMouseOver={() => setmenuActive(item.name)}
                      className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-primary"
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
                    <div className="hidden group-hover:block absolute top-[80px]  left-0 h-[300px] overflow-y-auto  bg-white z-20 border shadow-md   w-[100%] p-10 py-10">
                      {menuActive === "Technologies" && (
                        <div className="h-full">
                          <div className="flex  h-full ">
                            <div className="h-full border-r px-10">
                              <h1 className="text-2xl font-medium w-max">
                                Our Technologies
                              </h1>
                            </div>
                            <div className="h-full w-full px-16">
                              <div className="grid grid-cols-3">
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    Web devlopment technology
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li
                                        className="cursor-pointer text-[14px] pb-1  text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/reactjs")
                                        }
                                      >
                                        • React js
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/nodejs")
                                        }
                                      >
                                        • Node js
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/typescript")
                                        }
                                      >
                                        • Typescript
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/anguler")
                                        }
                                      >
                                        • Angular
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/nextjs")
                                        }
                                      >
                                        • Next js
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    Mobile devlopment technology
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/flutter")
                                        }
                                      >
                                        • Flutter
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push(
                                            "/technology/react-native"
                                          )
                                        }
                                      >
                                        • React Native
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flex pb-4 flex-col ">
                                  <h1 className="font-semibold">
                                    DevOps devlopment
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/docker")
                                        }
                                      >
                                        • Docker
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/jenkins")
                                        }
                                      >
                                        • Jenkins
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/kubernets")
                                        }
                                      >
                                        • Kubernetes
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
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
                                    Database devlopment
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/postgresql")
                                        }
                                      >
                                        • PostgreSQL
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/mysql")
                                        }
                                      >
                                        • MySQL
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/mongodb")
                                        }
                                      >
                                        • MongoDB
                                      </li>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
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
                                  <div className="flex gap-4 mt-2">
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
                                        onClick={() =>
                                          router.push("/technology/adobe-xd")
                                        }
                                      >
                                        • Adobe XD
                                      </li>
                                    </ul>
                                    <ul>
                                      <li
                                        className="cursor-pointer text-[14px] pb-1 text-gray1 hover:bg-gray-100"
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
                                Our Industries
                              </h1>
                            </div>
                            <div className="h-full w-full px-10 ">
                              <div className="grid grid-cols-3 ">
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing .
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                        onClick={() =>
                                          router.push("/technology/anguler")
                                        }
                                      >
                                        Architects create scalable software
                                        solution with modularity and core
                                        strength
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/e-commerce")
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
                                          router.push("/technology/docker")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Doloremque
                                        consequuntur mollitia sunt cum
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/digital-banking")
                                  }
                                >
                                  <h1 className="font-semibold">
                                    Mobile App Devlpoment
                                  </h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li
                                        className="cursor-pointer text-[14px] pb-2 text-gray1"
                                        onClick={() =>
                                          router.push("/technology/postgresql")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum animi quam
                                        doloremque
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/entertainment")
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
                                          router.push("/technology/adobe-xd")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Esse, repudiandae.
                                        Quisquam itaque quibusdam quam
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
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
                                  onClick={() =>
                                    router.push("/industries/healthcare")
                                  }
                                >
                                  <h1 className="font-semibold">Healthcare</h1>
                                  <div className="flex gap-4 mt-2">
                                    <ul className="">
                                      <li className="cursor-pointer text-[14px] pb-2  text-gray1">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing .
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                          router.push("/technology/anguler")
                                        }
                                      >
                                        Architects create scalable software
                                        solution with modularity and core
                                        strength
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                          router.push("/technology/docker")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Doloremque
                                        consequuntur mollitia sunt cum
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                          router.push("/technology/postgresql")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum animi quam
                                        doloremque
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="flex p-5 flex-col hover:bg-purple cursor-pointer"
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
                                          router.push("/technology/adobe-xd")
                                        }
                                      >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Esse, repudiandae.
                                        Quisquam itaque quibusdam quam
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
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </Link>
          </div>
          <div className="lg:hidden">
            <BsList onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform  transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-screen">
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
                      {menuItems.map((item) => (
                        <a
                          href={item?.path || item?.path1}
                          key={item.name}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 group"
                        >
                          <span className="text-base font-medium text-gray-900 hover:text-primary">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
