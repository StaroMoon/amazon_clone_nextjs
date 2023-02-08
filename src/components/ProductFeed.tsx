interface ProductsType {
  [key: string]: any;
}

const ProductFeed = ({ products }: ProductsType) => {
  return (
    <div>
      <h1>Product</h1>
      {products.map(
        ({ id, title, price, description, category, image }: ProductsType) => (
          <p>{title}</p>
        )
      )}
    </div>
  );
};

export default ProductFeed;
