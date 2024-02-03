import Link from "next/link";
import React from "react";
import { CgFacebook } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="relative overflow-hidden py-10">
        <div className="relative z-10 mx-auto container px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full px-10 py-6 md:w-1/2 lg:w-[40%]">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-1 inline-flex items-center">
                  <img
                    className="h-[80px] w-[120px] object-cover"
                    src="/images/assets/logo2.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="mb-4  text-base font-medium">
                    We are creative Peoples, passionate for designing well
                    crafted,simple and functional web and mobile apps.
                  </p>
                  <div className="flex gap-3 mb-4">
                    <a className="border border-1 rounded-full border-primary p-2 cursor-pointer hover:bg-primary hover:text-white transition">
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://in.linkedin.com/company/avrut-solutions"
                      target="_blank"
                      className="border border-1 rounded-full border-primary p-2 cursor-pointer hover:bg-primary hover:text-white transition"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a className="border border-1 rounded-full border-primary p-2 cursor-pointer hover:bg-primary hover:text-white transition">
                      <FaInstagram />
                    </a>
                    <a className="border border-1 rounded-full border-primary p-2 cursor-pointer hover:bg-primary hover:text-white transition">
                      <FaXTwitter />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Avrut Solutions. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-10 py-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-[16px] capitalize font-semibold  text-gray-500">
                  Our Pages
                </h3>
                <ul className=" ">
                  <li className="mb-4">
                    <Link
                      href="/portfolio"
                      className="text-sm font-medium hover:text-primary cursor-pointer"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/technology"
                      className="text-sm font-medium hover:text-primary cursor-pointer"
                    >
                      Technologies
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/services"
                      className=" text-sm font-medium hover:text-primary cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium hover:text-primary cursor-pointer"
                      href="/industries"
                    >
                      Industries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-10 py-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-4 text-[16px] font-semibold text-gray-500">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-sm font-medium text-gray-900 hover:text-primary"
                      href="#"
                    >
                      Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-sm font-medium hover:text-primary cursor-pointer"
                      href="/careers"
                    >
                      Career
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-sm font-medium text-gray-900 hover:text-primary"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-medium text-gray-900 hover:text-primary"
                      href="/about-us"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-10 py-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-4 text-[16px] font-semibold text-gray-500">
                  Contact info
                </h3>

                <div className="text-sm">
                  309, Amby valley arcade, VIP Circle, Uttaran, Surat-394105
                </div>

                <div className="text-sm pt-2">Email: info@avrut.com</div>
                <div className="text-sm pt-2">Phone: +91 97126 97297</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
