"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import PlaceholderImage from "../../../../public/images/400.svg";

//3 proyectos con nombre, descripcion e imagen
const projects = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: PlaceholderImage,
  },
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: PlaceholderImage,
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: PlaceholderImage,
  },
  {
    name: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: PlaceholderImage,
  },
  {
    name: "Proyecto 5",
    description: "Descripción del proyecto 5",
    image: PlaceholderImage,
  },
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div>
      {/* Textos */}
      <div className="space-y-6 py-6 md:flex md:pt-20 md:gap-10">
        <h1 className="text-3xl font-[450] leading-[120%] md:w-1/2 md:pr-20">
          Un equipo de diseño y tecnología para fundadores con grandes ideas
        </h1>
        <div className="md:w-1/2">
          <p className="text-lg font-normal leading-[140%] mb-6">
            En bitmakers las personas con buenas ideas y ganas de cambiar el
            mundo encuentran apoyo de diseño y tecnología para crecer.
          </p>
          <div className="flex justify-between sm:justify-start gap-4">
            <Button
              title="Conversemos"
              href="https://wa.me/51948240027?text=Hola%20tengo%20esta%20idea%20que%20me%20gustaria%20desarrollar%20con%20ustedes..."
              variant="main"
              className="flex items-center px-8 py-4 leading-[100%]"
            />
            <Button
              title="Conoce más"
              href="#proyectos"
              variant="outline"
              className="flex items-center"
            />
          </div>
        </div>
      </div>
      {/* Proyectos */}
      <div id="proyectos" className="mt-12">
        {/* Mobile: 1 imagen completa arriba, 2 abajo */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {/* Primera imagen completa */}
          <div
            className="relative overflow-hidden rounded-lg cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => toggleCard(0)}
          >
            <div
              className={`relative w-full h-64 transition-transform duration-700`}
              style={{
                transformStyle: "preserve-3d",
                transform:
                  activeCard === 0 ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                width={400}
                height={256}
                className="w-full h-64 object-cover absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div
                className="absolute inset-0 bg-black flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {projects[0].name}
                  </h3>
                  <p className="text-sm">{projects[0].description}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile: Dos imágenes secundarias */}
          <div className="grid grid-cols-2 gap-6">
            {projects.slice(1, 3).map((project, index) => (
              <div
                key={index + 1}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => toggleCard(index + 1)}
              >
                <div
                  className={`relative w-full h-36 transition-transform duration-700`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      activeCard === index + 1
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={192}
                    className="w-full h-48 object-cover absolute inset-0"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 bg-black flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-xs">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: 1 imagen grande a la izquierda, 4 imágenes a la derecha en grid 2x2 */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Imagen grande a la izquierda */}
          <div
            className="relative group overflow-hidden rounded-lg"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-80 transition-transform duration-700 group-hover:rotate-y-180"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                width={600}
                height={400}
                className="w-full h-80 object-cover absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              />
              <div
                className="absolute inset-0 bg-black flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {projects[0].name}
                  </h3>
                  <p className="text-sm">{projects[0].description}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Grid 2x2 a la derecha */}
          <div className="grid grid-cols-2 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-36 transition-transform duration-700 group-hover:rotate-y-180"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={200}
                    className="w-full h-36 object-cover absolute inset-0 rounded-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                  <div
                    className="absolute inset-0 bg-black flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {project.name}
                      </h3>
                      <p className="text-xs">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Cuarta imagen placeholder si solo hay 3 proyectos */}
            {projects.length === 3 && (
              <div
                className="relative group overflow-hidden rounded-lg bg-gray-200"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-36 transition-transform duration-700 group-hover:rotate-y-180"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="w-full h-36 flex items-center justify-center absolute inset-0"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className="text-gray-500">Próximamente</span>
                  </div>
                  <div
                    className="absolute inset-0 bg-black flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <span className="text-white">Próximamente</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
