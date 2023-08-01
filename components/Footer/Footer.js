"use client";
import "./Footer.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import darkLogo from "@/public/assets/logos/dark_logo.png";
import { footerItems, columnNames } from "@/utils/Constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  let year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerComponents = footerItems?.map((coulmnItems, index) => {
    return (
      <div key={index}>
        <h2 className={`mb-6 text-m font-bold`}>{columnNames[index]}</h2>
        <ul className="font-medium">
          {coulmnItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                <Link href={item.itemLinks} onClick={scrollToTop}>
                  {item.itemName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <>
      <NewsLetter />
      <footer>
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-4">
          <div className="footer_body p-6">
            <div className="footer_main mb-6 md:mb-0 mt-0 py-2">
              <Link href="/" onClick={scrollToTop}>
                <Image
                  src={darkLogo}
                  className="hover:shadow mix-blend-lighten"
                  alt="Informatician logo"
                  width="200"
                  height="200"
                />
              </Link>
            </div>
            <div className="footer_inner_body mt-2 mx-6">
              {footerComponents?.map((item, index) => {
                return (
                  <div key={index} className="footer_inner_body_item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="copyright_footer p-6 mx-6 mt-2">
            <span className={`text-sm font-bold sm:text-center text-blue-500`}>
              © {year}{" "}
              <a href="/" onClick={scrollToTop} className="hover:underline">
                Informatician™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 mr-14 2xl:mr-0">
              {/* <Link href="/develop" title="Twitter(External Link)" target="_blank" aria-label="Follow us on Twitter" rel="noopener noreferror">
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 twitter" />
              </Link> */}
              <Link href="https://github.com/rohansx/informatician" title="GitHub(External Link)" target="_blank" aria-label="Follow us on GitHub" rel="noopener noreferror">
                <BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 github" />
              </Link>
              {/* <Link href="#" title="Discord(External Link)" target="_blank" aria-label="Follow us on Discord" rel="noopener noreferror">
                <BsDiscord className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 discord" />
              </Link> */}
              <Link href={'http://www.linkedin.com/in/siddhant-pawar-398a05201'} title="Linked Link" aria-label="Follow us on linkedin" target="_blank" >
                <BsLinkedin className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
