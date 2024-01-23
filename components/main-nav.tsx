"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6">
      {routes.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn("text-sm font-medium transition-")}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
