import React from 'react';

export const NavLinks: React.FC = () => {
    return (
        <>
            <div className="navbar bg-white shadow-sm p-6 justify-between">
                <div className="navbar-start w-2/5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {' '}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-white text-sm">
                        <div className="dropdown dropdown-hover flex m-2 gap-4">
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className="border-b-2 border-black m-1 bg-transparent text-black font-bold">
                                    HOMBRE
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
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
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown dropdown-hover flex m-2 gap-4">
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className="border-b-2 border-black m-1 bg-transparent text-black font-bold">
                                    MUJER
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
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
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown dropdown-hover flex m-2 gap-4">
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className="border-b-2 border-black m-1 bg-transparent text-black font-bold">
                                    CALZADOS
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
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
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown dropdown-hover flex m-2 gap-4">
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className="border-b-2 border-black m-1 bg-transparent text-black font-bold">
                                    ACCESORIOS
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
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
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown dropdown-hover flex m-2 gap-4">
                            <div className="dropdown dropdown-hover ">
                                <div tabIndex={0} role="button" className="border-b-2 border-black m-1 bg-transparent text-black font-bold">
                                    PALETAS
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
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
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="navbar-end w-2/5">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavLinks;
