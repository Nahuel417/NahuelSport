import React from 'react';
import NavSup from './NavSup';
import Navbar from './Navbar';

export const index: React.FC = () => {
    return (
        <>
            <NavSup />
            {/* <Logo /> */}
            <Navbar />
            {/* hola */}
            {/* <div className="border-2 border-red-500 p-5 flex justify-between">
            </div> */}
        </>
    );
};

export default index;
