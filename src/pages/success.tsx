import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <AiFillCheckCircle className="text-green-500 h-10 w-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo
            omnis animi reprehenderit qui distinctio eaque enim sequi fugit?
            Ratione, provident? Ullam cupiditate eveniet dicta perferendis autem
            ab molestiae hic.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default success;
