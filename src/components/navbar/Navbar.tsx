import React from 'react';
import NavbarEnd from './NavbarEnd';
import NavbarCenter from './NavbarCenter';
import NavbarStart from './NavbarStart';

export const NavLinks: React.FC = () => {
    return (
        <>
            <div className="navbar bg-white shadow-sm p-2 justify-between">
                <NavbarStart />

                <NavbarCenter />

                <NavbarEnd />
            </div>
        </>
    );
};

export default NavLinks;
