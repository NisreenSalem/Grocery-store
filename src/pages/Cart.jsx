import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-5 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty 🛒</h1>

        <p className="text-gray-500 mb-8">
          Looks like you haven't added any products yet.
        </p>

        <Link
          to="/products"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Products */}
        <div className="space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:w-56 h-56 object-cover"
                />

                <div className="flex-1 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {product.category}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(product)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <p className="text-green-600 font-bold text-xl">
                        Rs. {product.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold"
                      >
                        −
                      </button>

                      <span className="font-bold text-lg min-w-[30px] text-center">
                        {product.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(product.id)}
                        className="w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 text-lg font-bold"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 text-sm">
                        Item Total
                      </p>

                      <p className="font-bold text-lg">
                        Rs. {product.price * product.qty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items</span>

                <span className="font-semibold">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>

                <span className="font-semibold">
                  Rs. {cartTotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>

                <span className="font-semibold text-green-600">
                  Free
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span className="text-green-600">
                  Rs. {cartTotal}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full mt-8 bg-green-600 text-white text-center py-3 rounded-xl hover:bg-green-700 transition font-medium"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full mt-3 py-3 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;