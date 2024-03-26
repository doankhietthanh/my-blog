import UserButton from "@/components/user-button";
import SearchBar from "@/components/search-bar";
import ThemeToggle from "@/components/theme-toggle";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";

const HeaderActions = async () => {
  const session = await auth();

  return (
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <SearchBar />
      <ThemeToggle />
      {session ? (
        <UserButton />
      ) : (
        <div className="flex gap-2">
          <Button variant="secondary">
            <Link href={"/auth/login"}>Log In</Link>
          </Button>
          <Button>
            <Link href={"/auth/register"}>Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderActions;
