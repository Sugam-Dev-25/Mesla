import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products/categories"
        );

        const data = await res.json();

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // Auto Slide
  useEffect(() => {
    if (!categories.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= categories.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [categories]);

  return (
    <section className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 xl:py-[70px] overflow-hidden">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between">
        <h3 className="text-[32px] font-semibold text-[#1A1A1A] font-heading">
          Shop Categories
        </h3>

        <button className="flex items-center gap-2 text-[#115492] text-sm md:text-base font-medium">
                  View All Products
                  <ArrowRightIcon size={16} />
                </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-[22px] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 182}px)`,
          }}
        >
          {categories.map((item) => (
            <div
              key={item.id}
              className="min-w-[160px] flex-shrink-0"
            >
              {/* Arc Box */}
              <div className="relative h-[145px] overflow-hidden rounded-t-full bg-[linear-gradient(180deg,#A18463_0%,#F3E2B8_100%)]">
                <img
                  src={item.image?.src}
                  alt={item.name}
                  className="absolute bottom-0 left-1/2 h-[110px] w-auto -translate-x-1/2 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-center text-2xl leading-snug text-[#232F3F]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;