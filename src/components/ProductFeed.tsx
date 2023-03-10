import Image from "next/image";
import Product from "./Product";
import advertisement from "../../public/advertisement.jpg";

interface ProductsType {
  [key: string]: any;
}

const ProductFeed = ({ products }: ProductsType) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => (
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

      <Image
        className="md:col-span-full"
        src={advertisement}
        alt="advertisement"
        width={5000}
        height={500}
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
            }: ProductsType) => (
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
      {products
        .slice(5, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => (
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
