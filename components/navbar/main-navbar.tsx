"use client";

import NavbarItem from "@/components/navbar/navbar-item";
import { MainNavItem } from "@/types/nav";

interface MainNavProps {
  navItems: MainNavItem[];
}

const MainNav = ({ navItems }: MainNavProps) => {
  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      {navItems.map((item, index) => (
        <NavbarItem key={item.href} href={item.href} title={item.title} />
      ))}
    </nav>
  );
};

export default MainNav;
