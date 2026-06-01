import React from "react";
const Topbar = () => {
  return (
  <section className="bg-[#232F3F]">

    <div className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px] pt-5  ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-5 border-b border-[#A6A6A659]">
        
        {/* Left Content */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start text-center lg:text-left">
          <span className="text-xl font-bold text-[#40ABE2]">
            Free Shipping 
          </span>

          <span className="ml-2 text-base font-semibold text-white">
            on US orders over $99! On Lighting Products 📦📦📦
          </span>
        </div>

        {/* Right Menu */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white">
          <a
            href="tel:+18666763762"
            className="hover:text-[#29A9FF] transition-colors"
          >
            +1-866-676-3762
          </a>

          <a
            href="#"
            className="hover:text-[#29A9FF] transition-colors"
          >
            Shop
          </a>

          <a
            href="#"
            className="hover:text-[#29A9FF] transition-colors"
          >
            Blogs
          </a>

          <a
            href="#"
            className="hover:text-[#29A9FF] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Topbar;