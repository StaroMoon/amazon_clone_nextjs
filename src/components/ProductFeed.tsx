import Product from "./Product";

interface ProductsType {
  [key: string]: any;
}

const ProductFeed = ({ products }: ProductsType) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(
        ({ id, title, price, description, category, image }: ProductsType) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )
      )}
    </div>
  );
};

export default ProductFeed;
