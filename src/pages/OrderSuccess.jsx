import { Link, useParams } from "react-router-dom";
 import Confetti from "react-confetti";

const OrderSuccess = () => {
  const { id } = useParams();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">

   

<Confetti recycle={false} numberOfPieces={300} />
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-2">
          Thank you for shopping with us.
        </p>

        <p className="text-gray-700 mb-6">
          Your Order ID:
          <span className="font-bold ml-2">
            #{id}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;