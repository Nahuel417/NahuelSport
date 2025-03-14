import React from 'react';

export const NavLinks: React.FC = () => {
    return (
        <>
            <div className="flex justify-center gap-x-10">
                <li>
                    <a href="">Hombre</a>
                </li>
                <li>
                    <a href="">Mujer</a>
                </li>
                <li>
                    <a href="">Calzado</a>
                </li>
                <li>
                    <a href="">Paletas</a>
                </li>
                <li>
                    <a href="">Accesorios</a>
                </li>
            </div>
        </>
    );
};

export default NavLinks;
