import React from 'react';
import NavbarMobile from './NavbarMobile';

export const NavbarStart: React.FC = () => {
    return (
        <>
            <div className="navbar-start w-2/5">
                <NavbarMobile />

                <a href="/" className="btn btn-ghost text-xl">
                    NB SHOP
                </a>
            </div>
        </>
    );
};

export default NavbarStart;
