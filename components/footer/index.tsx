import Social from "@/components/footer/social";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row md:items-start md:px-8">
      <div className="flex flex-col gap-2">
        <Logo />
        <p>
          Made with by{" "}
          <span className="bg-gradient-to-tr from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            @doankhietthanh.
          </span>
        </p>
      </div>
      <Social />
    </footer>
  );
};
export default Footer;
