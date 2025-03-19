import React from 'react';
import SvgHamburger from '../svgs/Hamburger';
import FlechaDerecha from '../svgs/FlechaDerecha';
import styles from './NavbarMobile.module.css';

export const NavbarMobile: React.FC = () => {
    return (
        <>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <SvgHamburger />
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                    <div className={`dropdown dropdown-hover ${styles['caja-flecha']}`}>
                        <div tabIndex={0} role="button" className={`m-1 bg-transparent text-black font-bold flex items-center `}>
                            <p>HOMBRE</p>
                            <span className={styles.flecha}>
                                <FlechaDerecha />
                            </span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <div className={`dropdown dropdown-hover ${styles['caja-flecha']}`}>
                        <div tabIndex={0} role="button" className={`m-1 bg-transparent text-black font-bold flex items-center `}>
                            <p>MUJER</p>
                            <span className={styles.flecha}>
                                <FlechaDerecha />
                            </span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <div className={`dropdown dropdown-hover ${styles['caja-flecha']}`}>
                        <div tabIndex={0} role="button" className={`m-1 bg-transparent text-black font-bold flex items-center `}>
                            <p>CALZADOS</p>
                            <span className={styles.flecha}>
                                <FlechaDerecha />
                            </span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <div className={`dropdown dropdown-hover ${styles['caja-flecha']}`}>
                        <div tabIndex={0} role="button" className={`m-1 bg-transparent text-black font-bold flex items-center `}>
                            <p>ACCESORIOS</p>
                            <span className={styles.flecha}>
                                <FlechaDerecha />
                            </span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <div className={`dropdown dropdown-hover ${styles['caja-flecha']}`}>
                        <div tabIndex={0} role="button" className={`m-1 bg-transparent text-black font-bold flex items-center `}>
                            <p>PALETAS</p>
                            <span className={styles.flecha}>
                                <FlechaDerecha />
                            </span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <a>Submenu 1</a>
                                                    </li>
                                                    <li>
                                                        <a>Submenu 2</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default NavbarMobile;
