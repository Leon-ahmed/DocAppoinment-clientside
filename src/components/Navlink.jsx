'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
const Navlink = ({href,children}) => {
    const path= usePathname();
    const isActive=path===href
    return (
        <Link href={href} className={`${isActive ? " text-[#0059BB]   md:border-b-2 border-b-[#0059BB]":" "}`} >{children}</Link>
    );
};

export default Navlink;