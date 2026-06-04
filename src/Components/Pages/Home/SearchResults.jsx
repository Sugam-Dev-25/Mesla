const SearchResults = ({ products }) => {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-4">

        <h2 className="mb-6 text-2xl font-bold">
          Search Results
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border p-4"
            >
              <img
                src={product.images?.[0]?.src}
                alt={product.name}
                className="h-40 w-full object-contain"
              />

              <h3 className="mt-3 font-medium">
                {product.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SearchResults;