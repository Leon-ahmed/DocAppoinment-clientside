'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
const DashLink = ({href,children}) => {
    const path= usePathname();
    const isActive=path===href
    return (
        <Link href={href} className={`${isActive ? " bg-[#0059BB] text-white font-medium p-2 rounded-md     ":" "}`} >{children}</Link>
    );
};

export default DashLink;