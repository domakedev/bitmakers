import Image from "next/image";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

const Header = () => {
  return (
    <div className="flex justify-between min-h-24 md:min-h-16 px-6">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo/bitmakers-heart.svg"
          alt="Logo"
          width={20}
          height={20}
        />
        <p className="font-semibold text-2xl">bitmakers</p>
      </div>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};

export default Header;
