import React from "react";
import logo from "../../assets/logo.png";
import { HeartStraightIcon, HandbagIcon, CaretDownIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

const Header = () => {
    return (

        <header className="bg-[#232F3F]">
            <div className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px] py-6">
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[42px]">

                    {/* Logo */}
                    <div className="shrink-0">
                        <img
                            src={logo}
                            alt="Mesla"
                            className="h-auto max-w-[150px] lg:max-w-[221px]"
                        />
                    </div>

                    {/* Search Section */}
                    <div className="w-full flex-1">
                        <div className="flex h-[48px] overflow-hidden rounded-full bg-white">

                            {/* Category */}
                            <div className="flex items-center gap-2 border-r border-[#E5E5E5] pl-[36px] pr-4 my-2">
                                <span className="text-[12px] text-[#A6A6A6] whitespace-nowrap">
                                    All Categories
                                </span>
                                <CaretDownIcon size={14} className="text-[#777]" />
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search by products name of SKU......"
                                className="flex-1 px-6 text-base outline-none placeholder:text-gray-400"
                            />

                            {/* Search Button */}
                            <button className="bg-[#115492] px-[28px] py-[14px] text-white">
                                <MagnifyingGlassIcon size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-[12px]">

                        {/* Account */}
                        <button className="flex items-center gap-2 text-white whitespace-nowrap">
                            <span className="text-[14px] font-medium">My Account</span>
                            <CaretDownIcon size={14} />
                        </button>

                        {/* Wishlist */}
                        <button className="relative text-white">
                            <HeartStraightIcon size={22} strokeWidth={1.8} />
                            {/* <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                                5
                            </span> */}
                        </button>

                        {/* Cart */}
                        <button className="relative text-white">
                            <HandbagIcon size={22} strokeWidth={1.8} />
                            {/* <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                                3
                            </span> */}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;