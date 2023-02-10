import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface CheckoutProductType {
  id: string;
  title: string;
  rating: string;
  price: string;
  description: string;
  category: string;
  image: string;
  hasPrime: string;
}

const CheckoutProduct = ({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}: any) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        className="object-contain"
        alt="dsa"
      />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <AiFillStar key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>${price}
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt="prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
