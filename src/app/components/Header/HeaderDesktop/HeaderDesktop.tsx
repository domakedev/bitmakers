import Button from "../../Button/Button";

const naviItems = [
  { title: "Equipo", href: "#" },
  { title: "Noticias", href: "#" },
  { title: "Contacto", href: "#" },
  { title: "Blog", href: "#" },
];

const HeaderDesktop = () => {
  return (
    <div className="hidden md:flex gap-14">
      <div className="flex justify-between items-center grow max-w-[422px] text-sm font-[500] gap-8">
        {naviItems.map((item) => (
          <div key={item.title} className="hover:underline cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <Button
          title="Contáctanos"
          href="https://wa.me/51948240027?text=Hola%20tengo%20esta%20idea%20que%20me%20gustaria%20desarrollar%20con%20ustedes..."
          variant="main"
          className="px-10 py-4 leading-[16px]"
        />
      </div>
    </div>
  );
};

export default HeaderDesktop;
