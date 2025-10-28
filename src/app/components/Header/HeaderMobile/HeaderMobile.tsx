"use client";
import React, { useState } from "react";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import Button from "../../Button/Button";

const naviItems = [
  { title: "Equipo", href: "#" },
  { title: "Noticias", href: "#" },
  { title: "Contacto", href: "#" },
  { title: "Blog", href: "#" },
];

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
        >
          <CgMenuMotion className="text-xl" />
        </button>
      </div>
      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="flex h-full">
            {/* Backdrop */}
            <div
              className="flex-1 bg-blue-500 bg-opacity-50 transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            ></div>
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
              {/* Close button */}
              <div className="flex justify-end items-center p-6 min-h-24">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10"
                >
                  <CgClose className="text-xl" />
                </button>
              </div>
              {/* Menu items */}
              <div className="flex flex-col p-4 space-y-6 text-sm font-[500]">
                {naviItems.map((item) => (
                  <div
                    key={item.title}
                    className="hover:underline cursor-pointer"
                  >
                    {item.title}
                  </div>
                ))}
                <Button
                  title="Contáctanos"
                  href="https://wa.me/51948240027?text=Hola%20tengo%20esta%20idea%20que%20me%20gustaria%20desarrollar%20con%20ustedes..."
                  variant="main"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
