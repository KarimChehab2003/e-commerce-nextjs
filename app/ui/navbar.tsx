"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import catPfp from "@/public/yellingcat@192.webp"
import { FaBars } from "react-icons/fa6";
import RenderNavLinks from "./navbar/render-nav-links";
import SearchComponent from "./navbar/search-component";
import RenderCartDrawer from "./navbar/render-drawer";
import { selectCart, useCartStore } from "../store/useCartStore";


function Navbar() {
    const cart = useCartStore(selectCart);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header className="navbar bg-base-200 shadow-sm p-4 sticky lg:fixed top-0 z-50">
            {/* Mobile Hamburger Menu & Search */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <FaBars />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        <RenderNavLinks />
                        <li>
                            <SearchComponent />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className="navbar-center lg:navbar-start flex-1 space-x-4">
                <Link href="/" className="text-2xl font-semibold">Bazario</Link>
                <ul className="hidden lg:flex lg:items-center lg:space-x-4">
                    <RenderNavLinks />
                </ul>
            </div>

            {/* Desktop Links & Search */}
            <div className="hidden lg:flex lg:items-center navbar-start">
                <SearchComponent />
            </div>


            {/* Cart & Avatar */}
            <div className="navbar-end space-x-4 lg:flex-1">
                {/* Drawer for cart items */}
                <div className="drawer drawer-end">
                    <input type="checkbox" id="cart-drawer" className="drawer-toggle" />
                    <div className="drawer-content flex jusitfy-end">
                        <div className="w-full flex justify-end items-center">
                            <label htmlFor="cart-drawer" className="btn btn-square">
                                <FiShoppingCart className="text-lg" />
                                {cartCount > 0 && (
                                    <span className="badge badge-sm badge-primary absolute -top-1 -right-1">
                                        {cartCount}
                                    </span>
                                )}
                            </label>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="cart-drawer" className="drawer-overlay"></label>
                        <RenderCartDrawer />
                    </div>
                </div>

                {/* User Avatar */}
                <div className="avatar">
                    <div className="w-10 rounded-full ring-primary ring-offset-base-100 ring-2 ring-offset-2">
                        <Image src={catPfp} width={192} height={192} alt="Picture of a cat" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;