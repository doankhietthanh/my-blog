import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import HeaderActions from "@/components/header/header-actions";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Navbar />
        <Sidebar />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
