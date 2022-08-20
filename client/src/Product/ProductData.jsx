const ProductData = ({ product }) => {
  const { title, description, price } = product;

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      <span
        className="text-xl font-bold row-start-1 row-end-2 col-start-1 col-end-4"
      >
        {title}
      </span>

      <span
        className="text-green-700 row-start-1 row-end-2 col-start-4 col-end-5"
      >
        ₡{price}
      </span>

      <span
        className="bg-slate-200 row-start-2 col-start-1 col-end-4"
      >
        {description}
      </span>
    </div>
  );
};

export default ProductData;