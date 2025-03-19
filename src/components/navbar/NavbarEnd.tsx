import React from 'react';
import SvgCarrito from '../svgs/Carrito';
import SvgLogin from '../svgs/Login';
import SvgLupa from '../svgs/Lupa';
import styles from './NavbarEnd.module.css';

export const NavbarEnd: React.FC = () => {
    return (
        <>
            <div className="navbar-end w-2/5">
                <div className="mr-4 w-[250px]">
                    <button className={styles['span-lupa']}>
                        <span className="p-1">
                            {' '}
                            <SvgLupa />
                        </span>
                    </button>
                    <input
                        type="text"
                        name="buscar"
                        placeholder="Buscar"
                        className={`${styles['input-buscar']} bg-transparent border text-sm focus:border-gray-900 transition-all duration-500 p-1 outline-none hover:cursor-pointer focus:cursor-text rounded-sm placeholder:text-gray-400 placeholder:font-semibold hover:placeholder:text-black focus:placeholder:opacity-0`}
                    />
                </div>

                <div className="flex gap-3 px-4 py-2 items-center">
                    <div className="">
                        <a href="#" className="btn btn-ghost min-w-[60px]">
                            <SvgCarrito />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" className="btn btn-ghost min-w-[60px]">
                            <SvgLogin />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarEnd;
