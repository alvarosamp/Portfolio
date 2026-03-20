import Link from "next/link";
import {Buttom} from './ui/button'

//components
import Nav from "./Nav";

const Header = () => {
    return (
        <header className = 'py-8 xl:py-12 text-white'>
            <div className = 'container mx-auto'>
                {/* logo */}
                <Link href = "/">
                <h1 className = 'text 4xl font semibold'>
                    Alvaro <span className = 'text-accent'>.</span>
                </h1>
                </Link>
                {/* Desktop nav */}
                <div className = 'hidden xl:flex'>
                    <Nav />
                    <Link href ='/contact'>
                        <Buttom> Hire me</Buttom>
                    </Link>
                </div>

                {/* Mobile nav */}

            </div>
        </header>
    );
};
export default Header;