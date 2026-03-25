'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className = 'flex gap-6 md:gap-10 items-center text-lg md:text-xl'>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.path}
                        className={`${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''} capitalize font-medium hover:text-accent transition-all px-2 py-1`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
