import { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Recommended Category Products
        const res = await fetch(
          "https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products?category=18"
        );

        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // Auto Slide
  useEffect(() => {
    if (!products.length) return;

    const timer = setInterval(() => {
      setSlide((prev) =>
        prev >= products.length - 4 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [products]);

  const nextSlide = () => {
    setSlide((prev) =>
      prev >= products.length - 4 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setSlide((prev) =>
      prev === 0 ? products.length - 4 : prev - 1
    );
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px] py-10 xl:py-[70px]">
      
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl xl:text-[32px] font-medium text-[#232F3F] font-heading">
          Recommended for you
        </h3>

        <button className="flex items-center gap-2 text-[#115492] text-sm md:text-base font-medium">
          View All Products
          <ArrowRightIcon size={16} />
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-[-10px] md:left-[-20px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        >
          <ArrowLeftIcon size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-[-10px] md:right-[-20px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
        >
          <ArrowRightIcon size={18} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${slide * 320}px)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group min-w-[260px] md:min-w-[280px] xl:min-w-[290px] rounded-xl bg-white p-[30px_20px]"
              >
                {/* Image */}
                <div className="flex h-[180px] items-center justify-center overflow-hidden">
                  <img
                    src={product.images?.[0]?.src}
                    alt={product.name}
                    className="h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 line-clamp-2 text-lg font-medium text-[#232F3F]">
                  {product.name}
                </h3>

                {/* SKU */}
                <p className="mt-2 text-sm text-[#9A9A9A]">
                  #{product.sku || "WSD-1059723"}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-xs text-[#115492]">
                    CAD
                  </span>

                  <span className="text-[30px] font-bold leading-none text-[#115492]">
                    $
                    {product.prices?.price
                      ? Number(product.prices.price) / 100
                      : "151.83"}
                  </span>

                  <span className="text-xs text-[#115492]">
                    / Each
                  </span>
                </div>

                {/* Hover Buttons */}
                <div className="mt-5 flex items-center gap-3 opacity-0 translate-y-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  
                  <button className="flex h-10 w-10 items-center justify-center rounded border border-[#115492] text-[#115492]">
                    <ShoppingCartIcon size={18} />
                  </button>

                  <button className="rounded bg-[#115492] px-5 py-2 text-sm font-medium text-white">
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSlider;