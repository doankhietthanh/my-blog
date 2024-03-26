import Logo from "@/components/logo";
import MainNav from "@/components/navbar/main-navbar";
import { docsConfig } from "@/config/docs";

const Navbar = () => {
  return (
      <div className="mr-4 hidden md:flex">
        <Logo />
        <MainNav navItems={docsConfig.mainNav} />
      </div>
  );
};

export default Navbar;
