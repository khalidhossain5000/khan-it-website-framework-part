import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

import logo from '../../../assets/logo/logo.png'
const services = [
  { title: "SEO Service", },
  { title: "Web Design" },
  { title: "Facebook Ads" },
  { title: "Google Ads" },
  { title: "Content Writing"},
  { title: "Branding"},
];

const company = [
  { title: "About Us", href: "/about-us" },
  { title: "Case Studies", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
];

const socialIcon=[
    {icon:<FaFacebook size={30}/>},
    {icon:<FaInstagram size={30}/>},
    {icon:<FaXTwitter size={30}/>},
    {icon:<FaLinkedin size={30}/>},
    {icon:<FaYoutube size={30}/>},
    {icon:<FaPinterest size={30}/>}
]

const Footer = () => {
  return (
    <footer className="bg-[#0f1729] text-white">
      {/* Top area */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About / Logo */}
          <div className="space-y-4 xl:col-span-2">
          
            <div className="w-40 mx-auto lg:mx-0">
              <Link href={'/'}>
              <Image src={logo} 
              alt="Footer Logo" 
              width={200} 
              height={60} 
              className="object-contain text-center lg:text-left" />
              </Link>
            </div>
            <p className="text-white text-[16px] mt-6 mb-10 max-w-md mx-auto md:mx-0 text-center lg:text-left">
           Khan IT is a full-stack digital marketing agency 
in Bangladesh offering complete online marketing, 
web design, and branding solutions.
              
            </p>

            {/* social */}
            <ul className="flex items-center gap-5 justify-center lg:justify-start mt-4">
            {
                socialIcon.map((item,i)=><li key={i} className="text-white" >{item.icon}</li>)
            }
            </ul>
          </div>

          {/* Useful Links */}
          <div className="px-6 text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.title} className="text-[#ffffff80] text-sm">
                
                    {l.title}
                
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.title} className="text-[#ffffff80] text-sm">
                
                    {l.title}
                 
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="text-[#ffffff80] text-sm space-y-2 mb-6">
              <li className="flex items-center justify-center lg:justify-start gap-5"><FiMapPin size={30}/> <span className="text-white font-medium">Dhaka,Bangladesh.</span></li>
              <li className="flex items-center justify-center lg:justify-start gap-5"><FiPhone size={30}/> <span className="text-white font-medium">+8801404992727</span></li>
              <li className="flex items-center justify-center lg:justify-start gap-5"><MdOutlineMail size={30}/> <a href="mailto:info@example.com" className="">admin@khanit.com.bd</a></li>
              
            </ul>


            
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-100 text-sm md:text-xl tect-center">
            © {new Date().getFullYear()} Khan IT. All rights reserved.
          </p>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;