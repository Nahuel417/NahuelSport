import React from 'react';
import NavSup from './NavSup';
import Logo from './Logo';
import NavLinks from './NavLinks';

export const index: React.FC = () => {
    return (
        <>
            <NavSup />
            {/* <Logo /> */}
            <NavLinks />
            {/* hola */}
            {/* <div className="border-2 border-red-500 p-5 flex justify-between">
            </div> */}
        </>
    );
};

export default index;
