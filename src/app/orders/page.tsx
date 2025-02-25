import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { FiPlus, FiEye } from "react-icons/fi";

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-01-20",
    total: "$599.98",
    items: [
      { product: "Product A", quantity: 1, price: "$299.99" },
      { product: "Product B", quantity: 5, price: "$59.99" },
    ],
    status: "Delivered",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-01-19",
    total: "$359.97",
    items: [
      { product: "Product B", quantity: 3, price: "$59.99" },
      { product: "Product C", quantity: 2, price: "$89.99" },
    ],
    status: "Processing",
  },
  // Add more dummy orders...
];

export default function OrdersPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <Link
            href="/orders/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiPlus />
            Create Order
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Items</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.items.length} items</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/orders/${order.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEye size={18} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 