import Social from "@/components/footer/social";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center gap-4 border-t py-6 md:items-start md:px-8">
      <Logo />
      <Social />
    </footer>
  );
};
export default Footer;
