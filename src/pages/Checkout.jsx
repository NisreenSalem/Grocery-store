import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckOut = () => {
  const { cart, cartTotal, placeOrder } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullname: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

     e.preventDefault();
   if(!address.fullname || !address.phone || !address.address || !address.city || !address.state || !address.pincode || !address.email){
      alert("Please fill all the fields");
        return
      
   }
   const orderId = placeOrder(address);
   navigate(`/order-success/${orderId}`);


  
  };



  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Address Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-5">
              Delivery Address
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={address.fullname}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={address.phone}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={address.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg md:col-span-2"
              />

              <textarea
                name="address"
                placeholder="Street Address"
                value={address.address}
                onChange={handleChange}
                required
                rows="3"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={address.pincode}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                onClick={handleSubmit}
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-5">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>

                  <span>
                    Rs. {item.price * item.qty}
                  </span>
                </div>
              ))}

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">
                  Rs. {cartTotal}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;