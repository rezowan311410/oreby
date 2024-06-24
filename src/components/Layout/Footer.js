import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex">
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm md:text-base text-sm font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              />
             <div className="mt-16 text-xs md:text-base text-primarycolor">
              <Flex className="flex sm:gap-x-2 md:gap-x-7"> 
               <FaFacebookF/>
               <FaLinkedinIn/>
               <BsInstagram/>
              </Flex>
             </div>
            </List>
          </div>
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm text-sm md:text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm text-sm md:text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[40%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-sm md:text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm md:text-sm text-xs text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[10%]">
            <Image imgsrc="assets/logo.png" />
            <p className="font-dm text-[#6D6D6D] md:text-sm text-xs mt-52">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
