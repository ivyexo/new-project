import Breadcrumb from "@/components/Breadcrumb";
import { FiEdit2, FiPackage, FiShoppingCart } from "react-icons/fi";

const customerData = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 234 567 890",
  address: "123 Main St, City, Country",
  joinDate: "Jan 15, 2024",
  totalOrders: 15,
  totalSpent: "$2,345",
  recentOrders: [
    { id: 1, date: "2024-01-20", total: "$234", status: "Delivered" },
    { id: 2, date: "2024-01-15", total: "$178", status: "Processing" },
  ],
  preferredProducts: [
    { id: 1, name: "Product A", purchases: 5 },
    { id: 2, name: "Product B", purchases: 3 },
  ],
};

export default function CustomerDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <Breadcrumb />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Customer Details</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FiEdit2 />
            Edit Customer
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <p className="font-medium">{customerData.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{customerData.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <p className="font-medium">{customerData.phone}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address</label>
                <p className="font-medium">{customerData.address}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Join Date</label>
                <p className="font-medium">{customerData.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiShoppingCart />
              Recent Orders
            </h2>
            <div className="space-y-4">
              {customerData.recentOrders.map((order) => (
                <div key={order.id} className="border-b pb-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Order #{order.id}</span>
                    <span className="text-sm font-medium">{order.total}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm">{order.date}</span>
                    <span className="text-sm text-green-500">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Products */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiPackage />
              Preferred Products
            </h2>
            <div className="space-y-4">
              {customerData.preferredProducts.map((product) => (
                <div key={product.id} className="border-b pb-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-sm text-gray-500">
                      {product.purchases} purchases
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 