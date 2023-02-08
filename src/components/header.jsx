import clsx from "clsx";
import Logo from "@/components/svg/acme-logo.svg";

const Header = ({ children, className }) => (
    <header className={clsx("flex h-[70px] place-content-between items-center bg-gray-700 px-dflt", className)}>
        <div className="relative w-[30px] overflow-clip xs:overflow-visible">
            <Logo className="sticky mr-dflt h-[26px] w-auto fill-white" alt="Acme logo" />
        </div>
        {children}
    </header>
);

export default Header;
