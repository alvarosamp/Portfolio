import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className = 'py-10 xl:py-16 text-white'>
            <div className = 'container mx-auto flex justify-between items-center'>
                {/* logo */}
                <Link href = "/">
                <h1 className = 'text-5xl md:text-6xl font-semibold'>
                    Álvaro <span className = 'text-accent'>.</span>
                </h1>
                </Link>
                {/* Desktop nav */}
                <div className = 'hidden xl:flex items-center gap-10 text-lg'>
                    <Nav />
                    <Link href ='/contact'>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className = 'xl:hidden'>
                    <MobileNav />
                </div>

            </div>
        </header>
    );
};
export default Header;