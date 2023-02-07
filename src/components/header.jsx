import clsx from "clsx";
import Logo from "@/components/svg/acme-logo.svg";

const Header = ({ children, className }) => (
    <header className={clsx("flex h-[70px] place-content-between items-center bg-gray-700 px-dflt", className)}>
        <Logo className="mr-dflt h-2/5 w-auto" alt="Syndio logo" />
        {children}
    </header>
);

export default Header;
