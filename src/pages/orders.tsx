import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Order from "@/components/Order";
import moment from "moment";

export async function getServerSideProps(context: any) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // Firebase db
  const richard = collection(db, "users/richardmopikachu@gmail.com/orders");
  const stripeOrders = await getDocs(richard);
  // Stripe Orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
      session,
    },
  };
}

const orders = ({ orders, session }: any) => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map((order: any) => (
            <Order order={order} key={order.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default orders;
