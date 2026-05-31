// app/checkout/page.tsx
"use client";

import { useMemo, useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    notes: "",
  });

  // Demo Cart Data
  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Chocolate Cake",
      price: 2800,
      quantity: 1,
      thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      id: 2,
      title: "Oreo Milkshake",
      price: 650,
      quantity: 2,
      thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    },
  ]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const deliveryFee = 200;
  const tax = 100;
  const total = subtotal + deliveryFee + tax;

  //   const handleOrder = () => {
  //     const message = `
  // 🍞 NEW ORDER

  // 👤 Name: ${customer.name}
  // 📱 Phone: ${customer.phone}
  // 📧 Email: ${customer.email}
  // 🏙 City: ${customer.city}
  // 📍 Address: ${customer.address}

  // 💳 Payment: ${paymentMethod}

  // 🛒 Items:
  // ${cartItems
  //   .map(
  //     (item) =>
  //       `${item.title} x ${item.quantity} = Rs.${item.price * item.quantity}`
  //   )
  //   .join("\n")}

  // 💰 Total: Rs.${total}
  // `;

  //     window.open(
  //       `https://wa.me/923001234567?text=${encodeURIComponent(message)}`,
  //       "_blank"
  //     );
  //   };
  const handleOrder = () => {
    const message = `
🍞 NEW ORDER

👤 Name: ${customer.name}
📱 Phone: ${customer.phone}
📧 Email: ${customer.email}
🏙 City: ${customer.city}
📍 Address: ${customer.address}

💳 Payment: ${paymentMethod}

🛒 Items:
${cartItems
  .map(
    item =>
      `${item.title} x ${item.quantity} = Rs.${item.price * item.quantity}`,
  )
  .join("\n")}

💰 Total: Rs.${total}
`;

    window.open(
      `https://wa.me/923103029594?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white">Checkout</h1>
          <p className="text-orange-100 mt-3">
            Fresh Bakery Delivered To Your Doorstep
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customer Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Customer Information</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                placeholder="Full Name"
                className="border rounded-xl p-4"
                value={customer.name}
                onChange={e =>
                  setCustomer({
                    ...customer,
                    name: e.target.value,
                  })
                }
              />

              <input
                placeholder="Phone Number"
                className="border rounded-xl p-4"
                value={customer.phone}
                onChange={e =>
                  setCustomer({
                    ...customer,
                    phone: e.target.value,
                  })
                }
              />

              <input
                placeholder="Email"
                className="border rounded-xl p-4"
                value={customer.email}
                onChange={e =>
                  setCustomer({
                    ...customer,
                    email: e.target.value,
                  })
                }
              />

              <input
                placeholder="City"
                className="border rounded-xl p-4"
                value={customer.city}
                onChange={e =>
                  setCustomer({
                    ...customer,
                    city: e.target.value,
                  })
                }
              />
            </div>

            <textarea
              placeholder="Address"
              className="border rounded-xl p-4 mt-5 w-full h-28"
              value={customer.address}
              onChange={e =>
                setCustomer({
                  ...customer,
                  address: e.target.value,
                })
              }
            />

            <textarea
              placeholder="Order Notes"
              className="border rounded-xl p-4 mt-5 w-full h-28"
              value={customer.notes}
              onChange={e =>
                setCustomer({
                  ...customer,
                  notes: e.target.value,
                })
              }
            />

            {/* Payment Methods */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">Payment Method</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash On Delivery
                </label>

                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "easypaisa"}
                    onChange={() => setPaymentMethod("easypaisa")}
                  />
                  EasyPaisa
                </label>

                <label className="flex items-center gap-3 border p-4 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "jazzcash"}
                    onChange={() => setPaymentMethod("jazzcash")}
                  />
                  JazzCash
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-5">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span className="font-bold">Rs.{item.price}</span>
                </div>
              ))}
            </div>

            <hr className="my-6" />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs.{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Rs.{deliveryFee}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>Rs.{tax}</span>
              </div>

              <div className="flex justify-between text-xl font-bold pt-4">
                <span>Total</span>
                <span>Rs.{total}</span>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-lg hover:scale-105 transition"
            >
              Place Order
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure checkout • Fresh bakery products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
