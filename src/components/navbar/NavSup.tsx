import React from 'react';

export const NavSup: React.FC = () => {
    return (
        <>
            <div className="border-2 border-black py-3 px-5 bg-black">
                <div className="text-white flex justify-end">
                    <li className="px-3 text-xs border-r ">
                        <a href="">Suscribite</a>
                    </li>
                    <li className="px-3 text-xs border-r">
                        <a href="">Buscar tienda</a>
                    </li>
                    <li className="px-3 text-xs border-r">
                        <a href="">Run Bue</a>
                    </li>
                    <li className="px-3 text-xs">
                        <a href="">ayuda</a>
                    </li>
                </div>
            </div>
        </>
    );
};

export default NavSup;
