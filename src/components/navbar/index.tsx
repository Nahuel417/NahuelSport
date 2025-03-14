import React from 'react';
import NavSup from './NavSup';
import Logo from './Logo';
import NavLinks from './NavLinks';

export const index: React.FC = () => {
    return (
        <>
            <NavSup />
            <div className="border-2 border-red-500 p-5 flex justify-between ">
                <Logo />
                <NavLinks />
                hola
            </div>
            ;
        </>
    );
};

export default index;
